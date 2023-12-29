const formComparar = document.querySelector('#form-comparacao');

const valorA = document.querySelector('#campo_a');
const valorB = document.querySelector('#campo_b');

const mess_error = document.querySelector('#messagem_error');
const mess_sucess = document.querySelector('#messagem_sucesso');

function validacao (numb_a, numb_b){
    return numb_a < numb_b ? true:false; 
}

formComparar.addEventListener('submit', function(e) {
    e.preventDefault();
    var numero_a = parseFloat(valorA.value);
    var numero_b = parseFloat(valorB.value);

    if(validacao(numero_a, numero_b)) {
        mess_sucess.style.display='block';
        mess_error.style.display='none';
        setTimeout(()=> {
            mess_sucess.style.display='none';
        },2000);
        valorA.value = '';
        valorB.value = '';
        
    }
    else {
        mess_error.style.display='block';
        mess_sucess.style.display='none';
        setTimeout(()=> {
            mess_error.style.display='none';
        },2000);
    }
})


