<?php
include "dbConfig.php";
$con=mysqli_connect($location,$user,$pass,$db);
$name = $_GET['name'];
$result = mysqli_query($con,"SELECT * FROM tour WHERE LOWER(name) LIKE LOWER('%".$name."%')");
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