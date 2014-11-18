var phoneGap = {
    /*
        phoneGaplication Constructor
    */
    initialize: function() {
        this.bindEvents();
    },
    /* 
        Bind Event Listeners
        Bind any events that are required on startup. Common events are:
        'load', 'deviceready', 'offline', and 'online'.
    */
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    /*
        deviceready Event Handler
    
        The scope of 'this' is the event. In order to call the 'receivedEvent'
        function, we must explicitly call 'phoneGap.receivedEvent(...);'
    */
    onDeviceReady: function() {
        phoneGap.receivedEvent('deviceready');
    },
    /*
        Update DOM on a Received Event
    */
    receivedEvent: function(id) {
        var parentElement = document.getElementById("notification");
            parentElement.innerHTML = "Received Event: " + id;

        console.log('Received Event: ' + id);
    }
};

phoneGap.initialize();