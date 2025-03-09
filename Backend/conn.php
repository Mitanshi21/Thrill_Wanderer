<?php

   $conn = new mysqli("localhost","root","","minor_project");

   if($conn ->connect_error)    
        die("Connection Failed!!".$conn->connect_error);
    // else
    //     echo "Success";
?>