(function(){

	beehome.router = Backbone.Router.extend({
		/*
			Currentview variable holds the current view of the application
		*/
		currentView: false,
		/*
			Routes of the application
			First value is the #
			Sectond value is the function
		*/
		routes: {
			'': 'showMain',
			'main': 'showMain'
		},
		/*
			Initialize function is called when contructor object get's called
		*/
		initialize: function() {
		},
		/*
			Show main function creates the main view
		*/
		showMain: function() {
			var view = new beehome.views.main();
			this.showView(view);
		},
		/*
			Show view shows the new view
			@params: view object
		*/
		showView: function(view) {

			this.currentView = view;

			$("#main").html(this.currentView.render().$el);

			this.currentView.afterRender();
		}

	});

})();