const express = require('express');
const app = express();
const mongoose = require('mongoose');

process.env.MONGO_URI = 
    'mongodb+srv://admin:adminpw@seasonal-fruits-cluster.pubnq.mongodb.net/<dbname>?retryWrites=true&w=majority';
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, useUnifiedTopology: true 
});

app.use(logger);

const seasonSchema = mongoose.Schema({
    season: { type: String, required: true },
    fruits: [String]
});

const stateSchema = mongoose.Schema({
    state: { type: String, required: true },
    seasons: { type: [seasonSchema] }
});

app.get('/', (req, res) => {
    var msg = 'Base URL';
    console.log(msg);
    res.send(msg)
});

app.put('/init_data', (req, res) => {
    
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

function logger(req, res, next) {
    console.log(req.method + ' ' + req.path + 
        ' - ' + req.ip);
    next();
}
