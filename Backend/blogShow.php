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
    <title>Blogs</title>
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
        <h1 class="p-5 text-center">Blogs</h1>
    <table class="table table-secondary table-striped container">
        <tr>
            <th>B_Id</th>
            <th>B_Title</th>
            <th>B_Img</th>
            <th>B_Name</th>
            <th>B_Descr</th>
            <th>B_Conclusion</th>
            <th>B_Date</th>
            <th>Action</th>
        </tr> 
    <?php
        $sql="select *from blog";
        $result=mysqli_query($conn,$sql);
        while($row=mysqli_fetch_array($result))
        {
            echo "<tr><td>".$row["B_Id"]."</td><td>".$row["B_Title"]."</td><td><img src='img/".$row["B_Img"]."'/></td><td>".$row["B_Name"]."</td><td>".$row["B_Descr"]."</td><td>".$row["B_Conclusion"]."</td><td>".$row["B_Date"]."</td><td><a class='btn btn-danger' href='deleteBlog.php?Id=".$row["B_Id"]."'>Delete</a></td></tr>";
        }
    ?>
    </table>
    </div>
    <?php
    include('bScript.php');
    ?>
</body>
</html>