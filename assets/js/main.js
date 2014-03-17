var main = {
	mapOptions : null,
	map : null,
	that : this,
	marker : null,
	initialize : function(){
		main.mapOptions = {
          center: new google.maps.LatLng(-34.397, 150.644),
          zoom: 15
        };
        main.map = new google.maps.Map(document.getElementById("map-canvas"), main.mapOptions);
			 // Try HTML5 geolocation
			 /*
		  if(navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
			  var pos = new google.maps.LatLng(position.coords.latitude,
											   position.coords.longitude);

			  var infowindow = new google.maps.InfoWindow({
				map: map,
				position: pos,
				content: 'You are here.'
			  });

			  map.setCenter(pos);
			}, function() {
			  this.handleNoGeolocation(true);
			});
		  } else {
			// Browser doesn't support Geolocation
			this.handleNoGeolocation(false);
		  }*/
		  main.updateLocation();
	},
	handleNoGeolocation : function(errorFlag) {
		if (errorFlag) {
		var content = 'Error: The Geolocation service failed.';
		} else {
		var content = 'Error: Your browser doesn\'t support geolocation.';
		}

		var options = {
		map: main.map,
		position: new google.maps.LatLng(60, 105),
		content: content
		};

		var infowindow = new google.maps.InfoWindow(options);
		main.map.setCenter(options.position);
	},
	updateLocation : function() {
		navigator.geolocation.getCurrentPosition(function(position) {  
		var newPoint = new google.maps.LatLng(position.coords.latitude, 
											  position.coords.longitude);

		if (main.marker) {
		  // Marker already created - Move it
		  marker.setPosition(newPoint);
		}
		else {
		  // Marker does not exist - Create it
		  main.marker = new google.maps.Marker({
			position: newPoint,
			map: main.map
		  });
		}

		// Center the map on the new position
		main.map.setCenter(newPoint);
		}); 
		// Call the autoUpdate() function every 1 seconds
		setTimeout(main.autoUpdate, 1000);
	}

}


$(document).ready(function(){
/*
	function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(-34.397, 150.644),
          zoom: 8
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
			 // Try HTML5 geolocation
		  if(navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
			  var pos = new google.maps.LatLng(position.coords.latitude,
											   position.coords.longitude);

			  var infowindow = new google.maps.InfoWindow({
				map: map,
				position: pos,
				content: 'You are here.'
			  });

			  map.setCenter(pos);
			}, function() {
			  handleNoGeolocation(true);
			});
		  } else {
			// Browser doesn't support Geolocation
			handleNoGeolocation(false);
		  }
      }*/
      google.maps.event.addDomListener(window, 'load', main.initialize);

});