window.onload= function():void {


if( this.localStorage.getItem("miToken")!=null){ 

    var token=""+ localStorage.getItem("miToken"); 
    var nuevoToken:string=token.substring(1,token.length-1);//token sin comillas
    let xhttp : XMLHttpRequest = new XMLHttpRequest();
    xhttp.open("POST", "./TS/BACKEND/Verificar", true);//El ruteo
    xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
    xhttp.send("token="+nuevoToken);//En forma de cadena
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var perfil=JSON.parse(xhttp.responseText);
            
            var elementos=localStorage.getItem("JSON");
            if(elementos!=null){
                var arrayJson=JSON.parse(elementos);
                if(perfil=="ADMIN"){
  
                    for(let i=0;i<arrayJson.length;i++){
                        (<HTMLSelectElement>document.getElementById("tabla")).innerHTML+="<th>"+arrayJson[i].correo+"</th><th>"+arrayJson[i].nombre+"</th><th>"+arrayJson[i].apellido+"</th><th>"+arrayJson[i].perfil+"</th><th>"+arrayJson[i].legajo+"</th><th><img  width='50px' src='./TS/BACKEND/Fotos/"+arrayJson[i].foto+"'></th><th> <button id='eliminar' name='borrar' class='btn btn-danger' onclick='Main.Admin.Eliminar("+JSON.stringify(arrayJson[i])+")'>Borrar</button></th>";
                        //MODIFICAR<th><button id='modificar' name='modificar' data-toggle='modal' data-target='#myModal' class='btn btn-warning' onclick='Main.Admin.SetearModificar("+JSON.stringify(arrayJson[i])+")'>Modificar</button</th>
                    }  
                }else if(perfil=="INVITADO"){
                    for(let i=0;i<arrayJson.length;i++){
                        (<HTMLSelectElement>document.getElementById("tabla")).innerHTML+="<th>"+arrayJson[i].correo+"</th><th>"+arrayJson[i].nombre+"</th><th>"+arrayJson[i].apellido+"</th><th>"+arrayJson[i].perfil+"</th><th>"+arrayJson[i].legajo+"</th><th><img  width='50px' src='./TS/BACKEND/Fotos/"+arrayJson[i].foto+"'></th>";
                    } 
                }                  
            }   
        }else if(xhttp.status==406){//si el error esta en 
            this.window.location.href="./login.html";
        }           
    }

}
}
