var fs = require('fs');
var os = require('os');
var userInfo = os.userInfo();

fs.appendFile('test.txt', 'This is first append');

fs.appendFile('test.txt', `This computer belongs to ${userInfo.username}`);