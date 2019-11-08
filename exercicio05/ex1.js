let num = document.getElementById("txtn");
let list = document.getElementById("seltab");
let res = document.getElementById("res");
let numeros = [];

function isNumberValid(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, lista) {
  if (lista.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumberValid(num.value) && !inLista(num.value, numeros)) {
    numeros.push(Number(num.value))
    let item = document.createElement('option')
    item.text= ` o valor ${num.value} foi adicionado`
    list.appendChild(item)
    
  } else {
    window.alert("valor invalido ou ja presente na lista");
  }
  num.value =''
  num.focus()
  //
  //item.text= ` o numero ${num.value} foi adicionado`
  //tab.appendChild(item)
  //guardar(num.value)
}

function finalizar() {
    if (numeros.length == 0) {
        window.alert('digite algum valor!')
    }else{
        
    }
    
    var element
    let item = document.createElement('p')
    total = numeros.length
    menor = numeros[0]
    maior = numeros[0]
    let soma = 0
    let media = 0
    for (let pos in numeros) {
        soma+=numeros[pos]
        if (numeros[pos]> maior) 
            maior = numeros[pos]
        if (numeros[pos] < menor)
            menor = numeros[pos]   
    } 
    
    media = soma / total
    item.innerHTML=``
    item.innerHTML = ` ao todo foram ${total} numeros adicionados<br>`
    item.innerHTML += ` o maior valor informado foi o ${maior}<br>`
    item.innerHTML += ` o menor valor informado foi o ${menor}<br>`
    for (let index = 0; index < numeros.length; index++) {
        element += numeros[index];  
    }
    item.innerHTML += ` a soma dos valores informados foi de ${soma}<br>`
    item.innerHTML +=`a media dos valores é ${media}`
    
    res.appendChild(item)
    
}
