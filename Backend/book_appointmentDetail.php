<?php
session_start();
if(!isset($_SESSION['UserName']))
    header('location:login.php');

?>
<?php include_once("conn.php"); ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Booking Details</title>
    <?php
    include('bLink.php');
    ?>
</head>

<body>
    <?php
    include('header.php');
    ?>
    <div class="bg-primary-subtle">
        <h1 class="p-5 text-center">Booking Details</h1>
        <table class="table table-secondary table-striped container table-responsive">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>State</th>
                <th>Email</th>
                <th>Tour_Descr</th>
                <th>Duration</th>
                <th>No_Person</th>
                <th>Contact_No</th>
                <th>User_Id</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
            <?php
            $sql = "select *from booking";
            $result = mysqli_query($conn, $sql);
            while ($row = mysqli_fetch_array($result)) {
                if ($row["Status"] === 'Done') {
                    echo "<tr><td>" . $row["Id"] . "</td><td>" . $row["Name"] . "</td><td>" . $row["State"] . "</td><td>" . $row["Email"] . "</td><td>" . $row["Tour_Descr"] . "</td><td>" . $row["Duration"] . "</td><td>" . $row["No_Person"] . "</td><td>" . $row["Contact_No"] . "</td><td>" . $row["U_Id"] . "</td><td><a class='btn btn-success' href='editBooking.php?Id=" . $row["Id"] . "'>" . $row["Status"] . "</a></td><td><a class='btn btn-danger' href='deleteBooking.php?Id=" . $row["Id"] . "'>Delete</a></td></tr>";
                } else {
                    echo "<tr><td>" . $row["Id"] . "</td><td>" . $row["Name"] . "</td><td>" . $row["State"] . "</td><td>" . $row["Email"] . "</td><td>" . $row["Tour_Descr"] . "</td><td>" . $row["Duration"] . "</td><td>" . $row["No_Person"] . "</td><td>" . $row["Contact_No"] . "</td><td>" . $row["U_Id"] . "</td><td><a class='btn btn-primary' href='editBooking.php?Id=" . $row["Id"] . "'>" . $row["Status"] . "</a></td><td><a class='btn btn-danger' href='deleteBooking.php?Id=" . $row["Id"] . "'>Delete</a></td></tr>";
                }
            }
            ?>
        </table>
    </div>
    <?php
    include('bScript.php');
    ?>
</body>

</html>