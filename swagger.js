const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'School Project',
      version: '1.0.0',
      description: 'Description of your API',
    },
  },
  apis: ['./routes/*.js'], 

};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;