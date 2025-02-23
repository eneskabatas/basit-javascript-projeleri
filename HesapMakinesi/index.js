// Genel Değişkenler
var durum=false,opt="",sonuc=0;

// Nesnelerin Oluşturulması

let rakam=document.querySelectorAll(".rakam");
let islem=document.querySelector("#islem");
let gosterge=document.querySelector("#gosterge");
var opr=document.querySelectorAll(".opr");
let btnC=document.querySelector(".btnC");
let btnCE=document.querySelector(".btnCE");
let nokta=document.querySelector(".nokta");
let esit=document.querySelector(".esit");

// Rakam Yazdırma İşlemleri
rakam.forEach(function(element){
    // forEach ile tüm rakamları gezmesini sağlıyoruz
    // element parametresi ile seçilene işlem yapılır.
    element.onclick=function(){
        // "0"ı kaldırmak için
        // durum=> durum==true demektir
        if(islem.textContent=="0" ||durum){
            islem.textContent=""
        }
        islem.textContent+=this.textContent
        durum=false;
    }
})

// Operatör İşlemleri
opr.forEach(function(element){
    element.onclick=function(){
        let opr=this.textContent
        durum=true;
        gosterge.textContent=gosterge.textContent+""+islem.textContent+""+opr;

        switch(opt){
        // switch hafızaya alınan işlemdir.
        // case ile işlemi bir defa döndüreceğiz ve istediğimiz kısım dönecek.
        case"+":islem.textContent=(sonuc+Number(islem.textContent));break;
        case"-":islem.textContent=(sonuc-Number(islem.textContent));break;
        case"x":islem.textContent=(sonuc*Number(islem.textContent));break;
        case"/":islem.textContent=(sonuc/Number(islem.textContent));break;
        }
        sonuc=Number(islem.textContent);
        opt=opr;

    }
})

// btn c işlemleri

btnC.onclick=function(){
    islem.textContent="0";
}

// btn ce işlemleri

btnCE.onclick=function(){
    islem.textContent="0";
    gosterge.textContent="";
    sonuc=0;
    opt="";
}

// eşittir işlemleri

esit.onclick=function(){
    gosterge.textContent="";
    durum=true;
    switch(opt){
        case"+":islem.textContent=(sonuc+Number(islem.textContent));break;
        case"-":islem.textContent=(sonuc-Number(islem.textContent));break;
        case"x":islem.textContent=(sonuc*Number(islem.textContent));break;
        case"/":islem.textContent=(sonuc/Number(islem.textContent));break;
        }

        sonuc=Number(islem.textContent);
        islem.textContent=sonuc;
        sonuc=0;
        opt="";
}

// nokta işlemleri
nokta.onclick=function(){
    if(!durum && !islem.textContent.includes(".")){
        islem.textContent+=".";
    }
    else if(durum){
        islem.textContent="0"
    }
    if(!islem.textContent.includes(".")){
        islem.textContent+=".";
    }
    durum=false;
}