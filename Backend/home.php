<?php
session_start();
if(!isset($_SESSION['UserName']))
    header('location:login.php');

include('conn.php');

$str = "SELECT * FROM package";
$C = mysqli_query($conn, $str);

$str1 = "SELECT * FROM contact";
$C1 = mysqli_query($conn, $str1);

$str2 = "SELECT * FROM booking where Status='Pending'";
$C2 = mysqli_query($conn, $str2);

$str3 = "SELECT * FROM booking where Status='Done'";
$C3 = mysqli_query($conn, $str3);

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thrill_Wanderer_Admin</title>
    <?php
    include('bLink.php');
    ?>
    <style>
        .bg-white {
            width: 20%;
            font-size: x-large;
            padding: 3%;
            margin: 2%;
            text-align: center;
        }

        b {
            margin-right: 3%;
            text-decoration: underline;
            color: blue;
        }

        .p-5 {
            display: flex;
        }
    </style>
</head>

<body>
    <?php
    include('header.php');
    ?>
    <h1 class="m-5 mb-0">Welcome Back, <?php  echo $_SESSION['UserName'];?>!!!</h1>
    <div class="p-5">
        <div class="bg-white"><b>
                <?php echo mysqli_num_rows($C); ?>
            </b> Travel Packages</div><br />
        <div class="bg-white"><b>
                <?php echo mysqli_num_rows($C1); ?>
            </b> Contacts</div></br>
        <div class="bg-white"><b>
                <?php echo mysqli_num_rows($C2); ?>
            </b> Pending Booking Status</div></br>
        <div class="bg-white"><b>
                <?php echo mysqli_num_rows($C3); ?>
            </b> Done Booking</div></br>
    </div>
    <?php
    include('bScript.php');
    ?>
</body>

</html>