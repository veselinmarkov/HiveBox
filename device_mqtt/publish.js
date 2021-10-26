//const { exception } = require('console');
var fs = require('fs'); 
var jwt = require('jsonwebtoken'); 
var mqtt = require('mqtt'); 
//var rpiDhtSensor = require('rpi-dht-sensor');
var samples = require('/home/vesko/hivebox/device_mqtt/samples')
 
//var dht = new rpiDhtSensor.DHT11(2); // `2` => GPIO2 
//projects/optimum-harbor-303817/topics/hive_temp
 
var projectId = 'optimum-harbor-303817'; 
var cloudRegion = 'us-central1'; 
var registryId = 'HiveBox-nodes'; 
var deviceId = 'HiveBox_1'; 
 
var mqttHost = 'mqtt.googleapis.com'; 
var mqttPort = 8883; 
var privateKeyFile = './cert/rsa_private.pem'; 
var serverCertFile = './cert/roots.pem'; 
var algorithm = 'RS256'; 
var messageType = 'events'; // state or events 
 
var mqttClientId = 'projects/' + projectId + '/locations/' + cloudRegion + '/registries/' + registryId + '/devices/' + deviceId; 
var mqttTopic = '/devices/' + deviceId + '/' + messageType; 
 
var connectionArgs = { 
  host: mqttHost, 
  port: mqttPort, 
  clientId: mqttClientId, 
  username: 'unused', 
  password: createJwt(projectId, privateKeyFile, algorithm), 
  protocol: 'mqtts', 
  secureProtocol: 'TLSv1_2_method',
  ca: [fs.readFileSync(serverCertFile)], 
}; 
 
console.log('connecting...'); 
//console.log('with arguments:' +JSON.stringify(connectionArgs));
var client = mqtt.connect(connectionArgs); 
 
// Subscribe to the /devices/{device-id}/config topic to receive config updates. 
//client.subscribe('/devices/' + deviceId + '/config'); 
 
client.on('connect', function(success) { 
  if (success) { 
    console.log('Client connected...'); 
    sendData(); 
  } else { 
    console.log('Client not connected...'); 
  } 
}); 
 
client.on('close', function() { 
  console.log('close'); 
}); 
 
client.on('error', function(err) { 
  console.log('error', err); 
}); 
 
client.on('message', function(topic, message, packet) { 
  console.log(topic, 'message received: ', Buffer.from(message, 'base64').toString('ascii')); 
}); 


function createJwt(projectId, privateKeyFile, algorithm) { 
  var token = { 
    'iat': parseInt(Date.now() / 1000), 
    'exp': parseInt(Date.now() / 1000) + 20 * 60, // 20 min 
    'aud': projectId 
  }; 
  var privateKey = fs.readFileSync(privateKeyFile); 
  return jwt.sign(token, privateKey, { 
    algorithm: algorithm 
  }); 
} 
 
/*
function fetchData() { 
  var readout = dht.read(); 
  var temp = readout.temperature.toFixed(2); 
  var humd = readout.humidity.toFixed(2); 
 
  return { 
    'temp': temp, 
    'humd': humd, 
    'time': new Date().toISOString().slice(0, 19).replace('T', ' ') // https://stackoverflow.com/a/11150727/1015046 
  }; 
}

function fetchData() {
  let now = new Date();
  let nowStamp =  1000000 * now.getDate() + 10000 * now.getHours() +100 * now.getMinutes() +now.getSeconds();
  let resFirst = samples.find((row) => {
    let rowDate = new Date(row.sample_time);
    let rowStamp = 1000000 * rowDate.getDate() + 10000 * rowDate.getHours() +100 * rowDate.getMinutes() +rowDate.getSeconds();
    return (rowStamp >= nowStamp)
  })
  return resFirst
} 
var pointer  = null;
function fetchData() {
  if (! pointer) {
    try {
      pointer =fs.readFileSync('pointer_date.txt');
    } catch (FileNotFoundException) {
      
    }
    pointer = new Date(pointer);
    console.log(pointer);
  } 
  let resFirst = samples.find((row) => {
    let rowDate = new Date(row.sample_time);
    return (rowDate > pointer)
  })
  pointer = new Date(resFirst.sample_time)
  fs.writeFileSync('pointer_date.txt', resFirst.sample_time);
  return resFirst
}
*/  
var pointer  = null;
function fetchData() {
  if (! pointer) {
    try {
      pointer =fs.readFileSync('pointer_date.txt');
    } catch (FileNotFoundException) {
      pointer = "0";
    }
    pointer = Number.parseInt(pointer);
    console.log(pointer);
  }
  if (pointer > samples.length)
    pointer = 0; 
  let resFirst = samples[pointer++];
  fs.writeFileSync('pointer_date.txt', String(pointer));
  return resFirst
}

function sendData() { 
  var payload = fetchData(); 
 
  payload = JSON.stringify(payload); 
  console.log(mqttTopic, ': Publishing message:', payload); 
  client.publish(mqttTopic, payload, { qos: 0 }); 
 
  console.log('Transmitting in 30 seconds'); 
  setTimeout(sendData, 30000); 
}

function printRecord() {
  console.log(JSON.stringify(fetchData()));
  setTimeout(printRecord, 3000);
}

//printRecord();
//sendData();