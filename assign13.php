<?php
   $myFile = fopen("data/newFile.txt", "r+") or die("ERROR");
   $name  = $_POST['name'];
   $myObj->name = $name;
   file_put_contents("data/newFile.txt", "<strong>Name:</strong> " . "<td>" .$name . "</td></tr>" . "\n", FILE_APPEND);
   
   $email  = $_POST['email'];
   $myObj->email = $email;
   file_put_contents("data/newFile.txt", "<strong>Email:</strong> " . $email . "\n", FILE_APPEND);

   $subject = $_POST['subject'];
   $myObj->subject = $subject;
   if (!empty($subject)) {
     file_put_contents("data/newFile.txt", "<strong>Subject:</strong> " . $subject . "\n", FILE_APPEND);
   }

   $message  = $_POST['message'];
   $myObj->message = $message;
   if (!empty($message)) {
     file_put_contents("data/newFile.txt", "<strong>Message:</strong> " . $message . "\n", FILE_APPEND);
   }
   
   $to_email_address = "adamrussellgerhartz@gmail.com";
   
   mail($to_email_address,$subject,$message);

   
   /*if (filesize("data/newFile.txt")) {
   }

   $directory = Array();
   //$myJSON = json_encode($myObj);
   //array__push($directory, $myJSON);
   //->firstName;
   //file_put_contents("data/newFile.txt", $directory, FILE_APPEND);


   //file_put_contents("data/newFile.txt", "
*/






   
   // display contents
   echo file_get_contents("data/newFile.txt") . "<br>";
   fclose($myfile);
?>