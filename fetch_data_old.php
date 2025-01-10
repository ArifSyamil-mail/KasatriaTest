<?php
require 'vendor/autoload.php';

function getGoogleSheetData($spreadsheetId, $range) {
    $client = new Google_Client();
    $client->setApplicationName('Google Sheets API PHP');
    $client->setScopes(Google_Service_Sheets::SPREADSHEETS_READONLY);
    $client->setAuthConfig('path/to/credentials.json'); // Path to your JSON credentials file

    $service = new Google_Service_Sheets($client);
    $response = $service->spreadsheets_values->get($spreadsheetId, $range);
    $values = $response->getValues();

    if (empty($values)) {
        return "No data found.";
    } else {
        return $values;
    }
}

// Usage
$spreadsheetId = 'your_google_sheet_id_here'; // Replace with your Google Sheet ID
$range = 'Sheet1!A1:D10'; // Specify the range of data to fetch

$data = getGoogleSheetData($spreadsheetId, $range);
echo json_encode($data); // Convert to JSON for easier usage in frontend
?>
