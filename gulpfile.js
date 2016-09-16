var elixir = require('laravel-elixir');

elixir(mix => {
	var paths = {
		js : {
			vendor : [
				'./node_modules/vue/dist/vue.min.js',
				'./node_modules/vue-router/dist/vue-router.min.js',
				'./node_modules/jquery/dist/jquery.min.js',
				'./node_modules/bootstrap/dist/js/bootstrap.min.js'
			],
			app : './src/js/**/*.js'
		},
		css : {
			vendor : [
				'./node_modules/bootstrap/dist/css/bootstrap.min.css'
			],
			app : './src/css/**/*.css'
		}
	};

	var results = {
		js : {
			vendor : './dist/js/vendor.min.js',
			appes6 : './dist/js/app.js',
			app : './dist/js/app.min.js',
			appnormal : './dist/js/appnormal.js'
		},
		css : {
			vendor : './dist/css/vendor.min.css',
			app : './dist/css/app.min.css',
		},
	}

	mix.webpack(paths.js.app, results.js.appes6);
	mix.scripts(results.js.appes6, results.js.app);

	mix.scripts(paths.js.vendor, results.js.vendor);

	mix.styles(paths.css.app, results.css.app);
	mix.styles(paths.css.vendor, results.css.vendor);
});