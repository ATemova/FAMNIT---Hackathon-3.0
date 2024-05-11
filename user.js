const express = require('express');
const mysql = require('mysql');

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'Qcodeigniter',
});

conn.connect((err) => {
  if (err) {
    console.error("ERROR: " + err.message); // Changed console.log to console.error
    return;
  }
  console.log('Connection established');
});

const dataPool = {};

dataPool.AuthUser = (username) => {
  return new Promise((resolve, reject) => {
    conn.query('SELECT * FROM user_login WHERE user_name = ?', username, (err, res, fields) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

dataPool.AddUser = (username, email, password) => {
  return new Promise((resolve, reject) => {
    conn.query('INSERT INTO user_login (user_name, user_email, user_password) VALUES (?, ?, ?)', [username, email, password], (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

module.exports = dataPool;
