const corsOptions = {
    origin: ['*'], // Specify the allowed origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Enable cookies and other credentials
    optionsSuccessStatus: 204, // Set the HTTP status for successful OPTIONS requests
    allowedHeaders: 'Origin,X-Requested-With,Content-Type,Accept,Authorization', // Specify allowed headers
  };
module.exports = corsOptions;