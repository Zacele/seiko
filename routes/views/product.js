var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	var productId = req.params.id;

	console.log('req.params', productId);


  view.render('product');
};
