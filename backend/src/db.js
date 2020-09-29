const mongoose = require('mongoose');

const stateNameSchema = mongoose.Schema({
    stateName: { type: String, required: true }
});
var StateName = mongoose.model('StateName', stateNameSchema);

const seasonNameSchema = mongoose.Schema({
    seasonName: { type: String, required: true }
});
var SeasonName = mongoose.model('SeasonName', seasonNameSchema);

const seasonSchema = mongoose.Schema({
    season: { type: String, required: true },
    fruits: [String]
});

const stateSchema = mongoose.Schema({
    state: { type: String, required: true },
    seasons: { type: [seasonSchema] }
});
var State = mongoose.model('State', stateSchema);

