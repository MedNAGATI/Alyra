// 1. quel est mon niveau de collateralization ?

const minimumRatio = 1.5
let ethToUsd = 100;
let ethDeposit = 2;
let daiCreation = 100
let collateralization = (ethDeposit * ethToUsd / daiCreation) * 100

console.log(collateralization+ " %")


// 2 quel est mon cours de liquidation ?

let liquidationPrice = (daiCreation * minimumRatio) 


console.log (collateralization, "$") 