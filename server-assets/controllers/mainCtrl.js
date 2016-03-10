module.exports = {
  getCities: function(req, res) {
      ///Code Here
    res.send("All the Cities!!!");
  },
  getCity: function(req, res) {
        ///Code Here
    res.send("I'll have one city to go please");
  },
  postCity: function(req, res) {
      ///Code Here
    res.send("City Added");
  },
  updateCity: function(req, res) {
      ///Code Here
    res.send("City Updated");
  },
  deleteCity: function(req, res) {
      ///Code Here
    res.send("City Terminated!");
  }

}
