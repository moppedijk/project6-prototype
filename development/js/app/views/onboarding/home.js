(function(){

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

                $("#onboarding-nav-home").addClass("onboarding__pag-li--active");

                this.trigger("startAnimationComplete");

            }.bind(this) });
        },
        /*
            End animation
        */
        endAnimation: function() {
            console.log("onboarding: endAnimation");

            $("#onboarding-nav-home").removeClass("onboarding__pag-li--active");
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
})();