(function(){

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

                $("#onboarding-nav-room").addClass("onboarding__pag-li--active");
                $("#onboarding-input-room").focus();

                this.trigger("startAnimationComplete");
            }.bind(this) });
        },
        /*
            End animation
        */
        endAnimation: function() {
            console.log("onboarding: endAnimation");

            $("#onboarding-input-room").blur();
            $("#onboarding-nav-room").removeClass("onboarding__pag-li--active");
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
})();