<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
include ('conn.php');
$U_Id=$_GET['Id'];
$sql = "SELECT * FROM booking where U_Id=$U_Id";
$result = mysqli_query($conn, $sql);

$data = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

header("Content-Type: application/json");
echo json_encode($data);

$conn->close();
?>