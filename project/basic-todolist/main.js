let input = idInputToDo; // document.querySelector("#idInputToDo") 
let list = idList;
let addButton = document.querySelector("#idAddButton")
let info = document.querySelector("#idInfo");
let infoText = document.querySelector("#idInfoText");

let data = localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : []
data.forEach(element => {
    writeList(element.id, element.item, element.doneit)
});

addButton.addEventListener("click", (event) => {
    event.preventDefault();
    add()
})

function add() {
    // Son ID yi bul bir arttır ekle 
    if (input.value == null || input.value == "" || !(input.value.trim().length > 0)) {
        writeInfo("", "Boş Bırakamazsınız!")
    } else {
        let inputValue = input.value
        let lastId = null
        if (data.length > 0) {
            let lastItem = data.pop()
            lastId = Number(lastItem.id);
            data.push(lastItem)
        }
        data.push(
            {
                "id": (lastId + 1),
                "item": inputValue,
                "doneit": false
            }
        );
        localStorage.setItem("todo", JSON.stringify(data))
        writeInfo(lastId + 1, "nolu içerik eklendi")
        //writeList(lastId + 1, inputValue, false)
        list.innerHTML = ""
        data.forEach(item => {
            writeList(item.id, item.item, item.doneit)
        })
    }
}

function remove(id) {
    data.forEach((item, index) => {
        //console.log("id: " + item.id + " / " + "index: " + index)
        item.id == id ? data.splice(index, 1) : ""
    })
    // Yazdır 
    list.innerHTML = ""
    data.forEach(item => {
        writeList(item.id, item.item, item.doneit)
    })

    localStorage.setItem("todo", JSON.stringify(data))

    //INFI yazdır
    writeInfo(id, "numaralı içeriği sildiniz")
}

function toggleDisplay(node) {
    node.classList.toggle("d-none")
}

function writeList(id, item, checked = false) {
    let writedLi = `
        <li class="list-group-item" todoId="${id}">
            <input type="checkbox" class="form-check-input me-1" onclick="doneit(${id})" ${checked ? 'checked' : ''}> 
            <span>${id}) ${item}</span>
            <button type="button" onclick="remove(${id})" class="btn btn-danger float-end">X</button>
        </li>`
    //let li = document.createElement("li");
    //li.setAttribute("id",id)
    //li.textContent = id + ") " + item
    //list.appendChild(writedLi)
    list.innerHTML += writedLi;
    input.value = ""
}

function writeInfo(id = "", infoTxt) {
    infoText.innerHTML = `${id} ${infoTxt}`
    info.classList.remove("d-none")
    setTimeout("toggleDisplay(info)", 2000)
}

function doneit(id) {
    data.forEach((item, index) => {
        console.log("done it çalıştı:   " + item.doneit)

        if (item.id == id) {
            item.doneit == false ?
                data[index] = { id: id, item: item.item, doneit: true } :
                data[index] = { id: id, item: item.item, doneit: false }
            writeInfo(id, ` nolu öğeyi ${item.doneit ? 'yapılmadı' : 'yapıldı'} olarak işaretlendiniz.`)
        }
    })
    localStorage.setItem("todo", JSON.stringify(data))
}