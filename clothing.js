var rgbToHsl = require('rgb-to-hsl');

module.exports = class Clothing {
    constructor(r, g, b, type) {
	this.hsl = rgbToHsl(r, g, b);
	this.type = type;
    }

    get hue() {
	return this.hsl[0];
    }

    get saturation() {
	return this.hsl[1];
    }

    get lighting() {
	return this.hsl[2];
    }
};

// Put this at the top of your file to use this class
// var Clothing = require ("./clothing.js");

