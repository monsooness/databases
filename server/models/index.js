var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      var queryString = 'select messages.id, messages.roomname, messages.chats, users.name from messages \
                        left outer join users on (users.id=messages.id_users);';    
      db.query(queryString, function(err, results) {
        if (err) {
          throw new Error(err);
        } else {
          callback(err, results);
        }
      });
    }, // a function which produces all the messages
    post: function (param, callback) {
      var queryString = 'insert into messages (userid, roomname, chats) values ((select id from users where username = ? ),?,?)';
      db.query(queryString, param, function(err, results) {
        console.log('posted:', results);
        if (err) {
          throw new Error(err);
        } else {
          callback(results);
        }
      });
      
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryString = 'select messages.id, messages.roomname, messages.chats, users.name from messages \
                        left outer join users on (users.id=messages.id_users);'; 
      db.query(queryString, function(err, results) {
        if (err) {
          throw new Error(err);
        } else {
          callback(err, results);
        }
      });   
    },
    post: function () {}
  }
};

