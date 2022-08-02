const form= document.querySelector('.Form');
const err= document.getElementById('err')
function create(message){
  const div=document.createElement('div')
  const span=document.createElement('span')
  const icon= document.createElement('i')
  icon.setAttribute("class","bi bi-x-circle-fill icon")
  const h=document.createElement('p');
  h.innerHTML=message;
  span.appendChild(icon);
  span.appendChild(h);
  div.appendChild(span);
  span.setAttribute('class','err-span')
  err.appendChild(div)
  

}
const result=document.getElementById('result');

const submitForm=(e)=>{
  result.innerHTML=''
    e.preventDefault();
    let errors=[];
    err.innerHTML=''
    err.style.display='none'
      const submitted= document.forms[0].elements;
      const values={};
      console.log(submitted)
      const names=[]
      for(let x of submitted){
         const name= x.getAttribute('name');
         if(!(names.includes(name))){
            names.push(name)
        }
      }
       for(let name of names){
         if(submitted[name]){
            values[name]=submitted[name].value
         }
        
       }
       let serv= document.querySelectorAll("input[type='checkbox']:checked")
       let services=[];
       
        for(let s of serv){
          services.push(s.value);
        }
        values.service=services
      
        
        // console.log(services)
       console.log(values)
       let{budget,
       color,
       date,
       email,
       attendance_type,
       attendance_type_other,
       gender,
       gender_other,
       invitees,
       location,
       name,
       phone,
       service,
       service_other,
       theme,
       event_type,
       event_type_other,
       venue_type,
       venue_type_other}=values
      
       if((!event_type)&&(!event_type_other)){
       errors.push('please select event type to proceed (10).');


       }
       if((service.length==0)&&(!service_other)){
        errors.push('Please let us know how we can serve you (12).')
       }
       if((!attendance_type)&&(!attendance_type_other)){
        errors.push('please select  type of attendance to proceed (10).')
       }
       if((!venue_type)&&(!venue_type_other)){
        errors.push("please  choose a venue type (9) .")

       }

       if(errors.length!=0){
        errors.forEach(error=>create(error));
        err.style.display='block';
        window.location.assign('#err');
      }
      else{
        if(service_other){service=[...service,service_other]};
        const Data={name,email,phone,gender:gender||gender_other,location,date,invitees,event_type:event_type||event_type_other,venue_type:venue_type||venue_type_other,attendance_type:attendance_type||attendance_type_other,theme,service,color,budget}
         fetch('https://norwood-event.herokuapp.com',{
          method:'POST',
          headers:{
            "Content-Type":'application/json'
          },
          body:JSON.stringify(Data)
         }).then(res=>res.json()).then(data=>{            
         
         let source;
          const img= document.createElement('img');
          img.setAttribute('class','gf')
          img.setAttribute('src','./done.gif');
          result.appendChild(img)
          window.location.assign('#result')
          setTimeout(()=>{
            window.location.assign('./index.html')
          },1000)

        })
        }
}
form.addEventListener('submit',(e)=>{submitForm(e)})