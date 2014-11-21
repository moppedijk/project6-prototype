(function(){

    beehome.views.app.main = Backbone.View.extend({
        /*
            ClassName of the view, creates html element wrapped around the template
        */
        className: "app-main",
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
            var templateSource = $('#template-app-main').html();
            var template = Handlebars.compile(templateSource);
            var data = {};

            this.$el.html(template(data));

            return this;
        },
        /*
            After render function get's called after view is rendered
        */
        afterRender:function(){

            $("#app-main-flower").animate({
                top: 0
            }, 1000);

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

})();