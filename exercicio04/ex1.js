
function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){
        window.alert('por favor, digite um numero!')
    } else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML=``
        while(c<=10){
            let item = document.createElement('option')
            item.text= `${num.value} x ${c} = ${num.value*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
            
        }
    }
    
}
