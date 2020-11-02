const fs = require('fs');
const mongoose = require('mongoose');
const { exit } = require('process');
require('dotenv').config();

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

const stateNameSchema = mongoose.Schema({
    stateName: { type: String, required: true }
});
var StateName = mongoose.model('StateName', stateNameSchema);

const seasonNameSchema = mongoose.Schema({
    seasonName: { type: String, required: true }
});
var SeasonName = mongoose.model('SeasonName', seasonNameSchema);

function readFile() {
    var rawdata = fs.readFileSync('data/modeled_data.json');
    var seasonalFruitsData = JSON.parse(rawdata);
    return seasonalFruitsData;
}

function updateStateData(callback) {
    var scrapedData = readFile();
    var statesArray = [];
    for (const stateName in scrapedData) {
        var stateData = scrapedData[stateName];
        var seasonsArray = [];
        stateData['seasons'].forEach((seasonData) => {
            var seasonDoc = new Season({
                season: seasonData['season'],
                fruits: seasonData['fruits']
            });
            seasonsArray.push(seasonDoc);
        });

        var stateDoc = new State({
            state: stateName,
            seasons: seasonsArray
        });
        statesArray.push(stateDoc);
        console.log(stateDoc.seasons);
    }
    console.log(statesArray);
    State.insertMany(statesArray, (err, docs) => {
        if (err) console.log(err);
        else console.log(docs);
    });
    callback();
}

function updateStateNamesData() {
    var scrapedData = readFile();
    var statesNameArray = [];
    for (const stateName in scrapedData) {
        console.log(stateName);
        var stateNameDoc = new StateName({
            stateName: stateName
        });
        statesNameArray.push(stateNameDoc);
    }
    console.dir(statesNameArray);
    StateName.insertMany(statesNameArray, (err, docs) => {
        if (err) console.log(err);
        else console.log(docs);
    });    
}

function updateSeasonNamesData() {
    var scrapedData = readFile();
    var seasonNameArray = [];
    for (const stateName in scrapedData) {
        var stateData = scrapedData[stateName];
        stateData['seasons'].forEach((seasonData) => {
            if (seasonData['season'].includes('Early')) { 
                continue; 
            }
            var seasonNameDoc = new SeasonName({
                seasonName: seasonData['season']
            });
            console.log(seasonData['season']);
            seasonNameArray.push(seasonNameDoc);
        });
        break;
    }
    // console.dir(seasonNameArray);
    // SeasonName.insertMany(seasonNameArray, (err, docs) => {
    //     if (err) console.log(err);
    //     else console.log(docs);
    // });
}
// updateStateData(exit);
updateSeasonNamesData();
// updateStateNamesData();
