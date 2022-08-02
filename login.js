const checkPassword=()=>{
    const val=document.querySelector('input').value
     if(val==='NORWOOD'){
        window.location.assign('./admin.html')
     }else{
        alert('Login failed!,invalid password')
     }
}