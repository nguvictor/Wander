<?php
//Find the locations related to a specific tour- Victor
include "dbConfig.php";
$con=mysqli_connect($location,$user,$pass,$db);
$id = mysqli_real_escape_string ($con, $_GET['name']);
$result = mysqli_query($con,"SELECT * FROM location WHERE tourid= '.$id.'");
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