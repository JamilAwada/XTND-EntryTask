<?php


// User data to be displayed later
$name = $_POST["name"];
$email = $_POST["email"];
$amount = $_POST["amount"];


// Check for email format

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Please enter a valid email";
  }

// JSON array

$info = array($name,$email,$amount);

echo json_encode($info);

?>