let d = document

const getAdvice = async () => {
    let res = await fetch("https://api.adviceslip.com/advice")
    res = await res.json()
    const id = res.slip.id,
          advice = res.slip.advice
    return {id, advice}
            
}

function setAdvice(){
    const $adviceNumber = d.getElementById("adNumber"),
    $advice = d.getElementById("advice"),
    $adviceCard = d.querySelector(".adviceCard"),
    $randomBtn = d.getElementById("randomBtn"),
    $randomBtnImg = d.getElementById("randomBtnImg")

  $randomBtnImg.setAttribute("src", "./images/loader.gif")
  $adviceNumber.textContent = "?"
  $advice.textContent = "Loading.."

let adviceData = getAdvice()
console.log(adviceData)
adviceData.then(data => {
  $adviceNumber.textContent = data.id
  $advice.textContent = data.advice
  $randomBtnImg.setAttribute("src", "./images/icon-dice.svg")
})
}

d.addEventListener("DOMContentLoaded", e => {
    setAdvice()
})


d.addEventListener("click", e => {
    if(e.target.matches("#randomBtn *")){
        location.reload()
    }
})