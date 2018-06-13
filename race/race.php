<?php
session_start();

class Session {

    protected static $instance;

    static function getInstance() {
        if (! self::$instance) {
            self::$instance = new self();
        }

        return self::$instance;
    }

    function get($key) {

        return isset($_SESSION[$key]) ? $_SESSION[$key] : null;

    }

    function has($key) {
        return isset($_SESSION[$key]);
    }

    function set($key, $value) {
        $_SESSION[$key] = $value;
    }

    function reset() {
        $_SESSION = [];
    }

}

class Player {
    public $position = 0;
    public $color = 'black';

    function __construct($color) {
        $this->color = $color;
    }

    function move() {
        $this->position += rand(0, 5);
    }

}

class Race {
    /**
     * @var Player[]
     */
    protected $players = [];

    function addPlayer(Player $player) {
        $this->players[] = $player;
    }

    function getPlayers() {
        return $this->players;
    }

    function go() {
        foreach ($this->players as $player) {
            $player->move();
        }
    }
}

class SVGRenderer {
    function render(Race $race) {

        $svg = '';
        $y = 0;

        foreach ($race->getPlayers() as $player) {

            $svg .= <<<TXT
    <rect x="{$player->position}" y="$y" width="50" height="50" fill="{$player->color}"></rect>
TXT;

            $y += 50;

        }

        return $svg;
    }
}

$session = new Session();

if ( ! empty($_GET['reset'])) {
    $session->reset();
}

if ($session->has('race')) {

    $race = $session->get('race');
    $race->go();
} else {
    $race = new Race();
    $race->addPlayer(new Player('blue'));
    $race->addPlayer(new Player('yellow'));
    $race->addPlayer(new Player('red'));

    $session->set('race', $race);
}


$renderer = new SVGRenderer();

?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <a href="?reset=1">Recommence</a>
    <br>
    <svg width="1000" height="300" style="border: 1px solid red">

        <?= $renderer->render($race) ?>
    </svg>
    <?php
    var_dump($_SESSION);
    ?>
</body>
</html>




