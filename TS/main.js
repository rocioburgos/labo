"use strict";
/// <reference path="./validaciones.ts" />
var Main;
(function (Main) {
    var Login = /** @class */ (function () {
        function Login() {
        }
        Login.Enviar = function () {
            var email = document.getElementById('login-username').value;
            var clave = document.getElementById('login-password').value;
            if (Main.Validaciones.ValidacionesLG()) {
                var cadJSON = localStorage.getItem("JSON");
                var existe = false;
                var datos;
                if (cadJSON != null) {
                    var json = JSON.parse(cadJSON);
                    var _loop_1 = function (i) {
                        var email2 = json[i].correo;
                        var clave2 = json[i].clave;
                        if (email == email2 && clave == clave2) {
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
                            var xhttp_1 = new XMLHttpRequest();
                            xhttp_1.open("POST", "./TS/BACKEND/Crear", true); //El ruteo
                            xhttp_1.setRequestHeader("content-type", "application/x-www-form-urlencoded");
                            xhttp_1.send("nombre=" + json[i].nombre + "&correo=" + json[i].correo + "&apellido=" + json[i].apellido + "&perfil=" + json[i].perfil); //En forma de cadena
                            xhttp_1.onreadystatechange = function () {
                                if (xhttp_1.readyState == 4 && xhttp_1.status == 200) {
                                    localStorage.setItem("miToken", xhttp_1.responseText);
                                    window.location.href = "./principal.html";
                                }
                            };
                            existe = true;
                        }
                    };
                    for (var i = 0; i < json.length; i++) {
                        _loop_1(i);
                    }
                    if (!existe) {
                        document.getElementById('errorAlert').innerHTML = "<div class=\"alert alert-danger\" role=\"alert\">\n                El usuario no esta registrado.\n              </div>";
                    }
                }
            }
        };
        return Login;
    }());
    Main.Login = Login;
})(Main || (Main = {}));
//# sourceMappingURL=main.js.map