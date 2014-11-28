var phoneGap = {
    /*
        phoneGaplication Constructor
    */
    initialize: function() {
        this.bindEvents();
        // this.startApp();
    },
    /* 
        Bind Event Listeners
        Bind any events that are required on startup. Common events are:
        'load', 'deviceready', 'offline', and 'online'.
    */
    bindEvents: function() {
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
        phoneGap.receivedEvent('deviceready');
    },
    onOfflineReady: function() {
        phoneGap.receivedEvent('offlineready');
    },
    onOnlineReady: function() {
        phoneGap.receivedEvent('onlineready');
    },
    /*
        Update DOM on a Received Event
    */
    receivedEvent: function(id) {
        // var parentElement = document.getElementById("notification");
        //     parentElement.innerHTML = "Received Event: " + id;
    }
};

phoneGap.initialize();