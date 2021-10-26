var BigQuery = require('@google-cloud/bigquery'); 
var projectId = 'optimum-harbor-303817'; 
 
var bigquery = new BigQuery({ 
  projectId: projectId, 
}); 
 
var datasetName = 'hive'; 
var tableName = 'samples'; 
 
exports.pubsubToBQ = function(event, callback) { 
  var msg = event.data;
  var data = JSON.parse(Buffer.from(msg, 'base64').toString());
  bigquery 
    .dataset(datasetName) 
    .table(tableName) 
    .insert(data) 
    .then(function() { 
      console.log('Inserted rows');
    }) 
    .catch(function(err) { 
      if (err && err.name === 'PartialFailureError') { 
        if (err.errors && err.errors.length > 0) { 
          console.log('Insert errors:'); 
          err.errors.forEach(function(err) { 
            console.error(err); 
          }); 
        } 
      } else { 
        console.error('ERROR:', err); 
      } 
  
    }); 
};