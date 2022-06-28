// Not Ekle Kutusu
let addNoteBox = document.querySelector("#idAddNoteBox");
// Notu Taşıma Kutusu
let moveNoteBox = document.querySelector("#idMoveNoteBox");
// Notu sil Kutusu
let deleteNoteBox = document.querySelector("#idDeleteNoteBox");
//Ekle-Taşı-Sil Kutuları için genel kutu yapısı
let popopCntnr = document.querySelector(".popop-container");
// Ekle-Taşı-Sil Kutuları - Aksiyon kutuları nın ekran kapatma sı için dom bilgisi
let cancelPopop = document.querySelector(".btn-x")

// Eklenek olan notun form yapısı
let notForm = document.querySelector("#idNotForm")
// not ekle butonu
let noteAdd = document.querySelector(".note-add")
//input-not -- (Not Ekle Kutusundan)
let inputNote = document.querySelector("#idInputNote")
//input-title -- (NotEkle Kutusundan)
let inputTitle = document.querySelector("#idInputTitle")
// yapıcaklar kısmı - kartlar buraya eklenir
let noteCardsWill = document.querySelector(".card-notes-will")
// yapılıyor kısmı - kartlar buraya eklenir
let noteCardsDoing = document.querySelector(".card-notes-doing")
// yapıldı kısmı - kartlar buraka eklenir
let noteCardsDone = document.querySelector(".card-notes-done")
// eklenecek her bir kartın bilgisi
let noteCard = document.querySelector(".card-note")


let sil = document.querySelector(".action-btn")

let cardIndex;  //silinecek olan card'ın index numarası

let arryYapacaklarim = localStorage.getItem("yapacaklarim") ? JSON.parse(localStorage.getItem("yapacaklarim")) : []
let arryYapiyorum = localStorage.getItem("yapiyorum") ? JSON.parse(localStorage.getItem("yapiyorum")) : []
let arryYaptim = localStorage.getItem("yaptim") ? JSON.parse(localStorage.getItem("yaptim")) : []


writeDataToList(arryYapacaklarim);
console.log(addNoteBox.classList)




// -------------------------- her tıklama kontrol edilir --------------------------
window.addEventListener("click", (event) => {
    // eğer tılklanan rmvBtnNote=> ise cardİndex alarak silinecek dizi indexi olarak kullanılır.
    if(event.target.classList.contains("rmvBtnNote")){
        cardIndex = event.target.getAttribute('cardindex')
    }
})




/**********  Not Kartı tasarımı - içerisini doldurur **********/
function fncCardNote(baslik, not, index){
    return `
    <div class="card-note p-2 my-2">
        <h5>${baslik}</h5>
        <div class="mt-3 mb-2">${not}</div>
        <div class="box-action d-inline">
            <button class="rmvBtnNote action-btn btn-danger" cardindex="${index}" onclick="removeNoteScreen()"></button>
        </div>
        <div class="btn-group d-grid d-flex justify-content-end mt-2" role="group" aria-label="Basic mixed styles example">
            <button type="button" class="btn btn-danger btn-sm" onclick="btnYapcam()">Yapacağım</button>
            <button type="button" class="btn btn-warning btn-sm" onclick="btnYapiyorum()">Yapıyorum</button>
            <button type="button" class="btn btn-success btn-sm" onclick="btnYaptim()">Yaptım</button>
        </div>
    </div>`
}

/**********  Not Kartlarının Alanlar arasında taşaınması **********/
function btnYaptim(){
    
}
function btnYapiyorum(){
    
}
function btnYapcam(){
    
}












// ***** Silinecek olan Notun onayı için ekran açar - Popop açar
function removeNoteScreen(){
    deleteNoteBox.classList.remove("d-none")
}


// kartın silinmesine onay
function deleteNoteBoxOk(){
    console.log(cardIndex)
    let deletedCard = arryYapacaklarim.splice(cardIndex,1)
    localStorage.setItem("yapacaklarim", JSON.stringify(arryYapacaklarim) )
    noteCardsWill.innerHTML = ""
    writeDataToList(arryYapacaklarim);
    idDeleteNoteBoxClose();

}


/* POPOP Pencerelerinin kapanması */
function idAddNoteBoxClose(){
    console.log("Not ekleme penceresini kapatıyorusn")
    addNoteBox.classList.add("d-none")
}
function idMoveNoteBoxClose(){
    console.log("moveNoteBox penceresini kapatıyorusn")
    moveNoteBox.classList.add("d-none")
}
function idDeleteNoteBoxClose(){
    console.log("deleteNoteBox penceresini kapatıyorusn")
    deleteNoteBox.classList.add("d-none")
}


/* popop cancel */
cancelPopop.addEventListener("click", ()=>{
    addNoteBox.classList.add("d-none")
})
/* Not Ekle Alanının Gelmesi ??????????*/
noteAdd.addEventListener("click", (event) => {
    addNoteBox.classList.remove("d-none")
    //console.log(event)
})
/* Not Ekleme - Kayıt Aksiyonu */
notForm.addEventListener("submit", (event) => {
    event.preventDefault()
    let newObj = {
        baslik : `${inputTitle.value}`,
        not : `${inputNote.value}`
    }
    arryYapacaklarim.push(newObj)
    localStorage.setItem("yapacaklarim", JSON.stringify(arryYapacaklarim) )
    // html olarak ta yazar
    noteCardsWill.innerHTML += fncCardNote(newObj.baslik, newObj.not)

    /* işlemden sonra */
    inputNote.value = ""
    inputTitle.value = ""
    addNoteBox.classList.add("d-none")
})
/* Notları ekrana yazdır */
function writeDataToList(dizi){
    dizi.forEach( (element, index) => {
        let baslik = element.baslik
        let not = element.not
        noteCardsWill.innerHTML += fncCardNote(baslik, not, index)
    });
}





























// tıklanan tagi bul

// window.addEventListener("click", (event) => {
//     if(event.target.classList.contains("rmvBtnNote")){
//         let removeIndex = event.target.getAttribute('cardindex')
//         let deletedCard = arryYapacaklarim.splice(removeIndex,1)
//         localStorage.setItem("yapacaklarim", JSON.stringify(arryYapacaklarim) )
//         noteCardsWill.innerHTML = ""
//         writeDataToList(arryYapacaklarim);

//         console.log("silinen obje", deletedCard)
//         //event.target.parentElement.parentElement.remove()
//     }
// })