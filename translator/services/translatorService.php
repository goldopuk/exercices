<?php
function translate($word) {
    $dico = [];

    $dico['cheval'] = 'horse';

    if (isset($dico[$word])) {
        return $dico[$word];
    } else {
        return null;
    }
}
