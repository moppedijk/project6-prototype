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
            _.bindAll(this, "startAnimation");
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

            window.setTimeout(function() {
                beehome.app.router.navigate("confirm", {
                    trigger: true
                });
            }, 2000);
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
        },
        /*
            Start animation 
        */
        startAnimation:function() {
            console.log("Main: startAnimation");

            $(".logo").css({
                paddingTop: "0px"
            });
            $(".logo").animate({
                paddingTop: "100px"
            }, 400).delay(500);

            $(".loader").css({
                opacity: 0
            });
            $(".loader").animate({
                opacity: 1
            }, 200).delay(500);

            $(this.$el).css({ opacity: 1});
            $(this.$el).animate({ opacity: 1}, 300, function(){
                this.trigger("startAnimationComplete");
            }.bind(this));
        },
        /*
            End animation
        */
        endAnimation: function() {
            console.log("Main: endAnimation");

            $(this.$el).css({ opacity: 1 });
            $(this.$el).animate({ opacity: 0 }, 400, function(){
                this.trigger("endAnimationComplete");
            }.bind(this));
        }
    });
})();