require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || '0.0.0.0';

//accept allCors from any IP
app.use(cors());

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
