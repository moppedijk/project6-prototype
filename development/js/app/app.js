/*
    Namespace for the application
*/
var beehome = beehome || {};
    beehome.router = beehome.router || {};
    beehome.models = beehome.models || {};
    beehome.collections = beehome.collections || {};
    beehome.views = beehome.views || {};
    beehome.views.app = beehome.views.app || {};
    beehome.views.onboarding = beehome.views.onboarding || {};

(function(){

    beehome.app = {
        /*
            Initialize function of the beehome application
            Start the router and backbone history
        */
        initialize: function (){
            
            this.router = new beehome.router();
            Backbone.history.start(); 
        }
    };

})();