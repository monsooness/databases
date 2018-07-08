var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      //pull all messages from model
      models.messages.get(function(err, results) {
        if (err) {
          console.log(err);
        } else {
          res.send.json(results);
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var params = [req.body[username], req.body[text], req.body[room]
      ];
      models.messages.post(params, function(results) {
        res.sendStatus(201);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.messages.get(function(err, resukts) {
        if (err) {
          console.log(err);
        } else {
          res.send.json(results);
        }
      });
    },
    
    post: function (req, res) {
      var params = [req.body[name]];
      models.messages.post(params, function(results) {
        res.sendStatus(201);
      });
    }
  }
};

