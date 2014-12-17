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

var phoneGap = phoneGap || {};

(function() {

    beehome.app = {
        /*
            Initialize function of the beehome application
            Start the router and backbone history
        */
        initialize: function (){
            console.log("beehome initialize");
            this.router = new beehome.router();
            Backbone.history.start();
        }
    };

    phoneGap = {
        /*
            phoneGaplication Constructor
        */
        initialize: function(settings) {
            console.log("phoneGap initialize");
            this.settings = settings;

            if(this.settings.mobile) {
                this.bindEvents();
            } else {
                beehome.app.initialize();
            }
        },
        /* 
            Bind Event Listeners
            Bind any events that are required on startup. Common events are:
            'load', 'deviceready', 'offline', and 'online'.
        */
        bindEvents: function() {
            console.log("phoneGap bindEvents");
            document.addEventListener('deviceready', this.onDeviceReady, false);
            document.addEventListener('offlineready', this.onOfflineReady, false);
            document.addEventListener('onlineready', this.onOnlineReady, false);
        },
        /*
            deviceready Event Handler
        
            The scope of 'this' is the event. In order to call the 'receivedEvent'
            function, we must explicitly call 'phoneGap.receivedEvent(...);'
        */
        onDeviceReady: function() {
            console.log("phoneGap onDeviceReady");

            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

            beehome.app.initialize();
        },
        onOfflineReady: function() {
            console.log("phoneGap onOfflineReady");
        },
        onOnlineReady: function() {
            console.log("phoneGap onOfflineReady");
        }
    };

})();
