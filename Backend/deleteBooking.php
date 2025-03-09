<?php
session_start();
if(!isset($_SESSION['UserName']))
    header('location:login.php');

?>
<?php
    include('conn.php');

    $Id=$_REQUEST['Id'];
    $str="DELETE FROM booking WHERE Id=$Id";
    If(mysqli_query($conn,$str))
        header('location:book_appointmentDetail.php');
    else
        echo "Error:".mysqli_error($conn);
?>