(function(){

	beehome.router = Backbone.Router.extend({
		/*
			Currentview variable holds the current view of the application
		*/
		currentView: false,
		/*
			NextView variable holds the next view to display in the application
		*/
		nextView: false,
		/*
			Routes of the application
			First value is the #
			Second value is the function
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

			if(!this.currentView) {
				this.currentView = view;
				
				// Render
				$("#main").html(this.currentView.render().$el);

				// Animation in
				if(this.currentView.startAnimation) {

					this.currentView.on("startAnimationComplete", function() {
						console.log("Router: startAnimationComplete");
						this.currentView.off("startAnimationComplete");
					}.bind(this));

					this.currentView.startAnimation();
				}else {
					$(this.currentView.$el).css({ opacity: 0});
					$(this.currentView.$el).animate({ opacity: 1}, 300);
				}

				// After render
				if(this.currentView.afterRender){
					this.currentView.afterRender();
				};		
			}else {
				this.nextView = view;

				// Animation out
				$(this.currentView.$el).css({ opacity: 1 });
				$(this.currentView.$el).animate({
					opacity: 0
				}, 400, function() {

					// Render
					$("#main").html(this.nextView.render().$el);

					// Animation in
					$(this.nextView.$el).css({opacity: 0});
					$(this.nextView.$el).animate({opacity: 1}, 300);

					// After render
					if(this.nextView.afterRender){
						this.nextView.afterRender();
					};

					// Dispose
					if(this.currentView) {
						this.currentView.dispose();
					};

					this.currentView = view;
				}.bind(this));
			}
		}

	});

})();