let express     = require("express"),
    router      = express.Router(),
    Users       = require("../../../models/users"),
    auth        = require('basic-auth'),
    config      = require('../../../config'),
    jwt         = require('jsonwebtoken'),
    verifyToken = require('./VerifyToken'),
    Blogs        = require("../../../models/blogs");




//===================
// SHOW USERS========
//===================
router.get('/users',  function(request, response) {

  let requestParams = request.query;
  console.log(requestParams);

  Users.find({}, function(err, users){
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify(users));
  });
});
//===================
// SHOW SPECIFIC USER
//===================
router.get('/users/:id',verifyToken, function(request, response){
    let userId = request.params.id;

    Users.findOne({"_id": userId}, function(err, user){
      response.setHeader("Content-Type", "application/json");
      if(err) {
        throw err;
        console.log(err);
      } else if(user===undefined){
        response.end(JSON.stringify({response: "User not found"}));
      } else {
        response.end(JSON.stringify({
          response: "Success",
          firstName: user.firstName,
          surname: user.surname,
          avatar: user.avatar,
          blogs: user.blogs
         }));
      }
    });
});

//==============================
// SHOW SPECIFIC USER PROPERTY==
//==============================
router.get('/users/:id/:property', verifyToken, function(request, response){
    let userId = request.params.id;
    let property = request.params.property;
    if (property === 'blogs') {
      Blogs.find({authorId: userId}, function(err, user){
        response.setHeader("Content-Type", "application/json");
        console.log(user);
        if(err) {
          console.log(err);
        } else if(user===undefined){
          response.end(JSON.stringify({response: "No blogs"}));
        } else {
          console.log(user);
          response.end(JSON.stringify({response: "Success", blogs: user}));
        }
      });
    } else {
      Users.findOne({"_id": userId}, property, function(err, prop){
        response.setHeader("Content-Type", "application/json");
        if(err) {
          throw err;
          console.log(err);
        } else if(prop===undefined){
          response.end(JSON.stringify({response: "User not found"}));
        } else {
          response.end(JSON.stringify({
            response: "Success",
            data: prop
           }));
        }
      });
    }

});

//==================
// CREATE USER======
//==================
router.post('/users', function(request, response){

    let requestBody = request.body;
    let user = new Users();
    user._id        = new mongoose.Types.ObjectId();
    user.firstName  = requestBody.firstName;
    user.surname    = requestBody.surname;
    user.email      = requestBody.email;
    user.password   = requestBody.password;
    user.gender     = requestBody.gender;
    user.avatar     = requestBody.avatar;
    user.admin      = false;
    user.save(function(err, user){
        if (err) {
          throw err;
        } else {
          console.log('Successfully created new user:', user);
          let token = jwt.sign( {id: user._id}, config.secret, {
            expiresIn: 86400
          });
          response.status(200).send({ auth: true, token: token, firstName: user.firstName, surname: user.surname, id: user._id });  }
    });
});

module.exports = router;
