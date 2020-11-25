<?php

function send_request_to_crm($client_name=null, $credit=null, $phone=null, $company=null, $profit=null, $email=null, $credit_history=null, $address_state=null, $message=null)
{
    //detect ip
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        $ip = $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    } else {
        $ip = $_SERVER['REMOTE_ADDR'];
    }

    $domain = $_SERVER['SERVER_NAME'];

    $crm_url = 'http://cfk-crm.ru';

    $url = $crm_url . '/index.php?entryPoint=add_request';
    $key = 'd28f3e829febb7703524eeb32c44206bec768564';

    $params = compact('client_name', 'credit', 'phone', 'company', 'profit', 'email', 'credit_history', 'address_state', 'message', 'domain', 'ip', 'key');

    //Пример кода для передачи данных(Передачу данных можно делать методом POST с помощью любого способа(например, curl или http_post_fields)
    $options = array(
        'http' => array(
            'header' => "Content-type: application/x-www-form-urlencoded\r\n",
            'method' => 'POST',
            'content' => http_build_query($params),
        ),
    );

    try {
        $context = stream_context_create($options);
        $serverRes = file_get_contents($url, false, $context);

        //Здесь можно произвести обработку запроса

        $result = json_decode($serverRes, true);

        //все ок, если что можно взять сообщение об успешном добавление, а так же id созданной/обновленной в бд записи
        //$result['id']
    } catch (Exception $e) {
        //здесь какая то серверная ошибка(например, internal server error 500) или еще что-то, можно попытаться определить проблему. В $e->getMessage() - ошибка
        echo $e->getMessage();
    }

    return $result;

}