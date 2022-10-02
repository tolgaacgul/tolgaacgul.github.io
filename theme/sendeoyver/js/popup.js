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
     let btnOyVer = document.querySelector("#idBtnOyVer")
     popup_ad.innerHTML = ad;
     popup_soyad.innerHTML = soyad;

     // İMAGE Değişikliği
    let img = document.getElementById("id_aday_img");
    img.setAttribute("src", img_src);


    // Aday id iletimi
    let aday_id = document.getElementById("id_kntrl_aday_id");
    aday_id = aday_id.value = id;
    console.log(aday_id);

    // Oy Kulananı engelle
    if(localStorage.getItem("nisan_oy") == "true"){
        popup_ad.innerHTML = "Daha Önce";
        popup_soyad.innerHTML = "Oy Kullandınız";
        btnOyVer.style.display = "none";
    }
}
// oy kullanan kişilerin local ile kontrolu
function fncOyKullanildi(){
    localStorage.setItem("nisan_oy", "true")
}
// Oy Kulananı engelle
(localStorage.getItem("nisan_oy") == "true") ? 
    document.querySelector("#idAlert").innerHTML = `
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>sendeoyver! </strong> Ülkemizin yarınına oy verdiğin için teşekkür ederiz.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`
 : localStorage.setItem("nisan_oy", "false")