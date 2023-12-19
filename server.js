// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const swaggerUi = require('swagger-ui-express');
const MongoDB = require('./utils/mongoDB'); 
const swaggerSpec = require('./swagger'); 
const corsOption  = require ('./utils/cors');
const cors = require('cors');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors(corsOption));
app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api', route);


// Start server
app.listen(PORT, () =>  {
  console.log(`Starting server ${PORT}`);
  try{
console.log(process.env.MONGODB_URI);
  new MongoDB();
  console.log(`Started server ${PORT}`);
  }
  catch (e)
  {
    console.log(`error ${e}`)
  }

});
