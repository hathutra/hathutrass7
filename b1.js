debugger
const body = document.getElementById("body")
const google = document.getElementById("demoA")
const button = document.getElementById("btnDemo")
const input = document.getElementById("demoInput")
const button2 = document.getElementById("remove")
const list = document.getElementById("menu")
button.addEventListener('click',()=>{
//    console.dir(google)
   input.value = google.href
})

button2.addEventListener('click',()=>{  
    list.removeChild(list.lastElementChild) 
})