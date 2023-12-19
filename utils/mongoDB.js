// mongodb.js

const mongoose = require('mongoose');

class MongoDB {
  constructor()  {
     this.connect();
  }

  async connect() {
    const dbUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/your-database-name';
    mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.once('open', () => console.log('Connected to MongoDB'));
  }
}

module.exports = MongoDB;
