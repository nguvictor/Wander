var main = {
    mapOptions : null,
    map : null,
    that : this,
    marker : null,
    initialize : function(){
        main.mapOptions = {
            center: new google.maps.LatLng(43.652527,-79.381961),
            zoom: 15,
            disableDefaultUI: true
        };
        main.map = new google.maps.Map(document.getElementById("map-canvas"), main.mapOptions);
        // Try HTML5 geolocation
                         
        main.accessGeolocation();
		  
    },
    accessGeolocation: function(){
       
        if(navigator.geolocation) {
            
            navigator.geolocation.getCurrentPosition(function(position) {
                var pos = new google.maps.LatLng(position.coords.latitude,
                    position.coords.longitude);

              
                main.updateLocation();
                main.map.setCenter(pos);
            }, function() {
                main.handleNoGeolocation(true);
                          
            });
        } else {
            alert("Not Working");
            // Browser doesn't support Geolocation
            main.handleNoGeolocation(false);
        }
		  
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
        console.log("updateLocation");
        navigator.geolocation.getCurrentPosition(function(position) {  
            var newPoint = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
                                                                                  
            if (main.marker) {
                // Marker already created - Move it
                main.marker.setPosition(newPoint);
            }
            else {
                // Marker does not exist - Create it
                main.marker = new google.maps.Marker({
                    position: newPoint,
                    icon: "assets/img/marker.png",
                    map: main.map
                });
            }
            $('#long').text(position.coords.latitude.toFixed(7));
            $('#lat').text(position.coords.longitude.toFixed(7));
                
            console.log("Wander: GPS Lat "+position.coords.latitude+" Long "+position.coords.longitude);
            // Center the map on the new position
            main.map.setCenter(newPoint);
        }); 
        // Call the autoUpdate() function every 1 seconds
        setTimeout(main.updateLocation, 1000);
    }

}
function find(value){
    $('#livesearch').children().remove();
    $.ajax({
        url: "./getLocations.php",
        data: {
            name: value
        },
    }).done(function(result) {
		
        result = jQuery.parseJSON(result);
        console.log(result);
        if(result.length > 0){
            $.each(result, function( index, value ) {
                //alert( index + ": " + value );
                //console.log(value);
                $('#livesearch').append('<div class="result-item" >'+value.name+' '+ value.description+'</div>');
                $( "#livesearch:last-child" ).toggle( "slide",{ direction: "down" } );
            });
        }else{
            $('#livesearch').append('<div class="result-item">Nothing was found!</div>');
        }
    });
}
var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
menuRight = document.getElementById( 'cbp-spmenu-s2' ),
menuTop = document.getElementById( 'cbp-spmenu-s3' ),
menuBottom = document.getElementById( 'cbp-spmenu-s4' ),
showLeft = document.getElementById( 'showLeft' ),
showRight = document.getElementById( 'showRight' ),
showTop = document.getElementById( 'showTop' ),
showBottom = document.getElementById( 'showBottom' ),
showLeftPush = document.getElementById( 'showLeftPush' ),
showRightPush = document.getElementById( 'showRightPush' ),
body = document.body;

function disableOther( button ) {
    if( button !== 'showLeft' ) {
        classie.toggle( showLeft, 'disabled' );
    }
    if( button !== 'showRight' ) {
        classie.toggle( showRight, 'disabled' );
    }
    if( button !== 'showTop' ) {
        classie.toggle( showTop, 'disabled' );
    }
    if( button !== 'showBottom' ) {
        classie.toggle( showBottom, 'disabled' );
    }
    if( button !== 'showLeftPush' ) {
        classie.toggle( showLeftPush, 'disabled' );
    }
    if( button !== 'showRightPush' ) {
        classie.toggle( showRightPush, 'disabled' );
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
    
    //$('nav#menu').mmenu({moveBackground:false},{menuWrapperSelector:"#main"});
    $('#mapButton').click(function(){
        $("#content").children().hide();
        $('#map-canvas').slideDown();
        google.maps.event.trigger(main.map, "resize");
        classie.toggle( this, 'active' );
        classie.toggle( menuLeft, 'cbp-spmenu-open' );
        disableOther( 'showLeft' );
    });
    $('#findButton').click(function(){
        $("#content").children().hide();
        $('#findPage').slideDown();
        classie.toggle( this, 'active' );
        classie.toggle( menuLeft, 'cbp-spmenu-open' );
        disableOther( 'showLeft' );    
    });
    $('#popularButton').click(function(){
        $("#content").children().hide();
        $('#popularPage').slideDown();
        classie.toggle( this, 'active' );
        classie.toggle( menuLeft, 'cbp-spmenu-open' );
        disableOther( 'showLeft' );
    });
    $('#nearbyButton').click(function(){
        $("#content").children().hide();
        $('#nearbyPage').slideDown();
        classie.toggle( this, 'active' );
        classie.toggle( menuLeft, 'cbp-spmenu-open' );
        disableOther( 'showLeft' );
    });
    $('#main').click(function(){

        classie.remove( showLeft, 'active' );
        classie.remove( menuLeft, 'cbp-spmenu-open' );
        disableOther( 'showLeft' );
    });
        
           

    showLeft.onclick = function() {
        classie.toggle( this, 'active' );
        classie.toggle( menuLeft, 'cbp-spmenu-open' );
        disableOther( 'showLeft' );
    };
            
        
    google.maps.event.addDomListener(window, 'load', main.initialize);

});