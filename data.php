<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Add logging
$log = [];
try {
    $data = getGoogleSheetsData($spreadsheetId, $range);
    $log['status'] = 'success';
    $log['data'] = $data;
} catch (Exception $e) {
    $log['status'] = 'error';
    $log['message'] = $e->getMessage();
}

// Send both data and debug info
echo json_encode([
    'debug' => $log,
    'data' => $data ?? null
]);