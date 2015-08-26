"use strict";

var stream = require('stream');
// var fs = require('browserify-fs');
var parse = require('csv-parse');
var _ = require('lodash');
var fetch = NIH.fetch;

/**
 * @param {string} uri
 * @return {Promise.<Node_Stream>}
 */
function fetchStream(uri)
{
    return fetch(uri).then(function (res) {
        return res.text().then(function (body) {
            var input = new stream.PassThrough();
            input._read = function(){};
            input.push(body);
            input.end();
            return input;
        })
    })
}
/**
 * Parse CSV file of the people data
 * @param {string} url
 * @return {Promise.<Array.<Object>>}
 */

 function parsePeopleCSV(url)
 {
    return fetchStream(url).then(function (input) {
     	return new Promise(function (resolve, reject) {

 		// var input = fs.createReadStream(url);
 		var rows = [];
        var columns;

 		// Create parser
 		var csvSettings = {
 			delimiter: ','
 		}
 		var parser = parse(csvSettings);

 		//People.csv header row :
 		//name,gender,hair_length,hair_color,hair_type,moustache,beard,eye_color,glasses,earrings,hat,ribbons

        // Use the writable stream api
        parser.on('readable', function()
        {
        	var record;
        	while(record = parser.read()){
                // The first row in the CSV file will be contain the names of the columns
                if (!columns)
                {
                    columns = _.clone(record);
                    continue;
                }

        		var obj = {
        			name: record[0],
        			gender: record[1],
        			hair_length: record[2],
        			hair_color: record[3],
        			hair_type: record[4],
        			moustache: record[5],
        			beard: record[6],
        			eye_color: record[7],
        			glasses: record[8],
        			earrings: record[9],
        			hat: record[10],
        			ribbons: record[11]
        		};

                var booleans = ["moustache", "beard", "glasses", "earrings", "hat", "ribbons"]

                _.forEach(booleans, function(name) {
                    if (_.has(obj, name)) {   
                        if (obj[name] === "yes") {
                            obj[name] = true
                        }
                        else if (obj[name] === "no") {
                            obj[name] = false
                        }
                    }
                })

        		rows.push(obj);
        	}
        });

        // Catch any error
        parser.on('error', function(err){
            console.log(err.message);
        });
        // When we are done, test that the parsed output matched what expected
        parser.on('finish', function(){
            // console.log(output[1])
            
            resolve({
                rows: rows,
                columns: columns
            });

        });

        input.pipe(parser)

        });
 	});
 }

