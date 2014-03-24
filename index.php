<!doctype html>

<html lang="en">
    <head>
        <meta charset="utf-8">

        <title>Wander</title>
        <meta name="description" content="Where do you want to be?">
        <meta name="author" content="Anonymous Tiger">
        <meta name="viewport" content="width=device-width, user-scalable=no" />

        <link href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" rel="stylesheet">

        <link type="text/css" rel="stylesheet" media="all" href="assets/css/jquery.mmenu.all.css" />
        <link type="text/css" rel="stylesheet" href="assets/css/main.css" />
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>



    </head>

    <body>
        
            <div id="main" class="container">
                <div id="header" class="row">
                    <div class="col-xs-12 header-background">
                        <a href="#menu"class="col-xs-1">Menu</a>
                        <div id="logo" class= "wander-icon col-xs-2 col-xs-offset-4"></div>
                    </div>
                </div>
                <div id="content" class="row">
                    <div class="col-xs-12 fill" id="map-canvas"></div>

                </div>

                <nav id="menu">
                    <ul>
                        <li><a href="#"><img src="assets/img/searchbutton.png"/>Find</a></li>
                        <li><a href="#"><img src="assets/img/mostpopular.png"/>Popular</a></li>
                        <li><a href="#"><img src="assets/img/toursnearme.png"/>Near</a></li>
                    </ul>
                </nav>
            </div>

        

        <script type="text/javascript" src="assets/js/jquery.mmenu.min.all.js"></script>
        <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCpCZg9odVngPubFm4-F22a1k2lVzpRSOY&sensor=true"></script>
        <script src="assets/js/main.js"></script>		
        <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
    </body>
</html>