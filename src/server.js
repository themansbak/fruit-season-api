const express = require('express');
const mongoose = require('mongoose');
const lib = require('./lib');
require('dotenv').config();

const app = express();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, useUnifiedTopology: true 
});

const seasonSchema = mongoose.Schema({
    season: { type: String, required: true },
    fruits: [String]
});
var Season = mongoose.model('Season', seasonSchema);

const stateSchema = mongoose.Schema({
    state: { type: String, required: true },
    seasons: { type: [seasonSchema] }
});
var State = mongoose.model('State', stateSchema);

app.use(logger);

app.get('/', (req, res) => {
    var msg = 'Base URL';
    res.send(msg);
});

app.get('/all', (req, res) => {
    State.find({}, (err, docs) => {
        if (err) res.send('Error: 404 - ', err);
        res.json(docs);
    });
});

app.get('/:state/all', (req, res) => {
    console.log('State: ' + req.params.state);
    State.find({ state: req.params.state }, (err, state) => {
        if (err) res.send('Error: 500 - ', err);
        res.json(state);
    });
});

app.get('/:state/:season', (req, res, next) => { // e.g. /California/Early%20July
    let seasonParam = lib.parseURL(req.params.season);
    console.log('State: ' + req.params.state + ', Season: ' + seasonParam);
    State.findOne({ state: req.params.state }, (err, state) => {
        if (err) res.send('Error: 500 - ', err);
        // need way to iterate and find the specified season
        state.seasons.forEach((seasonDoc) => {
            if (seasonDoc.season === seasonParam) {
                res.json(seasonDoc); // send the entire document
            }
        });
    });
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});


function logger(req, res, next) {
    console.log(req.method + ' ' + req.path + 
        ' - ' + req.ip);
    next();
}
