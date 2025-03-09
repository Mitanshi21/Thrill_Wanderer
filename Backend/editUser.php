<?php
session_start();
if(!isset($_SESSION['UserName']))
    header('location:login.php');

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
</head>

<body>
    <?php
    include('conn.php');
    include('header.php');

    if (isset($_REQUEST['Id'])) {
        $Id = $_REQUEST['Id'];
        $q = mysqli_query($conn, "select Name, UserName, Password, Address  from signup where U_Id=$Id");
        while ($r = mysqli_fetch_array($q)) {
            $Name = $r[0];
            $UserName = $r[1];
            $Password = $r[2];
            $Address = $r[3];
        }
    }
    ?>
    <div class="bg-primary-subtle">
        <h1 class="p-5 text-center">Add New Travel_Packages</h1>
        <form method="post" class="container" enctype="multipart/form-data">
            Name:
            <input type="text" name="Name" id="Name" class="form-control" value="<?php echo $Name; ?>"><br>
            UserName:
            <input type="text" name="UserName" id="UserName" class="form-control" value="<?php echo $UserName; ?>" maxlength="10"><br>
            Password:
            <input type="text" name="Password" id="Password" class="form-control" value="<?php echo $Password; ?>" /><br>
            Address:
            <input type="text" name="Address" id="Address" class="form-control" value="<?php echo $Address; ?>"><br>
            <input type="submit" name="btnSubmit" id="btnSubmit" text="Submit" class="btn btn-primary m-2 mb-5">
            <input type="reset" text="Reset" class="btn btn-danger m-2 mb-5"><br>
        </form>
    </div>
    <?php
    include('bScript.php');
    ?>

</body>

</html>
<?php
if (isset($_POST['btnSubmit'])) {

    $Name = $_POST['Name'];
    $UserName = $_POST['UserName'];
    $Password = $_POST['Password'];
    $Address = $_POST['Address'];

    $str = "UPDATE signup SET Name='$Name', UserName='$UserName', Password='$Password', Address='$Address' WHERE U_Id=$Id";
    if (mysqli_query($conn, $str)) {
        echo "Updated!!";
    } else {
        echo "Error:" . mysqli_error($conn);
    }
    header('location:userDetail.php');
}

?>