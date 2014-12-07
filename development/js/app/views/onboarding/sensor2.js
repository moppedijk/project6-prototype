(function(){

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
})();