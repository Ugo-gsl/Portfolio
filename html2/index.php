<?php
//var
$pathCore = "core";
$theme = file_get_contents($_SERVER['DOCUMENT_ROOT']."/view/head.html");
$pattern = "@content";

if ($_SERVER['REQUEST_URI'] !== '/' && file_exists($pathCore.$_SERVER['REQUEST_URI'])) {

    require $pathCore.$_SERVER['REQUEST_URI'];
    $content = " ";
    //$content = jpp();
    print str_replace($pattern,jpp(),$theme);
}
else {
        print str_replace($pattern,file_get_contents("view/main.html"),$theme);
}
?>