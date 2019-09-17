'use strict';

const Homey = require('homey');
const SOTGBase = require('../base');

class SolarMAN extends SOTGBase.Driver {
    getBaseUrl() {
        return 'http://home.solarman.cn/login.html?lang=2/';
    }
}

module.exports = SolarMAN;
