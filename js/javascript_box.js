window.onload = function() {
    
    var d = new Date();
    var n = d.getDay();
    var dias = document.getElementsByClassName("descricao");
    var img = document.getElementsByClassName("teste");

    dias[n].className += " hoje";
};  