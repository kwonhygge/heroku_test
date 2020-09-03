'use strict';
//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

//app이라는 const가 express를 실행
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('home');
});
app.listen(process.env.PORT || 3000, function () {
  console.log('listening on port 3000');
});
