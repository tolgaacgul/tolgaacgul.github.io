let popop = document.querySelector(".popop-container");
let notForm = document.querySelector("#idNotForm")
let noteAdd = document.querySelector(".note-add")
let inputNote = document.querySelector("#idInputNote")
let inputTitle = document.querySelector("#idInputTitle")
let noteCards = document.querySelector(".card-notes")
let noteCard = document.querySelector(".card-note")
let cancelPopop = document.querySelector(".btn-x")

let arryYapacaklarim = localStorage.getItem("yapacaklarim") ? JSON.parse(localStorage.getItem("yapacaklarim")) : []

writeDataToList(arryYapacaklarim);


/* popop cancel */
cancelPopop.addEventListener("click", ()=>{
    popop.classList.add("d-none")
})
/* Not Ekle Alanının Gelmesi ??????????*/
noteAdd.addEventListener("click", (event) => {
    popop.classList.remove("d-none")
    console.log(event)
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
    noteCards.innerHTML += fncCardNote(newObj.baslik, newObj.not)

    /* işlemden sonra */
    inputNote.value = ""
    inputTitle.value = ""
    popop.classList.add("d-none")
})
/* Notları ekrana yazdır */
function writeDataToList(dizi){
    dizi.forEach( (element) => {
        let baslik = element.baslik
        let not = element.not
        noteCards.innerHTML += fncCardNote(baslik, not)
    });
}

/* not kartının modülü - içerisini doldurur */
function fncCardNote(baslik, not){
    return `<div class="card-note p-2 my-2">
    <h5>${baslik}</h5>
    <div class="mt-3 mb-2">${not}</div>
    <div class="box-action d-inline">
        <button class="action-btn"></button>
        <button class="action-btn"></button>
        <button class="action-btn btn-danger"></button>
    </div>
</div>`
}


// silme işlemi için
console.log(noteCards.childElementCount)    //eleman sayısını don