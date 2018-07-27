<?php 
use \Firebase\JWT\JWT as jwt; 
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require_once './vendor/autoload.php';
//require_once './baseDeDatos.php';
//require_once '/clases/AccesoDatos.php';
//require_once '/clases/cd.php';

$config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;

$app = new \Slim\App(["settings" => $config]);
//$app = new \Slim\Slim(["settings" => $config]);

$app->POST('/Crear', function (Request $request, Response $response){    
 
  $nombre = $request->getParsedBody()['nombre'];
  $apellido = $request->getParsedBody()['apellido'];
  $correo = $request->getParsedBody()['correo'];
  $perfil = $request->getParsedBody()['perfil'];
  
 
  $ahora=time();

 // $response->getBody()->write('<br>bienvenido'.$usuario.'con clave'.$clave.'<br>');

  $payload = array(
     'iat' => $ahora,
     'exp'=> $ahora +(15),
     'perfil' => $perfil,
     'nombre'=>$nombre,
     'apellido' => $apellido,
     'correo'=>$correo,
     'app' => "probando"
  );

  $token = JWT::encode($payload, "miClave");

  return $response->withJson($token,200);
});

$app->POST('/Verificar', function (Request $request, Response $response){

  $token =  $request->getParsedBody()['token'];

  if(empty($token) || $token === "")
  {
    
    throw new Exception("El Token esta vacio");
  }
  try
  {
    
    $payload=JWT::decode($token,'miClave',['HS256']);
    if($payload->perfil=="Administrador"){
      return $response->withJson("ADMIN",200);
    }else {
      return $response->withJson("INVITADO",200);
    }
      
    }
  
  catch(Exception $e)
  {
   
    //throw new Exception("token no valido");
    return $response->withJson("Error",406);
  } 

  

});

$app->run();

 ?>