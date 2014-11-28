(function(){

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
            $('.onboarding__content').jcarousel();

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

            /*
                Swipe events
            */
            $(".onboarding__content").on( "swipeleft", function(event){
                $('.onboarding__content').jcarousel('scroll', '+=1');
            });

            $(".onboarding__content").on( "swiperight", function(event){
                $('.onboarding__content').jcarousel('scroll', '-=1');
            });
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
        dispose:function(){
            $('onboarding__content').jcarousel('destroy');
            $(".onboarding__content").off("swipeleft");
            $(".onboarding__content").off("swiperight");

            // Regular disposing
            this.undelegateEvents();
            this.$el.removeData().unbind(); 
            this.remove();  
            this.unbind();
            Backbone.View.prototype.remove.call(this);
        }
    });
})();