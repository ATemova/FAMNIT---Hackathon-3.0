const express = require('express');
const session = require('express-session');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cookieParser());

let sess = {
  secret: 'our little secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
};

app.use(session(sess));

app.use(express.urlencoded({ extended: true }));
app.use(cors({
  methods: ["GET", "POST"],
  credentials: true,
  origin: ['http://localhost:3000', 'http://localhost:3001']
}));

app.use(express.json());

const novice = require('./routes/novice');
const users = require('./routes/users');

app.use('/novice', novice);
app.use('/users', users);

const path = require('path');
const dirname = path.resolve();
app.use(express.static(path.join(dirname, "build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(dirname, "build", "index.html"));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
