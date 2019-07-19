var express = require('express');
var http = require('http');
var srt2vtt = require('srt-to-vtt')
var fs = require('fs')

fs.createReadStream('./video/1.srt')
  .pipe(srt2vtt())
  .pipe(fs.createWriteStream('./video/1.vtt'));

fs.createReadStream('./video/2.srt')
  .pipe(srt2vtt())
  .pipe(fs.createWriteStream('./video/2.vtt'));

fs.createReadStream('./video/3.srt')
  .pipe(srt2vtt())
  .pipe(fs.createWriteStream('./video/3.vtt'));


// Express server
var app = express();
var server = http.createServer(app);

console.log(' [*] Listening on 0.0.0.0:8080');
server.listen(8080, '0.0.0.0');

console.log(' Go to http://localhost:8080');

app.use('/', express.static(__dirname + '/'));

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/video.html');
});