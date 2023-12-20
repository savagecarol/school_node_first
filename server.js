// server.js
const express = require('express'); // like tomcat server
const mongoose = require('mongoose'); // mongodb
const bodyParser = require('body-parser'); // json
const route = require('./routes/route.js'); // main class connect with controller
const swaggerUi = require('swagger-ui-express'); // swagger
const MongoDB = require('./utils/mongoDB');  // mongoDb
const swaggerSpec = require('./swagger');  // swagger
const corsOption  = require ('./utils/cors'); // cors config
const cors = require('cors'); // cors
require('dotenv').config(); // urls , port , redis config , variables that can be use in whole project


const app = express(); // definging server
const PORT = process.env.PORT || 3000; // port

// Middleware
app.use(cors(corsOption)); // giving server feature of cors
app.use(bodyParser.json()); // feature of json

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec)); // feature of swagger
app.use('/api', route); // feaute of apis --> so that connect with controller // route

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
