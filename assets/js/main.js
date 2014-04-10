var main = {
    mapOptions : null,
    map : null,
    that : this,
    marker : null,
    locations : [],
    markers : [],
    directionsRenderer: null,
    directionsService: null,
    currentPosition: 0, //The location on the tour
    currentLocation: null,
    tourCompleted: false, //HAs the tour been completed?
    initialize : function(){
        main.mapOptions = {
            center: new google.maps.LatLng(43.652527,-79.381961),
            zoom: 15,
            disableDefaultUI: true
        };
        main.map = new google.maps.Map(document.getElementById("map-canvas"), main.mapOptions);
        
        main.directionsRenderer = new google.maps.DirectionsRenderer();
        main.directionsRenderer.setMap(main.map);
        
        main.directionsService = new google.maps.DirectionsService({
            "suppressMarkers": true,
            "avoidTolls": true
        });
  
        // Try HTML5 geolocation
                         
        main.accessGeolocation();
        findPopular();
		  
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
            var content = 'Error: Your device doesn\'t support geolocation.';
        }
/*
        var options = {
            map: main.map,
            position: new google.maps.LatLng(60, 105),
            content: content
        };*/
                
        alert(content);
        setTimeout(main.accessGeolocation, 1000); //We will try again
        //var infowindow = new google.maps.InfoWindow(options);
        //main.map.setCenter(options.position);
                
    },
    updateLocation : function() {
        //console.log("updateLocation");
        navigator.geolocation.getCurrentPosition(function(position) {  
            var newPoint = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
            main.currentLocation = newPoint;                                                                   
            if (main.marker) {
                // Marker already created - Move it
                main.marker.setPosition(newPoint);
                main.checkLocation(newPoint.lat() + ","+ newPoint.lng());
            }
            else {
                // Marker does not exist - Create it
                main.marker = new google.maps.Marker({
                    position: newPoint,
                    icon: "assets/img/marker.png",
                    map: main.map
                });
            }
            //$('#long').text(position.coords.latitude.toFixed(7));
            //$('#lat').text(position.coords.longitude.toFixed(7));
                
            //console.log("Wander: GPS Lat "+position.coords.latitude+" Long "+position.coords.longitude);
            // Center the map on the new position
            //main.map.setCenter(newPoint);
        }); 
        // Call the autoUpdate() function every 1 seconds
        setTimeout(main.updateLocation, 250);
    },
    findLocations : function (value){
        main.locations = [];
        $.ajax({
            url: "./getTourLocations.php",
            
            data: {
                id: value
            }
        }).done(function(result) {

            result = jQuery.parseJSON(result);
            //console.log(result);
            if(result.length > 0){
                $.each(result, function( index, value ) {
                    //alert( index + ": " + value );
                    //console.log(value);
                    main.locations.push(value);
                });
                main.locations.sort(function(a, b) { 
                    return a.id - b.id  ||  a.id.localeCompare(b.id);
                });
                main.startTour();
            }else{
                //$('#livesearch').append('<div class="result-item">Nothing was found!</div>');
            }
            
        });
    },
    startTour : function(){ //Hide and put map up
        $("#content").children().hide();
        $('#mapPage').slideDown();
        google.maps.event.trigger(main.map, "resize");
          $.each(main.locations, function( index, value ) {
                var latlng =  new google.maps.LatLng(value.lat,value.lng);
                main.markers.push(new google.maps.Marker({position: latlng,map:main.map,title:value.name}));
          });
           var finalLocation = new google.maps.LatLng(main.locations[main.currentPosition].lat,main.locations[main.currentPosition].lng);
          main.renderPath(main.currentLocation,finalLocation);
        
    },
     generateHud: function(controlDiv, map) {

      // Set CSS styles for the DIV containing the control
      // Setting padding to 5 px will offset the control
      // from the edge of the map
      controlDiv.style.padding = '5px';

      // Set CSS for the control border
      var controlUI = document.createElement('div');
      controlUI.style.backgroundColor = 'white';
      controlUI.style.borderStyle = 'solid';
      controlUI.style.borderWidth = '2px';
      controlUI.style.cursor = 'pointer';
      //controlUI.style.bottom = '0px';
      //controlUI.style.cursor = 'pointer';
      controlUI.style.textAlign = 'center';
      controlUI.title = 'Click to set the map to Home';
      controlDiv.appendChild(controlUI);

      // Set CSS for the control interior
      var controlText = document.createElement('div');
      controlText.style.fontFamily = 'Arial,sans-serif';
      controlText.style.fontSize = '12px';
      controlText.style.paddingLeft = '4px';
      controlText.style.paddingRight = '4px';
      controlText.innerHTML = '<b>Info</b>';
      controlUI.appendChild(controlText);

      // Setup the click event listeners: simply set the map to
      // Chicago
      google.maps.event.addDomListener(controlUI, 'click', function() {
        map.setCenter(chicago)
      });

    },
    renderPath : function(start, end){
        var request = {
            origin: start,
            waypoints: null,
            destination: end,
            travelMode: google.maps.DirectionsTravelMode.WALKING,
            unitSystem: google.maps.DirectionsUnitSystem.METRIC,
            avoidTolls: true
        };
        main.directionsService.route(request, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                //var directionsRenderer2 = new google.maps.DirectionsRenderer({polylineOptions:{strokeColor: get_random_color()}});
                //directionsRenderer2.setMap(main.map);
                main.directionsRenderer.setDirections(response);
            } else {
                alert('Error: ' + status);
            }
        });
    },
    checkLocation : function(location){//Expecting coordinates lat long -79.484948 46.6198495
        if(main.locations.length > 0 && !main.tourCompleted){
        var finalLocation = new google.maps.LatLng(main.locations[main.currentPosition].lat,main.locations[main.currentPosition].lng);

        //console.log("Checking distance:"+main.distance(main.currentLocation,finalLocation));
        if(main.distance(main.currentLocation,finalLocation) < 25){ //We Reached our location!
            main.currentPosition+=1;
            var newLocation = new google.maps.LatLng(main.locations[main.currentPosition].lat,main.locations[main.currentPosition].lng);
            main.renderPath(main.currentLocation,newLocation);
            //If our poisiton is maxxed then we are done! Should display facebook
            setProgressBar( main.currentPosition/main.locations.length * 100);
            if( main.currentPosition>=main.locations.length){
                main.tourCompleted = true;
            }else{//Pulsate!! We gots new info
                $('#infoButton').effect("pulsate","slow",10000);
            }
        }
      }
    },
    distance : function(a,b){//Returns distance between two points, expects two latlng objects
        return google.maps.geometry.spherical.computeDistanceBetween(a, b);
    },
    getInfo: function(){
        if(main.locations.length > 0){
            
            if(main.currentPosition == 0){
                 var position = 0;
            }else{
                var position = main.currentPosition-1;
            }
            
            $("#content").children().hide();
            $('#infoPage').slideDown();
            $('#infoSearch').children().remove();
            var that = $('<div class="row" style="color:white;">'+main.locations[position].name+"<br><br>"+main.locations[position].description+'</div>');
            $('#infoSearch').append(that);
            
        }
    }

}
function find(value){
    $('#livesearch').children().remove();
    $.ajax({
        url: "./getLocations.php",
        data: {
            name: value
        }
    }).done(function(result) {
		
        result = jQuery.parseJSON(result);
        console.log(result);
        if(result.length > 0){
            $.each(result, function( index, value ) {
                //alert( index + ": " + value );
                //console.log(value);
                var that = $('<div class="row result-item" style="display:none"><img src="assets/img/thumb/'+value.thumb+'" class="col-xs-8 col-xs-offset-2" data-user="'+value.id+'"></img></div>');
                $('#livesearch').append(that);
                that.toggle( "slide",{
                    direction: "down"
                } );
                
                that.click(function(e){
                    //console.log($(e.target).attr("data-user"));
                    main.findLocations($(e.target).attr("data-user"));
                });
            });
        }else{
            $('#livesearch').append('<div class="result-item">Nothing was found!</div>');
        }
    });
}


function findNearby(){
    $('#nearbySearch').children().remove();
    console.log("working!");
    $.ajax({
        url: "./findNearby.php",
        data: {
            id: ""
        }
    }).done(function(result) {
		
        result = jQuery.parseJSON(result);
        console.log(result);
        if(result.length > 0){
            $.each(result, function( index, value ) {
                //alert( index + ": " + value );
                //console.log(value);
                var that = $('<div class="row result-item" style="display:none"><img src="assets/img/thumb/'+value.thumb+'" class="col-xs-8 col-xs-offset-2" data-user="'+value.id+'"></img></div>');
                $('#nearbySearch').append(that);
                that.toggle( "slide",{
                    direction: "down"
                } );
                that.click(function(e){
                    //console.log($(this).attr("data-user"));
                    main.findLocations($(e.target).attr("data-user"));
                });
            });
        }else{
            $('#nearbySearch').append('<div class="result-item">Nothing was found!</div>');
        }
    });
}


function findPopular(){
    $('#popularSearch').children().remove();
    $.ajax({
        url: "./findPopular.php",
        data: {
            id: ""
        }
    }).done(function(result) {
		
        result = jQuery.parseJSON(result);
        console.log(result);
        if(result.length > 0){
            $.each(result, function( index, value ) {
                //alert( index + ": " + value );
                //console.log(value);
                //$('#popularSearch').append('<div class="row result-item"><img src="assets/img/thumb/'+value.thumb+'" class="col-xs-8 col-xs-offset-2" data-user="'+value.id+'"></img></div>');
                var that = $('<div class="row result-item" style="display:none"><img src="assets/img/thumb/'+value.thumb+'" class="col-xs-8 col-xs-offset-2" data-user="'+value.id+'"></img></div>');
                $('#popularSearch').append(that);
                that.toggle( "slide",{
                    direction: "down"
                } );
                    that.click(function(e){
                        
                    //console.log($(this).attr("data-user"));
             
                    main.findLocations($(e.target).attr("data-user"));
                });
            });
        }else{
            $('#popularSearch').append('<div class="result-item">Nothing was found!</div>');
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

function setProgressBar(value){
    $( "#progressbar" ).progressbar( "option", {
          value: Math.floor( value )
        });
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
        $('#mapPage').slideDown();
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
        findPopular();
        classie.toggle( this, 'active' );
        classie.toggle( menuLeft, 'cbp-spmenu-open' );
        disableOther( 'showLeft' );
        
    });
    $('#nearbyButton').click(function(){
        $("#content").children().hide();
        $('#nearbyPage').slideDown();
        findNearby();
        classie.toggle( this, 'active' );
        classie.toggle( menuLeft, 'cbp-spmenu-open' );
        disableOther( 'showLeft' );
         
    });
    $('#infoButton').click(function(){
       main.getInfo();  
    });
    $('#main').click(function(){

        classie.remove( showLeft, 'active' );
        classie.remove( menuLeft, 'cbp-spmenu-open' );
        disableOther( 'showLeft' );
    });
    
         var myCirclePlayer = new CirclePlayer("#jquery_jplayer_1",
    {
                           m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
    oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"  
   }, {
    cssSelectorAncestor: "#cp_container_1"
   });
    //Progress Bar
    $( "#progressbar" ).progressbar({
        value: false
    });
  
           
    showLeft.onclick = function() {
        classie.toggle( this, 'active' );
        classie.toggle( menuLeft, 'cbp-spmenu-open' );
        disableOther( 'showLeft' );
    };
            
        
    google.maps.event.addDomListener(window, 'load', main.initialize);

});