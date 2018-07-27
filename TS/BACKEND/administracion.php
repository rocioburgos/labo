<?php

$caso = isset($_POST["caso"]) ? $_POST["caso"] : null;

switch ($caso) {

    case "subirFoto":

    $objRetorno = new stdClass();
    $objRetorno->Ok = false;
    $nombreOriginal=$_FILES['foto']['name'];
    $extencion=pathinfo($nombreOriginal, PATHINFO_EXTENSION);
    $nombre =  date("Ymd_His") .".". $extencion;
    
    if(move_uploaded_file($_FILES["foto"]["tmp_name"], "./Fotos/" .$nombre) ){
        $objRetorno->Ok = true;
        $objRetorno->Path = $nombre;
    }

    echo json_encode($objRetorno);

    break;
    case "eliminarUsuario":
       
        $archivo=$_POST["foto"];
        $nuevoPath="./Fotos/FotosEliminadas/".$archivo;
      //  rename("./Fotos/".$archivo, $nuevoPath);
        unlink("./Fotos/".$archivo);
        echo json_encode($archivo);
      break;
    default:
        echo ":(";
    break;
}


