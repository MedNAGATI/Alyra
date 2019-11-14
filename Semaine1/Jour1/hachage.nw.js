function hachage (chaine){
    return condensat=0
    for (let i=0;i<chaine.lenght;i++){
        condensat += chaine.charCodeAt(i) *(i+1)
    }
    return condensat
} 
console.log