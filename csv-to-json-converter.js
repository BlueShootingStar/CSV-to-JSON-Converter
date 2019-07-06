/**
 * This program simply converts a csv file into a json file, 
 * using the 'csvtojson' module.
 * 
 * The output file will be named output.json and will be located in user's desktop.
 * 
 * If there is already a output.json file at desktop,
 * the newest will replaced without warning.
 * 
*/

const csv = require('csvtojson');
const fs = require('fs');
const path = require('path');

/** 
 * this function converts a csv file into a json file
 * 
 * @param csvFilePath   the path of csv file, by default it is given by the test (which is located in the project directory)
 */
const convertCsvToJson = (csvFilePath=path.join(__dirname, 'customer-data.csv')) => {
    console.log('converting...');
    // I use try catch in case of wrong csv format input
    try {
        csv()
        .fromFile(csvFilePath)
        .then((jsonObj) => {
            // output to desktop
            fs.writeFileSync(path.join(require('os').homedir(), 'Desktop', 'output.json'), JSON.stringify(jsonObj));
            console.log('done');
        })
    }
    catch (error) {
        console.error(`Got error: ${error.message}`);
    }
}

convertCsvToJson(process.argv[2]);


