document.addEventListener('DOMContentLoaded', function() {

    const formulario = document.getElementById('formulario-fisio');
    const divContenedorQR = document.getElementById('contenedor-qr-fisio');
    const titulo = document.querySelector('.contenedor_formulario h1');

    formulario.addEventListener('submit', function(evento) {
        
        evento.preventDefault();

        // 1. CREAR EL OBJETO DE PARÁMETROS
        const params = new URLSearchParams();
        
        // 2. LEER Y AÑADIR CADA CAMPO (DE FORMA SEGURA)
        params.append('nombre', document.getElementById('nombre').value);
        params.append('apellidos', document.getElementById('apellidos').value);
        params.append('especialidad', document.getElementById('especialidad').value);
        params.append('cedula', document.getElementById('cedula').value);
        params.append('telefono', document.getElementById('telefono').value);
        params.append('correo', document.getElementById('correo').value);
        params.append('titulo', document.getElementById('titulo').value);
        params.append('experiencia', document.getElementById('experiencia').value);

        // 3. Definir la página que leerá los datos
        // (¡Crearemos este archivo en el siguiente paso!)
        const urlBase = "ver_fisio.html"; 

        // 4. Crear el texto final del QR (la URL)
        const textoQR = `${urlBase}?${params.toString()}`;
        
        // 5. Ocultar el formulario
        formulario.style.display = 'none';
        titulo.style.display = 'none';
        divContenedorQR.innerHTML = "";

        // 6. ¡Generar el QR!
        // (Esto ya no fallará, porque textoQR es una URL corta)
        new QRCode(divContenedorQR, {
            text: textoQR,
            width: 250, 
            height: 250
        });
    });
});