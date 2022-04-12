function parimp(n) {
    if (n % 2 == 0) {
        return 'Par'
    }
    else {
        return 'Ímpar'
    }
}

let res = parimp(4)
console.log(res)

function soma(n1=0, n2=0) {
    return n1 + n2
}
var a = 15
var b = 7
console.log(soma(a, b))

let v = function (x) {
    return 2*x
}

console.log(v(5))

function fatorial(r) {
    let fat = 1
    for(let c = r; c > 1; c--) {
    fat *= c
    }
    return fat
}

console.log(fatorial(5))