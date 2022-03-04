function fncPopup_exit() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

function fncPopup_open(id,ad,soyad,img_src){
    //Görünür yap
    var popup = document.getElementById("popup");
    popup.style.display = "block";
    
     // Seçilen aday adı, popup pusulaya yazıldı.
     let popup_ad = document.querySelector("div.secilmis>div.aday-ad>span");
     let popup_soyad = document.querySelector("div.secilmis>div.aday-ad>span:last-child");
     popup_ad.innerHTML = ad;
     popup_soyad.innerHTML = soyad;

     // İMAGE Değişikliği
    let img = document.getElementById("id_aday_img");
    img.setAttribute("src", img_src);
}