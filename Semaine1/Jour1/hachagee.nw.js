const crypto = require('crypto')
function pseudohachage (chaine){
    condensat=0

    
    for (let i=0;i<chaine.lenght;i++){
        console.log(chaine.charcodeAt(i))
        condensat = (condensat + chaine.charCodeAt(i) * 100**(i+1) ) % (2**256)
    }
    return condensat.tostring(16)
} 
function sha256(chaine){
    
console.log("digest:",crypto.createHash("sha256").update(chaine).digest("hex"))
}
sha256("anna")
