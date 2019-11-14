const readline = require('readline')
const rli = readline.createInterface({
input: process.stdin,
output: process.stdout
})
rli.on('line', (userinput) => {
if (userinput == solution){
rli.close()
let entree = -1
let solution = Math.floor(Math.random()*100+1)
while (entree != solution && entree != 0){
entree = window.prompt("Devinez le nombre entre 1 et 100")
if (entree < solution){
console.log("C'est plus que ", entree)
} else if (entree > solution){
console.log("C'est moins que ", entree)
}
// }
console.log("Vous avez gagné! la réponse était", solution)
const readline = require('readline')
let solution = Math.round(Math.random()*100+1);
const rli = readline.createInterface({
input: process.stdin,
output: process.stdout
})
console.log("Devinez le nombre entre 1 et 100")
rli.on('line', (userinput) => {
    if (userinput < solution){
    console.log("C'est plus que ", userinput)
    } else if (userinput > solution){
    console.log("C'est moins que ", userinput)
    } else if (userinput == solution){
    rli.close()
    console.log("Vous avez gagné!")
    } else {
    console.log("Entrée illisible")
    }
    })
