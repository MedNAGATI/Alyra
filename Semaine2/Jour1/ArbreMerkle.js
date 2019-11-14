const crypto = require("crypto")
class ArbreDeMerkle {
    constructor(feuilles){
        this.feuilles = feuilles
        this.arbre=[[]]

        for(let f of feuilles){
            this.arbre[0].push(this.hachageChaine(f))
        }
       // this.profondeurMax = math.ceil(math.log2(this.feuilles.length))
        for(let i = 0; this.arbre[i].length > 1; i++){
            this.arbre[i+1]=[]
            for(let j=0;j<this.arbre[i].length;j+=2){
                //...
    }
    hachageChaine(chaine){
        return crypto.createHash("sha256").update(chaine,'utf8').digest('hex')
    }
    hashage(a,b){
        var concat = b !== 'undefined' ? Buffer.concat(a,b) : a;
        return crypto.createHash("sha256").update(concat,'utf8').digest('hex')
        }

}
erable = new ArbreDeMerkle(["AA","BB","CC","DD"])


//...
