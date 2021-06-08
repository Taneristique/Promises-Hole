<?php

echo '<html>
<head>
<title>bad luck</title>
<link rel="stylesheet" href="assets/css/unfortunate.css">
</head>
<body>
<div class="melcontainer">';
 $things=array('You lost!</br>','Game is over!</br>','Try again to have a good chance)</br>','But what if every success begins after losing!!!</br>');
 foreach($things as &$value){
     echo $value;
 }

 echo '<audio  controls autoplay loop>
 <source src="assets/music/GnossienneNo.1ErikSatie.wav" type="audio/wav">
</audio>';
 echo "</div><script src='assets/js/cr.js'></script></body></html>";
 
 ?>