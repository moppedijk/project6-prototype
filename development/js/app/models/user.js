(function(){
	
	beehome.models.user = Backbone.Model.extend({
		initialize: function () {
			console.log("User model");
		},
		reset: function () {
			console.log("User model reset");
		}

	});

})();