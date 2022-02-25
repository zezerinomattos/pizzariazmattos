var quantidade = $('div#testemunhos ul').length;
var limite = (quantidade * 336) * -1;
var largura = limite + 336;
var view_largura = $('section#testemunha div#testemunha-centro').width();

$('div#testemunhos').css('width', limite * -1);


$('div#testemunha-direita').click(function(){
    //TESTES FEITOS

    //$('div#teste').html('clicou no botão da direita');
    //$('div#testemunhos').animate({left:-884.333}, 1000);
    
    //---------------------------------------------------------

    posicao_atual = $('div#testemunhos').position().left;
    nova_posicao = posicao_atual - view_largura;
    

    if( limite < posicao_atual - view_largura ){
        $('div#testemunhos').animate({left:nova_posicao}, 1000);
              
    }

    if (limite > (nova_posicao - view_largura)){
        $('div#testemunha-direita ion-icon').css('opacity', 0.5);
        $('div#testemunha-direita ion-icon').css('cursor', 'not-allowed');
    }

    $('div#testemunha-esquerda ion-icon').css('opacity', 1);
    $('div#testemunha-esquerda ion-icon').css('cursor', 'pointer');

})

$('div#testemunha-esquerda').click( function() {
    posicao_atual   = $('div#testemunhos').position().left;

    if ( posicao_atual + view_largura <= 0 ) {
        nova_posicao = posicao_atual + view_largura;
        $('div#testemunhos').animate({left:nova_posicao},1000);
    }

    if ( nova_posicao == 0 ) {
        $('div#testemunha-esquerda ion-icon').css('opacity',0.5);
        $('div#testemunha-esquerda ion-icon').css('cursor','not-allowed');        
    }

    $('div#testemunha-direita ion-icon').css('opacity',1);
    $('div#testemunha-direita ion-icon').css('cursor','pointer');      
})

//------------------------------------------
//testando botão de click para assinar

$('div#planos-bottom-ouro').click(function(){
    alert('Você escolheu o plano Ouro');
})

$('div#planos-bottom-platinium').click(function(){
    alert('Você escolheu o plano Platinium');
})

$('div#planos-bottom-black').click(function(){
    alert('Você escolheu o plano Black');
})

//---------------------------------------------

// CODIGOS PARA LINKS DAS REDES SOCIAIS

$("ion-icon#facebook").click(function(){
    window.open("http://www.facebook.com", "_blank");  
})

$("ion-icon#instagram").click(function(){
    window.open("http://www.instagram.com", "_blank");  
})

/*CODIGOS DE ANIMAÇÃO*/
/*
COMO FIZ OS TESTES

$('section#domingo-perfeito').waypoint(function(direcao){
    if(direcao == 'down'){
        console.log('descendo');
    }

    if(direcao == 'up'){
        console.log('subindo');
    }
}, {
    offset:'400px;'
})
*/

//Tirando a opacidade do elemento testemunho
$('div#testemunhos ul:eq(0)').css('opacity', 0);
$('div#testemunhos ul:eq(1)').css('opacity', 0);
$('div#testemunhos ul:eq(2)').css('opacity', 0);

//Tirando a opacidade do elemento testemunho
$('div.planos:eq(0)').css('opacity', 0);
$('div.planos:eq(1)').css('opacity', 0);
$('div.planos:eq(2)').css('opacity', 0);

$('section#domingo-perfeito').waypoint(function(direcao){
    if(direcao == 'down'){
        $('div.folha1').addClass('animate__animated animate__fadeInUp');
        $('div.folha3').addClass('animate__animated animate__fadeInUp');
        $('div.camarao').addClass('animate__animated animate__fadeInUp animate__slow');
        $('div.tomate').addClass('animate__animated animate__fadeInUp animate__slow');
        $('div.folha2').addClass('animate__animated animate__fadeInUp animate__slower');
        $('div.queijo').addClass('animate__animated animate__fadeInUp animate__slower');
    }

    if(direcao == 'up'){
        $('div.folha1').removeClass('animate__animated animate__fadeInUp');
        $('div.folha3').removeClass('animate__animated animate__fadeInUp');
        $('div.camarao').removeClass('animate__animated animate__fadeInUp animate__slow');
        $('div.tomate').removeClass('animate__animated animate__fadeInUp animate__slow');
        $('div.folha2').removeClass('animate__animated animate__fadeInUp animate__slower');
        $('div.queijo').removeClass('animate__animated animate__fadeInUp animate__slower');
    }
}, {
    offset:'400px;'
}) 

$('section#pizza').waypoint(function(direcao){
   if(direcao == 'down'){
    $('section#pizza p').addClass('animate__animated animate__fadeInUp animate__slow');
    $('div.pizza-opcoes').addClass('animate__animated animate__fadeInUp animate__slow');
   }
   if(direcao == 'up'){
    $('section#pizza p').removeClass('animate__animated animate__fadeInUp animate__slow');
    $('div.pizza-opcoes').removeClass('animate__animated animate__fadeInUp animate__slow');
   }
}, {
    offset:'400px;'
})

$('section#testemunha').waypoint(function(direcao){
    if(direcao == 'down'){
        $('div#testemunhos ul:eq(0)').addClass('animate__animated animate__fadeInUp animate__slower');
        $('div#testemunhos ul:eq(1)').addClass('animate__animated animate__fadeInUp animate__slow');
        $('div#testemunhos ul:eq(2)').addClass('animate__animated animate__fadeInUp animate__slower');
    }
    if(direcao == 'up'){
        $('div#testemunhos ul:eq(0)').removeClass('animate__animated animate__fadeInUp animate__slower');
        $('div#testemunhos ul:eq(1)').removeClass('animate__animated animate__fadeInUp animate__slow');
        $('div#testemunhos ul:eq(2)').removeClass('animate__animated animate__fadeInUp animate__slower');
    }
}, {
    offset:'250px;'
})

$('div#transicao-testemunha-plano').waypoint(function(direcao){
    if(direcao == 'down'){
        $('div#decoracao1').removeClass('animate__animated animate__fadeOutLeft animate__slow');
        $('div#decoracao2').removeClass('animate__animated animate__fadeOut animate__slower');
        $('div#decoracao3').removeClass('animate__animated animate__fadeOutRight animate__slow');

        $('div#decoracao1').addClass('animate__animated animate__fadeInLeft animate__slow');
        $('div#decoracao2').addClass('animate__animated animate__fadeIn animate__slow');
        $('div#decoracao3').addClass('animate__animated animate__fadeInRight animate__slow');
    }else{
        //Estou fazendo com que ele saia do jeito que entrou
        $('div#decoracao1').addClass('animate__animated animate__fadeOutLeft animate__slow');
        $('div#decoracao2').addClass('animate__animated animate__fadeOut animate__slower');
        $('div#decoracao3').addClass('animate__animated animate__fadeOutRight animate__slow');
    }
}, {
    offset:'600px;'
})

$('section#plano-principal').waypoint(function(direcao){
    if(direcao == 'down'){
        $('div.planos:eq(0)').addClass('animate__animated animate__fadeInLeft animate__slow');
        $('div.planos:eq(1)').addClass('animate__animated animate__fadeInUp animate__slow');
        $('div.planos:eq(2)').addClass('animate__animated animate__fadeInRight animate__slow');
    }else{
        $('div.planos:eq(0)').removeClass('animate__animated animate__fadeInLeft animate__slow');
        $('div.planos:eq(1)').removeClass('animate__animated animate__fadeInUp animate__slow');
        $('div.planos:eq(2)').removeClass('animate__animated animate__fadeInRight animate__slow');
    }
}, {
    offset:'250px;'
})

$('footer').waypoint(function(direcao){
    if(direcao == 'down'){
       $('div#mapa').addClass('animate__animated animate__fadeIn'); 
       $('div#info').addClass('animate__animated animate__fadeIn'); 
       $('div#pizza-rodape-decoracao').addClass('animate__animated animate__fadeIn animate__slow'); 
    }else{
        $('div#mapa').removeClass('animate__animated animate__fadeIn'); 
       $('div#info').removeClass('animate__animated animate__fadeIn animate__slower'); 
       $('div#pizza-rodape-decoracao').removeClass('animate__animated animate__fadeIn animate__slow'); 
    }
}, {
    offset:'400px;'
})

//------------NavEstatico-------------------

$('header h1').waypoint(function(direcao){
    if(direcao == 'down'){
        $('nav').addClass('navEstatico');
        $('nav div').addClass('logoEstatico');
        $('nav ul').addClass('menuEstatico');
        $('nav ul li a').addClass('itemEstatico');
        $('nav ion-icon').addClass('iconeEstatico');
        $('nav ul#icon-menu-mobile ion-icon').css('color', '#404040');
        $('nav ul#icon-menu-mobile').css('margin-top', '5px');
        $('nav ul#icon-menu-mobile').css('margin-right', '20px');
    }else{
        $('nav').removeClass('navEstatico');
        $('nav div').removeClass('logoEstatico');
        $('nav ul').removeClass('menuEstatico');
        $('nav ul li a').removeClass('itemEstatico');
        $('nav ion-icon').removeClass('iconeEstatico');
        $('nav ul#icon-menu-mobile ion-icon').css('color', 'white');
        $('nav ul#icon-menu-mobile').css('margin-top', '70px');
        $('nav ul#icon-menu-mobile').css('margin-right', '20px');
    }
}, {
    offset:'100px;'
})

// açoes de navegacao
$('nav div').click(function(){
    $('html, body').animate({scrollTop:$('header').offset().top}, 1000)
})

$('nav ul li:eq(0)').click(function(){
    $('html, body').animate({scrollTop:$('section.domingo-perfeito').offset().top}, 1000, function(){
       if($(window).width() < 812){
        esconderMenu();
        controle = true;
       }
    })
})

$('nav ul li:eq(1)').click(function(){
    $('html, body').animate({scrollTop:$('section#pizza').offset().top}, 1000, function(){
        if($(window).width() < 812){
         esconderMenu();
         controle = true;
        }
     })
})
$('nav ul li:eq(2)').click(function(){
    $('html, body').animate({scrollTop:$('section#testemunha').offset().top}, 1000, function(){
        if($(window).width() < 812){
         esconderMenu();
         controle = true;
        }
     })
})

$('nav ul li:eq(3)').click(function(){
    $('html, body').animate({scrollTop:$('section#plano-principal').offset().top}, 1000, function(){
        if($(window).width() < 812){
         esconderMenu();
         controle = true;
        }
     })
})


// açoes de menu amburguer

function mostrarMenu(){
    $('nav ul#esquerda').css('display', 'flex');
    $('nav ul#direita').css('display', 'flex');
}

function esconderMenu(){
    $('nav ul#esquerda').css('display', 'none');
    $('nav ul#direita').css('display', 'none');
}

var controle = true;

$('nav ul#icon-menu-mobile').click(function(){
    if(controle == true){
        mostrarMenu();
        controle = false;
    }else{
        esconderMenu();
        controle = true;
    }
})

$(window).resize(function(){
    if($(window).width() > 812){
        mostrarMenu();
    }else{
        esconderMenu();
    }
})