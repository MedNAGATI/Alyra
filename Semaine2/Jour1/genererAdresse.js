const crypto = require('crypto');
function ripemd160(c){
    return crypto.createHash('ripemd160').update(c).digest()
}
function sha256(c){
    return crypto.createHash("sha256").update(c).digest()
}
function adresseBitcoin(clePublique){
//calculer le hash SHA 256 puis RIPEMD160, on appelle ce résultat hash160
let hash160 = ""//    
