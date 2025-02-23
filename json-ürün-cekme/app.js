let jsonGetir = () => {
    fetch("data.json")
    .then(response => response.json())
    .then(data => {
        console.log(data.ürünler)

        let datas = data.ürünler

        datas.map((data)=>{
            const container = document.querySelector("#container")
            container.innerHTML += `
                <div class="cardContainer">
                    <figure class="imgContainer">
                         <img src="${data.img}" alt="">
                    </figure>
                    <div class="desc">
                        <span>adı : ${data.name} / açıklama : ${data.acıklama} </span>
                        <span> fiyat : ${data.fiyat} </span>
                    </div>
                </div>

            `
        })

    })
}

window.onload=()=> {
    jsonGetir()
}