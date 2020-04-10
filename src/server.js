const express = require('express')
	, app = express()
	, multer = require('multer')
	, multerConfigs = require('./configuracao/multer')
	, jsonParser = require('./services/jsonParser')
	, routes = require('express').Router()
	, connectToMongo = require('./database/mongo');
	


app.use(express.static('public'));
app.use(routes);

connectToMongo();

routes.get('/status', (request, response) => {
    return response.status(200).send('Rota tá ok!')  
  });

routes.post('/file/upload', multer(multerConfigs).single('file'), 

(request, response) =>{
	console.log(request.file);
	jsonParser(request.file.filename);
	return response.status(200).send('Arquivo CSV recebido')
  })




app.listen(3000, () => console.log('App na porta 3000'));