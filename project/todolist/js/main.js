let addNoteBox = document.querySelector("#idAddNoteBox");
let moveNoteBox = document.querySelector("#idMoveNoteBox");
let deleteNoteBox = document.querySelector("#idDeleteNoteBox");
let popopCntnr = document.querySelector(".popop-container");

let notForm = document.querySelector("#idNotForm")
let noteAdd = document.querySelector(".note-add")
let inputNote = document.querySelector("#idInputNote")
let inputTitle = document.querySelector("#idInputTitle")
let noteCardsWill = document.querySelector(".card-notes-will")
let noteCardsDoing = document.querySelector(".card-notes-doing")
let noteCardsDone = document.querySelector(".card-notes-done")
let noteCard = document.querySelector(".card-note")
let cancelPopop = document.querySelector(".btn-x")

let sil = document.querySelector(".action-btn")

let cardIndex;  //silinecek olan card'ın index numarası

let arryYapacaklarim = localStorage.getItem("yapacaklarim") ? JSON.parse(localStorage.getItem("yapacaklarim")) : []
let arryYapiyorum = localStorage.getItem("yapiyorum") ? JSON.parse(localStorage.getItem("yapiyorum")) : []
let arryYaptim = localStorage.getItem("yaptim") ? JSON.parse(localStorage.getItem("yaptim")) : []


writeDataToList(arryYapacaklarim);
console.log(addNoteBox.classList)

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

/* not kartının modülü - içerisini doldurur */
function fncCardNote(baslik, not, index){
    return `
    <div class="card-note p-2 my-2">
    <h5>${baslik}</h5>
    <div class="mt-3 mb-2">${not}</div>
    <div class="box-action d-inline">
        <button class="rmvBtnNote action-btn btn-danger" cardindex="${index}" onclick="removeNote()"></button>
    </div>
    <div class="btn-group d-grid d-flex justify-content-end mt-2" role="group" aria-label="Basic mixed styles example">
        <button type="button" class="btn btn-danger btn-sm">Yapacağım</button>
        <button type="button" class="btn btn-warning btn-sm">Yapıyorum</button>
        <button type="button" class="btn btn-success btn-sm">Yaptım</button>
    </div>
</div>`
}
// notların silme işlemi için,
function removeNote(){
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

// her tıklama kontrol edilir
window.addEventListener("click", (event) => {
    // eğer tılklanan rmvBtnNote=> ise cardİndex al
    if(event.target.classList.contains("rmvBtnNote")){
        cardIndex = event.target.getAttribute('cardindex')
    }
})