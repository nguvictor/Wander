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
        <script src="assets/js/modernizr.custom.js"></script>
    </head>
    <body class="cbp-spmenu-push">
        <nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left" id="cbp-spmenu-s1">
            <h3>Menu</h3>
            <a id="findButton" href="#"><img class=" col-xs-3" src="assets/img/searchbutton.png"/>Find</a>
            <a id="popularButton" href="#"><img class=" col-xs-3" src="assets/img/mostpopular.png"/>Popular</a>
            <a id="nearbyButton" href="#"><img class=" col-xs-3" src="assets/img/toursnearme.png"/>Near</a>
            <a href="#">Catsear azuki bean</a>
            <a href="#">Dandelion bunya</a>
            <a href="#">Rutabaga</a>
        </nav>

        <div class="container">
            <div id="header" class="row">
                <div class="col-xs-12 header-background">

                    <button id="showLeft" class="col-xs-1">Menu</button>
                    <div id="logo" class= "wander-icon col-xs-2 col-xs-offset-4"></div>
                </div>
            </div>
            <div id="main" class="row fill">
                <div id="content" class="row ">
                    <div class="col-xs-12 fill" id="map-canvas"></div>
                    <div class="col-xs-12 fill" style="display:none" id="findPage">
                        <form>
                            <input type="text" size="30" onkeyup="find(this.value)">

                        </form>
                        <div id="livesearch"></div>
                    </div>
                    <div class="col-xs-12 fill" style="display:none" id="popularPage">
                        The popular Page
                    </div>
                    <div class="col-xs-12 fill" style="display:none" id="nearbyPage">
                        the nearby page
                    </div>

                </div>
            </div>
        </div>
        <!-- Classie - class helper functions by @desandro https://github.com/desandro/classie -->
        <script src="assets/js/classie.js"></script>
        <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCpCZg9odVngPubFm4-F22a1k2lVzpRSOY&sensor=true"></script>
        <script src="assets/js/main.js"></script>		
        <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
        <script>
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

            showLeft.onclick = function() {
                classie.toggle( this, 'active' );
                classie.toggle( menuLeft, 'cbp-spmenu-open' );
                disableOther( 'showLeft' );
            };
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
        </script>
    </body>
</html>
