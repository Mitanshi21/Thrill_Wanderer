<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
include("conn.php");

$Id=$_GET['Id'];
$str="DELETE FROM booking where Id=$Id";
mysqli_query($conn,$str);
?>
