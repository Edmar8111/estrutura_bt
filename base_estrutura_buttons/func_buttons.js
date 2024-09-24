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
function esconder_botoes(valor){valor.style.display='none'} 
function click_fora_campo(campo_name,contador){document.addEventListener('click',
    function(event){
    if(!campo_name.contains(event.target)&&contador>0){
        campo_name.style.display='none';contador=0};
    });
}

add_botao(5,raiz_conteudo)
//atribuição botoes principais
separar_bt=document.querySelectorAll('#conteudo button')[1]
conferencia_bt=document.querySelectorAll('#conteudo button')[2]
pega_bt=document.querySelectorAll('#conteudo button')[3]
inventario_bt=document.querySelectorAll('#conteudo button')[4]
gerenciar_bt=document.querySelectorAll('#conteudo button')[5]
document.querySelectorAll('#conteudo button')[1].innerHTML='Separação'
document.querySelectorAll('#conteudo button')[2].innerHTML='Conferência'
document.querySelectorAll('#conteudo button')[3].innerHTML='Pega'
document.querySelectorAll('#conteudo button')[4].innerHTML='Inventário'
document.querySelectorAll('#conteudo button')[5].innerHTML='Menu Gerenciar'

bonus_bt.addEventListener('click', function(){
    if(valor_ativa==0||box_0.style.display=='none'){
        if(document.querySelectorAll('#box_0 button').length==0){add_botao(1, box_0)};
        box_0.style.display='block',document.querySelectorAll('#box_0 button')[0].innerHTML='Editar Placa';
        valor_ativa++;
    }else{valor_ativa=0;box_0.style.display='none'};
    setTimeout(function(){click_fora_campo(box_0,1)},100);
    separar_bt.onclick=function(){esconder_botoes(box_0)};
    conferencia_bt.onclick=function(){esconder_botoes(box_0);}
    pega_bt.onclick=function(){esconder_botoes(box_0)};
    inventario_bt.onclick=function(){esconder_botoes(box_0)};
    gerenciar_bt.onclick=function(){esconder_botoes(box_0)};
});
separar_bt.addEventListener('click', function(){
    if(valor_ativa==0||box_1.style.display=='none'){
        if(document.querySelectorAll('#box_1 button').length==0){
        add_botao(8, box_1)};box_1.style.display='block',
        document.querySelectorAll('#box_1 button')[0].innerHTML='Separar Nono Vito',
        document.querySelectorAll('#box_1 button')[1].innerHTML='Liberar Mapas Capital';
        document.querySelectorAll('#box_1 button')[2].innerHTML='Bloquear Mapas Capital',
        document.querySelectorAll('#box_1 button')[3].innerHTML='Limpar Separação';
        document.querySelectorAll('#box_1 button')[4].innerHTML='Separação Rapida',
        document.querySelectorAll('#box_1 button')[5].innerHTML='Separar Caixas';
        document.querySelectorAll('#box_1 button')[6].innerHTML='Separar Fracionados',
        document.querySelectorAll('#box_1 button')[7].innerHTML='Limpar Separação Fracionado';
        
        valor_ativa=1;
    }else{valor_ativa=0;box_1.style.display='none'};
    setTimeout(function(){click_fora_campo(box_1,1)},100);
    bonus_bt.onclick=function(){esconder_botoes(box_1)};
    conferencia_bt.onclick=function(){esconder_botoes(box_1)};
    pega_bt.onclick=function(){esconder_botoes(box_1)};
    inventario_bt.onclick=function(){esconder_botoes(box_1)};
    gerenciar_bt.onclick=function(){esconder_botoes(box_1)};
});
conferencia_bt.addEventListener('click', function(){
    if(valor_ativa==0||box_2.style.display=='none'){
        if(document.querySelectorAll('#box_2 button').length==0){
        add_botao(6, box_2)};
        box_2.style.display='block',
        document.querySelectorAll('#box_2 button')[0].innerHTML='Limpar Conferencia',
        document.querySelectorAll('#box_2 button')[1].innerHTML='Check-out',
        document.querySelectorAll('#box_2 button')[2].innerHTML='Conferência Nova',
        document.querySelectorAll('#box_2 button')[3].innerHTML='Configurar Unidade Fracionada',
        document.querySelectorAll('#box_2 button')[4].innerHTML='Limpar Check-out',
        document.querySelectorAll('#box_2 button')[5].innerHTML='Limpar Conferência Nova';
        valor_ativa++;
    }else{valor_ativa=0;box_2.style.display='none'};
    setTimeout(function(){click_fora_campo(box_2,1)},100);
    separar_bt.onclick=function(){esconder_botoes(box_2)};
    bonus_bt.onclick=function(){esconder_botoes(box_2)};
    pega_bt.onclick=function(){esconder_botoes(box_2)};
    inventario_bt.onclick=function(){esconder_botoes(box_2)};
    gerenciar_bt.onclick=function(){esconder_botoes(box_2)};
});
pega_bt.addEventListener('click', function(){
    if(valor_ativa==0||box_3.style.display=='none'){
        if(document.querySelectorAll('#box_3 button').length==0){
        add_botao(5, box_3)};
        box_3.style.display='block',
        document.querySelectorAll('#box_3 button')[0].innerHTML='Registrar Saída',
        document.querySelectorAll('#box_3 button')[1].innerHTML='Movimentar Pulmão',
        document.querySelectorAll('#box_3 button')[2].innerHTML='Armazenar Quarentena',
        document.querySelectorAll('#box_3 button')[3].innerHTML='Buscar Código de Barras',
        document.querySelectorAll('#box_3 button')[4].innerHTML='Abastecimento Rápido',
        valor_ativa++;
    }else{valor_ativa=0;box_3.style.display='none'};
    setTimeout(function(){click_fora_campo(box_3,1)},100);
    separar_bt.onclick=function(){esconder_botoes(box_3)};
    bonus_bt.onclick=function(){esconder_botoes(box_3)};
    conferencia_bt.onclick=function(){esconder_botoes(box_3)};
    inventario_bt.onclick=function(){esconder_botoes(box_3)};
    gerenciar_bt.onclick=function(){esconder_botoes(box_3)};
});
inventario_bt.addEventListener('click', function(){
    if(valor_ativa==0||box_4.style.display=='none'){
        if(document.querySelectorAll('#box_4 button').length==0){add_botao(3, box_4)};
        box_4.style.display='block',document.querySelectorAll('#box_4 button')[0].innerHTML='Limpar Inventário';
        box_4.style.display='block',document.querySelectorAll('#box_4 button')[1].innerHTML='Procurar por Endereçamento';
        box_4.style.display='block',document.querySelectorAll('#box_4 button')[2].innerHTML='Pulmão Principal';
        valor_ativa++;
    }else{valor_ativa=0;box_4.style.display='none'};
    setTimeout(function(){click_fora_campo(box_4,1)},100);
    separar_bt.onclick=function(){esconder_botoes(box_4)};
    conferencia_bt.onclick=function(){esconder_botoes(box_4)};
    pega_bt.onclick=function(){esconder_botoes(box_4)};
    bonus_bt.onclick=function(){esconder_botoes(box_4)};
    gerenciar_bt.onclick=function(){esconder_botoes(box_4)};
});
gerenciar_bt.addEventListener('click', function(){
    if(valor_ativa==0||box_5.style.display=='none'){
        if(document.querySelectorAll('#box_5 button').length==0){add_botao(3, box_5)};
        box_5.style.display='block',document.querySelectorAll('#box_5 button')[0].innerHTML='Ajustar Nomes de Impressoras';
        box_5.style.display='block',document.querySelectorAll('#box_5 button')[1].innerHTML='Buscar Lista de Usuarios Logados';
        box_5.style.display='block',document.querySelectorAll('#box_5 button')[2].innerHTML='Gerenciar Colaborador';
        valor_ativa++;
    }else{valor_ativa=0;box_5.style.display='none'};
    setTimeout(function(){click_fora_campo(box_5,1)},100);
    separar_bt.onclick=function(){esconder_botoes(box_5)}
    conferencia_bt.onclick=function(){esconder_botoes(box_5)}
    pega_bt.onclick=function(){esconder_botoes(box_5)}
    inventario_bt.onclick=function(){esconder_botoes(box_5)}
})