var express = require('express'),
    app = express(),
    port = process.env.port || 7777,
    bodyParser = require('body-parser'),
    cors = require('cors'),
    session = require('express-session');

app.use(bodyParser.json(), cors(), express.static(__dirname + '/public'));

app.listen(port, function(){
    console.log('Listening on port:', port);
});
