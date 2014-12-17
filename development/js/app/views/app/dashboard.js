(function(){

    beehome.views.app.dashboard = Backbone.View.extend({
        walkTroughIndex: 0,
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
            "click .btn-walktrough": "onBtnWalktrough"
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
            $("#app-walktrough-2").hide();
            $("#app-walktrough-3").hide();
            $("#app-walktrough-4").hide();
            $("#app-walktrough-5").hide();

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
        onBtnWalktrough: function() {

            switch(this.walkTroughIndex) {
                case 0:
                    console.log("App walktrough 1");
                    $("#app-walktrough-1").hide();
                    $("#app-walktrough-2").show();
                    this.walkTroughIndex++;
                    break;
                case 1:
                    console.log("App walktrough 2");
                    $("#app-walktrough-2").hide();
                    $("#app-walktrough-3").show();
                    this.walkTroughIndex++;
                    break;
                case 2:
                    console.log("App walktrough 3");
                    $("#app-walktrough-3").hide();
                    $("#app-walktrough-4").show();
                    this.walkTroughIndex++;
                    break;
                case 3:
                    console.log("App walktrough 4");
                    $("#app-walktrough-4").hide();
                    $("#app-walktrough-5").show();
                    this.walkTroughIndex++;
                    break;
                case 4:
                    console.log("App walktrough 5");
                    beehome.models.user.set({ tutorialSeen: true });
                    $("#app-overlay").hide();
                    break;
            }
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