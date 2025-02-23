let btn = document.querySelector("#btn")

let veriGetir = () => {
    fetch("https://randomuser.me/api/?results=50")
    .then((response) => response.json())
    .then((data)=>{
        const datas = data.results
        // console.log(datas)

        console.log(datas[0].email)
        datas[0].gender=undefined
        const {email,gender = "denemee" , ...rest} = datas[0]

        console.log(rest)
        console.log(email)
        console.log(gender)


        datas.map((data)=>{
            const container = document.querySelector(".container")

            const {gender = "dnemeeee", name, location,email,phone,picture} = data

            container.innerHTML += `
            <div class="cardContainer">
                <figure>
                   <img src="${picture.medium}" alt="">
                 </figure>
             <div class="detailContainer">
                <span> ${name.title} ${name.first} </span>
                <span> ${name.last} </span>
                <span> ${gender} </span>
                <span> ${location.city} </span>
                <span> ${email} </span>
                <span> ${phone} </span>
             </div>
            </div>
            `
        })
    })
    
}

btn.onclick = () => {
    location.reload()
}

// btn.addEventListener("click",()=>{
// })

window.onload = () => {
    veriGetir()
}

