// 1. quel est mon niveau de collateralization ?

const minimumRatio = 1.5
let ethToUsd = 100;
let ethDeposit = 2;
let daiCreation = 100
let collateralization = (ethDeposit * ethToUsd / daiCreation) * 100

console.log(collateralization+ " %")

// 2 quel est mon cours de liquidation ?

let liquidationPrice = (daiCreation * minimumRatio) / ethDeposit

console.log (collateralization, "$") 

//3 ce contrat se fait liquider, que se passe t-il?

const tax  = 0.13
ethToUde = liquidationPrice

// let newDeposit = ethDeposit - daiCreation / ethToUsd
let newDepositValue = ethDeposit * ethToUsd
let newDeposit = newDepositValue - (daiCreation + daiCreation * tax))
console/log(newDeposit)
let newDeposit = newDepositValue - daiCreation + (1 * tax)
console.log(newDeposit)
ethDeposit = newDeposit / ethToUsd

console.log("Votre nouveau depot de",ethDeposit, "eth")

//j'ai toujours des DAI, quelle est ma perte Nette en ETH ?