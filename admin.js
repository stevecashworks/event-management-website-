const Body=document.querySelector('body');
let Data=[];
function sendMail(id,email){
     const message= document.getElementById(id).value;
     if(message){
        const confirmation= confirm(`are you sure you want to send a message to ${email}`)
        if(confirmation){

            fetch('http://norwood-event.herokuapp.com/sendmail',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({message,email})
            }).then(res=>res.json()).then(data=>console.log(data))
        }
    }
    }
function createEvent(full_Object){
    const{_id,__v,...object}=full_Object
    console.log(object)
const div= document.createElement('div')
div.setAttribute('class','entries')
 for(let x of Object.keys(object)){
     const inner_div= document.createElement('div')
     inner_div.setAttribute('class','inner');
     const left=document.createElement('p')
     const right=document.createElement('p')

     let name= x.split('_').join(' ')
     
   if(x=="date"){
    val= new Date(object[x])
   }
   else if(x==='service'){
    val=object[x].join(', ')
   }
   else{
    val=object[x]
   }
     right.setAttribute('class', 'right')
     left.setAttribute('class', 'left')
     left.innerHTML= name+': ';
     right.innerHTML=val
     inner_div.appendChild(left)
     inner_div.appendChild(right)
     div.appendChild(inner_div)

    }
    const inp=document.createElement('textarea');
    const inpDiv=document.createElement('div');
    inpDiv.setAttribute('class','inp-div')
    inp.setAttribute('class','inp')
    inp.setAttribute('id',_id)
    inp.setAttribute('placeholder','Send this user an email ')
    const icon=document.createElement('img')
    icon.setAttribute('class',"ic");
    icon.onclick=()=>sendMail(_id,object.email)
    icon.setAttribute('src',"./send.png")
    Body.appendChild(div)
    inpDiv.appendChild(inp)
    inpDiv.appendChild(icon)
    Body.appendChild(inpDiv)

    

}
const fetchData= async()=>{
 await   fetch('https://norwood-event.herokuapp.com').then(res=>res.json()).then(data=>{Data=data;console.log(Data)});

    if(Data.length===0){
        const h= document.createElement('h1');
        h.innerHTML='No events yet'
        Body.appendChild(h)
    }
    else{
     Data.forEach(x=>createEvent(x))
    }
}
fetchData()

