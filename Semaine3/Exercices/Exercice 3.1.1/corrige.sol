pragma solidity ^0.5.12;

contract SceneOuverte {
    string[12] passagesArtistes;
    uint creneauxLibres = 12;
    uint tour;
    
    function sInscrire(string memory _nomDArtiste) public { 
        if(creneauxLibres > 0){
            passagesArtistes[12-creneauxLibres] = _nomDArtiste;
            creneauxLibres = creneauxLibres - 1; // creneauxLibres -= 1
        }
    }
    
    function passerArtisteSuivant() public {
        /*
            Il faut vérifier si "tour" a atteint sa limite 
            sachant que le nombre de créneaux libres = 12, il faut s'assurer que  
            tour est inférierur à 11 pour pouvoir incrémenter sinon rien faire 
        */
        if(tour < 11){
            tour += 1;
        }
    }
    
    function artisteEnCours() public view returns (string memory) {
        /*
            Il faut vérifier si "tour" n'a pas encore atteint sa limite 
            si c'est le cas, afficher l'artiste actuel, sinon, afficher "FIN"
        */
        if(tour < 12){
            return passagesArtistes[tour];
        }else{
            return "FIN";
        }
    }//
    
    function getTour() public view returns (uint) {
        return tour;
    }
}