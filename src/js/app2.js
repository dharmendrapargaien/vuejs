//(function(window, Vue, appVariable, VueRouter){
	var App = Vue.extend({
		data:{
			message: "Dharmendra",
			textMessage: "",
			points: 100,
			first: "Dharmendra",
			last: "Pargaien",
			fullName: "Dharmendra Pargaien",
			plans:[
				{name: 'Enterprise', price: 100},
				{name: 'Pro', price: 50},
				{name: 'Personal', price: 10},
				{name: 'Free', price: 0}
			],
			active: {}
		},

		methods: {
			testSubmit (e){
				console.log(e);
			}
		},
		computed: {

			skill () {

				if (this.points <= 100) 
					return 'Beginner';	
				return "Advance";
			}
		},
		watch: {
			first (first) {
				this.fullName = first + ' ' + this.last; 
			},

			last (last) {
				this.fullName = this.first + ' ' + last; 
			}
		},
		components:{

		}
	});

	console.log(App);

	var Home = Vue.extend({
		data : {
			home : 'In Home'
		},
		template : '<p>HOMEING{{home}}</p>'
	});

	var Router = new VueRouter();
	
	Router.map({
		'/home' : {
			component : Home
		}
	});

	Router.start(App, '#app');
// })(window, Vue, appVariable, VueRouter)