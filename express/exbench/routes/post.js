var Post = require('../models/models').Post;

exports.getJSON = function(req, res) {
	postLimit = req.query.limit || 1000;

	Post.find().sort('-pub_date').limit(postLimit)
	.exec(function(err, posts) {

		var postsJSON = posts.map(function(post) {
			return {
				content: post.content,
				pub_date: post.pub_date.toString(),
				comments: post.comments.map(function(comment) {
					return {
						author: comment.author,
						body: comment.body
					}
				})
			};
		});

		// Send the data
		res.json(postsJSON);

	});
};