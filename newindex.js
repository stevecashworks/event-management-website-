const   container= document.querySelector('.sec');
const arr=[document.getElementById("slide1"),document.getElementById("slide2"),document.getElementById("slide3"),document.getElementById("slide4")]
let i=1
const change=()=>{
 if(i===4){
    i=1;
 }else{
    i=i+1;
 }
 arr.forEach(x=>{x.classList.remove('active')})
 document.getElementById(`slide${i}`).classList.add('active')
 }
 setInterval(change,3000)
  function showOptions(){
const options= document.querySelector('.links');
const classes= Array.from(options.classList);
    if(classes.includes('visible')){
   options.classList.remove('visible')
    }else{
      options.classList.add('visible')
    }
  }