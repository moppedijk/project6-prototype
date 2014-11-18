/*
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

})();;beehome.views.main = Backbone.View.extend({
    className: "main",
    /** events **/
    events: {
    },
    /**
     * Binds the navigation events
     */
    initialize: function (){

    },
    /**
     * Renders the main view of the app
     */
    render: function ()
    {
        var templateSource = $('#template-main').html();
        var template = Handlebars.compile(templateSource);
        var data = {};

        this.$el.html(template(data));

        return this;
    },
    afterRender:function(){
        console.log("afterRender");
    },
    // Removing
    dispose:function(){
        // Regular disposing
        this.undelegateEvents();
        this.$el.removeData().unbind(); 
        this.remove();  
        this.unbind();
        Backbone.View.prototype.remove.call(this);
    }
});;(function(){

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