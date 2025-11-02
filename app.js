document.addEventListener('DOMContentLoaded', function() {

    // 1. Apuntar al formulario del paciente
    const formulario = document.getElementById('formulario-paciente');
    const divContenedorQR = document.getElementById('contenedor-qr');
    const titulo = document.querySelector('.contenedor_formulario h1');

    // 2. Escuchar el "submit"
    formulario.addEventListener('submit', function(evento) {
        
        evento.preventDefault();

        // 3. CREAR EL OBJETO DE PARÁMETROS
        const params = new URLSearchParams();
        
        // 4. LEER Y AÑADIR CADA CAMPO (DE FORMA SEGURA)
        params.append('nombre', document.getElementById('nombre').value);
        params.append('apellidos', document.getElementById('apellidos').value);
        params.append('edad', document.getElementById('edad').value);
        params.append('estatura', document.getElementById('estatura').value);
        params.append('telefono', document.getElementById('telefono').value);
        params.append('correo', document.getElementById('correo').value);
        params.append('fecha', document.getElementById('fecha').value);
        params.append('hora', document.getElementById('hora').value);
        
        // Lee el sexo seleccionado
        const sexoSeleccionado = document.querySelector('input[name="sexo"]:checked');
        if (sexoSeleccionado) {
            params.append('sexo', sexoSeleccionado.value);
        }

        // 5. Definir la página que leerá los datos
        const urlBase = "ver_paciente.html"; 

        // 6. Crear el texto final del QR (la URL)
        const textoQR = `${urlBase}?${params.toString()}`;
        
        // 7. Ocultar el formulario
        formulario.style.display = 'none';
        titulo.style.display = 'none';
        divContenedorQR.innerHTML = "";

        // 8. ¡Generar el QR!
        new QRCode(divContenedorQR, {
            text: textoQR,
            width: 250, 
            height: 250
        });
    });
});