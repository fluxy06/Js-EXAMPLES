

function Polindrom(word) {
    let mass = new Array()
    let mass2 = new Array()
    let i = 0
    let i2 = 0;
    var info = false
    a = word.length //6
    for (i; i < a; i++){
        mass.push(word[i])
    }
    for (a; a > 0; a--){
        mass2.push(word[a - 1])
    }
    let str = mass.join('')
    let str2 = mass2.join('')
    k = word.toLowerCase()
    l = str2.toLowerCase()
    if (k.length < 3) {
        console.log('Слишком мало символов')
    }else if (k === l) {
        console.log('Полиндром')
    }
    else {
        console.log('Неполиндром')
    }
}

Polindrom('шама')