//une fonction qui renvoie la somme de tous les entiers positifs

function SumPos() {
    var array =[];
    var sum = 0;
    //Remplissage du tableau
    var N = Number(prompt("Entrez le nombre des valeurs du tableau"));
    for (let i = 0; i < N; i++) {
       array[i] =  Number(prompt("Entrez un nombre"));    
    }
  // Affichage 
    console.log(array)
    array.forEach((element) => {
        if (element >= 0) {
            sum += element;
        };
    });

// Afficher la somme de tous les entiers positifs
    console.log(sum);
}

SumPos();