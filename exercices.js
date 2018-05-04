// gestion gestion d'utilisateurs
// todolist
// recette de cuisine

function fight(fighters) {



    while ( ! allDeadExceptOne(fighters)) {

        fightRound(fighters);

    }

}

function fightRound(fighters) {

    shuffle(fighters);

    for (var i = 0; i < fighters.length; i++) {

        var attacker = fighters[i];
        var indexDefensor = (i + 1) < fighters.length ? i + 1 : 0;
        var defensor = fighters[indexDefensor];

        strike(attacker, defensor);

        if (allDeadExceptOne(fighters)) {
            break;
        }

    }

}


function bonjour(firstname, lastname) {
    console.log("Bonjour " + firstname + " " + lastname);
}

function calculePrixAvecRemise(prix, remise) {

    return prix - (prix * remise / 100);
}

var produits = [];

produits.push({
    name: 'tomate',
    prix: 100
});

produits.push({
    nom: 'salade',
    prix: 50
});

for (var i = 0; i < produits.length; i++) {
    var produit = produits[i];
    var prixAvecRemise = calculePrixAvecRemise(produit.prix);
    console.log("Produit" + produit.name + " coûte " + prixAvecRemise + " au lieu de " + produit.prix);
}


setInterval(function () {
    

}, 1000);
