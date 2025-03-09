<?php
include('conn.php');

header('Access-Control-Allow-Origin: http://localhost:3000');
$UserName = $_POST['uname'];
$Password = $_POST['pwd'];

$str = "SELECT *FROM signup WHERE UserName='$UserName' and Password='$Password';";
$result = mysqli_query($conn, $str);
if (mysqli_num_rows($result) > 0) {
    // Login successful
    $row = mysqli_fetch_assoc($result);
    $response = array(
        "success" => true,
        "U_Id" => $row['U_Id']
    );
    echo json_encode($response);
} else {
    // Login failed
    $response = array("success" => false);
    echo json_encode($response);
}

?>