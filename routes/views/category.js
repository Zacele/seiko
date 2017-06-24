var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

		view.on('init', function(next){
			var q = keystone.list('Product').model.find();
			q.exec(function(err,res){
				locals.data = res;
				console.log('data',res);
				next();
			});
		});

  view.render('category');
};
