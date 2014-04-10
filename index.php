<!DOCTYPE html>
<html lang="en" class="no-js">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
        <title>Wander</title>
			

   
        <link href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jquerymobile/1.4.2/jquery.mobile.min.css" />
        <link rel="stylesheet" type="text/css" href="assets/css/default.css" />
        <link rel="stylesheet" type="text/css" href="assets/css/component.css" />
        <link type="text/css" rel="stylesheet" href="assets/css/main.css" />
        <link rel="stylesheet" href="assets/music/circle.player.css">
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
        <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script>
        
        <script type="text/javascript" src="assets/music/jquery.transform2d.js"></script>
        <script type="text/javascript" src="assets/music/jquery.grab.js"></script>
        <script type="text/javascript" src="assets/music/jquery.jplayer.js"></script>
        <script type="text/javascript" src="assets/music/mod.csstransforms.min.js"></script>
        <script type="text/javascript" src="assets/music/circle.player.js"></script>
        
        
        <script src="//ajax.googleapis.com/ajax/libs/jquerymobile/1.4.2/jquery.mobile.min.js"></script>
        
        <script src="assets/js/modernizr.custom.js"></script>
		

    </head>
    <body class="cbp-spmenu-push">
        <nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left" id="cbp-spmenu-s1">
            <h3>Menu</h3>
            <a id="mapButton" href="#"><img class=" col-xs-3" src="assets/img/mapbutton.png"/>Map</a>
            <a id="findButton" href="#"><img class=" col-xs-3" src="assets/img/searchbutton.png"/>Find</a>
            <a id="popularButton" href="#"><img class=" col-xs-3" src="assets/img/mostpopular.png"/>Popular</a>
            <a id="nearbyButton" href="#"><img class=" col-xs-3" src="assets/img/toursnearme.png"/>Near</a>
        </nav>

        <div class="container">
            <div id="header" class="row">
                <div class="col-xs-12 header-background">

                    <a id="showLeft" class="col-xs-1" style="background: none;border: none;outline:none;"><img class="ol-xs-12" style="height: 40px;" src="assets/img/menubutton.png"/></a>
                    <div id="logo" class= "wander-icon col-xs-2 col-xs-offset-4"></div>
                </div>
            </div>
            <div id="main" class="row fill">
                <div id="content" class="row ">
                    <div class="col-xs-12 fill" style="padding:0px;" id="mapPage">
                        <div class="col-xs-12 fill-90" id="map-canvas"></div>
                        <div class="col-xs-12 fill-10 row text-center">
                            <div class="col-xs-2" ><img id="pauseButton"  src="assets/img/pause.png"/></img></div>
                            <div class="col-xs-4" ><div id="progressbar"></div></div>
                            <div class="col-xs-2 pull-right" ><img id="infoButton"  src="assets/img/info.png"/></img></div>
                            
                             
                            
                        </div>
                    </div>
                    <div class="col-xs-12 fill" style="display:none" id="findPage">
                        <h1 class="text-center">Search Tours</h1>
                        <div class="text-center" style="font-size: 40px;">
                            <form>
                                <input type="text" size="15"  onkeyup="find(this.value)">

                            </form>
                            <div id="livesearch"></div>
                            
                        </div>
                    </div>
                    <div class="col-xs-12 fill" style="display:none" id="popularPage">
                         <div class="text-center" style="font-size: 40px;">
                              <h1>Popular Tours</h1>
                            <div id="popularSearch"></div>
                        </div>
                    </div>
                    <div class="col-xs-12 fill" style="display:none" id="nearbyPage">
                         <div class="text-center" style="font-size: 40px;">
                             <h1>Nearby Tours</h1>
                            <div id="nearbySearch"></div>
                        </div>
                    </div>
                    <div class="col-xs-12 fill" style="display:none" id="infoPage">
                         <div class="text-center" style="font-size: 40px;">
                           <h1>Detailed Information</h1>
                            <div id="infoSearch"></div>
                                <div id="mp3Player">
                                
                                <!-- The jPlayer div must not be hidden. Keep it at the root of the body element to avoid any such problems. -->
                                <div id="jquery_jplayer_1" class="cp-jplayer"></div>
                    
                                <!-- This is the 2nd instance's jPlayer div -->
                    
                                <div class="prototype-wrapper"> <!-- A wrapper to emulate use in a webpage and center align -->
                    
                    
                                    <!-- The container for the interface can go where you want to display it. Show and hide it as you need. -->
                            
                                    <div id="cp_container_1" class="cp-container">
                                        <div class="cp-buffer-holder"> <!-- .cp-gt50 only needed when buffer is > than 50% -->
                                            <div class="cp-buffer-1"></div>
                                            <div class="cp-buffer-2"></div>
                                        </div>
                                        <div class="cp-progress-holder"> <!-- .cp-gt50 only needed when progress is > than 50% -->
                                            <div class="cp-progress-1"></div>
                                            <div class="cp-progress-2"></div>
                                        </div>
                                        <div class="cp-circle-control"></div>
                                        <ul class="cp-controls">
                                            <li><a class="cp-play" tabindex="1">play</a></li>
                                            <li><a class="cp-pause" style="display:none;" tabindex="1">pause</a></li> <!-- Needs the inline style here, or jQuery.show() uses display:inline instead of display:block -->
                                        </ul>
                                    </div>
                            
                            
                            
                                </div>
                            </div>
                    </div>

                </div>
            </div>
        </div>
        <!-- Classie - class helper functions by @desandro https://github.com/desandro/classie -->
        <script src="assets/js/classie.js"></script>
        <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCpCZg9odVngPubFm4-F22a1k2lVzpRSOY&sensor=true&libraries=geometry"></script>
        <script src="assets/js/main.js"></script>		
        <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
        
    </body>
</html>
