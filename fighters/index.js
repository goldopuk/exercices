var fighters = [];


var dragon = buildFighter("Fafnir", 'https://www.casusno.fr/download/file.php?avatar=7286_1505059335.png');
var hero = buildFighter("Aragorn", );

fighters.push(dragon);
fighters.push(hero);


function buildFighter(name, url) {
	var f = {
		name: name,
		avatar: url
		hp: 20,
		damage: 5,
		isDead: function () {
			return this.hp < 1;
		}
	};

	return f;	
}

function strike(attacker, defensor) {

	defensor.hp -= attacker.damage; 

}


function figthToDeath(f1, f2, func) {
	setTimeout(function () {
		console.log("new round", f1.name, f1.hp, f2.name, f2.hp);
		strike(f1, f2);
		strike(f2, f1);

		if (f1.isDead() || f1.isDead()) {
			console.log('done');

			var winner = f1.isDead() ? f2 : f1;

			console.log('Winner', winner.name);

			func(winner);

			return;
		}

		figthToDeath(f1, f2, func);
	}, 2000);
}

figthToDeath(dragon, hero, function (winner) {

	document.write("<h1>" + winner.name + "</h1>");
});


<html>
    <head>
        <script type="text/xtemplate" id="template-card-hero">
            <li class="card-hero">
                <img src="{{ avatarUrl }}">
                <h3>{{ name }}</h3>
                <table>
                    <tr>
                        <td>Point de vie</td>
                        <td>{{ hp }}</td>
                    </tr>
                    <tr>
                        <td>Armure</td>
                        <td>{{ armor }}</td>
                    </tr>
                    <tr>
                        <td>Dommage</td>
                        <td>{{ damage.min }} - {{ damage.max }}</td>
                    </tr>
                <table>
            </li>
        </script>
    </head>
    <body>
    
        <h1>Les héros</h1>

        <ul id="arena">
        </ul>

    </body>
</html>




var dragon = {
	name: "fafnir",
    armor: 5,
    hp: 30,
    damage: {
    	min: 5,
        max: 12
    },
    avatarUrl: "https://d2homsd77vx6d2.cloudfront.net/cache/2d/c4/2dc48547b87ea2c1152546d5b72e4a14.png"
}

var aragorn = {
	name: "Aragorn",
    armor: 5,
    hp: 30,
    damage: {
    	min: 5,
        max: 12
    },
    avatarUrl: "http://www.shiness-game.com/img/game/characters/poky_avatar.png"
}

var heros = [
	dragon,
    aragorn
];



for (var i = 0; i < heros.length; i++) {

	var hero = heros[i];

    var nodeTemplate = document.querySelector("#template-card-hero");

    var htmlTemplate = nodeTemplate.innerHTML;

    htmlTemplate = htmlTemplate.replace("{{ name }}", hero.name);
    htmlTemplate = htmlTemplate.replace("{{ avatarUrl }}", hero.avatarUrl);
    htmlTemplate = htmlTemplate.replace("{{ hp }}", hero.hp);
    htmlTemplate = htmlTemplate.replace("{{ armor }}", hero.armor);
    htmlTemplate = htmlTemplate.replace("{{ damage.min }}", hero.damage.min);
    htmlTemplate = htmlTemplate.replace("{{ damage.max }}", hero.damage.max);

    var nodeContainer = document.querySelector('#arena');

    nodeContainer.innerHTML += htmlTemplate;
}







