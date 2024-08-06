function toplamsonuc() {

var adanaAdet = document.getElementById("adanafiyat").value;
    
var lahmacunAdet = document.getElementById("lahmacfiyat").value;
    
var sutlacAdet = document.getElementById("sutlacfiyat").value;
  
var adanaFiyat = 230;
    
var lahmacunFiyat = 180;
    
var sutlacFiyat = 65;

var toplam = (adanaAdet * adanaFiyat) + (lahmacunAdet * lahmacunFiyat) + (sutlacAdet * sutlacFiyat);

var toplamtutar= document.getElementById("toplamtutar").innerText= "Toplam: " + toplam + " TL"



}