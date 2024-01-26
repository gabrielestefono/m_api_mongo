const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Conexão com banco de dados
const conn = require('./db/conn');
conn();

app.use(cors());

app.use(express.json());

// Routes
const routes = require('./routes/router');

app.use('/api', routes);

app.listen(port, function(){
	console.log(`Rodando http://localhost:${port}`)
})