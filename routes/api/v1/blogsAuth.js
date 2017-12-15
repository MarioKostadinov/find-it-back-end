let express     = require("express"),
    router      = express.Router(),
    Blogs        = require("../../../models/blogs"),
    verifyToken = require('./VerifyToken'),
    Users        = require("../../../models/users");

var auth = require('basic-auth');

//===================
// CREATE BLOG=======
//===================
router.post('/blogs',verifyToken, function(request, response){

    response.setHeader("Content-Type", "application/json");

    let requestBody = request.body;
    let newBlog       = new Blogs();
    newBlog._id       = new mongoose.Types.ObjectId();
    newBlog.thumbnail = requestBody.thumbnail;
    newBlog.authorId  = requestBody.authorId;
    newBlog.title     = requestBody.title;
    newBlog.firstName = requestBody.firstName;
    newBlog.surname   = requestBody.surname;
    newBlog.topic     = requestBody.topic;
    newBlog.date      = new Date();
    newBlog.body      = requestBody.body;
    newBlog.views     = 0;
    console.log("New Blog:", newBlog);
    // Find User
    Users.findOne({"_id": newBlog.authorId}, function(err, user){
      if(err) {
        console.log(err);
      } else if(user===undefined){
        response.end(JSON.stringify({response: "User not found"}));
      } else {
        console.log(user.blogs);
        // Save blog to user
        user.blogs.push(newBlog._id);
        newBlog.authorName = user.firstName + " " + user.surname;
        user.save(function (err, updatedUser){
          if(err) throw err;
          console.log(updatedUser);
        });
        // Save blog to blogs
        newBlog.save(function(err, blog){
          if (err) throw err;
          response.end(JSON.stringify({response: "Successfully Created Blog", blog: blog}));
          console.log("New blog saved:", blog);
        });
      }
    });
});

//====================
// PATCH SPECIFIC BLOG
//====================
router.put('/blogs/:id',verifyToken, function(request, response){

    let blogId = request.params.id;
    let requestBody = request.body;

    // Find User
    Blogs.findById(blogId, function(err, blog){
      if(err) {
        console.log(err);
      }
      blog.thumbnail = requestBody.thumbnail;
      blog.title     = requestBody.title;
      blog.body      = requestBody.body;
      blog.save(function(err, updatedBlog){
        if(err) throw err;
        response.end(JSON.stringify({response: "Successfully Updated Blog", blog: updatedBlog}));
      });
    });
});

//===================
// COMMENT BLOG======
//===================
router.post('/blogs/:id/comments',verifyToken, function(request, response){
  let blogId = request.params.id;
  let requestBody = request.body;
  console.log(requestBody);
  response.setHeader("Content-Type", "application/json");
  Blogs.findById(blogId, function(err, blog){
    if (err) throw err;
    blog.comments.unshift(requestBody);
    blog.save(function(err, updatedBlog){
      if(err) throw err;
        response.end(JSON.stringify({response:"Success"}));
    });
  });
});

//=====================
// DELETE SPECIFIC BLOG
//=====================
router.delete('/blogs/:id',verifyToken, function(request, response){
  response.setHeader("Content-Type", "application/json");
  let blogId = request.params.id;
  Blogs.findByIdAndRemove(blogId, function(err, blog){
    if (err) throw err;
    Users.findById(blog.authorId, function(err, user){
      if(err) {
        console.log(err);
      } else if(user===undefined){
        response.end(JSON.stringify({response: "User not found"}));
      } else {
        let blogIndex = user.blogs.indexOf(blog._id);
        user.blogs.splice(blogIndex, 1);
        user.save(function (err, updatedUser){
          if(err) throw err;
          response.end(JSON.stringify({response:"Successfully deleted blog"}));
          console.log(updatedUser);
        });
      }
    });
  });
});

//=====================
// SHOW COMMENTS======
//=====================
router.get('/blogs/:id/comments', function(request, response){

    response.setHeader("Content-Type", "application/json");
    let blogId = request.params.id;
    Blogs.findById(blogId, function(err, blog){
      if(err) {
        console.log(err);
      } else if(blog===undefined){
        response.end(JSON.stringify({response: "Blog not found"}));
      } else {
        response.end(JSON.stringify({response: "Comments found", comments: blog.comments}));
      }
    });
});
//=====================
// CREATE COMMENT======
//=====================
router.post('/blogs/:id/comments',verifyToken , function(request, response){

    let commentBody = request.body;

    response.setHeader("Content-Type", "application/json");
    let blogId = request.params.id;
    Blogs.findById(blogId, function(err, blog){
      if(err) {
        console.log(err);
      } else if(blog===undefined){
        response.end(JSON.stringify({response: "Blog not found"}));
      } else {
        blog.comments.push(commentBody);
        blog.save(function(err, newComment){
          if (err) throw err;
            response.end(JSON.stringify({response: "Comment created", comments: blog.comments}));
        });
      }
    });
});

//=====================
// UPDATE COMMENT======
//=====================
router.put('/blogs/:id/comments/:commentId', function(request, response){

  response.end();
});

module.exports = router;
