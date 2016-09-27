'use strict';

var os = require('os');
var exsync = require('child_process').execSync;


exports.systemGET = function(args, res, next) {

var hostname = os.hostname();
console.log(hostname);

var platform = os.platform();
console.log(platform);

var release = os.release();
console.log(release);

var type = os.type();
console.log(type);

var totalmem = os.totalmem();
console.log(totalmem);

var arch = os.arch();
console.log(arch);

var ver = exsync('cat /etc/*release').toString('utf8').replace(/\n$/, '');
console.log(ver);


var osInfo = {};
  osInfo['application/json'] = {
  "hostname" : hostname,
  "platform" : platform,
  "release"  : release,
  "type"     : type,
  "arch"     : arch, 
  "total mem" : totalmem,
  "version"   : ver
};

  if(Object.keys(osInfo).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(osInfo[Object.keys(osInfo)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

