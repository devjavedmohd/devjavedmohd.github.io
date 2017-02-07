<?php

	$errors = '';
	//$myemail = 'jalvin@ushyaku.com,Jalvin.u@gmail.com';//<-----Put Your email address here.
	$myemail = 'javed.ushyaku@gmail.com';

	if( empty($_POST['fname']) 			|| 
		empty($_POST['lname']) 			|| 
		empty($_POST['positionapply']) 	|| 
		empty($_POST['location']) 		|| 
		empty($_POST['emailadd']) 		|| 
		empty($_POST['phone']) 			|| 
		empty($_POST['resume']) 		||
		empty($_POST['yourmessage'])) {
			$errors .= "\n Error: all fields are required";
		}
if(isset($_POST['resume'])){
	$firstname 		= $_POST['fname']; 
	$lastname 		= $_POST['lname']; 
	$positionapplied= $_POST['positionapply'];
	$locate 		= $_POST['location'];
	$email_address	= $_POST['emailadd']; 
	$phone_number	= $_POST['phone']; 
	$facebook	 	= $_POST['fb']; 
	$linkedin 		= $_POST['in'];
	$twitter 		= $_POST['tw'];
	$website 		= $_POST['www']; 
	$upload_resume	= $_POST['resume']; 
	$message 		= $_POST['yourMessage']; 

	if (!preg_match( "/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", $email_address)){
	    $errors .= "\n Error: Invalid email address";
	}
}
	// //Get the uploaded file information
	// $upload_resume = basename($_FILES['uploaded_file']['name']);
	// //get the file extension of the file 
	// $type_of_uploaded_file = substr($upload_resume, strrpos($upload_resume, '.') + 1);
	// $size_of_uploaded_file = $_FILES["uploaded_file"]["size"]/1024; //size in KBs

	// //Settings
	// $max_allowed_file_size = 100; // size in KB
	// $allowed_extensions = array("doc", "pdf");
	 
	// //Validations
	// if($size_of_uploaded_file > $max_allowed_file_size ) {
	//   $errors .= "\n Size of file should be less than $max_allowed_file_size";
	// }
	 
	// //------ Validate the file extension -----
	// $allowed_ext = false;
	// for($i=0; $i<sizeof($allowed_extensions); $i++)
	// {
	//   if(strcasecmp($allowed_extensions[$i],$type_of_uploaded_file) == 0){
	//     $allowed_ext = true;
	//   }
	// }
	 
	// if(!$allowed_ext){
	//   $errors .= "\n The uploaded file is not supported file type. "." Only the following file types are supported: ".implode(',',$allowed_extensions);
	// }
	// //copy the temp. uploaded file to uploads folder

	// $path_of_uploaded_file = $uploads . $upload_resume;
	// $tmp_path = $_FILES["uploaded_file"]["tmp_name"];
	 
	// if(is_uploaded_file($tmp_path))
	// {
	//   if(!copy($tmp_path,$path_of_uploaded_file))
	//   {
	//     $errors .= '\n error while copying the uploaded file';
	//   }
	// }

	// include_once('Mail.php');
	// include_once('Mail_Mime/mime.php');

	// $message = new Mail_mime();
	// $message->setTXTBody($text);
	// $message->addAttachment($path_of_uploaded_file);
	// $body = $message->get();
	// $extraheaders = array("From"=>$from, "Subject"=>$subject,"Reply-To"=>$visitor_email);
	// $headers = $message->headers($extraheaders);
	// $mail = Mail::factory("mail");
	// $mail->send($to, $headers, $body);

	if( empty($errors)){
		$to = $myemail; 
		$email_subject = "Contact form: $name";
		$email_body = "You have received a new message. "." Here are the details:\n Name: $name \n Email: $email_address \n Company: $company \n Project Description: $project \n Message: $message";
		$headers = "From: $myemail\n"; 
		$headers .= "Reply-To: $email_address";
		
		mail($to,$email_subject,$email_body,$headers);
		//redirect to the 'thank you' page
		echo '<script language="javascript">';
		echo 'alert("Thanks for your interest! We will get in touch with you shortly.")';
		echo '</script>';
 		echo "<script type='text/javascript'> document.location = 'http://www.ushyaku.com'; </script>";
	}
	if($_POST && isset($_FILES['my_file'])) {

    $from_email = 'dev.javedmohd@gmail.com'; //sender email
    $recipient_email = 'javed.ushyaku@gmail.com'; //recipient email
    $subject = 'Test mail'; //subject of email
    $message = 'This is body of the message'; //message body
    
    //get file details we need
    $file_tmp_name    = $_FILES['my_file']['tmp_name'];
    $file_name        = $_FILES['my_file']['name'];
    $file_size        = $_FILES['my_file']['size'];
    $file_type        = $_FILES['my_file']['type'];
    $file_error       = $_FILES['my_file']['error'];
    
    $user_email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);

    if($file_error>0)
    {
        die('upload error');
    }
    //read from the uploaded file & base64_encode content for the mail
    $handle = fopen($file_tmp_name, "r");
    $content = fread($handle, $file_size);
    fclose($handle);
    $encoded_content = chunk_split(base64_encode($content));


        $boundary = md5("sanwebe"); 
        //header
        $headers = "MIME-Version: 1.0\r\n"; 
        $headers .= "From:".$from_email."\r\n"; 
        $headers .= "Reply-To: ".$user_email."" . "\r\n";
        $headers .= "Content-Type: multipart/mixed; boundary = $boundary\r\n\r\n"; 
        
        //plain text 
        $body = "--$boundary\r\n";
        $body .= "Content-Type: text/plain; charset=ISO-8859-1\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n\r\n"; 
        $body .= chunk_split(base64_encode($message)); 
        
        //attachment
        $body .= "--$boundary\r\n";
        $body .="Content-Type: $file_type; name=\"$file_name\"\r\n";
        $body .="Content-Disposition: attachment; filename=\"$file_name\"\r\n";
        $body .="Content-Transfer-Encoding: base64\r\n";
        $body .="X-Attachment-Id: ".rand(1000,99999)."\r\n\r\n"; 
        $body .= $encoded_content; 
    
    $sentMail = @mail($recipient_email, $subject, $body, $headers);
    if($sentMail) //output success or failure messages
    {       
        die('Thank you for your email');
    }else{
        die('Could not send mail! Please check your PHP mail configuration.');  
    }

}
?>
 