require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || '0.0.0.0';

const allowedOrigins = [
  'http://localhost:3000',
  'http://192.168.99.100:3000',
  'http://0.0.0.0:3000',
  'http://web-app:3000',
  'http://todo-api:4000',
  'http://localhost:3000/',
  'http://192.168.99.100:3000/',
  'http://0.0.0.0:3000/',
  'http://web-app:3000/',
  'http://todo-api:4000/',
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          'The CORS policy for this site does not ' +
          'allow access from the specified Origin:' +
          origin;
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

const logger = (req, res, next) => {
  console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
  next();
};

app.use(logger);
app.use(cookieParser());
app.disable('x-powered-by');
// Body parser Middleware we need this for POST end pars the Body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Routes/api/members.js => router
app.use('/api/client', require('./routes/api/client'));
//Start server
app.listen(PORT, HOST, () => {
  console.log(`Server listening : ` + HOST + ':' + PORT);
});
