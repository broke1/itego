
<?php



include_once('PHPMailer/class.phpmailer.php');
include_once('PHPMailer/class.smtp.php');





class SendForms {

    public $name_form = ''; // Имя формы
    public $name = ''; // Имя
    public $phone = ''; // Телефон
    public $email = ''; // E-mail
    public $otziv = '';  // Сообщение
    public $to_mail = ''; // Кому отправлять письма 
    public $select = ''; //Выбранная вакансия


    public function sendmail() {


         print_r($_POST);

           
             
           
         if ($this->name != '') {
            $this->name = htmlspecialchars($this->name);
            $this->name = trim($this->name);
         }
         if ($this->phone != '') {
            $this->phone = htmlspecialchars($this->phone);
            $this->phone = trim($this->phone);
         }
         if ($this->email != '') {
            $this->email = htmlspecialchars($this->email);
            $this->email = trim($this->email);
         }

        // mail($this->to_mail, "Хочу сотрудничать", "Мое имя:   ".$this->name." \r\nМой телефон:   ".$this->phone." \r\nМоя почта:   ".$this->email,"From: itego.pro \r\n"."Content-type: text/plain; charset=UTF-8\r\n");

        // Создаем письмо
        $email = new PHPMailer();
        $email->SMTPAuth = true;
        $email->SMTPSecure = 'ssl';
        $email->Host = "smtp.yandex.ru";
        $email->Mailer = "smtp";
        $email->Port = 465; 
        $email->Username = "zakaz@itego.pro";
        $email->Password = "Z0OcmfC3vsD4";
        //$email->isSMTP();                   // Отправка через SMTP
        // $email->Host   = 'smtp.yandex.ru';  // Адрес SMTP сервера
       // $mail->Mailer = "smtp";
        //$email->SMTPAuth   = true;          // Enable SMTP authentication
        // $email->Username   = 'broke1@yandex.ru';       // ваше имя пользователя (без домена и @)
        // $email->Password   = 'Fghbjhb1606';    // ваш пароль
        //$email->SMTPSecure = 'tsl';         // шифрование ssl
        // $email->Port   = 465;               // порт подключения
        // $email->Host = 'ssl://smtp.yandex.ru';
        // $email->Port = 465;
        // $email->Username = 'broke1@yandex.ru';
        // $email->Password = 'Fghbjhb1606';
        
        $email->setFrom('zakaz@itego.pro', 'Itego.pro');    // от кого
        $email->addAddress($this->to_mail, 'Itego'); // кому
        
        // $email->Subject = 'Тест';
        // $email->msgHTML("<html><body>
        //                 <h1>Здравствуйте!</h1>
        //                 <p>Это тестовое письмо.</p>
        //                 </html></body>");
        $email->Subject   = 'Хочу сотрудничать';
        $email->Body      = "Мое имя:   ".$this->name." \r\nМой телефон:   ".$this->phone." \r\nМоя почта:   ".$this->email;
        $email->CharSet = "UTF-8";
        // Отправляем
        if ($email->send()) {
          echo 'Письмо отправлено!';
        } else {
          echo 'Ошибка: ' . $email->ErrorInfo;
        }

        // if ($this->name_form == 'callback') {
        //        mail($this->to_mail, "Хочу записаться", "Мое имя:   ".$this->name." \r\nМой телефон:   ".$this->phone,"From: artmemaster.ru \r\n"."Content-type: text/plain; charset=UTF-8\r\n");
        // } elseif($this->name_form == 'otzivi') {
            
        //               $email = new PHPMailer();
        //                 $email->From      = 'artmemaster@yandex.ru';
        //                 $email->FromName  = 'artmemaster.ru';
        //                 $email->Subject   = 'Мой отзыв';
        //                 $email->Body      = "Мое имя:   ".$this->name." \r\nМой телефон:   ".$this->phone." \r\nМой вопрос:   ".$this->otziv;
        //                 $email->CharSet = "UTF-8";
        //                 $adres = explode(',',$this->to_mail);
        //                 foreach ($adres as $key=>$value) {
        //                   $email->AddAddress( $value);
        //                 }
                        
                        
        //                 //$file_to_attach = 'PATH_OF_YOUR_FILE_HERE';
        //                 if ($_FILES) {
        //                 $email->AddAttachment( $_FILES['file']['tmp_name'] , $_FILES['file']['name'] );
        //                 }
        //                 if(!$email->Send()) {
        //                   echo $email->ErrorInfo;
        //                 }
                        
        // } elseif($this->name_form == "consult") {
        //      mail($this->to_mail, "Хочу получить консультацию", "Мое имя:   ".$this->name." \r\nМой телефон:   ".$this->phone,"From: artmemaster.ru \r\n"."Content-type: text/plain; charset=UTF-8\r\n");
        // }  elseif($this->name_form == "vacansy") {
           
        //       $email = new PHPMailer();
        //                 $email->From      = 'artmemaster@yandex.ru';
        //                 $email->FromName  = 'artmemaster.ru';
        //                 $email->Subject   = 'Хочу работать у Вас';
        //                 $email->Body      = "Мое имя:   ".$this->name." \r\nМой телефон:   ".$this->phone." \r\nНазвание вакансии:   ".$this->select;
        //                 $email->CharSet = "UTF-8";
        //                 $adres = explode(',',$this->to_mail);
        //                 foreach ($adres as $key=>$value) {
        //                   $email->AddAddress( $value);
        //                 }
                        
                        
        //                 //$file_to_attach = 'PATH_OF_YOUR_FILE_HERE';
        //                 if ($_FILES) {
        //                 $email->AddAttachment( $_FILES['file']['tmp_name'] , $_FILES['file']['name'] );
        //                 }
        //                 if(!$email->Send()) {
        //                   echo $email->ErrorInfo;
        //                 }
        // }
        
        
    
  
       

    }




}



//$val = $_GET[val];

$send = new SendForms();
 /*
foreach ($val as $key => $value) {
   // echo $valey['id_of_form'];
  
  if ($value[name] == 'id_of_form') {
    $send->id_of_form = $value[value];
  }
  if ($value[name] == 'name_of_product') {
    $send->name_of_product = $value[value];
  }
  if ($value[name] == 'name') {
    $send->name = $value[value];
  }
  if ($value[name] == 'email') {
    $send->email = $value[value];
  }
  if ($value[name] == 'phone') {
    $send->phone = $value[value];
  }
  if ($value[name] == 'text') {
    $send->text = $value[value];
  }
} */
//echo print_r($val);


if ($_POST['name_form']) {
    $send->name_form = $_POST['name_form'];
  }
if ($_POST['name']) {
  $send->name = $_POST['name'];
}
  if ($_POST['phone']) {
    $send->phone = $_POST['phone'];
  }
  if ($_POST['email']) {
    $send->email = $_POST['email'];
  }
  if ($_POST['otziv']) {
      $send->otziv = $_POST['otziv'];
  }
  if ($_POST['select']) {
      $send->select = $_POST['select'];
  }

    
    
    

$send->to_mail = "an@itego.pro";
//an@itego.pro
// bykova@antivor.ru
//$send->name_of_site = "ArtMeMaster";
$send->sendmail();
//$send->sendcis();

/*
$post = json_encode($_POST);
$ip = $_SERVER['REMOTE_ADDR'];
exec('php '.$_SERVER['DOCUMENT_ROOT'].'/myforms/sendCis.php '.urlencode($post).' '.$ip.' > /dev/null &'); */



?>
