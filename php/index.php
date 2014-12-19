<html>
<head>
	<meta name="viewport" content="minimal-ui">
	<title>P6</title>
	<link rel="stylesheet" href="style.css">
</head>

<?php
$onoroff = $_GET["state"]; // Declares the request from index.html as a variable
$textfile = "LEDstate.txt"; // Declares the name and location of the .txt file
 
$fileLocation = "$textfile";
$fh = fopen($fileLocation, 'w   ') or die("Something went wrong!"); // Opens up the .txt file for writing and replaces any previous content
$stringToWrite = "$onoroff"; // Write either 1 or 0 depending on request from index.html
fwrite($fh, $stringToWrite); // Writes it to the .txt file
fclose($fh); 
//header("Location: index.html"); // Return to frontend (index.html)

?>
<body>

<!--<a href="index.php?state=lamp1-aan" class="on">ON</a>
<a href="index.php?state=lamp1-uit" class="off">OFF</a>

<a href="index.php?state=lamp2-aan" class="on">ON</a>
<a href="index.php?state=lamp2-uit" class="off">OFF</a>-->


   <a href="index.php?state=purple" class="purple">Purple</a><!--
--><a href="index.php?state=red" class="red">Red</a><!--

--><a href="index.php?state=green" class="green">Green</a><!--
--><a href="index.php?state=blue" class="blue">Blue</a><!--

--><a href="index.php?state=on" class="on">On</a><!--
--><a href="index.php?state=off" class="off">Off</a>



 
</body>
</html>