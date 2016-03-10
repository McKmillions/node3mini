var cities = require('../../cities.json');

module.exports = {
  getCities: function(req, res) {
      ///Code Here
    res.send(cities.cities);
  },
  postCity: function(req, res) {
      ///Code Here
    res.send("City Added");
  },

};
