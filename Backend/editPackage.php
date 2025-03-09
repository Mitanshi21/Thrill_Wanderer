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
    <title>Edit Packages</title>
    <?php
    include('bLink.php');
    ?>
    <style>
        img{
            height: 50px;
            width: 50px;
        }
    </style>
</head>
<body>
<?php
    include('header.php');
    ?>
    <div class="bg-primary-subtle">
        <h1 class="p-5 text-center">Travel_Packages</h1>
    <table class="table table-secondary table-striped container">
        <tr>
            <th>P_Id</th>
            <th>D_Name</th>
            <th>D_Type</th>
            <th>State_Name</th>
            <th>Image 1</th>
            <th>Image 2</th>
            <th>Image 3</th>
            <th>Description</th>
            <th>Price</th>
            <th>Action</th>
        </tr> 
    <?php
        $sql="select *from package";
        $result=mysqli_query($conn,$sql);
        while($row=mysqli_fetch_array($result))
        {
            echo "<tr><td>".$row["P_Id"]."</td><td>".$row["D_Name"]."</td><td>".$row["D_Type"]."</td><td>".$row["State_Name"]."</td><td><img src='img/".$row["Img_1"]."'/></td><td><img src='img/".$row["Img_2"]."'/></td><td><img src='img/".$row["Img_3"]."'/></td><td>".$row["Descr"]."</td><td>".$row["Price"]."</td><td><a class='btn btn-primary' href='edit.php?Id=".$row["P_Id"]."'>Update</a><br/><br/><a class='btn btn-danger' href='delete.php?Id=".$row["P_Id"]."'>Delete</a></td></tr>";
        }
    ?>
    </table>
    </div>
    <?php
    include('bScript.php');
    ?>
</body>
</html>