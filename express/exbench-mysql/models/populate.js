var Sequelize = require('sequelize');
// connect to MySQL db
var sequelize = new Sequelize('exbench-mysql', 'root', '4444');
var models = require('../models/models');
var Post = models.Post;
var Comment = models.Comment;

// Sync tables
sequelize.sync({ force: true });

function populatePostAndComment() {
  var i = 1000;
  var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut tempor neque. Vivamus venenatis, nisl sed cursus venenatis, velit enim feugiat est, sit amet lacinia lectus nulla at libero. Nulla facilisi. Aliquam erat volutpat. Nunc nec purus tempor, blandit mi nec, vehicula elit. Morbi nec odio quis massa pellentesque ornare eget at velit. Cras laoreet elit nec viverra auctor. Vestibulum porttitor ut magna eu luctus. Curabitur facilisis faucibus nibh, in scelerisque metus scelerisque nec. In hac habitasse platea dictumst. Sed nisl purus, pharetra quis magna eu, consectetur sodales orci. Vestibulum facilisis lacus lacus, vitae malesuada mauris ultrices id.\nVestibulum nec purus tincidunt, consequat tellus at, pharetra enim. Curabitur at nulla dictum lectus convallis tempor. Aliquam metus lorem, euismod vel tristique ut, auctor vitae urna. Praesent sollicitudin, ligula ut feugiat fermentum, urna orci dignissim tellus, vitae imperdiet massa nisi ac ipsum. Etiam volutpat tempor ligula, scelerisque auctor sapien euismod et. Etiam in feugiat velit. Aliquam et quam ac risus congue viverra ultrices vel sem. Etiam scelerisque odio est, quis pretium lorem placerat sed.\nMaecenas nec imperdiet dui. Aenean sed rutrum ante. Cras eget interdum orci. Suspendisse tristique dapibus convallis. Maecenas quis lacus quis justo consequat molestie. Morbi sagittis sem tellus, pretium auctor nibh ultricies non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean facilisis orci non nisl tempus ultricies. Vivamus sit amet dapibus elit. Praesent non justo sodales, auctor erat vitae, placerat velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec congue facilisis fringilla. Mauris et rhoncus massa. Proin pharetra, nisi at ultrices faucibus, est elit auctor risus, a sodales felis nisl ac magna.\nAliquam at erat a orci feugiat lacinia. Curabitur vitae turpis quis dui euismod aliquam vitae in felis. Mauris ac elit tortor. Quisque ornare, est sed rutrum blandit, eros est aliquet urna, et viverra lectus ante et odio. In consectetur dignissim arcu id sollicitudin. Aenean metus elit, dictum dignissim ullamcorper in, hendrerit at arcu. Donec vel tellus sit amet tellus scelerisque tincidunt eget at elit. Nulla eu aliquam turpis. Morbi hendrerit sollicitudin nisi ut lobortis. Pellentesque orci tortor, faucibus fermentum urna sit amet, porttitor adipiscing nisl. Sed vitae felis id elit consequat tempor et et dui. Aenean quis augue eu diam viverra elementum. Nulla nec imperdiet nisi, vel aliquam sapien. Aenean ultricies aliquam felis ornare blandit. Quisque placerat consectetur enim ac adipiscing.\nSuspendisse potenti. Cras justo nisl, bibendum ac lobortis ut, vestibulum vitae ipsum. Fusce a fringilla ante. Nam dui tortor, dapibus ac neque eget, facilisis egestas magna. Nullam feugiat enim sed metus iaculis, porta porta sapien sollicitudin. Aliquam tincidunt porttitor risus eu viverra. Fusce sed massa mi. Pellentesque iaculis iaculis ipsum porttitor cursus. Suspendisse potenti.";
  var ipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut tempor neque. Vivamus venenatis, nisl sed cursus venenatis, velit enim feugiat est, sit amet lacinia lectus nulla at libero.";

  while (i--) {

    Post
    .create({
      content: lorem,
      pub_date: new Date()
    })
    .success(function(post) {
      console.log("Successfully created a post.");
      console.log("Now generating comments...");

      var j = 10;
      var comments = [];

      while (j--) {
        var comment = Comment.create({
          author: "Author Name",
          body: ipsum
        });
        comments.push(comment);
      }

      post.setComments(comments).success(function() {
        console.log("Comments are successfully generated!")
      });
    });

  }
}

exports.populatePostAndComment = populatePostAndComment;