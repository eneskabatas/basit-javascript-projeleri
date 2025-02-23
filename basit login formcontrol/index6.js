
let buton = document.getElementById("buton");

buton.onclick = function(){
    let isim = document.getElementById("isim").value;
    let mail = document.getElementById("mail").value;
    let parola = document.getElementById("parola").value;
    let parolatekrar = document.getElementById("parolatekrar");

    if(isim.length < 6){
        alert("Kullanıcı Adı 6 Karakterden Küçük Olamaz.");
    }
    else if(!mail.includes("@")){
        // Başına ! işareti koyulduğun da içermiyorsa demek.

        alert("Hatalı Email Adresi Girdiniz.");
    }
    else if(parola.length<6){
        alert("Şifre 6 Karakterden Küçük Olamaz!");
    }
    else if(parola != parolatekrar){
        alert("Şifreler Aynı Olması Lazım!");
    }
    else{
        alert("Hoşgeldiniz :)");
    }

    
}