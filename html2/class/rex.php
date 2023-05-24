<?php 
class rex {

    private $curateur; private $note; private $commentaire; private $media;
    
    function __construct(string $curateur, string $commentaire, int $note )
    {
        $this->media = array();
        $this->curateur = $curateur;
        $this->note = 10;
        $this->commentaire = $commentaire;
    }
    function addPhoto(string $photo) {
        $rf = "<img src=\"data:image/png;base64,".$photo."\" alt=\"erreur\"  ";
        array_unshift($this->media, $photo);
    }

    function addVideo(string $videoURL) {
        $rf = "<video width=\"320\" height=\"240\" controls><source src=\"".$videoURL."\" type=\"video/mp4\">Your browser does not support the video tag</video>";
        array_unshift($this->media, $videoURL);
    }

    function setNote(int $note) {
        $this->note = $note;
    }

    function getNote(){
        return $this->note;
    }
    function getCurateur(){
        return $this->curateur;
    }
    function getCommentaire() {
        return $this->commentaire;
    }
    function getMediaTable() {
        return $this->media;
    }
    function getMediaString() {
        $buf = print_r($this->media);
        return $buf;
    }
    function getTheFunniestCarInTheWorld(){
        return "caterham 420R CUP 2L duratec, 2018-";
    }

}

?>