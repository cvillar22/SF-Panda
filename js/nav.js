//menu desplegable
$(function(){
    $('.navbar-toggler').click(function(){
        $('.menu-flotante').show();
    });

    $('.menu-flotante, .menu-flotante .cerrar').click(function(){
        $('.menu-flotante').hide();
    });
});
        