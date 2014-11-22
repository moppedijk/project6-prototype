/*
    Namespace for the application
*/
var beehome = beehome || {};
    beehome.router = beehome.router || {};
    beehome.models = beehome.models || {};
    beehome.collections = beehome.collections || {};
    beehome.views = beehome.views || {};
    beehome.views.app = beehome.views.app || {};

(function(){

    beehome.app = {
        /*
            Initialize function of the beehome application
            Start the router and backbone history
        */
        initialize: function() {

            var width = $( window ).width();
            var height = $( window ).height();

            $("#notification2").append("<p>Width: " + width + " - height: " + height + " </p>");

            this.router = new beehome.router();
            Backbone.history.start(); 
        }
    };

})();;(function(){

    beehome.views.app.main = Backbone.View.extend({
        /*
            ClassName of the view, creates html element wrapped around the template
        */
        className: "app-main",
        /* 
            Events of the view
        */
        events: {
        },
        /*
            Initialize function of the view, get's called when views contructor is called
         */
        initialize: function (){
            console.log("views app main");
        },
        /*
            Renders the main view of the app
         */
        render: function ()
        {
            console.log("render views app main");
            var templateSource = $('#template-app-main').html();
            var template = Handlebars.compile(templateSource);
            var data = {};

            this.$el.html(template(data));

            return this;
        },
        /*
            After render function get's called after view is rendered
        */
        afterRender:function(){

            $("#app-main-flower").animate({
                top: 0
            }, 1000);

        },
        /*
            Dispose function kills and deletes events and binded data
        */
        dispose:function(){
            // Regular disposing
            this.undelegateEvents();
            this.$el.removeData().unbind(); 
            this.remove();  
            this.unbind();
            Backbone.View.prototype.remove.call(this);
        }
    });

})();;(function(){

    beehome.views.confirm = Backbone.View.extend({
        /*
            ClassName of the view, creates html element wrapped around the template
        */
        className: "confirm",
        /* 
            Events of the view
        */
        events: {
            'click #beginscherm': 'onBeginschermClickHandler'
        },
        /*
            Initialize function of the view, get's called when views contructor is called
         */
        initialize: function () {

        },
        /*
            Renders the main view of the app
         */
        render: function () {
            var templateSource = $('#template-confirm').html();
            var template = Handlebars.compile(templateSource);
            var data = {};

            this.$el.html(template(data));

            return this;
        },
        /*
            After render function get's called after view is rendered
        */
        afterRender: function () {
        },
        /*
            Click handler for the #beginscherm element
        */
        onBeginschermClickHandler: function() {
            beehome.app.router.navigate("onboarding", {
                trigger: true
            })
        },
        /*
            Dispose function kills and deletes events and binded data
        */
        dispose: function () {
            // Regular disposing
            this.undelegateEvents();
            this.$el.removeData().unbind(); 
            this.remove();  
            this.unbind();
            Backbone.View.prototype.remove.call(this);
        }
    });
})();;(function(){

    beehome.views.main = Backbone.View.extend({
        /*
            ClassName of the view, creates html element wrapped around the template
        */
        className: "main",
        /* 
            Events of the view
        */
        events: {
        },
        /*
            Initialize function of the view, get's called when views contructor is called
         */
        initialize: function (){

        },
        /*
            Renders the main view of the app
         */
        render: function ()
        {
            var templateSource = $('#template-main').html();
            var template = Handlebars.compile(templateSource);
            var data = {};

            this.$el.html(template(data));

            return this;
        },
        /*
            After render function get's called after view is rendered
        */
        afterRender:function(){

            window.setTimeout(function(){
                beehome.app.router.navigate("confirm", {
                    trigger: true
                });
            }, 2000);
        },
        /*
            Dispose function kills and deletes events and binded data
        */
        dispose:function(){
            // Regular disposing
            this.undelegateEvents();
            this.$el.removeData().unbind(); 
            this.remove();  
            this.unbind();
            Backbone.View.prototype.remove.call(this);
        }
    });
})();;(function(){

    beehome.views.onboarding = Backbone.View.extend({
        /*
            ClassName of the view, creates html element wrapped around the template
        */
        className: "onboarding",
        /* 
            Events of the view
        */
        events: {
        },
        /*
            Initialize function of the view, get's called when views contructor is called
         */
        initialize: function (){

        },
        /*
            Renders the main view of the app
         */
        render: function ()
        {
            var templateSource = $('#template-onboarding').html();
            var template = Handlebars.compile(templateSource);
            var data = {};

            this.$el.html(template(data));

            return this;
        },
        /*
            After render function get's called after view is rendered
        */
        afterRender:function(){
            $('.onboarding__content').jcarousel({
                // Configuration goes here
            });

                /*
             Prev control initialization
             */
            $('.onboarding__control-prev')
                .on('jcarouselcontrol:active', function() {
                    $(this).removeClass('inactive');
                })
                .on('jcarouselcontrol:inactive', function() {
                    $(this).addClass('inactive');
                })
                .jcarouselControl({
                    // Options go here
                    target: '-=1'
                });

            /*
             Next control initialization
             */
            $('.onboarding__control-next')
                .on('jcarouselcontrol:active', function() {
                    $(this).removeClass('inactive');
                })
                .on('jcarouselcontrol:inactive', function() {
                    $(this).addClass('inactive');
                })
                .jcarouselControl({
                    // Options go here
                    target: '+=1'
                });

            /*
             Pagination initialization
             */
            $('.onboarding__pagination')
                .on('jcarouselpagination:active', 'a', function() {
                    $(this).addClass('active');
                })
                .on('jcarouselpagination:inactive', 'a', function() {
                    $(this).removeClass('active');
                })
                .jcarouselPagination({
                    item: function(page) {
                        return '<a class="hexagon"></a>';
                    }
                });
        },
        /*
            Dispose function kills and deletes events and binded data
        */
        dispose:function(){
            // Regular disposing
            this.undelegateEvents();
            this.$el.removeData().unbind(); 
            this.remove();  
            this.unbind();
            Backbone.View.prototype.remove.call(this);
        }
    });
})();;(function(){

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

			var _self = this;

			if(!this.currentView) {
				this.currentView = view;
				
				$("#main").html(this.currentView.render().$el);
				$(this.currentView.$el).css({ opacity: 0});
				$(this.currentView.$el).animate({ opacity: 1}, 400);
				if(this.currentView.afterRender){
					this.currentView.afterRender();
				};			
			}else {
				this.nextView = view;

				$(this.currentView.$el).css({ opacity: 1 });
				$(this.currentView.$el).animate({ opacity: 0 });
				$(this.currentView.$el).animate({
					opacity: 0
				}, 400, function() {
					$("#main").html(_self.nextView.render().$el);
					$(_self.nextView.$el).css({opacity: 0});
					$(_self.nextView.$el).animate({opacity: 1});
					if(_self.nextView.afterRender){
						_self.nextView.afterRender();
					};

					if(_self.currentView) {
						_self.currentView.dispose();
					};

					_self.currentView = view;
				});
			}
		}

	});

})();;var phoneGap = {
    /*
        phoneGaplication Constructor
    */
    initialize: function() {
        this.bindEvents();
        // this.startApp();
    },
    /* 
        Bind Event Listeners
        Bind any events that are required on startup. Common events are:
        'load', 'deviceready', 'offline', and 'online'.
    */
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('offlineready', this.onOfflineReady, false);
        document.addEventListener('onlineready', this.onOnlineReady, false);
    },
    /*
        deviceready Event Handler
    
        The scope of 'this' is the event. In order to call the 'receivedEvent'
        function, we must explicitly call 'phoneGap.receivedEvent(...);'
    */
    onDeviceReady: function() {
        phoneGap.receivedEvent('deviceready');
    },
    onOfflineReady: function() {
        phoneGap.receivedEvent('offlineready');
    },
    onOnlineReady: function() {
        phoneGap.receivedEvent('onlineready');
    },
    /*
        Update DOM on a Received Event
    */
    receivedEvent: function(id) {
        var parentElement = document.getElementById("notification");
            parentElement.innerHTML = "Received Event: " + id;
    }
};

phoneGap.initialize();