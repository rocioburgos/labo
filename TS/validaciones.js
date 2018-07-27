"use strict";
var Main;
(function (Main) {
    var Validaciones = /** @class */ (function () {
        function Validaciones() {
        }
        Validaciones.ValidacionesLG = function () {
            var email = document.getElementById('login-username').value;
            var clave = document.getElementById('login-password').value;
            var retornoM = false;
            var retornoC = false;
            if (email == "") {
                retornoM = false;
                document.getElementById('spnEmail').style.display = "block";
                document.getElementById('errorEmail').innerHTML = "<div class=\"alert alert-danger\" role=\"alert\">\n                Campo EMAIL vacio.\n            </div>";
            }
            else if (!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email))) {
                // (<HTMLInputElement>document.getElementById('alerts')).innerHTML="<div class='alert alert-warning' role='alert'>Email no valido</div>";
                document.getElementById('spnEmail').style.display = "block";
                document.getElementById('errorEmail').innerHTML = "<div class=\"alert alert-danger\" role=\"alert\">\n            Controle el formato del Email.\n            </div>";
                retornoM = false;
            }
            else {
                retornoM = true;
                document.getElementById('spnEmail').style.display = "none";
                document.getElementById('errorEmail').innerHTML = "";
            }
            if (clave == "") {
                retornoC = false;
                document.getElementById('spnClave').style.display = "block";
                document.getElementById('errorClave').innerHTML = "<div class=\"alert alert-danger\" role=\"alert\">\n                Campo CLAVE vacio.\n            </div>";
            }
            else if (clave.length > 8 || clave.length < 4) {
                retornoC = false;
                document.getElementById('spnClave').style.display = "block";
                document.getElementById('errorClave').innerHTML = "<div class=\"alert alert-danger\" role=\"alert\">\n            Largo de clave no valido.\n            </div>";
            }
            else {
                retornoC = true;
                document.getElementById('spnClave').style.display = "none";
                document.getElementById('errorClave').innerHTML = "";
            }
            if (retornoC == true && retornoM == true) {
                return true;
            }
            else {
                return false;
            }
        };
        Validaciones.AdministrarValidacionesRegistro = function (email, nombre, apellido, clave, claveConfim, legajo) {
            var rtnEmail = false;
            if (email == "") {
                Validaciones.AdministrarSpan(true, "spnEmail", "errorEmail", "Error en el email.");
            }
            else if (!Validaciones.ValidarEmailFormato(email)) {
                Validaciones.AdministrarSpan(true, "spnEmail", "errorEmail", "Error en el email.");
            }
            else {
                Validaciones.AdministrarSpan(false, "spnEmail", "errorEmail", "");
                rtnEmail = true;
            }
            var rtnName = false;
            if (nombre == "") {
                Validaciones.AdministrarSpan(true, "spnNombre", "errorNombre", "Error en el nombre.");
            }
            else if (!Validaciones.ValidarNombre(nombre)) {
                Validaciones.AdministrarSpan(true, "spnNombre", "errorNombre", "Error en el nombre.");
            }
            else {
                Validaciones.AdministrarSpan(false, "spnNombre", "errorNombre", "");
                rtnName = true;
            }
            var rtnApellido = false;
            if (apellido == "") {
                Validaciones.AdministrarSpan(true, "spnApellido", "errorApellido", "Error en el apellido.");
            }
            else if (!Validaciones.ValidarApellido(apellido)) {
                Validaciones.AdministrarSpan(true, "spnApellido", "errorApellido", "Error en el apellido.");
            }
            else {
                Validaciones.AdministrarSpan(false, "spnApellido", "errorApellido", "");
                rtnApellido = true;
            }
            var rtnClave = false;
            if (clave == "") {
                Validaciones.AdministrarSpan(true, "spnClave", "errorClave", "Error en la clave.");
            }
            else {
                Validaciones.AdministrarSpan(false, "spnClave", "errorClave", "");
                rtnClave = true;
            }
            if (claveConfim == "") {
                Validaciones.AdministrarSpan(true, "spnClaveConf", "errorClave", "Error en la clave.");
                rtnClave = false;
            }
            else {
                Validaciones.AdministrarSpan(false, "spnClaveConf", "errorClave", "");
                rtnClave = true;
            }
            if (clave != claveConfim) {
                document.getElementById('errorClaveIguales').innerHTML = "<div class=\"alert alert-warning\" role=\"alert\">\n        Las claves deben ser iguales.\n      </div>";
                rtnClave = false;
            }
            else {
                document.getElementById('errorClaveIguales').innerHTML = "";
                rtnClave = true;
            }
            var rtnLegajo = false;
            if (legajo.toString() == "") {
                Validaciones.AdministrarSpan(true, "spnLegajo", "errorLegajo", "Error en el legajo.");
            }
            else if (!Validaciones.ValidarNombre(nombre)) {
                Validaciones.AdministrarSpan(true, "spnLegajo", "errorLegajo", "Error en el legajo.");
            }
            else {
                Validaciones.AdministrarSpan(false, "spnLegajo", "errorLegajo", "");
                rtnLegajo = true;
            }
            var rtnFoto = false;
            var archivo = document.getElementById('register-foto');
            if (archivo == null) {
                Validaciones.AdministrarSpan(true, "spnFoto", "errorFoto", "Error en la foto.");
            }
            else if (!Validaciones.ValidarExtensionFoto()) {
                Validaciones.AdministrarSpan(true, "spnFoto", "errorFoto", "Error en la foto.");
            }
            else {
                Validaciones.AdministrarSpan(false, "spnFoto", "errorFoto", "");
                rtnFoto = true;
            }
            if (rtnName && rtnApellido && rtnClave && rtnLegajo && rtnEmail && rtnFoto) {
                return true;
            }
            else {
                return false;
            }
        };
        Validaciones.Validaciones = function (email, clave) {
            if (email != "" && Validaciones.ValidarEmailFormato(email) && Validaciones.ValidacionesClave(clave)) {
                return true;
            }
            return false;
        };
        Validaciones.AdministrarSpan = function (setear, idCampo, idAlert, mensaje) {
            if (setear == true) { /*Agregar el error */
                document.getElementById(idCampo).style.display = "block";
                document.getElementById(idAlert).innerHTML = '<div class="alert alert-warning" role="alert">' + mensaje + '</div>';
            }
            else { /**  Quitar el error */
                document.getElementById(idCampo).style.display = "none";
                document.getElementById(idAlert).innerHTML = "";
            }
        };
        Validaciones.ValidacionesClave = function (clave) {
            if (Validaciones.ValidarCamposVacios(clave)) {
                if (Validaciones.ValidarClaveLargo(clave)) {
                    return true;
                }
            }
            return false;
        };
        Validaciones.ValidarEmailFormato = function (email) {
            if (!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email))) {
                return false;
            }
            else {
                return true;
            }
        };
        Validaciones.ValidarClaveLargo = function (clave) {
            if (clave.length > 8 || clave.length < 4) {
                return false;
            }
            return true;
        };
        Validaciones.ValidarCamposVacios = function (campo) {
            if (campo.length > 0) {
                return true;
            }
            return false;
        };
        Validaciones.ValidarApellido = function (apellido) {
            if (apellido.length > 15 || apellido.length == 0) {
                return false;
            }
            return true;
        };
        Validaciones.ValidarNombre = function (nombre) {
            if (nombre.length > 10 || nombre.length == 0) {
                return false;
            }
            return true;
        };
        Validaciones.ValidarLegajo = function (legajo) {
            if (legajo % 1 == 0) {
                if (legajo.toString().length < 3 || legajo.toString().length > 6) {
                    return false;
                }
                return true;
            }
            else {
                return false;
            }
        };
        Validaciones.ValidarExtensionFoto = function () {
            var archivo = document.getElementById('register-foto');
            var extensionesPermitidas = new Array(".png", ".jpg");
            //     var miError = "";
            var permitida = false;
            if (!archivo) { }
            else {
                var extension = (archivo.value.substring(archivo.value.lastIndexOf("."))).toLowerCase();
                for (var i = 0; i < extensionesPermitidas.length; i++) {
                    if (extensionesPermitidas[i] == extension) {
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
        };
        Validaciones.ValidarClaves = function (clave, claveDos) {
            if (clave == claveDos) {
                return true;
            }
            else {
                return false;
            }
        };
        return Validaciones;
    }());
    Main.Validaciones = Validaciones;
})(Main || (Main = {}));
//# sourceMappingURL=validaciones.js.map