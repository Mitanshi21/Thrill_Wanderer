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
    <title>User's Details</title>
    <?php
    include('bLink.php');
    ?>
</head>

<body>
    <?php
    include('header.php');
    ?>
    <div class="bg-primary-subtle">
        <h1 class="p-5 text-center">Users Details</h1>
        <table class="table table-secondary table-striped container table-responsive">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>UserName</th>
                <th>Password</th>
                <th>Address</th>
                <th colspan="2">Actions</th>
            </tr>
            <?php
            $sql = "select *from signup";
            $result = mysqli_query($conn, $sql);
            while ($row = mysqli_fetch_array($result)) {
                echo "<tr><td>" . $row["U_Id"] . "</td><td>" . $row["Name"] . "</td><td>" . $row["UserName"] . "</td><td>" . $row["Password"] . "</td><td>" . $row["Address"] . "</td><td><a class='btn btn-primary' href='editUser.php?Id=" . $row["U_Id"] . "'>Update</a></td><td><a class='btn btn-danger' href='deleteUser.php?Id=" . $row["U_Id"] . "'>Delete</a></td></tr>";
            }
            ?>
        </table>
    </div>
    <?php
    include('bScript.php');
    ?>
</body>

</html>