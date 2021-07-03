const express = require('express');
const app = express();
const cors = require('cors');
const { corsOptions } = require('../configs/corsConfig.js');
const pkg = require('../package.json');
const routes = require('../routes');
const mongoose = require('mongoose');
const config = require('../configs/config.js');
const errorHandler = require('../middlewares/error');
const authMiddleware = require('../middlewares/auth');

const { port, dbUrl, key } = config;
app.set('config', config);
app.set('pkg', pkg);
// mongoose.connect('mongodb://localhost:27017/blog', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,useFindAndModify:false});
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const db = mongoose.connection;
//  console.log(db);
db.on('error', console.error.bind(console, 'Connection error:')); // enlaza el track de error a la consola (proceso actual)
db.once('open', console.warn.bind(console, 'MongoDB is connected'));

app.use(express.urlencoded({ extended:false}));
app.use(express.json());
app.use(cors(corsOptions));
app.set('key', key);

app.use(authMiddleware(key));

// set port, listen for requests
routes(app, (err) => {
  if (err) {
    throw err;
  }

  app.use(errorHandler);

  app.listen(port, () => {
    console.info(`App listening on port ${port}`);
  });
});
