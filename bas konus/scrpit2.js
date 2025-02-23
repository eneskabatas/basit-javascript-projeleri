
let txt=document.getElementById("txt");
let txt1=document.getElementById("txt1");
let basla=document.getElementById("basla");
let bitir=document.getElementById("bitir");
let oku=document.getElementById("oku");

let webspeech= new webkitSpeechRecognition();
webspeech.lang="tr-TR";
webspeech.continuous = true;

basla.onclick=()=>{
    webspeech.start();
};
bitir.onclick=()=>webspeech.stop();

webspeech.onresult=(event)=>{
    let liste=event.results;
    txt.value += liste[liste.length-1][0].transcript;
    console.log(liste)
}

oku.addEventListener('click',function(){
    let text=txt1.value;
    let uttr=new SpeechSynthesisUtterance(text);
    uttr.lang="en";
    speechSynthesis.speak(uttr);
})



