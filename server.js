'use strict';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./config/webpack.dev');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: { colors: true }
}).listen(3000, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log('Listening on http://localhost:3000');
});

// Iniciando o servidor rest
const URL_BANCO_DE_DADOS = 'mongodb://localhost/aula11';
const PORTA_DO_SERVIDOR = 9000;

const express = require('express');
const mongoose = require('mongoose');

// Abre uma conexão com o banco de dados
mongoose.connect(URL_BANCO_DE_DADOS);
mongoose.connection.once('open', function() {
  // Espera abrir a conexão com o banco de dados

  // Cria uma aplicação express
  var app = express();

  app.get('/', function (req, res) {
    res.send('Hello World!');
  });

  app.listen(PORTA_DO_SERVIDOR, function() {
    console.log(`Servidor Rest ouvindo na porta ${PORTA_DO_SERVIDOR}`);
    console.log(`URL base Rest http://localhost:${PORTA_DO_SERVIDOR}`);
  });
});
