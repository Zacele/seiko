var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */

var Product = new keystone.List('Product',  {
	map : {name: 'title'},
	autokey: {path: 'slug', from: 'title', unique: true}
});

var myStorage = new keystone.Storage({
  adapter: keystone.Storage.Adapters.FS,
  fs: {
    path: keystone.expandPath('./public/uploads'), // required; path where the files should be stored
    publicPath: '/public/uploads', // path where files will be served
  }
});

Product.add({
	title: { type: Types.Text, required: true, index: true },
	description : {type: Types.Html, wysiwyg: true, height:150},
	state: {
		type: Types.Select,
		options: 'published , draft', default: 'draft',
		index: true
	},
	price:{type: Number},
	image01: {type: Types.File, storage: myStorage},
	image02: {type: Types.File, storage: myStorage},
	image03: {type: Types.File, storage: myStorage},
	image04: {type: Types.File, storage: myStorage},
	image05: {type: Types.File, storage: myStorage},
});

// Provide access to Keystone

/**
 * Registration
 */

Product.defaultColumns = 'title, price, description';
Product.register();
