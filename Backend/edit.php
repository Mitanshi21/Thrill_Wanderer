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
    include('conn.php');
    include('header.php');

    if (isset($_REQUEST['Id'])) {
        $Id = $_REQUEST['Id'];
        $q = mysqli_query($conn, "select D_Name, State_Name, D_Type, Duration, Price, Img_1, Img_2, Img_3 from package where P_Id=$Id");
        while ($r = mysqli_fetch_array($q)) {
            $D_Name = $r[0];
            $State_Name = $r[1];
            $D_Type = $r[2];
            $Duration = $r[3];
            $Price = $r[4];
            $Img_1 = $r[5];
            $Img_2 = $r[6];
            $Img_3 = $r[7];
        }
    }
    ?>
    <div class="bg-primary-subtle">
        <h1 class="p-5 text-center">Edit Travel_Packages</h1>
        <form method="post" class="container" enctype="multipart/form-data">
            D_Name:
            <input type="text" name="D_Name" id="D_Name" class="form-control" value="<?php echo $D_Name; ?>"><br>
            State_Name:
            <input type="text" name="State_Name" id="State_Name" class="form-control" value="<?php echo $State_Name; ?>"><br>
            D_Type:
            <input type="text" name="D_Type" id="D_Type" class="form-control" value=<?php echo $D_Type; ?> /><br>
            Duration:
            <input type="number" name="Duration" id="Duration" class="form-control" value=<?php echo $Duration; ?>><br>
            Price:
            <input type="number" name="Price" id="Price" class="form-control" value=<?php echo $Price; ?>><br>
            Img_1:
            <input type="file" name="img1" id="img1" /><br />
            Img_2:
            <input type="file" name="img2" id="img2" /><br />
            Img_3:
            <input type="file" name="img3" id="img3" /><br />
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

    $de_name = $_POST['D_Name'];
    $s_name = $_POST['State_Name'];
    $de_type = $_POST['D_Type'];
    $dur = $_POST['Duration'];
    $pri = $_POST['Price'];

    if (isset($_FILES["img1"]) && $_FILES["img1"]["error"] == 0) {
        move_uploaded_file($_FILES["img1"]["tmp_name"], "D:/thrill_wanderer/public/img/" . $_FILES["img1"]["name"]);
        $img1 = $_FILES["img1"]["name"];
        copy("D:/thrill_wanderer/public/img/" . $img1, 'img/' . $img1);
        $str1 = "UPDATE package SET Img_1='$img1' WHERE P_Id=$Id";
        mysqli_query($conn, $str1);
    } else {
        $img1 = "";
    }

    if (isset($_FILES["img2"]) && $_FILES["img2"]["error"] == 0) {
        move_uploaded_file($_FILES["img2"]["tmp_name"], "D:/thrill_wanderer/public/img/" . $_FILES["img2"]["name"]);
        $img2 = $_FILES["img2"]["name"];
        $str1 = "UPDATE package SET Img_2='$img2' WHERE P_Id=$Id";
        mysqli_query($conn, $str1);
        copy("D:/thrill_wanderer/public/img/" . $img2, 'img/' . $img2);

    } else {
        $img2 = "";
    }

    if (isset($_FILES["img3"]) && $_FILES["img3"]["error"] == 0) {
        move_uploaded_file($_FILES["img3"]["tmp_name"], "D:/thrill_wanderer/public/img/" . $_FILES["img3"]["name"]);
        $img3 = $_FILES["img3"]["name"];
        $str1 = "UPDATE package SET Img_3='$img3' WHERE P_Id=$Id";
        mysqli_query($conn, $str1);
        copy("D:/thrill_wanderer/public/img/" . $img3, 'img/' . $img3);
    } else {
        $img3 = "";
    }

    $str = "UPDATE package SET D_Name='$de_name', State_Name='$s_name', D_Type='$de_type', Duration=$dur, Price=$pri WHERE P_Id=$Id";
    if (mysqli_query($conn, $str)) {
        echo "Updated!!";
    } else {
        echo "Error:" . mysqli_error($conn);
    }
}

?>