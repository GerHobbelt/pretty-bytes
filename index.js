'use strict';
var UNITS = ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

module.exports = function format(num) {
	if (!Number.isFinite(num)) {
		throw new TypeError('Expected a finite number, got ${typeof num}: ${num}');
	}

	var neg = num < 0;

	if (neg) {
		num = -num;
	}

	if (num < 1) {
		return (neg ? '-' : '') + num + ' B';
	}

	var exponent = Math.min(Math.floor(Math.log10(num) / 3), UNITS.length - 1);
	var numStr = Number((num / Math.pow(1000, exponent)).toPrecision(3));
	var unit = UNITS[exponent];

	return (neg ? '-' : '') + numStr + ' ' + unit;
};
