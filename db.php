<?php
$con = mysqli_connect("localhost","root","","todo_db");
if($con->connect_error){
    die("Connection Failed: ".$con->connect_errno);
}
?>