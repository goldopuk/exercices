function isAlive (fighter) {
    return fighter.lp > 0;
}

function fightUntilDeath(fighter1, fighter2) {

    var maxRound = 10;

    var i = 0;

    while (isAlive(fighter1) && isAlive(fighter2) && i < maxRound) {
        console.log("Round " + i);
        fightRound(fighter1, fighter2);
        i++;
    }

    if (isAlive(fighter1) && isAlive(fighter2)) {
        return null;
    } else if (isAlive(fighter1)) {
        return fighter1;
    } else {
        return fighter2;
    }
}

function fightRound(fighter1, fighter2) {

    var nbFighter1 = Math.random();
    var nbFighter2 = Math.random();

    var attacker;
    var defender;

    if (nbFighter1 > nbFighter2) {
        attacker = fighter1;
        defender = fighter2;
    } else {
        attacker = fighter2;
        defender = fighter1;
    }

    strike(attacker, defender);

    if ( ! isAlive(defender)) {
        return;
    }

    strike(defender, attacker);
}

function strike(attacker, defender) {

    console.log("Strike:" + attacker.name + " attack " + defender.name);

    var damage = getRandomInteger(attacker.damage.min, attacker.damage.max);

    var wound = Math.floor(damage / defender.armor);


    defender.lp -= wound;

    console.log("Damage " + wound + " LP " + defender.name + " : " + defender.lp);

}

function getRandomInteger(min, max)
{
    // Renvoie un nombre entier aléatoire compris entre les arguments min et max inclus.
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
