const express = require('express');
const app = express();
const server = require('http').createServer(app);
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = 5000;
const router = require('./router');

app.use(cors());
app.use(express.json());
app.use('/api', router);

app.use(function (req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});

const start = async () => {
  try {
    await mongoose.connect(`mongodb+srv://prizmor:prizmor@cluster0.pkyhz.mongodb.net/exchanger?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true});
    server.listen(PORT, () => console.log('Server started, port: ' + PORT));
  } catch (e) {
    console.error('error');
  }
};

start();
