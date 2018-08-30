<?php
error_reporting(E_ALL ^ E_DEPRECATED);
$conn=mysql_connect("localhost","root","") or die("数据库服务器连接失败".mysql_error());
mysql_select_db("blog",$conn)or die("数据库服务器连接失败".mysql_error());
mysql_query("set names utf8");
?>