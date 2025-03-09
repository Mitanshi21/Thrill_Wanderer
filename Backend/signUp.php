<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
$Name = $_POST['Name'];
$UserName = $_POST['uname'];
$Password = $_POST['pwd'];
$Address = $_POST['Address'];

include('conn.php');
$str = "INSERT INTO signup VALUES (null, '$Name','$UserName','$Password','$Address')";
if(mysqli_query($conn,$str))
    echo "Inserted!!";
else
    echo "Error:".mysqli_error($conn);
?>