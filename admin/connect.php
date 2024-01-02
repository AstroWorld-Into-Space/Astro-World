<?php

$conn = mysqli_connect('localhost','root','','astro_world');

if(!$conn)
{
    echo 'cannot connect to database server';
    exit;
}

?>