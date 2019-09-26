'use strict';

var isError = function (action) { return !!action.error; };

exports.isError = isError;
