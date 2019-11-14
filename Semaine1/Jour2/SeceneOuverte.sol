pragma solidity 0.5.11;

contract SeceneOuverte {
        //0xC96D2E4543550DC22e64248c4748aeB33753737f
        string[12] passagesArtistes;
        uint creneauxLibres = 12;
        uint tour;
        
   function sInscrire(string memory nomDArtiste) public { 
        if(creneauxLibres > 0){
            passagesArtistes[12-creneauxLibres] = nomDArtiste;
            creneauxLibres -= 1; 
        }  
    }
    function passerArtisteSuivant()public {
        tour += 1;
   }
     function getTour()public view returns (uint){
         return tour;
     }
        function artisteEncours()public view returns (string memory){
         return passagesArtistes[tour-1];
        }
}