module.exports = {
  getCities: function(req, res) {
    return res.send(cities);
  },
  getCity: function(req, res) {
    console.log("before", req.params.id);
    for(var i = 0; i < cities.length; i++){
        console.log("after", cities[i].id);
      if(cities[i].id === req.params.id) {
          return res.send(cities[i].name);
      }
      else {
          return res.end();
      }

    }

  }
}
