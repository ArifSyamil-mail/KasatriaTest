<?php
// Include your config file
require_once('config.php');

// Test with simple data fetch
$spreadsheetId = 'YOUR_SPREADSHEET_ID';
$range = 'Sheet1!A2:D';

try {
    $data = getGoogleSheetsData($spreadsheetId, $range);
    echo "<pre>";
    print_r($data);  // This will show the raw data from sheets
    echo "</pre>";
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
// if (!file_exists('credentials.json')) {
//     die("Credentials file not found!");
// }
?>