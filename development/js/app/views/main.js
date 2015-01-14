(function(){

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
            $("#main-found-2").css({
                opacity: 0
            });

            // Animation in
            TweenLite.to("#main-logo", 0.5, { marginTop: 100, ease:Elastic.easeIn });
            TweenLite.to("#main-loader", 0.5, { opacity:1, delay:1 } );
            TweenLite.to("#main-tagline1", 0.5, { opacity:1, delay:1.5 } );
            TweenLite.to("#main-found", 0.5, { opacity:1, delay:2 } );
            TweenLite.to("#main-found", 0.2, { opacity:0, delay:5, onComplete: function () {
                $("#main-found").hide();
            } } );
            TweenLite.to("#main-found-2", 0.5, { opacity:1, delay:5.2 } );

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
})();