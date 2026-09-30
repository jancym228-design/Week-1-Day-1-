<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $name = trim($_POST["name"] ?? "");
    $email = trim($_POST["email"] ?? "");
    $course = trim($_POST["course"] ?? "");

    $errors = [];

    // Validate name
    if ($name === "") {
        $errors[] = "Name is required.";
    }

    // Validate email
    if ($email === "") {
        $errors[] = "Email is required.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Please enter a valid email.";
    }

    // Validate course
    if ($course === "") {
        $errors[] = "Course is required.";
    }

    if (!empty($errors)) {

        echo "<h2>Form Errors</h2>";

        foreach ($errors as $error) {
            echo "<p>" . htmlspecialchars($error) . "</p>";
        }

    } else {

        // Escape output to prevent XSS
        $safeName = htmlspecialchars($name, ENT_QUOTES, "UTF-8");
        $safeEmail = htmlspecialchars($email, ENT_QUOTES, "UTF-8");
        $safeCourse = htmlspecialchars($course, ENT_QUOTES, "UTF-8");

        echo "<h1>Registration Successful</h1>";

        echo "<p><strong>Name:</strong> $safeName</p>";
        echo "<p><strong>Email:</strong> $safeEmail</p>";
        echo "<p><strong>Course:</strong> $safeCourse</p>";
    }

} else {

    echo "Invalid request.";

}

?>
