let inputA = document.getElementById("inputA");
let inputB = document.getElementById("inputB");
let inputH = document.getElementById("inputH");
let inputY = document.getElementById("inputY");
let inputX = document.getElementById("inputX");

let pX = document.getElementById("pX")
let idOk = document.getElementById("idOk")

idOk.addEventListener("click", ()=>{

  if(inputA.value && inputB.value && inputH.value && inputY.value){

     let pay = ((Number(inputB.value) - Number(inputA.value))) * (Number(inputY.value))
    //  let payda = (Number(inputH.value) - Number(inputY.value))
     let payda = (Number(inputH.value))
     let z = Number((pay)/(payda));
     let sonuc = z + Number(inputA.value);
     pX.innerText = sonuc

    pX.style.borderBottom = "3px solid red"
    pX.style.color = "blue"

  }
})