var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mainCtrl = require('./server-assets/controllers/mainCtrl'),
    cities = require('./cities.json'),
    cors = require('cors'),
    port = process.env.PORT || 7777,
    corsOptions = {
      origin: 'http://localhost:7777'
    };
    // What else needs to be required?


//What will we be using besides bodyParser?
app.use(bodyParser.json());


app.get('/api/cities', mainCtrl.getCities);

app.post('/api/cities', mainCtrl.postCity);

app.use(express.static(__dirname + '/public'));

app.use(cors(corsOptions));



app.listen(port, function(){
    console.log('Listening on port:', port);
});
