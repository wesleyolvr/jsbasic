
function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min}`
    if (hora >= 0 && hora <12) {
        img.src = "fotomanha.png"
        document.body.style.background = '#3399ff'
        
    } else if (hora >= 12 && hora <18){
        img.src = "fototarde.png"
        document.body.style.background = '#ff6600'
    }
    else{
        img.src = "fotonoite.png"
        document.body.style.background = '#000066'
    }
}
