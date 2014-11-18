var phoneGap = {
    /*
        phoneGaplication Constructor
    */
    initialize: function() {
        this.bindEvents();
    },
    /* 
        Bind Event Listeners
        Bind any events that are required on startup. Common events are:
        'load', 'deviceready', 'offline', and 'online'.
    */
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    /*
        deviceready Event Handler
    
        The scope of 'this' is the event. In order to call the 'receivedEvent'
        function, we must explicitly call 'phoneGap.receivedEvent(...);'
    */
    onDeviceReady: function() {
        phoneGap.receivedEvent('deviceready');
    },
    /*
        Update DOM on a Received Event
    */
    receivedEvent: function(id) {
        var parentElement = document.getElementById("notification");
            parentElement.innerHTML = "Received Event: " + id;

        console.log('Received Event: ' + id);
    }
};

phoneGap.initialize();;/*
    Namespace for the application
*/
var beehome = beehome || {};
    beehome.router = beehome.router || {};
    beehome.models = beehome.models || {};
    beehome.collections = beehome.collections || {};
    beehome.views = beehome.views || {};

(function(){

    beehome.app = {
        /*
            Initialize function of the beehome application
            Start the router and backbone history
        */
        initialize: function() {

            this.router = new beehome.router();
            Backbone.history.start();
        }
    };

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