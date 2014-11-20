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
			'main': 'showMain',
			'confirm': 'showConfirm',
			'onboarding': 'showOnboarding',
			'app': 'showAppMain'
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
			Show confirm function creates confirm view
		*/
		showConfirm: function () {
			var view = new beehome.views.confirm();
			this.showView(view);
		},
		/*
			Show confirm function creates confirm view
		*/
		showOnboarding: function () {
			var view = new beehome.views.onboarding();
			this.showView(view);
		},
		/*
			Show app main function creates confirm view
		*/
		showAppMain: function () {
			var view = new beehome.views.app.main();
			this.showView(view);
		},
		/*
			Show view shows the new view
			@params: view object
		*/
		showView: function(view) {

			console.log(view);

			if(this.currentView) {
				this.currentView.dispose();
			};

			this.currentView = view;

			console.log(this.currentView.$el);

			$("#main").html(this.currentView.render().$el);

			if(this.currentView.afterRender){
				this.currentView.afterRender();
			};
		}

	});

})();