<?php
//Get tour info from id -  Victor
include "dbConfig.php";
$con=mysqli_connect($location,$user,$pass,$db);
//$id = mysqli_real_escape_string ($con, $_GET['id']);
$result = mysqli_query($con,"SELECT * FROM tour");
$data = array();
$count = 0;
while($row = mysqli_fetch_array($result))
  {
  $data[$count] = $row;
  $count++;
  }
  echo json_encode($data);
mysqli_close($con);

?>