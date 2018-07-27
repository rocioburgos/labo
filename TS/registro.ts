/// <reference path="./validaciones.ts" />

namespace Main{
    export class Registro{

        public static Registrar(){
            var email:string=(<HTMLInputElement>document.getElementById("register-email")).value;
            var nombre = (<HTMLInputElement>document.getElementById('register-name')).value;
            var clave = (<HTMLInputElement>document.getElementById('register-password')).value; 
            var claveConfirm = (<HTMLInputElement>document.getElementById('register-confirmar')).value; 
            var apellido = (<HTMLInputElement>document.getElementById('register-surname')).value;
            var legajo = parseInt((<HTMLInputElement>document.getElementById('register-legajo')).value);
            var perfil = (<HTMLInputElement>document.getElementById('register-perfil')).value;
            var foto:any = (<HTMLInputElement>document.getElementById('register-foto'));

           if(Main.Validaciones.AdministrarValidacionesRegistro(email,nombre,apellido,clave,claveConfirm,legajo) && foto!=null){}

          var cadJSON=localStorage.getItem("JSON");
         
           var existe=false;
           var json:any;
            if(cadJSON!= null){
                
              json=  JSON.parse(cadJSON);
                
               for(let i=0;i<json.length;i++){              
                    if(json[i].correo== email){
                        existe=true;
                        (<HTMLDivElement>document.getElementById('emailExiste')).innerHTML = `<div class="alert alert-danger" role="alert">
                        El email ya esta registrado.
                        </div>`
                    }
                }
            }
            
            if(!existe){
                (<HTMLDivElement>document.getElementById('emailExiste')).innerHTML ="";
         
              //  Registro.SubirFoto(foto);
              //C:\fakepath\IMG_0729.jpg
             //  var fotoNombre:string=""+  Registro.SubirFoto(foto);
              /*var nombreFoto= foto.value;
              let len="C:\\fakepath\\";
              nombreFoto=foto.value.replace(len,"");*/
              var xhr : XMLHttpRequest = new XMLHttpRequest();
                
                var form : FormData = new FormData();
              
                form.append('foto', foto.files[0]);
                form.append('caso', "subirFoto");

                xhr.open('POST', './TS/BACKEND/administracion.php', true);
                xhr.setRequestHeader("enctype", "multipart/form-data");
                xhr.send(form);
                xhr.onreadystatechange = () => {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        console.log(xhr.responseText);  
                       var retJSON = JSON.parse(xhr.responseText);
                       
                        if(!retJSON.Ok){
                            console.error("NO se subió la foto!!!");
                          
                        }
                        else{
                            console.info("Foto subida OK!!!");
                         //   alert("fotooo nombre: "+retJSON.Path);
                            let nuevoUsuario ={ 
                             "correo" : email, 
                             "clave" : clave , 
                             "nombre" : nombre, 
                             "apellido" : apellido ,
                             "legajo":legajo ,  
                             "foto":retJSON.Path,
                             "perfil": perfil
                            
                              };
                             json.push(nuevoUsuario);
                             localStorage.setItem("JSON",JSON.stringify(json));
                             window.location.href="./login.html";
                        }            
                    }
             
                           
                        }
                    
                  

            
        }else
        {
            alert("NO SE PASO LA VALIDACIONES");
        }


    }

        private static SubirFoto(foto:any){

                let xhr : XMLHttpRequest = new XMLHttpRequest();
                
                let form : FormData = new FormData();
                form.append('foto', foto.files[0]);
                form.append('caso', "subirFoto");

                xhr.open('POST', './TS/BACKEND/administracion.php', true);
                xhr.setRequestHeader("enctype", "multipart/form-data");
                xhr.send(form);

            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    console.log(xhr.responseText);  
                   var retJSON = JSON.parse(xhr.responseText);
                   
                    if(!retJSON.Ok){
                        console.error("NO se subió la foto!!!");
                      
                    }
                    else{
                        console.info("Foto subida OK!!!");
                       return retJSON.Path;
                       
                    }
                }
                return "";
            };
        

        }
                        

        
}


    }
