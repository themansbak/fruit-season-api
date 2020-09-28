const express = require('express');
const app = express();
const mongoose = require('mongoose');

process.env.MONGO_URI = 
    'mongodb+srv://admin:adminpw@seasonal-fruits-cluster.pubnq.mongodb.net/<dbname>?retryWrites=true&w=majority';
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
        if (err) res.send('Error: 4040 - ', err);
        res.send(docs);
    });
});

app.get('/:state/:season', (req, res) => {
    State.find
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

function logger(req, res, next) {
    console.log(req.method + ' ' + req.path + 
        ' - ' + req.ip);
    next();
}
