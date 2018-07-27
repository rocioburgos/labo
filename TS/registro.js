"use strict";
/// <reference path="./validaciones.ts" />
var Main;
(function (Main) {
    var Registro = /** @class */ (function () {
        function Registro() {
        }
        Registro.Registrar = function () {
            var email = document.getElementById("register-email").value;
            var nombre = document.getElementById('register-name').value;
            var clave = document.getElementById('register-password').value;
            var claveConfirm = document.getElementById('register-confirmar').value;
            var apellido = document.getElementById('register-surname').value;
            var legajo = parseInt(document.getElementById('register-legajo').value);
            var perfil = document.getElementById('register-perfil').value;
            var foto = document.getElementById('register-foto');
            if (Main.Validaciones.AdministrarValidacionesRegistro(email, nombre, apellido, clave, claveConfirm, legajo) && foto != null) { }
            var cadJSON = localStorage.getItem("JSON");
            var existe = false;
            var json;
            if (cadJSON != null) {
                json = JSON.parse(cadJSON);
                for (var i = 0; i < json.length; i++) {
                    if (json[i].correo == email) {
                        existe = true;
                        document.getElementById('emailExiste').innerHTML = "<div class=\"alert alert-danger\" role=\"alert\">\n                        El email ya esta registrado.\n                        </div>";
                    }
                }
            }
            if (!existe) {
                document.getElementById('emailExiste').innerHTML = "";
                //  Registro.SubirFoto(foto);
                //C:\fakepath\IMG_0729.jpg
                //  var fotoNombre:string=""+  Registro.SubirFoto(foto);
                /*var nombreFoto= foto.value;
                let len="C:\\fakepath\\";
                nombreFoto=foto.value.replace(len,"");*/
                var xhr = new XMLHttpRequest();
                var form = new FormData();
                form.append('foto', foto.files[0]);
                form.append('caso', "subirFoto");
                xhr.open('POST', './TS/BACKEND/administracion.php', true);
                xhr.setRequestHeader("enctype", "multipart/form-data");
                xhr.send(form);
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        console.log(xhr.responseText);
                        var retJSON = JSON.parse(xhr.responseText);
                        if (!retJSON.Ok) {
                            console.error("NO se subió la foto!!!");
                        }
                        else {
                            console.info("Foto subida OK!!!");
                            //   alert("fotooo nombre: "+retJSON.Path);
                            var nuevoUsuario = {
                                "correo": email,
                                "clave": clave,
                                "nombre": nombre,
                                "apellido": apellido,
                                "legajo": legajo,
                                "foto": retJSON.Path,
                                "perfil": perfil
                            };
                            json.push(nuevoUsuario);
                            localStorage.setItem("JSON", JSON.stringify(json));
                            window.location.href = "./login.html";
                        }
                    }
                };
            }
            else {
                alert("NO SE PASO LA VALIDACIONES");
            }
        };
        Registro.SubirFoto = function (foto) {
            var xhr = new XMLHttpRequest();
            var form = new FormData();
            form.append('foto', foto.files[0]);
            form.append('caso', "subirFoto");
            xhr.open('POST', './TS/BACKEND/administracion.php', true);
            xhr.setRequestHeader("enctype", "multipart/form-data");
            xhr.send(form);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    console.log(xhr.responseText);
                    var retJSON = JSON.parse(xhr.responseText);
                    if (!retJSON.Ok) {
                        console.error("NO se subió la foto!!!");
                    }
                    else {
                        console.info("Foto subida OK!!!");
                        return retJSON.Path;
                    }
                }
                return "";
            };
        };
        return Registro;
    }());
    Main.Registro = Registro;
})(Main || (Main = {}));
//# sourceMappingURL=registro.js.map