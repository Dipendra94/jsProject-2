var arr = [
         {dp:"https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmVwYWxpJTIwbW9kZWwlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",story:"https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmVwYWxpJTIwbW9kZWwlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D"},

         {dp:"https://images.unsplash.com/photo-1440589473619-3cde28941638?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5lcGFsaSUyMG1vZGVsJTIwcGhvdG98ZW58MHx8MHx8fDA%3D",story:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHx8MHx8fDA%3D"},

         {dp:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsfGVufDB8fDB8fHww",story:"https://images.unsplash.com/photo-1488161628813-04466f872be2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsfGVufDB8fDB8fHww"},

         {dp:"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsfGVufDB8fDB8fHww",story:"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsfGVufDB8fDB8fHww"},
]
var storiyan = document.querySelector("#storiyan")
var clutter = ""

arr.forEach(function(elem,idx){
    clutter += ` <div class="story">
                <img id="${idx}"src="${elem.dp}" alt="">
            </div>`
    
})

storiyan.innerHTML = clutter
storiyan.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`


    setTimeout(function(){
         document.querySelector("#full-screen").style.display = "none"
    },2000)
})