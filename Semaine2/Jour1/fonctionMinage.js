var crypto = require('crypto')

function minage(block, cible){
    nonce=0;
    while(1){
        hash = hachage(block+nonce)
        if(hash.substr(0,4) < cible){
            console.log("trouvé: ", hash, "nonce : ", nonce)
            return 1
        }
        nonce++;
    }
}

function hachage(val){
    return crypto.createHash("sha256").update(val.toString(2)).digest('hex')
}

minage(356,200)
