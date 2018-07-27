"use strict";
var Main;
(function (Main) {
    var Admin = /** @class */ (function () {
        function Admin() {
        }
        Admin.Eliminar = function (obj) {
            var eliminar = confirm("Desea eliminar a " + obj.nombre + " " + obj.apellido);
            if (eliminar) {
                var storage = localStorage.getItem("JSON");
                if (storage != null) {
                    var json = JSON.parse(storage);
                    for (var i = 0; i < json.length; i++) {
                        if (json[i].correo == obj.correo) {
                            //cambiar la foto de lugar
                            var xhr = new XMLHttpRequest();
                            xhr.open('POST', './TS/BACKEND/administracion.php', true);
                            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
                            xhr.send("caso=eliminarUsuario&foto=" + json[i].foto);
                            xhr.onreadystatechange = function () {
                                if (xhr.readyState == 4 && xhr.status == 200) {
                                    // alert(xhr.responseText);
                                }
                            };
                            json.splice(i, 1);
                            alert("Eliminado");
                            localStorage.setItem("JSON", JSON.stringify(json));
                            window.location.href = "./principal.html";
                            break;
                        }
                    }
                }
            }
        };
        Admin.SetearModificar = function (obj) {
            document.getElementById('register-legajo').readOnly = true;
            document.getElementById('register-legajo').value = obj.legajo;
        };
        Admin.Modificar = function () {
            /*
            1- levantar los datos.
            2. verificarlos-
            3. levantar el LS, ubicar el empleado
            4. modificarlos y guardarlo.
            5. recargar la pagina.

            */
            var email = document.getElementById("register-email").value;
            var nombre = document.getElementById('register-name').value;
            var clave = document.getElementById('register-password').value;
            var claveConfirm = document.getElementById('register-confirmar').value;
            var apellido = document.getElementById('register-surname').value;
            var legajo = parseInt(document.getElementById('register-legajo').value);
            var perfil = document.getElementById('register-perfil').value;
            var foto = document.getElementById('register-foto');
            if (Main.Validaciones.AdministrarValidacionesRegistro(email, nombre, apellido, clave, claveConfirm, legajo) && foto != null) {
                var cadJSON = localStorage.getItem("JSON");
                var existe = false;
                var json;
                if (cadJSON != null) {
                    json = JSON.parse(cadJSON);
                    var _loop_1 = function (i) {
                        if (json[i].legajo == legajo) { //el legajo que recibo x param.
                            existe = true;
                            alert("Se va a modificar a " + json[i].nombre + "-" + json[i].legajo);
                            xhr = new XMLHttpRequest();
                            form = new FormData();
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
                                        json[i] = nuevoUsuario;
                                        localStorage.setItem("JSON", JSON.stringify(json));
                                        alert("Elemento modificado.");
                                        window.location.href = "./principal.html";
                                    }
                                }
                            };
                        }
                    };
                    var xhr, form;
                    for (var i = 0; i < json.length; i++) {
                        _loop_1(i);
                    }
                }
                else {
                    alert("NO SE PASO LA VALIDACIONES");
                }
            }
        };
        return Admin;
    }());
    Main.Admin = Admin;
})(Main || (Main = {}));
//# sourceMappingURL=accionesAdmin.js.map