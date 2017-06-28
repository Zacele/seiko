var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	var productId = req.params.id;

	view.on('init', function(next){
		var query = keystone.list('Product').model.findOne({
			_id: productId
		});

		query.exec(function(err,response){
			locals.data = response;
			console.log('data: ', response);
			next();
		});

	})
  view.render('product');
};
