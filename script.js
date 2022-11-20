
//variaveis
const btnSand = document.getElementById('btn-menu-sand');
const menu = document.getElementById('ul-menu');

const home = document.getElementById('home'); 
const sobre = document.getElementById('sobre'); 
const projetos = document.getElementById('projetos');

let cont = false; // false se o menu NÃO estiver visível e true caso esteja

//ao clicar no menu sanduiche
btnSand.addEventListener("click", function(){ 
    if(cont==false){
        menu.style.display='flex';
        menu.style.flexDirection='column';
        menu.style.justifyContent='flex-start';
        menu.style.alignItems='flex-start';
        
        cont = true;
    }else{ 
        menu.style.display ='none';
        cont= false;  
    }
});

//caso o tela esteja com no minimo 791px de largura, o menu volta a aparecer. 
const mediaQuery = window.matchMedia('(min-width: 791px)');

function handleTabletChange(e) {
  //checa se a tela está no tamanho minimo de 791px
  if (e.matches) {
    menu.style.display='flex';
    menu.style.flexDirection='row';
    menu.style.justifyContent='space-around';
    menu.style.alignItems='center';
  }else{
    menu.style.display='none';
  }
}

mediaQuery.addListener(handleTabletChange);

handleTabletChange(mediaQuery);


//Se o menu estiver aberto, ele fecha caso algum elemento fora do menu seja clicado.
menu.addEventListener("click", fechaMenu);
//home.addEventListener("click", fechaMenu);
//sobre.addEventListener("click", fechaMenu);
//projetos.addEventListener("click", fechaMenu);


//fecha o menu, caso esteja aberto.
function fechaMenu(){
    if(cont == true){
        menu.style.display ='none';
        cont = false;
    }
}