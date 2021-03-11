let inputA = document.getElementById("inputA");
let inputB = document.getElementById("inputB");
let inputC = document.getElementById("inputC");
let pA = document.getElementById("pA")
let pB = document.getElementById("pB")
let pC = document.getElementById("pC")
let idOk = document.getElementById("idOk")

idOk.addEventListener("click", ()=>{
  if(inputA.value && inputB.value){
    pA.innerText = inputA.value
    pB.innerText = inputB.value
    pC.innerText = Math.sqrt(inputB.value*inputB.value + inputA.value*inputA.value).toFixed(2);
    pC.style.borderBottom = "3px solid red"
    pC.style.color = "blue"

    pA.style.border = "none"
    pB.style.border = "none"
  }else if(inputA.value && inputC.value){
    pA.innerText = inputA.value
    pC.innerText = inputC.value
    pB.innerText = Math.sqrt(inputC.value*inputC.value - inputA.value*inputA.value).toFixed(2);
    pB.style.borderBottom = "3px solid red"
    pB.style.color = "blue"
  }else if(inputB.value && inputC.value){
    pC.innerText = inputC.value
    pB.innerText = inputB.value
    pA.innerText = Math.sqrt(inputC.value*inputC.value - inputB.value*inputB.value).toFixed(2);
    pA.style.borderBottom = "3px solid red"
    pA.style.color = "blue"
  } 
})