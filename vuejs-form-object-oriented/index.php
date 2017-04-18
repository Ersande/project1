<?php 
	$_POST = json_decode(file_get_contents('php://input'), true);

	$campi_obbligatori = array(
		'name' => 'required',
		'description' =>'required'
	);
	$json_array = array();
	if (!empty($_POST)) {  
		foreach ($_POST as $key => $value) {    
			if (array_key_exists($key, $campi_obbligatori)) {  
				if (empty($_POST[$key])) {  
					$json_array[$key]='The ' .$key.' field is required';
				}
			} 
		}   
	 	if (!empty($json_array)) { 
	 		echo json_encode($json_array);
			http_response_code(422);
			die(); 	 	
	 	}
	}
	
?>
