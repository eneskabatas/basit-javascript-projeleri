const container = document.querySelector(".container")
const yes = document.querySelector(".yesBtn")
const no = document.querySelector(".noBtn")

const containerRect = container.getBoundingClientRect()
const yesRect = yes.getBoundingClientRect()

yes.addEventListener("mouseover",()=>{
    const left = Math.floor(Math.random() * (containerRect.width - yesRect.width) )
    const top = Math.floor(Math.random() * containerRect.height - yesRect.height)

    yes.style.position = "absolute"
    yes.style.left = left+"px"
    yes.style.top = top+"px"
})

no.onclick= () => {
    alert("en sevdiğimiz personelsiniz")
}