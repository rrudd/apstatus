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
  dhtSensor.initialize(22, 9);
}catch(e){
  console.log('node-dht-sensor package not installed');
}

exports.getCurrentReading = function(){
  return dhtSensor.read();
};
