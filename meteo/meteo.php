<?php

$temperatures = [];
$temperatures['nantes'] = 30;
$temperatures['paris'] = 30;
$temperatures['barcelone'] = 30;


if (isset($_GET['ville'])) {

    $ville = $_GET['ville'];

    if (isset($temperatures[$ville])) {
        $result = "La temperature de $ville est $temperatures[$ville]";
    }

}

include 'view.php';
