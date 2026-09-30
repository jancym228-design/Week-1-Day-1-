<?php

$name = "Jancy";
$course = "BCA";
$age = 21;

$skills = ["HTML", "CSS", "JavaScript", "PHP"];

echo "<h1>PHP Fundamentals</h1>";

echo "<h2>Student Details</h2>";
echo "Name: " . htmlspecialchars($name) . "<br>";
echo "Course: " . htmlspecialchars($course) . "<br>";
echo "Age: " . $age . "<br>";

echo "<h2>Skills</h2>";

foreach ($skills as $skill) {
    echo htmlspecialchars($skill) . "<br>";
}

echo "<h2>Conditional Statement</h2>";

if ($age >= 18) {
    echo "The student is an adult.";
} else {
    echo "The student is a minor.";
}

function greetUser($name) {
    return "Hello, " . htmlspecialchars($name) . "!";
}

echo "<h2>Function</h2>";
echo greetUser($name);

?>