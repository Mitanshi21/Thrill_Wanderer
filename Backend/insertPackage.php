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
        <h1 class="p-5 text-center">Add New Travel_Packages</h1>
        <form method="post" class="container" enctype="multipart/form-data">
            D_Name:
            <input type="text" name="D_Name" id="D_Name" required class="form-control"><br>
            State_Name:
            <input type="text" name="State_Name" id="State_Name" required class="form-control"><br>
            D_Type:
            <select name="D_Type" id="D_Type" class="form-control">
                <option value="Trekking">Trekking</option>
                <option value="Beach">Beach</option>
                <option value="Mountain">Mountain</option>
            </select><br>
            Descr:
            <textarea type="text" name="Descr" id="Descr" required class="form-control"></textarea><br>
            Image_1:<input type="file" name="img1"><br><br>
            Image_2:<input type="file" name="img2"><br><br>
            Image_3:<input type="file" name="img3"><br><br>
            Duration:
            <input type="number" name="Duration" id="Duration" required class="form-control"><br>
            Price:
            <input type="number" name="Price" id="Price" required class="form-control"><br>
            Day_1:
            <textarea type="text" name="Day_1" id="Day_1" required class="form-control"></textarea><br>
            Day_2:
            <textarea type="text" name="Day_2" id="Day_2" required class="form-control"></textarea><br>
            Day_3:
            <textarea type="text" name="Day_3" id="Day_3" required class="form-control"></textarea><br>
            Day_4:
            <textarea type="text" name="Day_4" id="Day_4" required class="form-control"></textarea><br>
            Day_5:
            <textarea type="text" name="Day_5" id="Day_5" required class="form-control"></textarea><br>
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

    $de_name = $_POST['D_Name'];
    $s_name = $_POST['State_Name'];
    $de_type = filter_input(INPUT_POST, 'D_Type', FILTER_SANITIZE_STRING);
    $des = $_POST['Descr'];
    $dur = $_POST['Duration'];
    $pri = $_POST['Price'];
    $d_1 = $_POST['Day_1'];
    $d_2 = $_POST['Day_2'];
    $d_3 = $_POST['Day_3'];
    $d_4 = $_POST['Day_4'];
    $d_5 = $_POST['Day_5'];

    // $pattern = "/^[0-9]{13}+$/";
    if (isset($_FILES["img1"]) && $_FILES["img1"]["error"] == 0) {
        move_uploaded_file($_FILES["img1"]["tmp_name"], "D:/thrill_wanderer/public/img/" . $_FILES["img1"]["name"]);
        $img1 = $_FILES["img1"]["name"];
        copy("D:/thrill_wanderer/public/img/".$img1,'img/'.$img1);
    } else {
        echo "File upload failed!";
        echo "File upload error: " . $_FILES["img1"]["error"];
        $img1 = "";
    }

    if (isset($_FILES["img2"]) && $_FILES["img2"]["error"] == 0) {
        move_uploaded_file($_FILES["img2"]["tmp_name"], "D:/thrill_wanderer/public/img/" . $_FILES["img2"]["name"]);
        $img2 = $_FILES["img2"]["name"];
        
    } else {
        echo "File upload failed!";
        echo "File upload error: " . $_FILES["img2"]["error"];
        $img2 = "";
    }
    copy("D:/thrill_wanderer/public/img/".$img2,'img/'.$img2);

    if (isset($_FILES["img3"]) && $_FILES["img3"]["error"] == 0) {
        move_uploaded_file($_FILES["img3"]["tmp_name"], "D:/thrill_wanderer/public/img/" . $_FILES["img3"]["name"]);
        $img3 = $_FILES["img3"]["name"];
        
    } else {
        echo "File upload failed!";
        echo "File upload error: " . $_FILES["img3"]["error"];
        $img3 = "";
    }
    copy("D:/thrill_wanderer/public/img/".$img3,'img/'.$img3);

    $str = "INSERT INTO package VALUES (null,'$de_name','$de_type','$s_name','$des','$img1','$img2','$img3',$dur,$pri,'$d_1','$d_2','$d_3','$d_4','$d_5')";
    if (mysqli_query($conn, $str)) {
        echo "Inserted!!";
    } else {
        echo "Error:" . mysqli_error($conn);
    }

}
?>