<?php
session_start();

$mot_de_passe = "FIC2026admin"; 

if (isset($_POST['login'])) {
    if ($_POST['password'] === $mot_de_passe) {
        $_SESSION['admin_logged_in'] = true;
    } else {
        $erreur = "Mot de passe incorrect.";
    }
}

if (isset($_GET['logout'])) {
    session_destroy();
    header("Location: admin.php");
    exit;
}

if (!isset($_SESSION['admin_logged_in'])) {
    ?>
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Connexion Admin - FIC</title>
        <style>
            body { font-family: 'Segoe UI', sans-serif; background: #f4f6f8; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
            .login-box { background: white; padding: 40px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); text-align: center; width: 300px; }
            h2 { color: #1a4d2e; margin-top: 0; }
            input { padding: 12px; width: 100%; margin-bottom: 20px; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box; }
            button { background: #1a4d2e; color: white; padding: 12px; border: none; border-radius: 4px; cursor: pointer; width: 100%; font-weight: bold; }
            button:hover { background: #0d2e1a; }
        </style>
    </head>
    <body>
        <div class="login-box">
            <h2>Espace Admin</h2>
            <?php if(isset($erreur)) echo "<p style='color:#d9534f; font-size:14px;'>$erreur</p>"; ?>
            <form method="POST">
                <input type="password" name="password" placeholder="Mot de passe" required>
                <button type="submit" name="login">Se connecter</button>
            </form>
        </div>
    </body>
    </html>
    <?php
    exit;
}

$messages = file_exists('messages.json') ? json_decode(file_get_contents('messages.json'), true) : [];
if (!is_array($messages)) { $messages = []; }
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Tableau de Bord Admin - FIC 2026</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f4f6f8; padding: 30px; margin: 0; color: #333; }
        .container { max-width: 1200px; margin: auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
        .header-admin { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #1a4d2e; padding-bottom: 20px; margin-bottom: 30px; }
        .header-admin h1 { margin: 0; color: #1a4d2e; font-weight: 300; }
        .btn-logout { background: #d9534f; color: white; padding: 8px 15px; text-decoration: none; border-radius: 4px; font-size: 14px; font-weight: bold; }
        .btn-logout:hover { background: #c9302c; }
        table { width: 100%; border-collapse: collapse; margin-top: 10px; }
        th, td { border: 1px solid #e0e0e0; padding: 12px; text-align: left; font-size: 14px; vertical-align: top; }
        th { background: #1a4d2e; color: white; font-weight: 500; }
        tr:nth-child(even) { background: #f9f9f9; }
        .badge { background: #c49a3a; color: white; padding: 4px 10px; border-radius: 12px; font-size: 12px; font-weight: bold; display: inline-block; }
        .empty-msg { text-align: center; color: #777; padding: 40px 0; font-size: 1.1rem; }
    </style>
</head>
<body>
<div class="container">
    <div class="header-admin">
        <h1>Tableau de Bord - FIC 2026</h1>
        <a href="?logout=1" class="btn-logout">Déconnexion</a>
    </div>
    
    <h2>Demandes de Sponsoring (<?= count($messages) ?>)</h2>
    
    <?php if(empty($messages)): ?>
        <div class="empty-msg">Aucune demande de sponsoring pour le moment.</div>
    <?php else: ?>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Entreprise</th>
                    <th>Contact</th>
                    <th>Email / Téléphone</th>
                    <th>Type</th>
                    <th>Message</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach($messages as $m): ?>
                <tr>
                    <td><?= htmlspecialchars($m['date'] ?? '') ?></td>
                    <td><strong><?= htmlspecialchars($m['entreprise'] ?? '') ?></strong></td>
                    <td><?= htmlspecialchars($m['contact'] ?? '') ?></td>
                    <td>
                        <a href="mailto:<?= htmlspecialchars($m['email'] ?? '') ?>"><?= htmlspecialchars($m['email'] ?? '') ?></a><br>
                        <?= htmlspecialchars($m['telephone'] ?? '') ?>
                    </td>
                    <td><span class="badge"><?= htmlspecialchars($m['type'] ?? '') ?></span></td>
                    <td><?= nl2br(htmlspecialchars($m['message'] ?? '')) ?></td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    <?php endif; ?>
</div>
</body>
</html>