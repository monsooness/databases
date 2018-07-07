var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      db.connection.query('SELECT * FROM messages', function(err, results, fields) {
        if (err) {
          console.log('Error');
        } else {
          res.send(results);
        }
      });
    }, // a function which produces all the messages
    post: function () {
      
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

