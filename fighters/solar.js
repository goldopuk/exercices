var direction = 'right';

var Player = function (initialX, initialY, direction) {
    this.width = 100;
    this.height = 100;

    this.initialX = initialX;
    this.initialY = initialY;
    this.x = initialX;
    this.y = initialY;
    this.direction = direction;
};

Player.prototype.attack = function (player) {

    // calcul pente
    var pente = (player2.y - player1.y) / (player1.x - player1.x);

    if (this.x + this.width  > player.x) {
        this.direction = 'left';
    }

    if (this.x < this.x) {
        this.direction = 'right';
        currentAttacker = 'player2';
        return;
    }

    if (this.direction === 'right') {
        this.currentx++;
    } else {
        this.currentx--;
    }
};

var player1 = new Player(50, 100, 'right');
var player2 = new Player(200, 100, 'left');

var currentAttacker = "player1";

draw();

function draw() {
    var ctx = document.getElementById('canvas').getContext('2d');
    ctx.clearRect(0, 0, 300,300);

    paintPlayer(ctx, player1);
    paintPlayer(ctx, player2);
}

function paintPlayer(ctx, player) {
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

setInterval(function () {

    switch (currentAttacker) {
        case 'player1':
            player1.attack(player2);
            break;
        case 'player2':
            player2.attack(player1);
            break;
    }

    draw();
}, 10);



function attack2() {
    if (x2 < 150) {
        direction = 'right';
    }

    if (x2 > 250) {
        direction = 'left';
        currentAttacker = 'player1';
    }

    if (direction == 'right') {
        x2++;
    } else {
        x2--;
    }
}
