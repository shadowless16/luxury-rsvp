<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Load PHPMailer classes
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';
require 'phpmailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$data = json_decode(file_get_contents("php://input"), true);

$name = htmlspecialchars($data['name'] ?? '');
// $email = htmlspecialchars($data['email'] ?? ''); // Removed email
$designation = htmlspecialchars($data['designation'] ?? '');
$guestCount = htmlspecialchars($data['guestCount'] ?? '');
// message field removed

$mail = new PHPMailer(true);

// Enable SMTP debugging for detailed output
$mail->SMTPDebug = 2; // Set to 0 for production, 2 for full debug output
$mail->Debugoutput = 'error_log'; // Log debug output to PHP error log

try {
    // SMTP config for Gmail
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'rsvpmailng@gmail.com'; // <-- your Gmail address
    $mail->Password = 'onid rbip ewpc pdlh'; // <-- your Gmail App Password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;

    $mail->setFrom('rsvpmailng@gmail.com', 'RSVP Notification'); // <-- your Gmail address
    // Set recipient to your Gmail address
    $mail->addAddress('rsvpmailng@gmail.com'); // <-- your Gmail address
    // Remove Reply-To logic

    // Format subject with proper encoding
    $mail->Subject = "=?UTF-8?B?" . base64_encode("🎉 New RSVP from $name") . "?=";

    // Gold/champagne color
    $gold = '#D4AF37';
    $champagne = '#F7E7CE';

    // Build a nicely formatted HTML body with a table
    $body = "<div style='background: $champagne; padding: 24px; border-radius: 12px; font-family: Arial, sans-serif;'>";
    $body .= "<h2 style='color: $gold; text-align:center; margin-top:0;'>New RSVP Submission</h2>";
    $body .= "<table style='width:100%; border-collapse:collapse; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px #d4af3720;'>";
    $body .= "<tr><td style='padding:12px; border-bottom:1px solid $gold; color:$gold; font-weight:bold;'>Name</td><td style='padding:12px; border-bottom:1px solid $gold;'>" . htmlspecialchars($name) . "</td></tr>";
    $body .= "<tr><td style='padding:12px; border-bottom:1px solid $gold; color:$gold; font-weight:bold;'>Designation</td><td style='padding:12px; border-bottom:1px solid $gold;'>" . htmlspecialchars($designation) . "</td></tr>";
    $body .= "<tr><td style='padding:12px; color:$gold; font-weight:bold;'>Guests</td><td style='padding:12px;'>" . htmlspecialchars($guestCount) . "</td></tr>";
    $body .= "</table>";
    $body .= "</div>";

    $mail->isHTML(true);
    $mail->Body = $body;

    // Save RSVP to SQLite database
    $dbPath = __DIR__ . '/../rsvp.db'; // Change this path as needed
    try {
        $db = new SQLite3($dbPath);
        $db->exec('CREATE TABLE IF NOT EXISTS rsvps (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            designation TEXT,
            guestCount INTEGER,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )');
        $stmt = $db->prepare('INSERT INTO rsvps (name, designation, guestCount) VALUES (:name, :designation, :guestCount)');
        $stmt->bindValue(':name', $name, SQLITE3_TEXT);
        $stmt->bindValue(':designation', $designation, SQLITE3_TEXT);
        $stmt->bindValue(':guestCount', $guestCount, SQLITE3_INTEGER);
        $stmt->execute();
        $db->close();
    } catch (Exception $e) {
        // Log DB error but do not stop email
        error_log('DB Error: ' . $e->getMessage());
    }

    $mail->send();
    echo "Thank you! Your RSVP has been sent.";
} catch (Exception $e) {
    echo "Error: Failed to send RSVP. Mailer Error: " . $mail->ErrorInfo;
}
?>
