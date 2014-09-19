$(document).ready(function(){
    
    // CREO ELEMENTOS DEL LIGHTBOX
    
    var $background = $('<div id="background"></div>');
    var $image = $('<img id="image">');
    var $text = $('<p id="text"></p>');
    
    //UNO LOS ELEMENTOS.
    
    $background.append($image);
    $background.append($text);
    
    $("body").append($background);
    
    //OCULTO EL BACKGROUND
    $background.hide();
    
    //FUNCIÓN PARA LIMPIAR LOS A, Y QUE AL HACER CLICK NO SE ME VAYA PARA EL TOP DE LA PÁGINA.
    
    $("ul li a").click(function(e){
        e.preventDefault();
        
        //ESTOY GENERANDO LA IMAGEN DINAMICAMENTE.
        
        var imageLocation = $(this).attr("href");
        $image.attr("src", imageLocation);
        
        //TRAIGO EL TEXTO DESDE EL ALT
        var textAlt = $(this).children("img").attr("alt");
        $text.text(textAlt);
        
        // MUESTRO EL
        $background.fadeIn();       
        
        
    });
    
    $($background).click(function(){
        $background.fadeOut();
    
    });
    
    
});



//    // esconder 
//    var light = $(".fondo, .lightbox");
//    light.hide();
//
//    //mostrar
//    $("#boton").click(function(){
//        light.fadeIn();        
//    });
//    
//    // ocultar
//    $("#cruz, .fondo").click(function(){
//        light.fadeOut();        
//    });
//    
//    //centrado de modal
//    var ventana_ancho = $(window).width();
//    var ventana_alto = $(window).height();
//    
//    var lightbox_ancho = $(".lightbox").width();
//    var lightbox_alto = $(".lightbox").height();
//    
//    var ancho_general = (ventana_ancho-lightbox_ancho)/2;
//
//    var alto_general = (ventana_alto-lightbox_alto)/2;
//    console.log (alto_general);
//    
//    $(".lightbox").css("top", alto_general);
//    $(".lightbox").css("left", ancho_general);