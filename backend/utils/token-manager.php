<?php
$SECRET = "secret";
$EXPIRE = 3600;

//function to generate token with 1h
function generateToken()
{
    global $SECRET, $EXPIRE;
    $header = json_encode(['typ' => 'JWT', 'alg' => 'HS256']);
    $payload = json_encode(['exp' => time() + $EXPIRE]);

    $base64UrlHeader = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($header));
    $base64UrlPayload = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($payload));

    $signature = hash_hmac('sha256', $base64UrlHeader . "." . $base64UrlPayload, $SECRET, true);
    $base64UrlSignature = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($signature));

    $jwt = $base64UrlHeader . "." . $base64UrlPayload . "." . $base64UrlSignature;

    return $jwt;
}

//function to check validity and expiration of token
function validateToken($token)
{
    global $SECRET;
    $tokenParts = explode('.', $token);
    $header = base64_decode(str_replace(['-', '_'], ['+', '/'], $tokenParts[0]));
    $payload = base64_decode(str_replace(['-', '_'], ['+', '/'], $tokenParts[1]));
    $signature = base64_decode(str_replace(['-', '_'], ['+', '/'], $tokenParts[2]));

    $data = json_decode($payload, true);

    $valid = hash_hmac('sha256', $tokenParts[0] . "." . $tokenParts[1], $SECRET, true);
    if (hash_equals($signature, $valid)) {
        if ($data['exp'] >= time()) {
            return $data;
        }
    }
    return false;
}