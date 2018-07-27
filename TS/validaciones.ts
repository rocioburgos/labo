namespace Main{

    export class Validaciones{  



        public static ValidacionesLG():boolean{
            let email:string=(<HTMLInputElement>document.getElementById('login-username')).value;
            let clave:string=(<HTMLInputElement>document.getElementById('login-password')).value;
            var retornoM=false;
            var retornoC=false;
            if(email==""){
                retornoM=false;
                (<HTMLDivElement>document.getElementById('spnEmail')).style.display= "block";
                (<HTMLDivElement>document.getElementById('errorEmail')).innerHTML = `<div class="alert alert-danger" role="alert">
                Campo EMAIL vacio.
            </div>`
            }else if(!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email))){
                // (<HTMLInputElement>document.getElementById('alerts')).innerHTML="<div class='alert alert-warning' role='alert'>Email no valido</div>";
                (<HTMLDivElement>document.getElementById('spnEmail')).style.display= "block";
                (<HTMLDivElement>document.getElementById('errorEmail')).innerHTML = `<div class="alert alert-danger" role="alert">
            Controle el formato del Email.
            </div>` 
                retornoM= false;
            }
            else
            {
                retornoM= true;
                (<HTMLDivElement>document.getElementById('spnEmail')).style.display= "none";
                (<HTMLDivElement>document.getElementById('errorEmail')).innerHTML = "";
            }


            if(clave==""){
                retornoC=false;
                (<HTMLDivElement>document.getElementById('spnClave')).style.display= "block";
                (<HTMLDivElement>document.getElementById('errorClave')).innerHTML = `<div class="alert alert-danger" role="alert">
                Campo CLAVE vacio.
            </div>`
            }else if(clave.length>8 || clave.length<4){
                retornoC= false;
                (<HTMLDivElement>document.getElementById('spnClave')).style.display= "block";
                (<HTMLDivElement>document.getElementById('errorClave')).innerHTML = `<div class="alert alert-danger" role="alert">
            Largo de clave no valido.
            </div>`

            }else{
                retornoC=true;
                (<HTMLDivElement>document.getElementById('spnClave')).style.display= "none";
                (<HTMLDivElement>document.getElementById('errorClave')).innerHTML = "";
            }
        if(retornoC== true && retornoM==true){
            return true;
        }else{
            return false;
        }
            
        
        }
   
    public static AdministrarValidacionesRegistro(email:string, nombre:string, apellido:string,clave:string,claveConfim:string,legajo:number){

    var rtnEmail=false;
    if(email==""){
        Validaciones.AdministrarSpan(true,"spnEmail","errorEmail","Error en el email.");
    }else if(!Validaciones.ValidarEmailFormato(email)){
        Validaciones.AdministrarSpan(true,"spnEmail","errorEmail","Error en el email.");
    }else{
        Validaciones.AdministrarSpan(false,"spnEmail","errorEmail","");
        rtnEmail=true;
    }

   
    
    var rtnName=false;
    if(nombre==""){
        Validaciones.AdministrarSpan(true,"spnNombre","errorNombre","Error en el nombre.");
    }else if(!Validaciones.ValidarNombre(nombre)){
        Validaciones.AdministrarSpan(true,"spnNombre","errorNombre","Error en el nombre.");
    }else{
        Validaciones.AdministrarSpan(false,"spnNombre","errorNombre","");
        rtnName=true;
    }
   

    var rtnApellido=false;
    if(apellido==""){
        Validaciones.AdministrarSpan(true,"spnApellido","errorApellido","Error en el apellido.");
    }else if(!Validaciones.ValidarApellido(apellido)){
        Validaciones.AdministrarSpan(true,"spnApellido","errorApellido","Error en el apellido.");
    }else{
        Validaciones.AdministrarSpan(false,"spnApellido","errorApellido","");
        rtnApellido=true;
    }
   

    var rtnClave=false;
    if(clave==""){
        Validaciones.AdministrarSpan(true,"spnClave","errorClave","Error en la clave.");
    }else{
        Validaciones.AdministrarSpan(false,"spnClave","errorClave","");
        rtnClave=true;
    }
   
    
    if(claveConfim==""){
        Validaciones.AdministrarSpan(true,"spnClaveConf","errorClave","Error en la clave.");
        rtnClave=false;
    }else{
        Validaciones.AdministrarSpan(false,"spnClaveConf","errorClave","");
        rtnClave=true;
    }
   
    
    if(clave!=claveConfim){
        (<HTMLDivElement>document.getElementById('errorClaveIguales')).innerHTML = `<div class="alert alert-warning" role="alert">
        Las claves deben ser iguales.
      </div>`
        rtnClave=false;
    }else{
        (<HTMLDivElement>document.getElementById('errorClaveIguales')).innerHTML ="";
        rtnClave=true;
    }


    var rtnLegajo=false;
    if(legajo.toString()==""){
        Validaciones.AdministrarSpan(true,"spnLegajo","errorLegajo","Error en el legajo.");
    }else if(!Validaciones.ValidarNombre(nombre)){
        Validaciones.AdministrarSpan(true,"spnLegajo","errorLegajo","Error en el legajo.");
    }else{
        Validaciones.AdministrarSpan(false,"spnLegajo","errorLegajo","");
        rtnLegajo=true;
    }
   

    var rtnFoto=false;
    var archivo =(<HTMLInputElement>document.getElementById('register-foto'));
    if(archivo==null){
        Validaciones.AdministrarSpan(true,"spnFoto","errorFoto","Error en la foto.");
    }else if(!Validaciones.ValidarExtensionFoto()){
        Validaciones.AdministrarSpan(true,"spnFoto","errorFoto","Error en la foto.");
    }else{
        Validaciones.AdministrarSpan(false,"spnFoto","errorFoto","");
        rtnFoto=true;
    }
   

    if(rtnName && rtnApellido && rtnClave && rtnLegajo && rtnEmail&& rtnFoto){
        
        return true;
    }else{
        
        return false;
    }

    
}
     public static Validaciones(email:string, clave:string):boolean{

            if(email!="" && Validaciones.ValidarEmailFormato(email) && Validaciones.ValidacionesClave(clave)){
                return true;
            }
          return false;
           
        }

        public static AdministrarSpan(setear:boolean, idCampo:string, idAlert:string, mensaje:string){
            if(setear==true){/*Agregar el error */
                (<HTMLDivElement>document.getElementById(idCampo)).style.display= "block";
                (<HTMLDivElement>document.getElementById(idAlert)).innerHTML = '<div class="alert alert-warning" role="alert">'+mensaje+'</div>' 
            }else{ /**  Quitar el error */
              
                (<HTMLDivElement>document.getElementById(idCampo)).style.display= "none";
                (<HTMLDivElement>document.getElementById(idAlert)).innerHTML ="";
            }
        }

         

         public static ValidacionesClave(clave:string):boolean{
            if(Validaciones.ValidarCamposVacios(clave)){
                if(Validaciones.ValidarClaveLargo(clave)){
                    return true;
                }
            }
            return false;
        }

         public static ValidarEmailFormato(email:string):boolean{
            
            if (!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email))){
             
                return false;
            }else{
                return true;
            }
        }

         public static ValidarClaveLargo(clave:string):boolean{

            if(clave.length>8 || clave.length<4){
                return false;
            }
            return true;
        }
         
         public static ValidarCamposVacios(campo:string):boolean{
            if(campo.length>0){
                return true;
            }
            return false;
        }


         public static ValidarApellido(apellido:string):boolean{
            if(apellido.length>15 || apellido.length==0){
                return false;
            }
            return true;

        }
        
        public static ValidarNombre(nombre:string):boolean{
            if(nombre.length>10 || nombre.length==0){
                return false;
            }
            return true;

        }

         public static ValidarLegajo(legajo:number):boolean{
            if(legajo %1==0){

            if(legajo.toString().length<3 || legajo.toString().length>6){
                return false;
            }
            return true;
            }else{
                return false;
            }
        }

        
        public static ValidarExtensionFoto():boolean {
              
        
        var archivo =(<HTMLInputElement>document.getElementById('register-foto'));
        var extensionesPermitidas = new Array(".png",".jpg");
   //     var miError = "";
        var permitida = false;
        if (!archivo){}
        else
        {
          var extension = (archivo.value.substring(archivo.value.lastIndexOf("."))).toLowerCase();
         
           for (var i = 0; i < extensionesPermitidas.length; i++) 
           {
                if (extensionesPermitidas[i] == extension) 
                {
                    permitida = true;
                    break;
                }
         }
        /* if (!permitida)
         {
             alert("Comprueba la extensión de los archivos a subir. \nSólo se pueden subir archivos con extension: " + extensionesPermitidas.join());
             (<HTMLDivElement>document.getElementById('spnFoto')).style.display= "block";
                (<HTMLDivElement>document.getElementById('erroresRegistro')).innerHTML = `<div class="alert alert-warning" role="alert">
               Controle el formato de la foto.
              </div>`
            }
          }*/
         
           

        } 
        return permitida;
    }

     public static ValidarClaves(clave:string, claveDos:string){
        if(clave==claveDos){
            return true;
        }else{
            return false;
        }
    }
}
}