(function(){

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
})();