//une fonction qui renvoie la somme des deux nombres min positifs

function MinSum() {
    var array =[];
    var TAB = [];
    //Remplissage du tableau
    var N = Number(prompt("Entrez le nombre des valeurs du tableau"));
    for (let i = 0; i < N; i++) {
       array[i] =  Number(prompt("Entrez un nombre"));    
    }
  // Affichage 
    console.log(array)
// Créer un  nouveau tableau  dont les valeurs sont positives 
    array.forEach((element) => {
        if (element >= 0) {
            TAB.push(element);
        }
        
    });
 //trier les éléments d'un tableau   
    TAB.sort(function(a, b) {
        return a - b;
    })
// Affichage tabelau trié
    console.log(TAB);
    var sum = TAB[0] + TAB[1];
    console.log(sum)
}
MinSum();