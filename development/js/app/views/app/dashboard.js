(function(){

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
})();