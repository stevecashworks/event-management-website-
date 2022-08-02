console.log("working")
const Main= document.querySelector('.slide-over');
const slid= document.querySelector('.main-div')
console.log(Main.classList)
setTimeout(()=>{slid.classList.remove("away");Main.classList.add("away")},3000)
console.log(Main.classList)