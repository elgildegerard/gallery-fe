$(document).ready(function(){
    
    // CREO ELEMENTOS DEL LIGHTBOX    
    var $background = $('<div id="background"></div>');
    var $container = $('<div id="container"></div>');
    var $image = $('<img id="image">');
    var $text = $('<p id="text"></p>');
    
    
    //UNO LOS ELEMENTOS.
    $container.append($image);
    $container.append($text);
    
    $background.append($container);
        
    $("body").append($background);
    
      
    //OCULTO EL BACKGROUND
    $background.hide();
    
    //CENTRAR IMAGEN    
    var ventana_ancho = $(window).width();
    var ventana_alto = $(window).height();
    var lightbox_ancho = $("#container").width();
    var lightbox_alto = $("#container").height();
    var ancho_general = (ventana_ancho-lightbox_ancho)/2;
    var alto_general = (ventana_alto-lightbox_alto)/2;
    
    $("#container").css("top", alto_general);
    $("#container").css("left", ancho_general);
    
    //FUNCIÓN PARA LIMPIAR LOS A, Y QUE AL HACER CLICK NO SE ME VAYA PARA EL TOP DE LA PÁGINA.    
    $("ul li a").click(function(e){
        e.preventDefault();
        
        //ESTOY GENERANDO LA IMAGEN DINAMICAMENTE.        
        var imageLocation = $(this).attr("href");
        $image.attr("src", imageLocation);
        
        //TRAIGO EL TEXTO DESDE EL ALT.
        var textAlt = $(this).children("img").attr("alt");
        $text.text(textAlt);
        
        // MUESTRO EL LIGHTBOX
        $background.fadeIn();               
    });
    
    // CUANDO HAGO CLICK SOBRE EL FONDO ME DESAPARECE EL LIGHTBOX
    $($background).click(function(){
        $background.fadeOut();
    
    });
});