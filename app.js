var express     = require('express');
    bodyParser  = require('body-parser'),
    fs          = require('fs'),
    mongoose    = require("mongoose"),
    app         = express(),
    session     = require('express-session');
    morgan      = require('morgan');

var config      = require('./config');
var jwt         = require("jsonwebtoken"); // used to create, sign, and varify tokens

// =======================
// configuration =========
// =======================
var port = process.env.PORT || 3000;
mongoose.connect(config.database); // connect to database

app.set('superSecret', config.secret); // Secret variable

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false
}));


// ================
// Routes =========
// ================
let indexRoutes       = require("./routes/index"),
    blogsRoutes       = require("./routes/api/v1/blogs"),
    blogsAuthRoutes   = require("./routes/api/v1/blogsAuth"),
    authRoutes        = require("./routes/api/v1/authenticate"),
    userAuth         = require("./routes/api/v1/usersAuth"),
    userRoutes        = require("./routes/api/v1/users");

app.use(indexRoutes);
app.use("/api/v1", blogsRoutes);
app.use("/api/v1", blogsAuthRoutes);
app.use("/api/v1", userRoutes);
app.use(authRoutes);
app.use("/api/v1", userAuth);

app.listen(port, function(){
    console.log("Server started and listening on port:", port);
});
