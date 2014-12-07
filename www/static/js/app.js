/*
    Namespace for the application
*/
var beehome = beehome || {};
    beehome.router = beehome.router || {};
    beehome.models = beehome.models || {};
    beehome.collections = beehome.collections || {};
    beehome.views = beehome.views || {};
    beehome.views.app = beehome.views.app || {};
    beehome.views.onboarding = beehome.views.onboarding || {};

(function(){

    beehome.app = {
        /*
            Initialize function of the beehome application
            Start the router and backbone history
        */
        initialize: function (){
            
            this.router = new beehome.router();
            Backbone.history.start(); 
        }
    };

})();;(function(){
	
	beehome.models.user = Backbone.Model.extend({
		initialize: function () {
			console.log("User model");
		},
		reset: function () {
			console.log("User model reset");
		}

	});

})();;(function(){

    beehome.views.app.dashboard = Backbone.View.extend({
        /*
            ClassName of the view, creates html element wrapped around the template
        */
        className: "app",
        /*
            Subview id inside the main template
        */
        subView: "#app-subview",
        /* 
            Events of the view
        */
        events: {
            "click #btn-close-app-overlay": "onCloseOverlayClick"
        },
        /*
            Initialize function of the view, get's called when views contructor is called
         */
        initialize: function (){

        },
        /*
            Renders the home view of the app
         */
        render: function ()
        {
            var templateSource = $("#template-app").html();
            var template = Handlebars.compile(templateSource);
            var data = {};

            this.$el.html(template(data));

            return this;
        },
        /*
            After render function get's called after view is rendered
        */
        afterRender:function()
        {
            console.log("After render");

            var templateSource = $("#template-app-dashboard").html();
            var template = Handlebars.compile(templateSource);
            var data = {};
            var subView = template(data);

            $(this.subView).html(subView);

            setTimeout(this.initCarousel, 500);
        },
        initCarousel: function () {
            $('.app__carousel').jcarousel({
                animation: {
                    duration: 200
                }
            });

            $('.app__carousel-nav')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination({
                'item': function(page, carouselItems) {
                    return '<a href="javascript:void(0);"><i class="icon icon--hexagon"></i></a>';
                }
            });
        },
        onCloseOverlayClick: function() {
            $("#app-overlay").css({
                opacity: 1
            });
            TweenLite.to("#app-overlay", 0.5, { opacity: 0, onComplete: function() {
                $("#app-overlay").hide();
            } });
        },
        /*
            Start animation
        */
        startAnimation: function() {
            console.log("app: startAnimation");

            $(this.$el).css({opacity: 0});
            $(this.$el).animate({opacity: 1}, 300, function(){
                this.trigger("startAnimationComplete");
            }.bind(this));
        },
        /*
            End animation
        */
        endAnimation: function() {
            console.log("app: endAnimation");

            $(this.$el).css({opacity: 1});
            $(this.$el).animate({opacity: 0}, 300, function(){
                this.trigger("endAnimationComplete");
            }.bind(this));
        },
        /*
            Dispose function kills and deletes events and binded data
        */
        dispose:function() {
            // Regular disposing
            this.undelegateEvents();
            this.$el.removeData().unbind(); 
            this.remove();  
            this.unbind();
            Backbone.View.prototype.remove.call(this);
        }
    });
})();;(function(){

    beehome.views.app.home = Backbone.View.extend({
        /*
            ClassName of the view, creates html element wrapped around the template
        */
        className: "app",
        /*
            Subview id inside the main template
        */
        subView: "#app-subview",
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
            Renders the home view of the app
         */
        render: function ()
        {
            var templateSource = $("#template-app").html();
            var template = Handlebars.compile(templateSource);
            var data = {};

            this.$el.html(template(data));

            return this;
        },
        /*
            After render function get's called after view is rendered
        */
        afterRender:function()
        {
            console.log("After render");

            var templateSource = $("#template-app-home").html();
            var template = Handlebars.compile(templateSource);
            var data = {};
            var subView = template(data);

            $(this.subView).html(subView);
        },
        /*
            Start animation
        */
        startAnimation: function() {
            console.log("app: startAnimation");

            $(this.$el).css({opacity: 0});
            $(this.$el).animate({opacity: 1}, 300, function(){
                this.trigger("startAnimationComplete");
            }.bind(this));
        },
        /*
            End animation
        */
        endAnimation: function() {
            console.log("app: endAnimation");

            $(this.$el).css({opacity: 1});
            $(this.$el).animate({opacity: 0}, 300, function(){
                this.trigger("endAnimationComplete");
            }.bind(this));
        },
        /*
            Dispose function kills and deletes events and binded data
        */
        dispose:function() {
            // Regular disposing
            this.undelegateEvents();
            this.$el.removeData().unbind(); 
            this.remove();  
            this.unbind();
            Backbone.View.prototype.remove.call(this);
        }
    });
})();;(function(){

    beehome.views.app.main = Backbone.View.extend({
        /*
            ClassName of the view, creates html element wrapped around the template
        */
        className: "app",
        /*

        */
        subView: "#app-subview",
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
            var templateSource = $('#template-app').html();
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
            Start animation
        */
        startAnimation: function() {
            console.log("app main: startAnimation");

            $(this.$el).css({opacity: 0});
            $(this.$el).animate({opacity: 1}, 300, function(){
                this.trigger("startAnimationComplete");
            }.bind(this));
        },
        /*
            End animation
        */
        endAnimation: function() {
            console.log("app main: endAnimation");

            $(this.$el).css({opacity: 1});
            $(this.$el).animate({opacity: 0}, 300, function(){
                this.trigger("endAnimationComplete");
            }.bind(this));
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

    beehome.views.app.option = Backbone.View.extend({
        /*
            ClassName of the view, creates html element wrapped around the template
        */
        className: "app",
        /*
            Subview id inside the main template
        */
        subView: "#app-subview",
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
            Renders the home view of the app
         */
        render: function ()
        {
            var templateSource = $("#template-app").html();
            var template = Handlebars.compile(templateSource);
            var data = {};

            this.$el.html(template(data));

            return this;
        },
        /*
            After render function get's called after view is rendered
        */
        afterRender:function()
        {
            console.log("After render");

            var templateSource = $("#template-app-option").html();
            var template = Handlebars.compile(templateSource);
            var data = {};
            var subView = template(data);

            $(this.subView).html(subView);
        },
        /*
            Start animation
        */
        startAnimation: function() {
            console.log("app: startAnimation");

            $(this.$el).css({opacity: 0});
            $(this.$el).animate({opacity: 1}, 300, function(){
                this.trigger("startAnimationComplete");
            }.bind(this));
        },
        /*
            End animation
        */
        endAnimation: function() {
            console.log("app: endAnimation");

            $(this.$el).css({opacity: 1});
            $(this.$el).animate({opacity: 0}, 300, function(){
                this.trigger("endAnimationComplete");
            }.bind(this));
        },
        /*
            Dispose function kills and deletes events and binded data
        */
        dispose:function() {
            // Regular disposing
            this.undelegateEvents();
            this.$el.removeData().unbind(); 
            this.remove();  
            this.unbind();
            Backbone.View.prototype.remove.call(this);
        }
    });
})();;(function(){

    beehome.views.app.room = Backbone.View.extend({
        /*
            ClassName of the view, creates html element wrapped around the template
        */
        className: "app",
        /*
            Subview id inside the main template
        */
        subView: "#app-subview",
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
            Renders the room view of the app
         */
        render: function ()
        {
            var templateSource = $("#template-app").html();
            var template = Handlebars.compile(templateSource);
            var data = {};

            this.$el.html(template(data));

            return this;
        },
        /*
            After render function get's called after view is rendered
        */
        afterRender:function()
        {
            console.log("After render");

            var templateSource = $("#template-app-room").html();
            var template = Handlebars.compile(templateSource);
            var data = {};
            var subView = template(data);

            $(this.subView).html(subView);
        },
        /*
            Start animation
        */
        startAnimation: function() {
            console.log("app: startAnimation");

            $(this.$el).css({opacity: 0});
            $(this.$el).animate({opacity: 1}, 300, function(){
                this.trigger("startAnimationComplete");
            }.bind(this));
        },
        /*
            End animation
        */
        endAnimation: function() {
            console.log("app: endAnimation");

            $(this.$el).css({opacity: 1});
            $(this.$el).animate({opacity: 0}, 300, function(){
                this.trigger("endAnimationComplete");
            }.bind(this));
        },
        /*
            Dispose function kills and deletes events and binded data
        */
        dispose:function() {
            // Regular disposing
            this.undelegateEvents();
            this.$el.removeData().unbind(); 
            this.remove();  
            this.unbind();
            Backbone.View.prototype.remove.call(this);
        }
    });
})();;(function(){

    beehome.views.app.sensor = Backbone.View.extend({
        /*
            ClassName of the view, creates html element wrapped around the template
        */
        className: "app",
        /*
            Subview id inside the main template
        */
        subView: "#app-subview",
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
            Renders the room view of the app
         */
        render: function ()
        {
            var templateSource = $("#template-app").html();
            var template = Handlebars.compile(templateSource);
            var data = {};

            this.$el.html(template(data));

            return this;
        },
        /*
            After render function get's called after view is rendered
        */
        afterRender:function()
        {
            console.log("After render");

            var templateSource = $("#template-app-sensor").html();
            var template = Handlebars.compile(templateSource);
            var data = {};
            var subView = template(data);

            $(this.subView).html(subView);
        },
        /*
            Start animation
        */
        startAnimation: function() {
            console.log("app: startAnimation");

            $(this.$el).css({opacity: 0});
            $(this.$el).animate({opacity: 1}, 300, function(){
                this.trigger("startAnimationComplete");
            }.bind(this));
        },
        /*
            End animation
        */
        endAnimation: function() {
            console.log("app: endAnimation");

            $(this.$el).css({opacity: 1});
            $(this.$el).animate({opacity: 0}, 300, function(){
                this.trigger("endAnimationComplete");
            }.bind(this));
        },
        /*
            Dispose function kills and deletes events and binded data
        */
        dispose:function() {
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
        initialize: function() {
        },
        /*
            Renders the main view of the app
         */
        render: function() {
            var templateSource = $('#template-main').html();
            var template = Handlebars.compile(templateSource);
            var data = {};

            this.$el.html(template(data));

            return this;
        },
        /*
            After render function get's called after view is rendered
        */
        afterRender:function() {

        },
        /*
            Dispose function kills and deletes events and binded data
        */
        dispose:function() {
            console.log("Dipsose");

            // Regular disposing
            this.undelegateEvents();
            this.$el.removeData().unbind(); 
            this.remove();  
            this.unbind();
            Backbone.View.prototype.remove.call(this);
        },
        /*
            Start animation 
        */
        startAnimation:function() {
            console.log("Main: startAnimation");

            $("#main-logo").css({
                marginTop: "-100px"
            });

            $("#main-loader").css({
                opacity: 0
            });
            $("#main-tagline1").css({
                opacity: 0
            });
            $("#main-tagline2").css({
                opacity: 0
            });
            $("#main-found").css({
                opacity: 0
            });

            // Animation in
            TweenLite.to("#main-logo", 0.5, { marginTop: 100, ease:Elastic.easeIn });
            TweenLite.to("#main-loader", 0.5, { opacity:1, delay:1 } );
            TweenLite.to("#main-tagline1", 0.5, { opacity:1, delay:1.5 } );
            TweenLite.to("#main-found", 0.5, { opacity:1, delay:2 } );

            //Animation out
            TweenLite.to("#main-tagline1", 0.3, { opacity:0, delay:9, onComplete: function ( ) {
                $("#main-tagline1").hide();
            } } );
            TweenLite.to("#main-loader", 0.3, { opacity:0, delay:9.3, onComplete: function ( ) {
                $("#main-loader").hide();
            } } );
            TweenLite.to("#main-logo", 0.3, { marginTop: 40, delay:10 } );

            TweenLite.to("#main-tagline2", 1, { opacity:1, delay: 10.3, onComplete: this.animationComplete });
        },
        animationComplete: function ( ) {
            beehome.app.router.navigate("onboarding/home", {
                trigger: true
            })
        },
        /*
            End animation
        */
        endAnimation: function() {
            console.log("Main: endAnimation");

            TweenLite.to("#main-tagline2", 0.5, { opacity:0 });
            TweenLite.to("#main-found", 0.5, { opacity:0 } );
            TweenLite.to("#main-logo", 0.5, {opacity: 0, delay: 1, onComplete: function () {
                this.trigger("endAnimationComplete");
            }.bind(this) } );
        }
    });
})();;(function(){

    beehome.views.onboarding.end = Backbone.View.extend({
        /*
            ClassName of the view, creates html element wrapped around the template
        */
        className: "onboarding",
        /*
            Subview
        */
        subView: "#onboarding-subview",
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
            Renders the home view of the app
         */
        render: function ()
        {
            var templateSource = $("#template-onboarding").html();
            var template = Handlebars.compile(templateSource);
            var data = {};

            this.$el.html(template(data));

            return this;
        },
        /*
            After render function get's called after view is rendered
        */
        afterRender:function()
        {
            var templateSource = $("#template-onboarding-end").html();
            var template = Handlebars.compile(templateSource);
            var data = {};
            var subView = template(data);

            $(this.subView).html(subView);
        },
        /*
            Start animation
        */
        startAnimation: function() {
            console.log("onboarding: startAnimation");

            $(this.$el).css({opacity: 0});
            $(this.$el).animate({opacity: 1}, 300, function(){
                this.trigger("startAnimationComplete");
            }.bind(this));
        },
        /*
            End animation
        */
        endAnimation: function() {
            console.log("onboarding: endAnimation");

            $(this.$el).css({opacity: 1});
            $(this.$el).animate({opacity: 0}, 300, function(){
                this.trigger("endAnimationComplete");
            }.bind(this));
        },
        /*
            Dispose function kills and deletes events and binded data
        */
        dispose:function() {
            // Regular disposing
            this.undelegateEvents();
            this.$el.removeData().unbind(); 
            this.remove();  
            this.unbind();
            Backbone.View.prototype.remove.call(this);
        }
    });
})();;(function(){

    beehome.views.onboarding.home = Backbone.View.extend({
        /*
            ClassName of the view, creates html element wrapped around the template
        */
        className: "onboarding",
        /*
            Subview id inside the main template
        */
        subView: "#onboarding-subview",
        /* 
            Events of the view
        */
        events: {
            "keypress #onboarding-input-home": "onInputKeyPress"
        },
        /*
            Initialize function of the view, get's called when views contructor is called
         */
        initialize: function (){
        },
        /*
            Renders the home view of the app
         */
        render: function()
        {
            var templateSource = $("#template-onboarding").html();
            var template = Handlebars.compile(templateSource);
            var data = {};

            this.$el.html(template(data));

            return this;
        },
        /*
            After render function get's called after view is rendered
        */
        afterRender: function()
        {
            console.log("After render");

            var templateSource = $("#template-onboarding-home").html();
            var template = Handlebars.compile(templateSource);
            var data = {};
            var subView = template(data);

            $(this.subView).html(subView);
            $("#onboarding-input-home").focus();
        },
        onInputKeyPress: function(e)
        {
            // On enter
            if(e.keyCode == 13) {

                // Save user data
                beehome.app.user.set({
                    home: e.currentTarget.value
                });

                // Navigate to next step
                beehome.app.router.navigate("onboarding/room", {
                    trigger: true
                });
            }
        },
        /*
            Start animation
        */
        startAnimation: function() {
            console.log("onboarding: startAnimation");

            $("#onboarding-nav").css({
                opacity: 0
            });
            $("#onboarding-home-title").css({
                opacity: 0
            });
            $("#onboarding-home-img").css({
                left: -300,
                opacity: 0
            });
            $("#onboarding-home-input").css({
                opacity: 0
            });

            // Animation in
            TweenLite.to("#onboarding-home-img", 0.5, { left: 0, opacity: 1, delay: 0 });
            TweenLite.to("#onboarding-nav", 0.4, { opacity: 1, delay: 0.5 });
            TweenLite.to("#onboarding-home-title", 0.4, { opacity: 1, delay: 0.9 });
            TweenLite.to("#onboarding-home-input", 0.4, { opacity: 1, delay: 1.3, onComplete: function() {
                this.trigger("startAnimationComplete");
            }.bind(this) });
        },
        /*
            End animation
        */
        endAnimation: function() {
            console.log("onboarding: endAnimation");

            $("#onboarding-home-bee").css({
                top: 400,
                left: 400,
                opacity: 1
            });

            TweenLite.to("#onboarding-home-title", 0.4, { opacity: 0 });
            TweenLite.to("#onboarding-home-input", 0.4, { opacity: 0, delay: 0.4 });
            TweenLite.to("#onboarding-home-bee", 1, { top: 198, left: 154, delay: 1});
            TweenLite.to("#onboarding-home-img", 0.5, { opacity: 0, delay: 2.5 });
            TweenLite.to("#onboarding-home-bee", 0.5, { opacity: 0, delay: 2.5, onComplete: function(){
                this.trigger("endAnimationComplete");
            }.bind(this) });
        },
        /*
            Dispose function kills and deletes events and binded data
        */
        dispose:function() {
            console.log("Dispose onboarding home");
            // Regular disposing
            this.undelegateEvents();
            this.$el.removeData().unbind(); 
            this.remove();  
            this.unbind();
            Backbone.View.prototype.remove.call(this);
        }
    });
})();;(function(){

    beehome.views.onboarding.main = Backbone.View.extend({
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
            var templateSource = $("#template-onboarding").html();
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
            Start animation
        */
        startAnimation: function() {
            console.log("onboarding: startAnimation");

            $(this.$el).css({opacity: 0});
            $(this.$el).animate({opacity: 1}, 300, function(){
                this.trigger("startAnimationComplete");
            }.bind(this));
        },
        /*
            End animation
        */
        endAnimation: function() {
            console.log("onboarding: endAnimation");

            $(this.$el).css({opacity: 1});
            $(this.$el).animate({opacity: 0}, 300, function(){
                this.trigger("endAnimationComplete");
            }.bind(this));
        },
        /*
            Dispose function kills and deletes events and binded data
        */
        dispose:function() {
            // Regular disposing
            this.undelegateEvents();
            this.$el.removeData().unbind(); 
            this.remove();  
            this.unbind();
            Backbone.View.prototype.remove.call(this);
        }
    });
})();;(function(){

    beehome.views.onboarding.room = Backbone.View.extend({
        /*
            ClassName of the view, creates html element wrapped around the template
        */
        className: "onboarding",
        /*
            Subview
        */
        subView: "#onboarding-subview",
        /* 
            Events of the view
        */
        events: {
            "keypress #onboarding-input-room": "onInputKeyPress"
        },
        /*
            Initialize function of the view, get's called when views contructor is called
         */
        initialize: function (){

        },
        /*
            Renders the home view of the app
         */
        render: function ()
        {
            var templateSource = $("#template-onboarding").html();
            var template = Handlebars.compile(templateSource);
            var data = {};

            this.$el.html(template(data));

            return this;
        },
        /*
            After render function get's called after view is rendered
        */
        afterRender:function()
        {
            var templateSource = $("#template-onboarding-room").html();
            var template = Handlebars.compile(templateSource);
            var data = {};
            var subView = template(data);

            // Add to stage
            $(this.subView).html(subView);

            // Focus input
            $("#onboarding-input-room").focus();
        },
        onInputKeyPress: function(e)
        {
            // On enter
            if(e.keyCode == 13) {

                // Save user data
                beehome.app.user.set({
                    room: e.currentTarget.value
                });

                // Navigate to next step
                beehome.app.router.navigate("onboarding/sensor", {
                    trigger: true
                });
            }
        },
        /*
            Start animation
        */
        startAnimation: function() {
            console.log("onboarding: startAnimation");

            $("#onboarding-room-title").css({
                opacity: 0
            });
            $("#onboarding-room-img").css({
                opacity: 0,
                left: -400
            })
            $("#onboarding-room-input").css({
                opacity: 0
            });

            TweenLite.to("#onboarding-room-img", 0.5, { left: 0, opacity: 1, delay: 0 });
            TweenLite.to("#onboarding-room-title", 0.4, { opacity: 1, delay: 0.9 });
            TweenLite.to("#onboarding-room-input", 0.4, { opacity: 1, delay: 1.3, onComplete: function() {
                this.trigger("startAnimationComplete");
            }.bind(this) });
        },
        /*
            End animation
        */
        endAnimation: function() {
            console.log("onboarding: endAnimation");

            // onboarding-room-animation

            $("#onboarding-room-bee").css({
                left: 400,
                top: 400,
                opacity: 1
            })

            TweenLite.to("#onboarding-room-title", 0.4, { opacity: 0 });
            TweenLite.to("#onboarding-room-input", 0.4, { opacity: 0, delay: 0.4 });
            TweenLite.to("#onboarding-room-img", 0.5, { opacity: 0, left: 400, delay: 1 });
            TweenLite.to("#onboarding-room-animation", 0.5, { opacity: 1, delay: 1.5 });
            TweenLite.to("#onboarding-room-bee", 0.5, { top: 180, left: 210, delay: 1.5 });

            TweenLite.to("#onboarding-room-animation", 0.5, { opacity: 0, delay: 5 });
            TweenLite.to("#onboarding-room-bee", 0.5, { opacity: 0, delay: 5, onComplete: function(){
                this.trigger("endAnimationComplete");
            }.bind(this) });
        },
        /*
            Dispose function kills and deletes events and binded data
        */
        dispose:function() {
            // Regular disposing
            this.undelegateEvents();
            this.$el.removeData().unbind(); 
            this.remove();  
            this.unbind();
            Backbone.View.prototype.remove.call(this);
        }
    });
})();;(function(){

    beehome.views.onboarding.sensor = Backbone.View.extend({
        /*
            ClassName of the view, creates html element wrapped around the template
        */
        className: "onboarding",
        /*
            Subview
        */
        subView: "#onboarding-subview",
        /*
            Sensor input value, default 35
        */
        sensorInputValue: 35,
        /* 
            Events of the view
        */
        events: {
            "click #btn-sensor-save": "onSensorSaveClick",
            "click #btn-sensor-next": "onSensorNextClick"
        },
        /*
            Initialize function of the view, get's called when views contructor is called
         */
        initialize: function (){

        },
        /*
            Renders the home view of the app
         */
        render: function ()
        {
            var templateSource = $("#template-onboarding").html();
            var template = Handlebars.compile(templateSource);
            var data = {};

            this.$el.html(template(data));

            return this;
        },
        /*
            After render function get's called after view is rendered
        */
        afterRender:function()
        {
            var templateSource = $("#template-onboarding-sensor").html();
            var template = Handlebars.compile(templateSource);
            var data = {};
            var subView = template(data);

            // Add to stage
            $(this.subView).html(subView);

            // Init carousel
            setTimeout(this.initCarousel, 500);
        },
        initCarousel: function ()
        {
            $('.onboarding__selection').jcarousel({
                animation: {
                    duration: 200
                }
            });
            $('.onboarding__selection').jcarousel('scroll', 6);

            $('.onboarding__selection').on('jcarousel:targetin', 'li', function() {
                $(this).addClass('active');
                beehome.views.onboarding.sensor.sensorInputValue = $(this).attr('data-rel');
            });

            $('.onboarding__selection').on('jcarousel:targetout', 'li', function() {
                $(this).removeClass('active');
            })

            $('.onboarding__selection-next').click(function() {
                $('.onboarding__selection').jcarousel('scroll', '-=1');
            });

            $('.onboarding__selection-prev').click(function() {
                $('.onboarding__selection').jcarousel('scroll', '+=1');
            });
        },
        onSensorSaveClick: function() {
            beehome.app.user.set({sensor: beehome.views.onboarding.sensor.sensorInputValue});
            beehome.app.router.navigate("onboarding/sensor2", {
                trigger: true
            });
            this.setWattValue();
        },
        onSensorNextClick: function() {
            beehome.app.user.set({sensor: false});
            beehome.app.router.navigate("onboarding/sensor2", {
                trigger: true
            });
            this.setWattValue();
        },
        setWattValue: function() {
            $("#onboarding-sensor-watt").html(beehome.app.user.get("sensor"));
        },
        /*
            Start animation
        */
        startAnimation: function() {
            console.log("Sensor: startAnimation");

            $("#onboarding-sensor-title").css({
                opacity: 0
            });
            $("#onboarding-sensor-carousel").css({
                opacity: 0
            });
            $("#onboarding-sensor-amount").css({
                opacity: 0
            });
            $("#onboarding-sensor-nav").css({
                opacity: 0
            });

            // Animation in
            TweenLite.to("#onboarding-sensor-title", 0.4, { opacity: 1 });
            TweenLite.to("#onboarding-sensor-carousel", 0.4, { opacity: 1, delay: 0.5 });
            TweenLite.to("#onboarding-sensor-amount", 0.4, { opacity: 1, delay: 0.9 });
            TweenLite.to("#onboarding-sensor-nav", 0.4, { opacity: 1, delay: 1.3, onComplete: function() {
                this.trigger("startAnimationComplete");
            }.bind(this) });
        },
        /*
            End animation
        */
        endAnimation: function() {
            console.log("Sensor: endAnimation");

            TweenLite.to("#onboarding-sensor-title", 0.4, { opacity: 0 });
            TweenLite.to("#onboarding-sensor-carousel", 0.4, { opacity: 0, delay: 0.5 });
            TweenLite.to("#onboarding-sensor-amount", 0.4, { opacity: 0, delay: 0.5 });
            TweenLite.to("#onboarding-sensor-nav", 0.4, { opacity: 0, delay: 0.5 });
            TweenLite.to("#onboarding-sensor-animation", 0.4, { opacity: 1, delay: 1 });
            TweenLite.to("#onboarding-sensor-animation", 0.4, { opacity: 0, delay: 4, onComplete: function() {
                this.trigger("endAnimationComplete");
            }.bind(this)  });
        },
        /*
            Dispose function kills and deletes events and binded data
        */
        dispose:function() {
            console.log("Sensor: dispose");

            // Regular disposing
            this.undelegateEvents();
            this.$el.removeData().unbind(); 
            this.remove();  
            this.unbind();
            Backbone.View.prototype.remove.call(this);
        }
    });
})();;(function(){

    beehome.views.onboarding.sensor2 = Backbone.View.extend({
        /*
            ClassName of the view, creates html element wrapped around the template
        */
        className: "onboarding",
        /*
            Subview
        */
        subView: "#onboarding-subview",
        /*
            Sensor 2 input value
        */
        sensor2InputValue: 07,
        /* 
            Events of the view
        */
        events: {
            "click #btn-sensor2-save": "onBtnSensor2Click"
        },
        /*
            Initialize function of the view, get's called when views contructor is called
         */
        initialize: function (){

        },
        /*
            Renders the home view of the app
         */
        render: function ()
        {
            var templateSource = $("#template-onboarding").html();
            var template = Handlebars.compile(templateSource);
            var data = {};

            this.$el.html(template(data));

            return this;
        },
        /*
            After render function get's called after view is rendered
        */
        afterRender:function()
        {
            var templateSource = $("#template-onboarding-sensor2").html();
            var template = Handlebars.compile(templateSource);
            var data = {};
            var subView = template(data);

            $(this.subView).html(subView);

            // Init carousel
            setTimeout(this.initCarousel, 500);
        },
        initCarousel: function ()
        {
            $('.onboarding__selection').jcarousel({
                animation: {
                    duration: 200
                }
            });
            $('.onboarding__selection').jcarousel('scroll', 6);

            $('.onboarding__selection').on('jcarousel:targetin', 'li', function() {
                $(this).addClass('active');
                beehome.views.onboarding.sensor2.sensor2InputValue = $(this).attr('data-rel');
            });

            $('.onboarding__selection').on('jcarousel:targetout', 'li', function() {
                $(this).removeClass('active');
            })

            $('.onboarding__selection-next').click(function() {
                $('.onboarding__selection').jcarousel('scroll', '-=1');
            });

            $('.onboarding__selection-prev').click(function() {
                $('.onboarding__selection').jcarousel('scroll', '+=1');
            });
        },
        onBtnSensor2Click: function() {
            beehome.app.user.set({sensor2: beehome.views.onboarding.sensor2.sensor2InputValue })
            beehome.app.router.navigate("onboarding/end", {
                trigger: true
            })
        },
        /*
            Start animation
        */
        startAnimation: function() {
            console.log("Sensor2: startAnimation");

            $("#onboarding-sensor2-title").css({
                opacity: 0
            });
            $("#onboarding-sensor2-carousel").css({
                opacity: 0
            });
            $("#onboarding-sensor2-amount").css({
                opacity: 0
            });
            $("#onboarding-sensor2-nav").css({
                opacity: 0
            });

            // Animation in
            TweenLite.to("#onboarding-sensor2-title", 0.4, { opacity: 1 });
            TweenLite.to("#onboarding-sensor2-carousel", 0.4, { opacity: 1, delay: 0.5 });
            TweenLite.to("#onboarding-sensor2-amount", 0.4, { opacity: 1, delay: 0.9 });
            TweenLite.to("#onboarding-sensor2-nav", 0.4, { opacity: 1, delay: 1.3, onComplete: function() {
                this.trigger("startAnimationComplete");
            }.bind(this) });
        },
        /*
            End animation
        */
        endAnimation: function() {
            console.log("Sensor2: endAnimation");

            TweenLite.to("#onboarding-sensor2-title", 0.4, { opacity: 0 });
            TweenLite.to("#onboarding-sensor2-carousel", 0.4, { opacity: 0, delay: 0.5 });
            TweenLite.to("#onboarding-sensor2-amount", 0.4, { opacity: 0, delay: 0.5 });
            TweenLite.to("#onboarding-sensor2-nav", 0.4, { opacity: 0, delay: 0.5 });
            TweenLite.to("#onboarding-sensor2-animation", 0.4, { opacity: 1, delay: 1 });
            TweenLite.to("#onboarding-sensor2-animation", 0.4, { opacity: 0, delay: 4, onComplete: function() {
                this.trigger("endAnimationComplete");
            }.bind(this)  });
        },
        /*
            Dispose function kills and deletes events and binded data
        */
        dispose:function() {
            console.log("Sensor2: dispose");
            
            // Regular disposing
            this.undelegateEvents();
            this.$el.removeData().unbind(); 
            this.remove();  
            this.unbind();
            Backbone.View.prototype.remove.call(this);
        }
    });
})();;( function ( ) {

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
			'app/:page/:action': 'showApp'
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
		showApp: function ( page, action ) {
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
        // var parentElement = document.getElementById("notification");
        //     parentElement.innerHTML = "Received Event: " + id;
    }
};

phoneGap.initialize();