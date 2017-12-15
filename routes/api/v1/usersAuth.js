let express     = require("express"),
    router      = express.Router(),
    Users       = require("../../../models/users"),
    auth        = require('basic-auth'),
    bcrypt      = require('bcrypt'),
    jwt         = require('jsonwebtoken'),
    verifyToken = require('./VerifyToken'),
    config      = require('../../../config');


router.post('/login', function(request, response) {
  console.log(request.body);
  // response.status(200).send({mess:"hi"});
  Users.findOne({ email: request.body.email }, function (err, user) {
    console.log("step1");
    if (err) return response.status(500).send('Error on the server.');
    if (!user) return response.status(404).send('No user found.');
    var passwordIsValid = bcrypt.compare(request.body.password, user.password);
    console.log(passwordIsValid);
    if (!passwordIsValid) return response.status(401).send({ auth: false, token: null });
    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    response.status(200).send({ auth: true, token: token, firstName: user.firstName, surname: user.surname, id: user._id, avatar: user.avatar });
  });
});


//===================
// UPDATE USER=======
//===================
router.put('/users/:id',verifyToken, function(request, response){
    let userId = request.params.id;
    let requestBody = request.body;
    console.log(requestBody);
    response.setHeader("Content-Type", "application/json");
    Users.findByIdAndUpdate(userId, {
      firstName: requestBody.firstName,
      surname: requestBody.surname,
      avatar: requestBody.avatar
    }, function(err, newUser){
      if (err) throw err;
      console.log("Updated User:", newUser);
      response.end(JSON.stringify({response:"Success"}));
    });
});

//===================
// DELETE USER=======
//===================
router.delete('/users/:id',verifyToken, function(request, response){

    let userId = request.params.id;

    Users.findByIdAndRemove(userId, function(err, user){
      response.setHeader("Content-Type", "application/json");
      if (err) throw err;
      if (user===null) {
          response.end(JSON.stringify({response: "User not found"}));
      } else {
        response.end(JSON.stringify({response: "Successfully Deleted User", user: user}));
      }
    });
});

module.exports = router;
