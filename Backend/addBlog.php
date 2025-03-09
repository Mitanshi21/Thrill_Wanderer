<?php
session_start();
if (!isset($_SESSION['UserName']))
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
    include('header.php');
    ?>
    <div class="bg-primary-subtle">
        <h1 class="p-5 text-center">Add Blog</h1>
        <form method="post" class="container" enctype="multipart/form-data">
            B_Title:
            <input type="text" name="B_Title" id="B_Title" required class="form-control"><br>
            B_Name:
            <input type="text" name="B_Name" id="B_Name" required class="form-control"><br>
            B_Descr:
            <textarea type="text" name="B_Descr" id="B_Descr" required class="form-control"></textarea><br>
            B_Conclusion:
            <textarea type="text" name="B_Conclusion" id="B_Conclusion" required class="form-control"></textarea><br>
            Image:<input type="file" name="B_Img"><br><br>
            B_Date:
            <input type="date" name="B_Date" id="B_Date" required class="form-control"><br>
            <input type="submit" name="btnSubmit" id="btnSubmit" text="Submit" class="btn btn-primary m-2">
            <input type="reset" text="Reset" class="btn btn-danger m-2"><br>
        </form>
    </div>
    <?php
    include('bScript.php');
    ?>

</body>

</html>
<?php
include("conn.php");

if (isset($_POST['btnSubmit'])) {

    $b_title = $_POST['B_Title'];
    $b_name = $_POST['B_Name'];
    $b_des = $_POST['B_Descr'];
    $b_con = $_POST['B_Conclusion'];
    $date = $_POST['B_Date'];

    // $pattern = "/^[0-9]{13}+$/";
    if (isset($_FILES["B_Img"]) && $_FILES["B_Img"]["error"] == 0) {
        move_uploaded_file($_FILES["B_Img"]["tmp_name"], "D:/thrill_wanderer/public/img/" . $_FILES["B_Img"]["name"]);
        $img1 = $_FILES["B_Img"]["name"];
        copy("D:/thrill_wanderer/public/img/".$img1,'img/'.$img1);
    } else {
        echo "File upload failed!";
        echo "File upload error: " . $_FILES["B_Img"]["error"];
        $img1 = "";
    }


    $str = "INSERT INTO blog VALUES (null,'$b_title','$img1','$b_name','$b_des','$b_con','$date')";
    if (mysqli_query($conn, $str)) {
        echo "Inserted!!";
    } else {
        echo "Error:" . mysqli_error($conn);
    }

}
?>