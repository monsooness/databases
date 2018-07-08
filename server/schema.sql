-- DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id INTEGER PRIMARY KEY,
  userid TEXT NOT NULL, 
  chats TEXT NOT NULL,
  roomname text NOT NULL
);

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL
);




