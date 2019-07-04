const num1 = require('test-loader-inline!./1.js');

// -! 禁用 pre loader 和 normal loader
const num2 = require('-!test-loader-inline!./2.js');

// ! 禁用 normal loader
// const num2 = require('!test-loader-inline!./2.js');

// !! 禁用 pre loader、post loader、normal loader
// const num2 = require('!!test-loader-inline!./2.js');
