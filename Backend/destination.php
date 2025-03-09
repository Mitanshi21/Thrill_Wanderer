<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
include ('conn.php');
$sql = "SELECT * FROM package"; // Change this to your table name
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