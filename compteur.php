<?php
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate');
header('Access-Control-Allow-Origin: *');

session_start();

$fichier = __DIR__ . '/compteur.txt';

if (!file_exists($fichier)) {
    file_put_contents($fichier, '0', LOCK_EX);
}

$estNouvelleVisite = !isset($_SESSION['fic_visite']);

if ($estNouvelleVisite) {
    $fh = fopen($fichier, 'c+');
    if ($fh && flock($fh, LOCK_EX)) {
        $contenu = stream_get_contents($fh);
        $nombre  = (int) trim($contenu) + 1;
        ftruncate($fh, 0);
        rewind($fh);
        fwrite($fh, (string) $nombre);
        fflush($fh);
        flock($fh, LOCK_UN);
        fclose($fh);
        $_SESSION['fic_visite'] = true;
    } else {
        if ($fh) fclose($fh);
    }
}

$total = (int) trim(file_get_contents($fichier));

echo json_encode([
    'visiteurs' => $total,
    'session'   => $estNouvelleVisite ? 'nouvelle' : 'existante'
]);