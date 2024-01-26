<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Layout</title>
    <!-- Font google -->
    <?php include("html/css.html");?>
</head>
<body>
    <main class="section main">
        <div class="container">
           <div id="fan">
            <!-- <img src="images/fan.png" width="450" height="450"/> -->
           </div>
        </div>
    </main>
   <script type="text/javascript" src="js/demo3.js"></script>
   <style>
        #fan{
            width: 450px;
            height: 450px;
            float: left;
            margin: 300px;
            background-image: url("/images/fan.png");
            background-size: cover;
            /* background-color: #000000; */
        }
    </style>
</body>
</html>