function Hexatodecimal(chaine)
{
    dec = 0;
    for(let i = 0; i < chaine.length; i++)
        console.log (chaine[i])
dec = parseInt(entre,16)
    return dec
}

function decimaltohexa(number)
{
    if (number < 0)
    {
      number = 0xFFFFFFFF + number + 1;
    }
  
    return number.toString(16).toUpperCase();
  }
  
  console.log(decimaltohexa(495));
  

//console.log(Hexatodecimal("C921"))