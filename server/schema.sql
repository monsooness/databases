-- DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id INTEGER PRIMARY KEY,
  userid TEXT NOT NULL, 
  chats TEXT NOT NULL
);

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE rooms (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE users_rooms (
  id INTEGER PRIMARY KEY,
  id_rooms INTEGER NOT NULL,
  FOREIGN KEY (id_rooms) 
    REFERENCES rooms(id),
  id_users INTEGER NOT NULL,
  FOREIGN KEY (id_users) 
    REFERENCES users(id)
);



