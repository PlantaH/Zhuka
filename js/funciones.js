/* */
const textosBanners =  document.getElementById("textosBanners");

const ocultarMensajeBanner = () => {
   
    if($('#textosBanners').css('display') == 'none'){
        $("#textosBanners").show();
     }else{
        $("#textosBanners").hide();
     }

   
}
/* */

const verMasCategoria = (m) =>{
    window.location = 'productos.html'
}

const verProducto = (m) =>{
    window.location = 'detalle.html'
}


