const generarBtn = document.getElementById('generarBtn');
const longitudInput = document.getElementById('longitud');
const incluirMayusculasInput = document.getElementById('incluirMayusculas');
const incluirMinusculasInput = document.getElementById('incluirMinusculas');
const incluirNumerosInput = document.getElementById('incluirNumeros');
const incluirSimbolosInput = document.getElementById('incluirSimbolos');
const contrasenaGeneradaInput = document.getElementById('contrasenaGenerada');
const copiarBtn = document.getElementById('copiarBtn');
const mensajeErrorDiv = document.getElementById('mensajeError');

generarBtn.addEventListener('click', generarContrasena);
copiarBtn.addEventListener('click', copiarContrasena);

function generarContrasena() {
    const longitud = parseInt(longitudInput.value);
    const incluirMayusculas = incluirMayusculasInput.checked;
    const incluirMinusculas = incluirMinusculasInput.checked;
    const incluirNumeros = incluirNumerosInput.checked;
    const incluirSimbolos = incluirSimbolosInput.checked;

    if (isNaN(longitud) || longitud < 4 || longitud > 32) {
        mensajeErrorDiv.textContent = 'La longitud debe estar entre 4 y 32.';
        contrasenaGeneradaInput.value = '';
        return;
    }

    if (!incluirMayusculas && !incluirMinusculas && !incluirNumeros && !incluirSimbolos) {
        mensajeErrorDiv.textContent = 'Debes seleccionar al menos un tipo de carácter.';
        contrasenaGeneradaInput.value = '';
        return;
    }

    mensajeErrorDiv.textContent = ''; // Limpiar mensajes de error

    fetch('/generar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            longitud: longitud,
            incluirMayusculas: incluirMayusculas,
            incluirMinusculas: incluirMinusculas,
            incluirNumeros: incluirNumeros,
            incluirSimbolos: incluirSimbolos
        })
    })
    .then(response => response.json())
    .then(data => {
        contrasenaGeneradaInput.value = data.contrasena;
    })
    .catch(error => {
        console.error('Error al generar la contraseña:', error);
        mensajeErrorDiv.textContent = 'Error al comunicarse con el servidor.';
        contrasenaGeneradaInput.value = '';
    });
}

function copiarContrasena() {
    contrasenaGeneradaInput.select();
    document.execCommand('copy');
    alert('Contraseña copiada al portapapeles.');
}