<?php
session_start();
if(!isset($_SESSION['UserName']))
    header('location:login.php');

?>
<?php
    include('conn.php');

    $Id=$_REQUEST['Id'];
    $str="DELETE FROM package WHERE P_Id=$Id";
    If(mysqli_query($conn,$str))
        header('location:editPackage.php');
    else
        echo "Error:".mysqli_error($conn);
?>