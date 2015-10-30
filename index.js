var map = require('dank-map');
var defaultReg = /,/gi;

module.exports = function (data, colRegex) {
	var lines = (data || "").split(/\n/gi);
	
	//assume header is titles
	headerFields = parseLine(lines.shift(), colRegex);
	
	return map(lines, function (ix, line) {
		if (!line) {
			return;
		}

		var obj = {};
		var parsedLine = parseLine(line, colRegex);
		
		map(headerFields, function (ix, fieldName) {
			obj[fieldName] = parsedLine[ix];
		});
		
		return obj;
	}, true);
};

var parseLine = exports.parseLine = function (line, reg) {
	var tokens = (line || "").split(reg || defaultReg);
	
	return map(tokens, function (ix, token) {
		return (token || "").trim();
	});
};

var trim = exports.trim = function (str) {
	str = str.replace(/^\s+/, '');
	for (var i = str.length - 1; i >= 0; i--) {
		if (/\S/.test(str.charAt(i))) {
			str = str.substring(0, i + 1);
			break;
		}
	}
	return str;
};
