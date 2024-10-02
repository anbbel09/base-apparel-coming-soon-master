let formulario = document.getElementById('form');

console.log(formulario);

const expresiones = { // Letras y espacios, pueden llevar acentos.
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  };

formulario.addEventListener('submit', (e) => {

    e.preventDefault();
    
    let input = document.getElementById('email');

    
    if(expresiones.email.test(input.value)){
        let textoError = document.querySelector('.textoError');
        textoError.style.visibility = 'hidden';
        
        formulario.reset();
        
    } else {
        console.log('esta mal');
        
        let textoError = document.querySelector('.textoError');
        textoError.style.visibility = 'visible';
    }
    
    



});