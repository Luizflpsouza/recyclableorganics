const site = document.getElementById('site-completo')
const carregar = document.getElementById('teladecarregamento')
function carregou(){
    setTimeout(()=>{
    site.style.display = "block";
    carregar.style.display = "none";
    } 
    , 2000)
}
    