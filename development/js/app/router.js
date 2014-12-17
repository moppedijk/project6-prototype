( function ( ) {

	beehome.router = Backbone.Router.extend ( {
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
			'onboarding': 'showOnboarding',
			'onboarding/:page': 'showOnboarding',
			'app': 'showApp',
			'app/:page': 'showApp',
			'app/:page/:action': 'showAppEdit'
		},
		/*
			Initialize function is called when contructor object get's called
		*/
		initialize: function ( ) {
			beehome.app.user = new beehome.models.user();
		},
		/*
			Show main function creates the main view
		*/
		showMain: function ( ) {
			var view = new beehome.views.main();
			this.showView(view);
			// this.showApp("dashboard");
		},
		/*
			Show confirm function creates confirm view
		*/
		showOnboarding: function ( page ) {

			if(!page) {
				var view = new beehome.views.onboarding.main();
				this.showView(view);
			} else {
				switch(page) {
					case "home":
						var view = new beehome.views.onboarding.home();
						this.showView(view);
					break;
					case "room":
						var view = new beehome.views.onboarding.room();
						this.showView(view);
					break;
					case "sensor":
						var view = new beehome.views.onboarding.sensor();
						this.showView(view);
					break;
					case "sensor2":
						var view = new beehome.views.onboarding.sensor2();
						this.showView(view);
					break;
					case "end":
						var view = new beehome.views.onboarding.end();
						this.showView(view);
					break;
				}
			}
		},
		/*
			Show app main function creates confirm view
		*/
		showApp: function ( page ) {
			console.log("showApp");

			if(!page) {
				var view = new beehome.views.app.main();
				this.showView(view);
			} else {
				switch(page) {
					case "dashboard":
						var view = new beehome.views.app.dashboard();
						this.showView(view);
					break;
					case "home":
						var view = new beehome.views.app.home();
						this.showView(view);
					break;
					case "room":
						var view = new beehome.views.app.room();
						this.showView(view);
					break;
					case "sensor":
						var view = new beehome.views.app.sensor();
						this.showView(view);
					break;
					case "options":
						var view = new beehome.views.app.option();
						this.showView(view);
					break;
				}
			}
		},
		showAppEdit: function ( page, action ) {
			console.log("showAppEdit");

			if( page && action ) {
				switch(page + "/" + action) {
					case "room/edit":
						var view = new beehome.views.app.roomEdit();
						this.showView(view);
					break;
				}
			}else {
				var view = new beehome.views.app.main();
				this.showView(view);
			}
		},
		/*
			Show view shows the new view
			@params: view object
		*/
		showView: function( view ) {

			// If their is no view
			if(!this.currentView) {
				this.currentView = view;
				
				// Render
				$("#main").html(this.currentView.render().$el);

				// After render
				if(this.currentView.afterRender){
					this.currentView.afterRender();
				};

				// Animation in
				if(this.currentView.startAnimation) {

					this.currentView.on("startAnimationComplete", function() {
						console.log("Router: startAnimationComplete");
						this.currentView.off("startAnimationComplete");
					}.bind(this));

					this.currentView.startAnimation();
				}else {
					alert("NO currentView in animation");
				}

			}else {
				this.nextView = view;

				this.currentView.on("endAnimationComplete", function() {
					console.log("Router: endAnimationComplete");

					 // Render
					$("#main").html(this.nextView.render().$el);

					// After render
					if(this.nextView.afterRender) {
						this.nextView.afterRender();
					};

					this.nextView.on("startAnimationComplete", function() {
						console.log("Router: startAnimationComplete");

						// Dispose
						if(this.currentView) {
							this.currentView.dispose();
						};

						this.currentView = view;
						this.currentView.off("startAnimationComplete");
					}.bind(this));

					// Start animation
					this.nextView.startAnimation();

				}.bind(this));

				if(this.currentView.endAnimation) {
					this.currentView.endAnimation();
				}else {
					alert("NO currentView end animation");
				}
			}
		}
	});

})();