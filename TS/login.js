"use strict";
window.onload = function () {
    if (localStorage.getItem("JSON") == null) {
        var cadJSON = [
            {
                "correo": "rocio@as.com",
                "clave": "rocio",
                "nombre": "rocio",
                "apellido": "burgos",
                "legajo": "1",
                "perfil": "Administrador",
                "foto": "rocio.jpg"
            },
            {
                "correo": "juan@as.com",
                "clave": "juan",
                "nombre": "juan",
                "apellido": "juan",
                "legajo": "2",
                "perfil": "Invitado",
                "foto": "juan.jpg"
            },
            {
                "correo": "luis@as.com",
                "clave": "luis",
                "nombre": "luis",
                "apellido": "luis",
                "legajo": "3",
                "perfil": "Invitado",
                "foto": "luis.jpg"
            },
            {
                "correo": "mariano@as.com",
                "clave": "mariano",
                "nombre": "mariano",
                "apellido": "mariano",
                "legajo": "4",
                "perfil": "Invitado",
                "foto": "mariano.jpg"
            },
            {
                "correo": "juana@as.com",
                "clave": "juana",
                "nombre": "juana",
                "apellido": "juana",
                "legajo": "5",
                "perfil": "Invitado",
                "foto": "juana.jpg"
            },
        ];
        localStorage.setItem("JSON", JSON.stringify(cadJSON));
        this.console.log(cadJSON);
        this.console.log("Elementos agregados exitosamente.");
        // console.log(localStorage.getItem("JSON"));
        /*let json:any= JSON.parse(cadJSON);

            for(let i=0;i<5;i++){
                console.log(json[i].correo+" "+json[i].legajo);
            }*/
    }
    else {
        console.log("YA HAY UN CONTNIDO EN LOCALSORAGE");
        /*  let local=localStorage.getItem("JSON");
          if(local!=null){
          let json:any= JSON.parse(local);
          for(let i=0;i<5;i++){
              console.log(json[i].correo+" "+json[i].legajo+"---");
          }
          this.console.log("Listoritii");
          }*/
    }
};
//# sourceMappingURL=login.js.map