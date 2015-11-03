# apstatus
A lightweight node.js &amp; react.js application for monitoring apartment status using the Raspberry Pi. Currently supports temperature and humidity readings.

### Prerequisites

- [Raspberry Pi](https://www.raspberrypi.org/)
- DHT 22 (or 11) temperature and humidity sensor
- [Node.js and NPM](https://nodejs.org/)
- [BCM2835 library](http://www.airspayce.com/mikem/bcm2835/)

### Installation

1. Run `npm install node-dht-sensor` to install sensor module. Omitted from requirements for development purposes. More information [here](https://github.com/momenso/node-dht-sensor).
2. Run `npm install` to install server dependencies.

### Usage

Run `sudo npm start`, and access the application on port `8080`. The server needs root access in order to get readings from the sensor. 

Note that the default configuration uses a DHT22 connected via GPIO4, this can be configured in `sensor.js` by editing the line `dhtSensor.initialize(22, 4);`.

### Known issues

The default repositories on Raspbian may have an outdated version of node.js. The easiest way of solving this is [installing node from the Adafruit repo](https://learn.adafruit.com/node-embedded-development/installing-node-dot-js).
