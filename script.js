function limpar(){
    var res = window.document.getElementById("res")

    res.innerHTML = "RESULTADO"
}

function multiplicar(){
    var res = window.document.getElementById("res")
    var x = window.document.getElementById("num1")
    var n1 = Number(x.value)
    var y = window.document.getElementById("num2")
    var n2 = Number(y.value)

    if(x.value.length == 0 || y.value.length == 0){
        window.alert(" [ERRO] Insira um número válido")
    }
    else {
        res.innerHTML = `${n1} X ${n2} = ${n1 * n2}`
    }
    

}

function somar(){
    var res = window.document.getElementById("res")
    var x = window.document.getElementById("num1")
    var n1 = Number(x.value)
    var y = window.document.getElementById("num2")
    var n2 = Number(y.value)

    if(x.value.length == 0 || y.value.length == 0){
        window.alert(" [ERRO] Insira um número válido")
    }
    else {
        res.innerHTML = `${n1} + ${n2} = ${n1 + n2}`
    }

}

function dividir(){
    var res = window.document.getElementById("res")
    var x = window.document.getElementById("num1")
    var n1 = Number(x.value)
    var y = window.document.getElementById("num2")
    var n2 = Number(y.value)

    if(x.value.length == 0 || y.value.length == 0){
        window.alert(" [ERRO] Insira um número válido")
    }
    else {
        res.innerHTML = `${n1} ÷ ${n2} = ${n1 / n2}`
    }

}

function subtrair(){
    var res = window.document.getElementById("res")
    var x = window.document.getElementById("num1")
    var n1 = Number(x.value)
    var y = window.document.getElementById("num2")
    var n2 = Number(y.value)

    if(x.value.length == 0 || y.value.length == 0){
        window.alert(" [ERRO] Insira um número válido")
    }
    else {
        res.innerHTML = `${n1} - ${n2} = ${n1 - n2}`
    }

}