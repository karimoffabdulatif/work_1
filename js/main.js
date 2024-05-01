function submit (){
    let username = document.getElementById('username').value
    let password = Number(document.getElementById('password').value)
    if(username === 'admin'){
        if(password === 123 ){
            alert("Ma'lumotlaringiz saqlandi !")
        }else{
            alert("Password xato !")
        }

    }else if (password === 123){
        alert("Username xato !")
  
    }else{
        alert("Username va Password xato !")
    }
}

const isShow =()=>{
   let password = document.getElementById('password')
   if(password.type === "password"){
    password.type = 'text'
   }else{
    password.type = "password"
   }
}