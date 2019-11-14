class Noeud
constructor(valeur) {
    this.valeur = valeur
    this.gauche = undefined
    this.droit = undefined
}
ajouter(valeur)
if(this.gauche == undefined)
this.gauche = new Noeud (valeur)
else if (this.droit == undefined)
this.droit = new Noeud(valeur)
else
this.gauche.ajouter(valeur)
}
NoeudPapillon = new Noeud(6)
console.log(noeudPapillon)
}


}
