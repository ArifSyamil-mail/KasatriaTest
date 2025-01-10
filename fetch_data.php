<?php
// config.php
function getGoogleSheetsData($spreadsheetId, $range) {
    // Your service account credentials JSON contents
    $credentials = json_decode(file_get_contents('credentials.json'), true);
    
    // Create JWT token
    $jwt = createJWT($credentials);
    
    // Get access token
    $accessToken = getAccessToken($jwt);
    
    // Make request to Google Sheets API
    $url = "https://sheets.googleapis.com/v4/spreadsheets/{$spreadsheetId}/values/{$range}";
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Authorization: Bearer ' . $accessToken,
        'Accept: application/json'
    ]);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    
    $response = curl_exec($ch);
    curl_close($ch);
    
    return json_decode($response, true)['values'];
}

function createJWT($credentials) {
    $header = [
        'alg' => 'RS256',
        'typ' => 'JWT'
    ];
    
    $time = time();
    $claim = [
        'iss' => $credentials['client_email'],
        'scope' => 'https://www.googleapis.com/auth/spreadsheets.readonly',
        'aud' => 'https://oauth2.googleapis.com/token',
        'exp' => $time + 3600,
        'iat' => $time
    ];
    
    $base64Header = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode(json_encode($header)));
    $base64Claim = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode(json_encode($claim)));
    
    $signature = '';
    openssl_sign(
        $base64Header . '.' . $base64Claim,
        $signature,
        $credentials['private_key'],
        'SHA256'
    );
    $base64Signature = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($signature));
    
    return $base64Header . '.' . $base64Claim . '.' . $base64Signature;
}

function getAccessToken($jwt) {
    $ch = curl_init('https://oauth2.googleapis.com/token');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query([
        'grant_type' => 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        'assertion' => $jwt
    ]));
    
    $response = json_decode(curl_exec($ch), true);
    curl_close($ch);
    
    return $response['access_token'];
}

// data.php
header('Content-Type: application/json');

$spreadsheetId = 'YOUR_SPREADSHEET_ID';
$range = 'Sheet1!A2:F201'; // Adjust based on your data range

$data = getGoogleSheetsData($spreadsheetId, $range);
echo json_encode($data);
?>