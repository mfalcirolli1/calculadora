function limpar(){
    var res = window.document.getElementById("res")

    res.innerHTML = ""
}

function multiplicar(){
    var res = window.document.getElementById("res")
    var x = window.document.getElementById("num1")
    var n1 = Number(x.value)
    var y = window.document.getElementById("num2")
    var n2 = Number(y.value)

    res.innerHTML = `${n1} X ${n2} = ${n1 * n2}`

}

function somar(){
    var res = window.document.getElementById("res")
    var x = window.document.getElementById("num1")
    var n1 = Number(x.value)
    var y = window.document.getElementById("num2")
    var n2 = Number(y.value)

    res.innerHTML = `${n1} + ${n2} = ${n1 + n2}`

}

function dividir(){
    var res = window.document.getElementById("res")
    var x = window.document.getElementById("num1")
    var n1 = Number(x.value)
    var y = window.document.getElementById("num2")
    var n2 = Number(y.value)

    res.innerHTML = `${n1} ÷ ${n2} = ${n1 / n2}`

}

function subtrair(){
    var res = window.document.getElementById("res")
    var x = window.document.getElementById("num1")
    var n1 = Number(x.value)
    var y = window.document.getElementById("num2")
    var n2 = Number(y.value)

    res.innerHTML = `${n1} - ${n2} = ${n1 - n2}`

}