function palindrome(mot) {
if (( mot.length == 0 ) || (mot.length == 1)){
return true
} else { 
    if(mot[0]!=mot[mot.lenght-1]){
        return false
    } else  {
        return palindrome (mot.substring(1,mot.lenght-1))     
}}
function estpalindrome(chaine) {
  if(palindrome(chaine)){
      console.log(chaine, "est un palindrome")
    } else {
        console.log(chaine, "n'est PAS un palindrome") 
    }
}


function estPalindrome(chaine) {
    if(palindrome(chaine)){

    console.log(chaine, "est un palindrome" )
    } else {
   console.log(chaine, "n'est PAS un palindrome" )
    }
}
estPalindrome("BOB")
estPalindrome("ANNA")
estPalindrome("ESOPE RESTE ICI ET SE REPOSE")