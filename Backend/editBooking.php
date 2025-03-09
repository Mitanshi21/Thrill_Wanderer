<?php
session_start();
if(!isset($_SESSION['UserName']))
    header('location:login.php');

?>
<?php
    include('conn.php');

    $Id=$_REQUEST['Id'];
    $str="UPDATE booking SET Status='Done' WHERE Id=$Id";
    If(mysqli_query($conn,$str))
        header('location:book_appointmentDetail.php');
    else
        echo "Error:".mysqli_error($conn);
?>