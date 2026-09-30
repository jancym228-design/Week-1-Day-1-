<?php

session_start();

$_SESSION["username"] = "Jancy";
$_SESSION["course"] = "BCA";

echo "<h1>PHP Session Example</h1>";

echo "Username: " . htmlspecialchars($_SESSION["username"]) . "<br>";
echo "Course: " . htmlspecialchars($_SESSION["course"]);

?>