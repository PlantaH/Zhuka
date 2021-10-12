function CambiarTexto(id){
    $('#divTituloComoComprar').removeClass("active");
    $('#divTituloEnvios').removeClass("active");
    $('#divTituloFormas').removeClass("active");

    $('#divComoComprar').css('display','none')
    $('#divEnvios').css('display','none')
    $('#divFormas').css('display','none')


    if (id == '1'){
        $('#divComoComprar').css('display','block')
        $('#divTituloComoComprar').addClass("active");
    }
    if (id == '2'){
        $('#divEnvios').css('display','block')
        $('#divTituloEnvios').addClass("active");
    }
    if (id == '3'){
        $('#divFormas').css('display','block')
        $('#divTituloFormas').addClass("active");
    }
}