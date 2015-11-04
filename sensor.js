var exports = module.exports = {};
var dhtSensor = {
  read: function(){
    return {
      temperature: '999',
      humidity: '999'
    };
  }
};

try{
  dhtSensor = require('node-dht-sensor');
  dhtSensor.initialize(22, 4);
}catch(e){
  console.log('node-dht-sensor package not installed');
}

exports.getCurrentReading = function(){
  var reading = dhtSensor.read();
  reading = {
    temperature: reading.temperature.toFixed(1);
    humidity: reading.humidity.toFixed();
  }
  return reading;
};
