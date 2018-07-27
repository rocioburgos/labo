"use strict";
window.onload = function () {
    var _this = this;
    if (this.localStorage.getItem("miToken") != null) {
        var token = "" + localStorage.getItem("miToken");
        var nuevoToken = token.substring(1, token.length - 1); //token sin comillas
        var xhttp_1 = new XMLHttpRequest();
        xhttp_1.open("POST", "./TS/BACKEND/Verificar", true); //El ruteo
        xhttp_1.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhttp_1.send("token=" + nuevoToken); //En forma de cadena
        xhttp_1.onreadystatechange = function () {
            if (xhttp_1.readyState == 4 && xhttp_1.status == 200) {
                var perfil = JSON.parse(xhttp_1.responseText);
                var elementos = localStorage.getItem("JSON");
                if (elementos != null) {
                    var arrayJson = JSON.parse(elementos);
                    if (perfil == "ADMIN") {
                        for (var i = 0; i < arrayJson.length; i++) {
                            document.getElementById("tabla").innerHTML += "<th>" + arrayJson[i].correo + "</th><th>" + arrayJson[i].nombre + "</th><th>" + arrayJson[i].apellido + "</th><th>" + arrayJson[i].perfil + "</th><th>" + arrayJson[i].legajo + "</th><th><img  width='50px' src='./TS/BACKEND/Fotos/" + arrayJson[i].foto + "'></th><th> <button id='eliminar' name='borrar' class='btn btn-danger' onclick='Main.Admin.Eliminar(" + JSON.stringify(arrayJson[i]) + ")'>Borrar</button></th>";
                            //MODIFICAR<th><button id='modificar' name='modificar' data-toggle='modal' data-target='#myModal' class='btn btn-warning' onclick='Main.Admin.SetearModificar("+JSON.stringify(arrayJson[i])+")'>Modificar</button</th>
                        }
                    }
                    else if (perfil == "INVITADO") {
                        for (var i = 0; i < arrayJson.length; i++) {
                            document.getElementById("tabla").innerHTML += "<th>" + arrayJson[i].correo + "</th><th>" + arrayJson[i].nombre + "</th><th>" + arrayJson[i].apellido + "</th><th>" + arrayJson[i].perfil + "</th><th>" + arrayJson[i].legajo + "</th><th><img  width='50px' src='./TS/BACKEND/Fotos/" + arrayJson[i].foto + "'></th>";
                        }
                    }
                }
            }
            else if (xhttp_1.status == 406) { //si el error esta en 
                _this.window.location.href = "./login.html";
            }
        };
    }
};
//# sourceMappingURL=principal.js.map