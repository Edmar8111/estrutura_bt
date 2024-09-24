botao_0=document.querySelector('#bt')
box=document.querySelector('#box')
box_0=document.querySelector('#box_0')
function add_botao(quantidade, destino){
    for(a=0;a<quantidade;a++){
        button_=document.createElement('button'),box_0.appendChild(button_);
    }
    for(a=0;a<document.querySelectorAll('#box_0 button').length;a++){document.querySelectorAll('#box_0 button')[a].id='botao_n'+a}
}
add_botao(2, box_0)
botao_0.addEventListener('click', function(){
    box.style.display='flex';
    document.querySelectorAll('#box_0 button')[0].innerHTML='Bônus';
    document.querySelectorAll('#box_0 button')[1].innerHTML='Editar Placa'
})