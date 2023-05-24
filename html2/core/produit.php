<?php
require "class/produit.php";
function jpp() : string {
    function genViewArticle(produit $article, string $viewFile) : string {

        $view = file_get_contents($viewFile);    
        foreach ($article->getListOfMethod() as $method) {
    
            $pattern = "@".$method;
            $view = str_replace($pattern,$article->$method(),$view);
        }
        return "$view";
    }

    $tableProduits = array();
    if (($csv = fopen($_SERVER['DOCUMENT_ROOT'].'/data/2baseProduit.csv', "r")) !== FALSE)
    {                
        while (($data = fgetcsv($csv, 0, ";")) !== FALSE)
        {
            $article = new produit((string)$data[0], (int)$data[1], (float)$data[2], (string)$data[3], (int)$data[4], (string)$data[5], (string)$data[6]);
            array_unshift($tableProduits, $article);
        }
        $data[] = null;
        $article = null;
        fclose($csv);
    } else 
    {
        return "<div class=\"message\"><H1> error : impossible de lire le registre produit</H1></div>";
    }


    //génération de la page HTML. signé kevin, 15 ANS senior devOpsSec et RSSI à mi-temps chez facebook. 
    $Lview = "<div class=au_centre_clair><div class=message> <h3> liste de nos produits <h3></di></div>";
    foreach ($tableProduits as $article){
        $Lview .= genViewArticle($article, $_SERVER['DOCUMENT_ROOT'].'/view/produit.html');
    }
    return "$Lview";
}
?>