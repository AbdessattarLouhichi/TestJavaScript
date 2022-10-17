//La fonction retourne deux lettres majuscules avec un point séparateur.
var CH = prompt('Entrez deux chaines  avec un espace entre eux');
function MyFunc(string) {
    let CH2="";
    let pos = string.indexOf(" ");

    CH2+= string[0].toUpperCase() +'.'+string[pos+1].toUpperCase();
    
    return CH2;
}

console.log(CH);
console.log(MyFunc(CH));