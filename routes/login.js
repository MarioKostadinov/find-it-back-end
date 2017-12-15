// let express     = require("express"),
//     router      = express.Router(),
//     User        = require("../models/users");
//
//
// router.post('/login', function(request, response){
//     response.setHeader("Content-Type", "application/json");
//     User.findOne({
//       email: request.body.email
//     }, function(err, user) {
//
//       if (err) throw err;
//
//       if(!user) {
//
//         response.end(JSON.stringify({ response: "false",message: 'Authentication failed. User not found.'}));
//       } else if (user) {
//
//         if (user.password != request.body.password) {
//           response.end(JSON.stringify({ response: "false",message: 'Authentication failed. Wrong Password.'}));
//         } else {
//
//         }
//       }
//     }
//   );
//
//
//
// });
//
// module.exports = router;
