(function(){

    beehome.views.confirm = Backbone.View.extend({
        /*
            ClassName of the view, creates html element wrapped around the template
        */
        className: "confirm",
        /* 
            Events of the view
        */
        events: {
            'click #beginscherm': 'onBeginschermClickHandler'
        },
        /*
            Initialize function of the view, get's called when views contructor is called
         */
        initialize: function () {

        },
        /*
            Renders the main view of the app
         */
        render: function () {
            var templateSource = $('#template-confirm').html();
            var template = Handlebars.compile(templateSource);
            var data = {};

            this.$el.html(template(data));

            return this;
        },
        /*
            After render function get's called after view is rendered
        */
        afterRender: function () {
        },
        /*
            Click handler for the #beginscherm element
        */
        onBeginschermClickHandler: function() {
            beehome.app.router.navigate("onboarding", {
                trigger: true
            })
        },
        /*
            Dispose function kills and deletes events and binded data
        */
        dispose: function () {
            // Regular disposing
            this.undelegateEvents();
            this.$el.removeData().unbind(); 
            this.remove();  
            this.unbind();
            Backbone.View.prototype.remove.call(this);
        }
    });
})();