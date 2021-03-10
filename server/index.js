require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();

const allowedOrigins = ['http://localhost:3000'];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          'The CORS policy for this site does not ' +
          'allow access from the specified Origin.';
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
app.listen(process.env.PORT, () => {
  console.log(`Server listening : ` + process.env.PORT);
});
