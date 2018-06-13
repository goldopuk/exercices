<?php

include '../services/translatorService.php';

if (isset($_GET['word'])) {
    $word = $_GET['word'];
    $wordTranslated = translate($word);
} else {
    $wordTranslated = '';
}

include 'view.phtml';
