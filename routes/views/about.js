var keystone = require('keystone');
var Enquiry = keystone.list('Enquiry').model;
exports = module.exports =function(req,res){

  var view= new keystone.View(req,res)
  var locals = res.locals;

    view.on('init', function(next){
      var query = keystone.lo
    });
}
