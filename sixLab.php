<html>

<body>
  <h2>Jumble Solver</h2>
  <hr />
  <br />
  <input type="button" value="Try Again"
         onclick="window.location.href='labSix.html'" />
  <br />

<?php
$letters = $_POST["letters"];

function getPerm($first, $list, &$order)
{
    if (count($list) == 1) {
        $order[] = $first.array_pop($list);
	}

    else {
        for ($i = 0; $i < count($list); $i++)
        {
            $temp = $list;
            unset($temp[$i]);
            getPerm($first.$list[$i], array_values($temp), $order);
        }
    }
}

$list = array();

for ($i = 0; $i < strlen($letters); $i++) {
    $list[] = $letters[$i];
}

$order = array();

getPerm("", $list, $order);

sort($order);

$duplicate = array();
$counter =  0;
for($i = 0; $i < count($order); $i++)
{
  for($k = 0; $k < count($order); $k++)
  {
    if($order[$i] == $order[$k])
    {
      $duplicate[$counter] = $k;
      $counter++;
    }
  }
}

for($i = $counter; $i > 0; $i--)
{
  unset($duplicate[$i]);
}

echo "<table>";
foreach (array_unique($order) as $character) {
	echo "<tr>";
	echo "<td>". $character ."</td>";
	echo "</tr>";
}
echo "</table>";

?>

</body>
</html>
