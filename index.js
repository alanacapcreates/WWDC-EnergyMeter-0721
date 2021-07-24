// woo JS 🥳
let meter = document.getElementById("energy")
let mood = document.getElementById("mood")
const btnIncrease = document.getElementById("btn-increase")
const btnDecrease = document.getElementById("btn-decrease")
btnIncrease.addEventListener("click",function(){
    if(meter.value<10){
        meter.value += 1
        // userValue.value =meter.value
        renderMood(meter.value)
    }
    timer+=1
})

btnDecrease.addEventListener("click",function(){
    if(meter.value>0){
        meter.value -= 1
        // userValue.value =meter.value
        renderMood(meter.value)
    }
    timer-=1
})

let timer = setInterval(updateMood, 3000)

function updateMood() {
    meter.value--
    renderMood(meter.value)
}

function renderMood(){
    switch(meter.value){
        case 10:
            mood.textContent = "🥳"
            mood.style.top = "-30px"
        break;
        case 9:
            mood.textContent = "😄"
            mood.style.top = "-10px"
        break;
        case 8:
            mood.textContent = "😀"
            mood.style.top = "10px"
        break;
        case 7:
            mood.textContent = "🙂"
            mood.style.top = "30px"
        break;
        case 6:
            mood.textContent = "🙁"
            mood.style.top = "48px"
        break;
        case 5:
            mood.textContent = "😐"
            mood.style.top = "68px"
        break;
        case 4:
            mood.textContent = "😰"
            mood.style.top = "85px"
        break;
        case 3:
            mood.textContent = "😩"
            mood.style.top = "105px"
        break;
        case 2:
            mood.textContent = "😖"
            mood.style.top = "125px"
        break;
        case 1:
            mood.textContent = "😵"
            mood.style.top = "140px"
        break;
        case 0:
            mood.textContent = "👻"
            mood.style.top = "160px"
        break;
        default:
            return
    }
}