let btn1= document.getElementById('button1')
let btn2= document.getElementById('button2')
let btn3= document.getElementById('button3')

let content1= document.getElementById('content1')
let content2= document.getElementById('content2')
let content3= document.getElementById('content3')

btn1.addEventListener('click',function(){
    content2.style.opacity= 0
    content1.style.opacity= 1
    content3.style.opacity=0

   
})

btn2.addEventListener('click',function(){
    content2.style.opacity= 1
    content1.style.opacity= 0
    content3.style.opacity=0

   
})


btn3.addEventListener('click',function(){
    content2.style.opacity= 0
    content1.style.opacity= 0
    content3.style.opacity=1

   
})
