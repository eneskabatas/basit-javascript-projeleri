const harfler = "ABCDEFGHIJKLMNOPRSTYWZ"
let interval = null

function changeText(e) {
    let iteration = 0

    const initText = e.target.innerText

    clearInterval(interval)

    interval = setInterval(()=>{
        e.target.innerText = initText
        .split("")
        .map((letter,i)=>{
            if(i < iteration){
                return e.target.dataset.textValue[i]
            }
            return harfler[Math.floor(Math.random() *22)]
        })
        .join("")
        if(iteration >= e.target.dataset.textValue.length) {
            clearInterval(interval)
        }
        iteration += 1 / 10
    }, 50)


}

const animText = document.querySelectorAll(".animated-text")

    animText.forEach((element)=>{
        element.addEventListener("mouseover", ()=>{
            changeText(event)
        })
    })