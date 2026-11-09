<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = [
        "date" => date("d/m/Y H:i"),
        "entreprise" => htmlspecialchars($_POST['entreprise']),
        "contact" => htmlspecialchars($_POST['contact']),
        "email" => htmlspecialchars($_POST['email']),
        "telephone" => htmlspecialchars($_POST['telephone']),
        "type" => htmlspecialchars($_POST['type']),
        "message" => htmlspecialchars($_POST['message'])
    ];

    $file = 'messages.json';
    
    $current = file_exists($file) ? json_decode(file_get_contents($file), true) : [];
    if (!is_array($current)) { $current = []; }
    
    array_unshift($current, $data);
    
    file_put_contents($file, json_encode($current, JSON_PRETTY_PRINT), LOCK_EX);

    header("Location: sponsor.html?success=1");
    exit;
} else {
    header("Location: sponsor.html");
    exit;
}
?>