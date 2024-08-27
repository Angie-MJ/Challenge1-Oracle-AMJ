var BotonEncriptar =document.querySelector(".BotonEncriptar");
var BotonDesencriptar =document.querySelector(".BotonDesencriptar");
var Muñeco =document.querySelector(".CajaMuñeco");
var Resultado =document.querySelector(".TextoResultado");
var CajaParrafo =document.querySelector(".CajaParrafo");
var BotonBorrar = document.querySelector(".BotonBorrar");
BotonEncriptar.onclick= encriptar;
BotonDesencriptar.onclick= desencriptar;

function encriptar(){
    OcultarAdelante();
    var cajatexto=RecuperarTexto(); //
    Resultado.textContent=EncriptarTexto(cajatexto);

}
function desencriptar(){
    OcultarAdelante();
    var cajatexto=RecuperarTexto(); //
    Resultado.textContent=DesencriptarTexto(cajatexto);
    
}
function RecuperarTexto(){
    var cajatexto=document.querySelector(".CajaTexto");
    return cajatexto.value
}
function OcultarAdelante(){
    Muñeco.classList.add ("ocultar");
    CajaParrafo.classList.add ("ocultar");
}
function EncriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}
function DesencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }

        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}
const botonCopiar = document.querySelector(".BotonCopiar"); 
    botonCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".TextoResultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("holaaaa"); 
});
BotonBorrar.onclick = function() {
    var cajatexto = document.querySelector(".CajaTexto");
    cajatexto.value = ""; // Borra el contenido de la caja de texto
};