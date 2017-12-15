let express     = require("express"),
    router      = express.Router();
    Blogs        = require("../../../models/blogs");

//===================
// SHOW BLOGS
//===================
router.get('/blogs', function(request, response){

    Blogs.find({}, function(err, blogs){
      response.setHeader("Content-Type", "application/json");
      if(err) {
        console.log(err);
      } else if(blogs===[]){
        response.end(JSON.stringify({response: "No blogs"}));
      } else {
        response.end(JSON.stringify({response: "Success", blogs: blogs}));
      }
    });
});

//===================
//SHOW BLOGS TOPIC
//===================
router.get('/blogs/:topic', function(request, response){
    let topic = request.params.topic;
    Blogs.find({topic: topic}, function(err, blogs){
      response.setHeader("Content-Type", "application/json");
      if(err) {
        console.log(err);
      } else if(blogs===[]){
        response.end(JSON.stringify({response: "No blogs"}));
      } else {
        response.end(JSON.stringify({response: "Success", blogs: blogs}));
      }
    });
});

//===================
// SHOW SPECIFIC BLOG
//===================
router.get('/blogs/:id', function(request, response){
    response.setHeader("Content-Type", "application/json");
    let blogId = request.params.id;
    Blogs.find({"_id": blogId}, function(err, blog){
      if(err) {
        console.log(err);
      } else if(blog===undefined){
        response.end(JSON.stringify({response: "Blog not found"}));
      } else {
        response.end(JSON.stringify({response: "Success", blog: blog}));
      }
    });
});

//=============================
// SHOW SPECIFIC BLOG PROPERTY
//=============================
router.get('/blogs/:id/:property', function(request, response){
  let blogId = request.params.id;
  let property = request.params.property;
  Blogs.findOne({"_id": blogId}, property, function(err, prop){
    response.setHeader("Content-Type", "application/json");
    if(err) {
      throw err;
      console.log(err);
    } else if(prop===undefined){
      response.end(JSON.stringify({response: "Property Not Found"}));
    } else {
      response.end(JSON.stringify({
        response: "Success",
        data: prop
       }));
    }
  });
});



module.exports = router;
