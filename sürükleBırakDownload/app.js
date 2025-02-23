const dropzoneBox = document.getElementsByClassName("dropzoneBox")[0];
// const inputFile = document.querySelector("#uploadFile")
const inputFile = document.querySelectorAll(".dropzoneArea input[type='file']")
const down = document.querySelector("#submitButton")


const inputElement = inputFile[0]

const dropZoneElement = inputElement.closest(".dropzoneArea")
const fileLimit = 25000000;


const uploadDropzoneFileList = (dropZoneElement , file) => {
    let dropzoneFileMessage = dropZoneElement.querySelector(".fileInfo")

    dropzoneFileMessage.innerHTML = ` ${file.name}, ${file.size} byte `
}

inputElement.addEventListener("change",(e)=>{
    console.log(inputElement.files[0])
    if(inputElement.files[0].size > fileLimit){
        alert("Dosya Boyutu Büyük")
        return
    }

    if(inputElement.files.length){
        uploadDropzoneFileList(dropZoneElement,inputElement.files[0])
    }
})

dropZoneElement.addEventListener("dragover",(e)=>{
    e.preventDefault()
    dropZoneElement.classList.add("dropzone--over")
})

// ["dragleave","dragend"].forEach((type)=>{
//     dropZoneElement.addEventListener(type,(e)=>{
//         dropZoneElement.classList.remove("dropzone--over")
//     })
// })

dropZoneElement.addEventListener("drop",(e)=>{
    e.preventDefault()

    if(e.dataTransfer.files[0].size > fileLimit){
        alert("Dosya Boyutu Büyük")
        dropZoneElement.classList.remove("dropzone--over")
        return
    }

    if(e.dataTransfer.files.length){
        inputElement.files = e.dataTransfer.files
        uploadDropzoneFileList(dropZoneElement,e.dataTransfer.files[0])
    }

    dropZoneElement.classList.remove("dropzone--over")
})



dropzoneBox.addEventListener("reset", () => {
    let dropzoneFileMessage = dropZoneElement.querySelector(".fileInfo")

    dropzoneFileMessage.innerHTML = ` Dosya Seçilmedi `
})

dropzoneBox.addEventListener("submit", (e)=>{
    e.preventDefault()
    const myfiled = document.getElementById("uploadFile")

    if(myfiled.files[0].size > fileLimit){
        alert("dosya boyutu buyuk")
    }
})