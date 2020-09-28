const express = require('express');
const app = express();
const mongoose = require('mongoose');

process.env.MONGO_URI = 
    'mongodb+srv://admin:adminpw@seasonal-fruits-cluster.pubnq.mongodb.net/<dbname>?retryWrites=true&w=majority';
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, useUnifiedTopology: true 
});

app.use(logger);

app.get('/', (req, res) => {
    var msg = 'Base URL';
    console.log(msg);
    res.send(msg)
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

function logger(req, res, next) {
    console.log(req.method + ' ' + req.path + 
        ' - ' + req.ip);
    next();
}
