var express = require('express'),
    app = express(),
    port = process.env.PORT || 7777,
    bodyParser = require('body-parser'),
    cors = require('cors');
    mainCtrl = require('./server-assets/controllers/mainCtrl'),
    cities = require('./cities');

    // session = require('express-session');

//Show what happens without express.static on index.html with chrome tools
app.use(bodyParser.json(), cors(), express.static(__dirname + '/public'));

app.get('/api/cities', mainCtrl.getCities);




app.listen(port, function(){
    console.log('Listening on port:', port);
});
