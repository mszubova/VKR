<?php
try{
    $postData = file_get_contents('php://input');
    $data = parse_str($postData);
    $data = json_decode($postData, true);
}catch(Exception $e){
    returnError($e);
}

try{
    global $pdo;
    switch($data["type"]){
        case "Authorization":
            $DBresult = auth($data["login"], $data["password"]);
            request($DBresult);
            break;
        case "Registration":
            regist($data["login"], $data["password"], $data["email"]);
            break;
        case "personData":
            include "personSrc/personData.php";
            setData($data['login']);
            request($personData);
            break;
        default:
            returnError("Unknown type");
            break;
    }
}
catch( Extension $e){
    returnError($e);
}

function auth($login, $password){
    $driver = 'mysql';
    $host = 'localhost';
    $port = '3306';
    $db_name = 'ProgressCenter';
    $db_user = 'root';
    $db_pass = 'qqwweerrttyy123';
    $charset = 'utf8';
    $options = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION];
    $pdo;
    try{
        $pdo = new PDO("$driver:host=$host;port=$port;dbname=$db_name;charset=$charset",$db_user,$db_pass,$options);
        $data = $pdo->query("SELECT * FROM `user` WHERE `login` = '".$login."' AND `password` = '$password'");
        
        foreach($data as $row){
        if($row['login'] == $login){
                $answer = array(
                'login' => $login,
                'authorization' => true
                );    
            }
            return($answer);
        }
        $answer = array(
            'login' => $login,
            'authorization' => false
        ); 
        return($answer);
    }
    catch(PDOException $e){
        returnError($e);
    }
}

function regist($login, $password, $email){
    try{
        $driver = 'mysql';
        $host = 'localhost';
        $port = '3306';
        $db_name = 'ProgressCenter';
        $db_user = 'root';
        $db_pass = 'qqwweerrttyy123';
        $charset = 'utf8';
        $options = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION];
        $pdo;
        try{
            $pdo = new PDO("$driver:host=$host;port=$port;dbname=$db_name;charset=$charset",$db_user,$db_pass,$options);
            
        }catch(PDOException $e){
            returnError("DB connection error");
        }
        if(entireCheck($login, $pass)){
            if(loginCheking($pdo, $login)){
                $answer = array(
                    'login' => $login,
                    'using' => true,
                );
                returnError($answer);
            }else{
                if(!emailCheck($pdo, $email)){
                    registration($login, $password, $email, $pdo);
                }
                else{
                    $answer = array(
                    'email' => $email,
                    'using' => true,
                );
                returnError($answer);
                }
            }
        }else{
            returnError("Login or passwod input error");
        }
    }catch(Extension $e){
        returnError($e);
    }
}

function emailCheck($pdo, $email){
    try{
        $stmt = $pdo->query("SELECT * FROM `user` WHERE `email` = '$email'");
        while ($row = $stmt->fetch())
        {
            if($row['email'] == $email){
                return true;
            }
            else{
                return false;
            }
        }
    }
    catch(Extension $e){
        returnError($e);
    }
}

function registration($login, $password, $email, $pdo){
    try{
        $zap = $pdo->query("INSERT INTO user (login, password, email, role) VALUES ('$login', '$password', '$email', 'user')");
        $answer = array(
            'login' => $login,
            'registration' => true,
        );
        request($answer);
    }
    catch(Extension $e){
        returnError($e);
    }
}

function loginCheking($pdo, $login){
    try{
        $stmt = $pdo->query("SELECT * FROM `user` WHERE `login` = '$login'");
        while ($row = $stmt->fetch())
        {
            if($row['login'] == $login){
                return true;
            }
            else{
                return false;
            }
        }
    }
    catch(Extension $e){
        returnError($e);
    }
}

function entireCheck($login, $password){
    session_start();
    if($login != "" || $password != ""):
    return true;
    else:
    return false;
    endif;
}

function request($data){
    header('Content-Type: application/json');
    echo json_encode($data);
}

function returnError($error){
    $answer = array(
            'errorType' => $error,
        );
        header('Content-Type: application/json');
        $json = json_encode($answer);
        echo ($json);
        exit;
    exit;
    }
?>