/// <reference path="./validaciones.ts" />
namespace Main{
    export class Login{ 

    public static Enviar(){
        let email:string=(<HTMLInputElement>document.getElementById('login-username')).value;
        let clave:string=(<HTMLInputElement>document.getElementById('login-password')).value;
        
        if(Validaciones.ValidacionesLG()){ 
        var cadJSON=localStorage.getItem("JSON"); 
        var existe= false;
        var datos;
       

        if(cadJSON!= null){
            let json:any= JSON.parse(cadJSON);

            for(let i=0;i<json.length;i++){
              let email2= json[i].correo;
              let clave2= json[i].clave;
            
              
              if(email== email2 && clave== clave2){
               /* let xhttp : XMLHttpRequest = new XMLHttpRequest();
                xhttp.open("POST", "./TS/BACKEND/Crear", true);//El ruteo
                xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
                
                xhttp.send("nombre="+json[i].nombre+"&correo="+json[i].correo+"&apellido="+json[i].apellido+"&perfil="+json[i].perfil);//En forma de cadena
               
                xhttp.onreadystatechange = () => {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                        alert(xhttp.responseText);
                       
                        localStorage.setItem("miToken",xhttp.responseText);
                        window.location.href="./principal.html";
                    }
                };
                
                  
                  existe=true;
                  break;*/
                   //generar un token y guardarlo en LS
                let xhttp : XMLHttpRequest = new XMLHttpRequest();
                xhttp.open("POST", "./TS/BACKEND/Crear", true);//El ruteo
                xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
                xhttp.send("nombre="+json[i].nombre+"&correo="+json[i].correo+"&apellido="+json[i].apellido+"&perfil="+json[i].perfil);//En forma de cadena
                xhttp.onreadystatechange = () => {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                   
                   
                        localStorage.setItem("miToken",xhttp.responseText);
                        window.location.href="./principal.html";
                    }
                }; 
                existe=true;
              }
            }
           
            if(!existe){ 
                (<HTMLDivElement>document.getElementById('errorAlert')).innerHTML = `<div class="alert alert-danger" role="alert">
                El usuario no esta registrado.
              </div>`
            }
           
   
            
        }
    }
}





}
}
