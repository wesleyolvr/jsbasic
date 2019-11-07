function contar() {
  let inicio = document.getElementById("inicio");
  let final = document.getElementById("final");
  let passo = document.getElementById("passo");
  var res = document.getElementById("res");


  if (inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0){
    window.alert('[ERRO] TE FALTA DADOS')
  }else{
    res.innerHTML = 'Contando : '
    i= Number(inicio.value)
    f = Number(final.value)
    p= Number(passo.value)
    if (p<=0) {
      p=1
    }
    if(i < f){
      //contagem crescente
      for (let c= i; c <= f; c+= p) {
        res.innerHTML += `${c} \u{1F449}`
      }
    } else {
      //contagem regressiva
      for (let c= i; c > f; c-= p) {
        res.innerHTML += `${c} \u{1F449}`
    }
    
  }
}
}
