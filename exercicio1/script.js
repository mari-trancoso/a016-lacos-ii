const array = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]

// Crie um laco `for` que itere pelo array deixado no arquivo `script.js`, 
//e em sequência itere pelo array que existe dentro do primeiro array. 
// for (let i in array){
//     console.log(array[i])
//     for (let j=0; j<array.length; j++){
//         console.log(j)
//     }
// }


//Você deve imprimir a temporada, e o número de gols, como no exemplo abaixo:
// ```bash
// Jogador 1: 13, 15, 25, 34, 35
// Jogador 2: 30, 48, 30, 12, 47
// ```

for (let i in array){
    let jogador = `Jogador ${Number(i)+1}: `
    for (let j of array[i]){
        jogador += j + ", "
    }
    console.log(jogador)
}