// Obtener referencias a los elementos del DOM
const textareaEncriptar = document.getElementById('textoEncriptar');
const textareaDesencriptar = document.getElementById('textoDesencriptar');
const divTextoEncriptado = document.getElementById('textoEncriptado');
const btnEncriptar = document.getElementById('btnEncriptar');
const btnCopiar = document.getElementById('btnCopiar');
const btnDesencriptar = document.getElementById('btnDesencriptar');

// Validar si el texto ingresado cumple con los requisitos
function validarTexto(texto) {
  const caracteresEspeciales = /[^a-z0-9 ]/gi;
  const tieneCaracteresEspeciales = caracteresEspeciales.test(texto);
  const tieneAcentos = /[áéíóú]/gi.test(texto);

  return !tieneCaracteresEspeciales && !tieneAcentos;
}

// Habilitar el botón de encriptar cuando el usuario escriba en el textarea
textareaEncriptar.addEventListener('input', () => {
    btnEncriptar.disabled = textareaEncriptar.value.trim().length === 0 ? true : false;
});

// Encriptar el texto cuando el usuario haga clic en el botón Encriptar
btnEncriptar.addEventListener('click', () => {
    const texto = textareaEncriptar.value.trim(). toLowerCase();
    let textoEncriptado = encriptarTexto(texto);
    divTextoEncriptado.innerText = textoEncriptado;
    btnCopiar.disabled = false;
    textareaDesencriptar.disabled = false;
    btnDesencriptar.disabled = false;
});

// Copiar el texto encriptado al portapapeles cuando el usuario haga clic en el botón Copiar
btnCopiar.addEventListener('click', () => {
    const textoEncriptado = divTextoEncriptado.innerText;
    navigator.clipboard.writeText(textoEncriptado);
});

// Desencriptar el texto cuando el usuario haga clic en el botón Desencriptar
btnDesencriptar.addEventListener('click', () => {
    const textoEncriptado = divTextoEncriptado.innerText;
    const textoDesencriptado = desencriptarTexto(textoEncriptado);
    textareaDesencriptar.value = textoDesencriptado;
});

// Función para encriptar el texto
function encriptarTexto(texto) {
    let textoEncriptado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'ines')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    return textoEncriptado;
}

// Función para desencriptar el texto
function desencriptarTexto(textoEncriptado) {
    let textoDesencriptado = textoEncriptado
        .replace(/enter/g, 'e')
        .replace(/ines/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    return textoDesencriptado;
}