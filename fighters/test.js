var redGamePiece, blueGamePiece, yellowGamePiece, myGamePiece;

function startGame() {
    myGameArea.start();
    myGamePiece = new Component(30, 30, "orange", 10, 120);
    redGamePiece = new Component(30, 30, "red", 10, 120);
    blueGamePiece = new Component(30, 30, "blue", 100, 120);
    yellowGamePiece = new Component(30, 30, "yellow", 200, 120);
}

var myGameArea = {
    canvas: document.createElement('canvas'),
    start: function () {
        console.log('starting game');
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext('2d');
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        window.addEventListener('keydown', function (e) {
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = true;
        });
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = false;
        });

        window.addEventListener('mousemove', function (e) {
            myGamePiece.x = e.pageX;
            myGamePiece.y = e.pageY;
        })

        this.interval = setInterval(updateGameArea, 20);
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
};

function Component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;

    this.update = function () {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };

    this.newPos = function () {
        this.x += this.speedX;
        this.y += this.speedY;
    };
}

function updateGameArea() {
    myGameArea.clear();

    if (myGameArea.keys && myGameArea.keys[37]) {myGamePiece.speedX = -1; }
    if (myGameArea.keys && myGameArea.keys[39]) {myGamePiece.speedX = 1; }
    if (myGameArea.keys && myGameArea.keys[38]) {myGamePiece.speedY = -1; }
    if (myGameArea.keys && myGameArea.keys[40]) {myGamePiece.speedY = 1; }

    myGamePiece.newPos();
    myGamePiece.update();

    redGamePiece.update();
    blueGamePiece.update();
    yellowGamePiece.update();
}

function moveup() {
    console.log('clicn');
    myGamePiece.speedY -= 1;
}

function movedown() {
    myGamePiece.speedY += 1;
}

function moveleft() {
    myGamePiece.speedX -= 1;
}

function moveright() {
    myGamePiece.speedX += 1;
}

function stopMove() {
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
}

startGame();

