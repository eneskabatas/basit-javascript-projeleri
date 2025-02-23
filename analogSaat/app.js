let second = document.querySelector(".second")
let hour = document.querySelector(".hour")
let minute = document.querySelector(".minute")


const updateTime = () => {
    let date = new Date()

    let secToDeg = ( (date.getSeconds() / 60) * 360  )
    second.style.transform = ` rotate(${secToDeg}deg) `

    let minToDeg = ( (date.getMinutes() / 60 ) * 360 )
    minute.style.transform = ` rotate(${minToDeg}deg) `

    let hourToDeg = ( (date.getHours() / 12 ) * 360 )
    hour.style.transform = ` rotate(${hourToDeg}deg) `
}

setInterval(updateTime,1000)