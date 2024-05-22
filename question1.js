const button=document.querySelector(roundicon3)
button.addEventListener('click',function(){
    console.log('Button clicked')
})
button.addEventListener('enter',function(){
    button.style.backgroundColor='blue'
})

button.addEventListener('leave',function(){
    button.style.backgroundColor='red'
})