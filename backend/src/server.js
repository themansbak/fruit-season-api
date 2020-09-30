const express   = require('express');
const mongoose  = require('mongoose');
const lib       = require('./lib');
const db        = require('./db');
require('dotenv').config();

const app = express();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, useUnifiedTopology: true 
});

app.use(logger);

app.get('/', (req, res) => {
    let msg = 'Base URL';
    res.send(msg);
});

app.get('/all', (req, res) => {
    db.State.find({}, (err, docs) => {
        if (err) res.send('Error: 404 - ', err);
        res.json(docs);
    });
});

app.get('/:state/all', (req, res) => {
    console.log('State: ' + req.params.state);
    db.State.find({ state: req.params.state }, (err, state) => {
        if (err) res.send('Error: 500 - ', err);
        res.json(state);
    });
});

app.get('/:state/:season', (req, res, next) => {
    console.log(req.params.season);
    let seasonParam = lib.parseURL(req.params.season);
    console.log('State: ' + req.params.state + ', Season: ' + seasonParam);
    db.State.findOne({ state: req.params.state }, (err, state) => {
        if (err) res.send('Error: 500 - ', err);
        // need way to iterate and find the specified season
        state.seasons.forEach((seasonDoc) => {
            if (seasonDoc.season === seasonParam) {
                res.json(seasonDoc); // send the entire document
                next();
            }
        });
    });
});

app.get('/states', (req, res) => {
    db.StateName.find({ }, (err, stateNames) => {
        if (err) res.send('Error: 500 - ', err);
        res.json(stateNames);
    });
});

app.get('/seasons', (req, res) => {
    db.SeasonName.find({ }, (err, seasonNames) => {
        if (err) res.send('Error: 500 - ', err);
        res.json(seasonNames);
    });
});

app.listen(lib.SERVER_PORT, () => {
    console.log('Listening on port ' + lib.SERVER_PORT);
});


function logger(req, res, next) {
    console.log(req.method + ' ' + req.path + 
        ' - ' + req.ip);
    next();
}
