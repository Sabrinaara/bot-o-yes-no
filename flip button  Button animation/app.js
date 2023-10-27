const btns_alternativa = document.querySelector('.btn-s');
const btn_delete = document.querySelector('#delete');
const front = document.querySelector('.font-side');
const back = document.querySelector('.back-side ')





btns_alternativa.addEventListener('click', () => {
   
    front.classList.remove('side');
    back.classList.add('side')
    
   
    
    });

btn_delete.addEventListener('click', () =>{
    console.log("clicou")
})
