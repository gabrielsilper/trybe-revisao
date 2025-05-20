const n = 5;

for (let i = 1; i <= n; i+= 1){
    let linha = ''
    for (let j = 0; j < i; j+= 1){
        linha += '*'
    }
    console.log(linha);
}

for (let i = 1; i <= n; i+= 1){
    let linha = ''
    for (let j = 5; j > i; j-= 1){
        linha += ' '
    }
    for (let j = 0; j < i; j+= 1){
        linha += '*'
    }
    console.log(linha);
}
