/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let array = ["3.281","0.264","2.204"]
const InputEl = document.getElementById("input-el")
const ConvertEl = document.getElementById("convert-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

ConvertEl.addEventListener("click", function(){
   for(let i = 0; i < array.length;i++){
    let answer = InputEl.value  * array[i]
    let answer2 = InputEl.value/ array[i]
    answer = Number(answer).toFixed(3)
    answer2 = Number(answer2).toFixed(3)
    Render(answer,answer2,array[i])
    
   }
})

function Render(value1,value2,arr){
    let myString = ""
    if (array[0] === arr){
        myString = `${InputEl.value} meters  = ${value1} feet | ${InputEl.value} feet = ${value2} meters`
    lengthEl.textContent = myString
    }
    if (array[1] === arr){
        myString = `${InputEl.value} liter  = ${value1} gallon | ${InputEl.value} gallon = ${value2} liter`
    volumeEl.textContent = myString
    }
    if (array[2] === arr){
        myString = `${InputEl.value} kilogram  = ${value1} pound | ${InputEl.value} pound = ${value2} kilogram`
    massEl.textContent = myString
    }
}
