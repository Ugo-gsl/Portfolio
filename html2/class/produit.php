<?php
class produit {

  private $description;  private $prix;  private $designation;  private $illustration;  private $reference;  private $refListeTaille;  private $categorie;
  function __construct(string $designation, int $ref, float $prix, string $description, int $refListeTaille, string $categorie, string $illustration) {

     $this->description = $description;
     $this->prix = $prix;
     $this->designation = $designation;
     $this->illustration = $illustration;
     $this->reference = $ref;
     $this->refListeTaille = $refListeTaille;
     $this->categorie = $categorie;
   }
   function getListOfMethod() : array {
    return (array)["getDescription", "getPrix","getDesignation","getReference", "getRefListeTaille", "getCategorie", "getIllustration"];
   }
   function getDescription() : string {
    return $this->description;
   }
   function getPrix() : float {
    return $this->prix;
   }
   function getDesignation() : string {
    return $this->designation;
   }
   function getIllustration() : string {
    return $this->illustration;
   }
   function getReference() : int {
    return $this->reference;
   }
   function getRefListeTaille() : int {
    return $this->refListeTaille;
   }
   function getCategorie() : string {
    return $this->categorie;
   }
}

?>
