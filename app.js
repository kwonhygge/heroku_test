'use strict';
//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

//app이라는 const가 express를 실행
const app = express();

require('dotenv').config();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('home');
});

app.get('/login', function (req, res) {
  res.render('login');
});

app.get('/signup', function (req, res) {
  res.render('signup');
});

app.get('/create', function (req, res) {
  res.render('create');
});
app.post('/create', function (req, res) {
  console.log(req.body);
  res.redirect('/mainbox');
});

app.get('/mainbox', function (req, res) {
  res.render('mainbox');
});

let port = process.env.PORT;
if (port == null || port == '') {
  port = 3000;
}
app.listen(port, function () {
  console.log('listening on port 3000');
});
