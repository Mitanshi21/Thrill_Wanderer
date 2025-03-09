<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

include('conn.php');

$Name = $_POST['Name'];
$State = $_POST['State'];
$Email = $_POST['Email'];
$Tour_Descr = $_POST['Tour_Descr'];
$Travel_Date = $_POST['Travel_Date'];
$Duration = $_POST['Duration'];
$No_Person = $_POST['No_Person'];
$Contact_No = $_POST['Contact_No'];
$U_Id = $_GET['Id'];

$endDate = date('Y-m-d', strtotime($Travel_Date . ' + ' . $Duration . ' days'));

$dateQuery = "SELECT * FROM booking WHERE U_Id=$U_Id AND Travel_Date BETWEEN '$Travel_Date' AND '$endDate'";
$dateResult = mysqli_query($conn, $dateQuery);

if (mysqli_num_rows($dateResult) > 0) {
    $response = array("message" => "You have already booking for this date!!");
    echo json_encode($response);
} else {
    $str = "INSERT INTO booking VALUES (null, '$Name','$State','$Email','$Tour_Descr','$Travel_Date',$Duration,$No_Person,$Contact_No,'Pending',$U_Id)";
    if (mysqli_query($conn, $str)) {
        $response = array("success" => "Inserted!!");
        echo json_encode($response);
    } else
        echo "Error:" . mysqli_error($conn);
}
?>