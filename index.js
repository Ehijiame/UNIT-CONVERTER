/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("length-el")
let volumeEl= document.getElementById("volume-el")
let massEl= document.getElementById("mass-el")
 
const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function() {
   let baseValue = inputEl.value

    length()
    volume()
   mass()  
    
})

function length(){
       let baseValue = inputEl.value
   lengthEl.textContent = `${baseValue} meter = ${(baseValue * meterToFeet).toFixed(2)} feet|${baseValue} feet = ${(baseValue / meterToFeet).toFixed(2)}meter`
   
   
   
}
function volume(){
       let baseValue = inputEl.value
   volumeEl.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(2)} gallon|${baseValue} gallon = ${(baseValue / literToGallon).toFixed(2)}liters` 

   
}
function mass(){
       let baseValue = inputEl.value
   massEl.textContent = `${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(2) } pounds|${baseValue} pounds = ${(baseValue / kiloToPound).toFixed(2) }kilos` 
   
}
