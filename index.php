<!DOCTYPE html>
<html lang="en" class="no-js">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
        <title>Wander</title>
   
        <link href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="assets/css/default.css" />
        <link rel="stylesheet" type="text/css" href="assets/css/component.css" />
        <link type="text/css" rel="stylesheet" href="assets/css/main.css" />
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
        <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script>
        
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
                        <div class="col-xs-12 fill-10">
                            <img id="pauseButton" class=" col-xs-2" src="assets/img/pause.png"/></img>
                            <img id="infoButton" class=" col-xs-2 pull-right" src="assets/img/info.png"/></img>
                        </div>
                    </div>
                    <div class="col-xs-12 fill" style="display:none" id="findPage">
                        <div class="text-center" style="font-size: 40px;">
                            <form>
                                <input type="text" size="15"  onkeyup="find(this.value)">

                            </form>
                            <div id="livesearch"></div>
                            
                        </div>
                    </div>
                    <div class="col-xs-12 fill" style="display:none" id="popularPage">
                         <div class="text-center" style="font-size: 40px;">
                            <div id="popularSearch"></div>
                        </div>
                    </div>
                    <div class="col-xs-12 fill" style="display:none" id="nearbyPage">
                         <div class="text-center" style="font-size: 40px;">
                            <div id="nearbySearch"></div>
                        </div>
                    </div>
                    <div class="col-xs-12 fill" style="display:none" id="infoPage">
                         <div class="text-center" style="font-size: 40px;">
                            <div id="infoSearch"></div>
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
