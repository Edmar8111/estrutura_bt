raiz_conteudo=document.querySelector('#conteudo')
bonus_bt=document.querySelector('#bt')
box_0=document.querySelector('#box_0')
box_1=document.querySelector('#box_1')
box_2=document.querySelector('#box_2')
box_3=document.querySelector('#box_3')
box_4=document.querySelector('#box_4')
box_5=document.querySelector('#box_5')
valor_ativa=0
valor_ativa_0=0
//functions area
function add_botao(quantidade, destino){
    for(a=0;a<quantidade;a++){
        button_=document.createElement('button'),destino.appendChild(button_);
    }
    for(a=0;a<document.querySelectorAll('#box_0 button').length;a++){document.querySelectorAll('#box_0 button')[a].id='botao_n'+a}
}
function esconder_botoes(valor,id_img){valor.style.display='none',
    setTimeout(function(){document.querySelectorAll('#conteudo button img')[id_img].style.transform='rotate(0deg)'},200)}; 
function click_fora_campo(campo_name,contador){document.addEventListener('click',
    function(event){
    if(!campo_name.contains(event.target)&&contador>0){
        campo_name.style.display='none';contador=0};
    });
}

//atribuição botoes principais
separar_bt=document.querySelector('#separar_bt')
conferencia_bt=document.querySelector('#conferencia_bt')
pega_bt=document.querySelector('#pega_bt')
inventario_bt=document.querySelector('#inventario_bt')
gerenciar_bt=document.querySelector('#gerenciar_bt')

bonus_bt.addEventListener('click', function(){
    if(valor_ativa==0||box_0.style.display=='none'){
        if(document.querySelectorAll('#box_0 button').length==0){add_botao(2, box_0)};
        box_0.style.display='block',document.querySelectorAll('#box_0 button')[0].innerHTML='Bônus';
        box_0.style.display='block',document.querySelectorAll('#box_0 button')[1].innerHTML='Editar Placa';
        document.querySelectorAll('#conteudo button img')[0].animate([{transform:'rotate(0deg)'},{transform:'rotate(90deg)'}],{duration:250});
        setTimeout(function(){document.querySelectorAll('#conteudo button img')[0].style.transform='rotate(90deg)'},200);
        valor_ativa++;
    }else{valor_ativa=0;
        document.querySelectorAll('#conteudo button img')[0].animate([{transform:'rotate(90deg)'},{transform:'rotate(0deg)'}],{duration:250});
        setTimeout(function(){document.querySelectorAll('#conteudo button img')[0].style.transform='rotate(0deg)'},200);
        box_0.style.display='none'};
    //setTimeout(function(){click_fora_campo(box_0,1)},100);
    separar_bt.onclick=function(){esconder_botoes(box_0,0)};
    conferencia_bt.onclick=function(){esconder_botoes(box_0,0);}
    pega_bt.onclick=function(){esconder_botoes(box_0,0)};
    inventario_bt.onclick=function(){esconder_botoes(box_0,0)};
    gerenciar_bt.onclick=function(){esconder_botoes(box_0,0)};
});
separar_bt.addEventListener('click', function(){
    if(valor_ativa==0||box_1.style.display=='none'){
        if(document.querySelectorAll('#box_1 button').length==0){
        add_botao(9, box_1)};box_1.style.display='block',
        document.querySelectorAll('#box_1 button')[0].innerHTML='Separação',
        document.querySelectorAll('#box_1 button')[1].innerHTML='Separar Nono Vito',
        document.querySelectorAll('#box_1 button')[2].innerHTML='Liberar Mapas Capital';
        document.querySelectorAll('#box_1 button')[3].innerHTML='Bloquear Mapas Capital',
        document.querySelectorAll('#box_1 button')[4].innerHTML='Limpar Separação';
        document.querySelectorAll('#box_1 button')[5].innerHTML='Separação Rapida',
        document.querySelectorAll('#box_1 button')[6].innerHTML='Separar Caixas';
        document.querySelectorAll('#box_1 button')[7].innerHTML='Separar Fracionados',
        document.querySelectorAll('#box_1 button')[8].innerHTML='Limpar Separação Fracionado';
        document.querySelectorAll('#conteudo button img')[1].animate([{transform:'rotate(0deg)'},{transform:'rotate(90deg)'}],{duration:250});
        setTimeout(function(){document.querySelectorAll('#conteudo button img')[1].style.transform='rotate(90deg)'},200);
        valor_ativa=1;
    }else{valor_ativa=0;
        document.querySelectorAll('#conteudo button img')[1].animate([{transform:'rotate(90deg)'},{transform:'rotate(0deg)'}],{duration:250});
        setTimeout(function(){document.querySelectorAll('#conteudo button img')[1].style.transform='rotate(0deg)'},200);
        box_1.style.display='none'};
    //setTimeout(function(){click_fora_campo(box_1,1)},100);
    bonus_bt.onclick=function(){esconder_botoes(box_1,1)};
    conferencia_bt.onclick=function(){esconder_botoes(box_1,1)};
    pega_bt.onclick=function(){esconder_botoes(box_1,1)};
    inventario_bt.onclick=function(){esconder_botoes(box_1,1)};
    gerenciar_bt.onclick=function(){esconder_botoes(box_1,1)};
});
conferencia_bt.addEventListener('click', function(){
    if(valor_ativa==0||box_2.style.display=='none'){
        if(document.querySelectorAll('#box_2 button').length==0){
        add_botao(7, box_2)};
        box_2.style.display='block',
        
        document.querySelectorAll('#box_2 button')[0].innerHTML='Conferência',
        document.querySelectorAll('#box_2 button')[1].innerHTML='Limpar Conferencia',
        document.querySelectorAll('#box_2 button')[2].innerHTML='Check-out',
        document.querySelectorAll('#box_2 button')[3].innerHTML='Conferência Nova',
        document.querySelectorAll('#box_2 button')[4].innerHTML='Configurar Unidade Fracionada',
        document.querySelectorAll('#box_2 button')[5].innerHTML='Limpar Check-out',
        document.querySelectorAll('#box_2 button')[6].innerHTML='Limpar Conferência Nova';
        valor_ativa++;
        document.querySelectorAll('#conteudo button img')[2].animate([{transform:'rotate(0deg)'},{transform:'rotate(90deg)'}],{duration:250});
        setTimeout(function(){document.querySelectorAll('#conteudo button img')[2].style.transform='rotate(90deg)'},200);
    }else{valor_ativa=0;
        document.querySelectorAll('#conteudo button img')[2].animate([{transform:'rotate(90deg)'},{transform:'rotate(0deg)'}],{duration:250});
        setTimeout(function(){document.querySelectorAll('#conteudo button img')[2].style.transform='rotate(0deg)'},200);
        box_2.style.display='none'};
    //setTimeout(function(){click_fora_campo(box_2,1)},100);
    separar_bt.onclick=function(){esconder_botoes(box_2,2)};
    bonus_bt.onclick=function(){esconder_botoes(box_2,2)};
    pega_bt.onclick=function(){esconder_botoes(box_2,2)};
    inventario_bt.onclick=function(){esconder_botoes(box_2,2)};
    gerenciar_bt.onclick=function(){esconder_botoes(box_2,2)};
});
pega_bt.addEventListener('click', function(){
    if(valor_ativa==0||box_3.style.display=='none'){
        if(document.querySelectorAll('#box_3 button').length==0){
        add_botao(6, box_3)};
        box_3.style.display='block',
        document.querySelectorAll('#box_3 button')[0].innerHTML='Pega',
        document.querySelectorAll('#box_3 button')[1].innerHTML='Registrar Saída',
        document.querySelectorAll('#box_3 button')[2].innerHTML='Movimentar Pulmão',
        document.querySelectorAll('#box_3 button')[3].innerHTML='Armazenar Quarentena',
        document.querySelectorAll('#box_3 button')[4].innerHTML='Buscar Código de Barras',
        document.querySelectorAll('#box_3 button')[5].innerHTML='Abastecimento Rápido',
        valor_ativa++;
        document.querySelectorAll('#conteudo button img')[3].animate([{transform:'rotate(0deg)'},{transform:'rotate(90deg)'}],{duration:250});
        setTimeout(function(){document.querySelectorAll('#conteudo button img')[3].style.transform='rotate(90deg)'},200);
    }else{valor_ativa=0;
        document.querySelectorAll('#conteudo button img')[3].animate([{transform:'rotate(90deg)'},{transform:'rotate(0deg)'}],{duration:250});
        setTimeout(function(){document.querySelectorAll('#conteudo button img')[3].style.transform='rotate(0deg)'},200);
        box_3.style.display='none'};
    //setTimeout(function(){click_fora_campo(box_3,1)},100);
    separar_bt.onclick=function(){esconder_botoes(box_3,3)};
    bonus_bt.onclick=function(){esconder_botoes(box_3,3)};
    conferencia_bt.onclick=function(){esconder_botoes(box_3,3)};
    inventario_bt.onclick=function(){esconder_botoes(box_3,3)};
    gerenciar_bt.onclick=function(){esconder_botoes(box_3,3)};
});
inventario_bt.addEventListener('click', function(){
    if(valor_ativa==0||box_4.style.display=='none'){
        if(document.querySelectorAll('#box_4 button').length==0){add_botao(4, box_4)};
        box_4.style.display='block',document.querySelectorAll('#box_4 button')[0].innerHTML='Inventário';
        box_4.style.display='block',document.querySelectorAll('#box_4 button')[1].innerHTML='Limpar Inventário';
        box_4.style.display='block',document.querySelectorAll('#box_4 button')[2].innerHTML='Procurar por Endereçamento';
        box_4.style.display='block',document.querySelectorAll('#box_4 button')[3].innerHTML='Pulmão Principal';
        valor_ativa++;
        document.querySelectorAll('#conteudo button img')[4].animate([{transform:'rotate(0deg)'},{transform:'rotate(90deg)'}],{duration:250});
        setTimeout(function(){document.querySelectorAll('#conteudo button img')[4].style.transform='rotate(90deg)'},200);
    }else{valor_ativa=0;
        document.querySelectorAll('#conteudo button img')[4].animate([{transform:'rotate(90deg)'},{transform:'rotate(0deg)'}],{duration:250});
        setTimeout(function(){document.querySelectorAll('#conteudo button img')[4].style.transform='rotate(0deg)'},200);
        box_4.style.display='none'};
    //setTimeout(function(){click_fora_campo(box_4,1)},100);
    separar_bt.onclick=function(){esconder_botoes(box_4,4)};
    conferencia_bt.onclick=function(){esconder_botoes(box_4,4)};
    pega_bt.onclick=function(){esconder_botoes(box_4,4)};
    bonus_bt.onclick=function(){esconder_botoes(box_4,4)};
    gerenciar_bt.onclick=function(){esconder_botoes(box_4,4)};
});
gerenciar_bt.addEventListener('click', function(){
    if(valor_ativa==0||box_5.style.display=='none'){
        if(document.querySelectorAll('#box_5 button').length==0){add_botao(3, box_5)};
        box_5.style.display='block',document.querySelectorAll('#box_5 button')[0].innerHTML='Ajustar Nomes de Impressoras';
        box_5.style.display='block',document.querySelectorAll('#box_5 button')[1].innerHTML='Buscar Lista de Usuarios Logados';
        box_5.style.display='block',document.querySelectorAll('#box_5 button')[2].innerHTML='Gerenciar Colaborador';
        valor_ativa++;
        document.querySelectorAll('#conteudo button img')[5].animate([{transform:'rotate(0deg)'},{transform:'rotate(90deg)'}],{duration:250});
        setTimeout(function(){document.querySelectorAll('#conteudo button img')[5].style.transform='rotate(90deg)'},200);
    }else{valor_ativa=0;
        document.querySelectorAll('#conteudo button img')[5].animate([{transform:'rotate(90deg)'},{transform:'rotate(0deg)'}],{duration:250});
        setTimeout(function(){document.querySelectorAll('#conteudo button img')[5].style.transform='rotate(0deg)'},200);
        box_5.style.display='none'};
    //setTimeout(function(){click_fora_campo(box_5,1)},100);
    bonus_bt.onclick=function(){esconder_botoes(box_5,5)}
    separar_bt.onclick=function(){esconder_botoes(box_5,5)}
    conferencia_bt.onclick=function(){esconder_botoes(box_5,5)}
    pega_bt.onclick=function(){esconder_botoes(box_5,5)}
    inventario_bt.onclick=function(){esconder_botoes(box_5,5)}
})