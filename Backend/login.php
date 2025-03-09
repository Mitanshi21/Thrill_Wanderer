<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thrill_Wanderer Admin-Login</title>
    <?php
    include('bLink.php');
    ?>
    <style>
        body {
            justify-content: center;
            display: flex;
            align-items: center;
        }

        .login {
            box-shadow: 0px 0px 40px 15px black;
            padding: 5%;
            width: 50%;
            margin: 10%;
        }

        span {
            color: red;
            font-size: 1vw;
        }
    </style>
</head>

<body>
    <div class="login">
        <h1>Admin - Login</h1>
        <hr />
        <form method="post">
            Username:
            <input type="text" id="uname" name="uname" placeholder="Enter Username." class="form-control"
                required /><br />
            Password:
            <input required type="password" id="pwd" name="pwd" placeholder="Enter Password." class="form-control"
                maxlength="8" /><br />
            <span id="error"><?php
                include('conn.php');

                if(isset($_REQUEST['btnSubmit']))
                {
                    $uname=$_POST['uname'];
                    $pwd=$_POST['pwd'];

                    $str="select *from Admin_Login where UserName='$uname' and Password='$pwd';";
                    $result = mysqli_query($conn,$str);
                    $row=mysqli_fetch_array($result);
                    if(!$result)
                        die("Query Failed:".mysqli_error($conn));
                    if(mysqli_num_rows($result)<1)
                        echo "Error: Enter Valid UserName and Password!!<br/>";
                    else
                    {
                        $_SESSION['UserName'] = $row['UserName'];
                        header('location:home.php');
                    }
                }
            ?></span>
            <input type="submit" id="btnSubmit" name="btnSubmit" text="Submit" class="btn btn-outline-primary" />
        </form>
    </div>
    <?php
    include('bScript.php');
    ?>
</body>

</html>