window.addEventListener('load',()=>{
    const email =document.querySelector('#email')
    const passward =document.querySelector('#password')
    const login_btn =document.querySelector('.login')
    const error_p =document.querySelector('#error')

    login_btn.addEventListener('click',async(e)=>{
      e.preventDefault()
        const emailv =email.value
        const passwardv =passward.value
        console.log(emailv,passwardv )
        
        
      try {
        const data = await axios.post('/member/login',{
            email:emailv,
            password:passwardv
        })

        console.log(data)

         email.value=""
         passward.value=""
         console.log(data.data)

         //window.location ="mogde_landing_p.html"
         localStorage.setItem("userid",data.data.userid)
         localStorage.setItem("username",data.data.username)
       
        if (data.data== "Not a REGISTERED user, register now"){
            error_p.textContent="Not a REGISTERED user, register now"
        }
        else if (data.data== "Wrong password!"){
          error_p.textContent="Wrong password!"
      }
      else{
          window.location ="job.html"
      }


        
      } catch (error) {
        console.log(error)
      }


        console.log(emailv,passwardv)
    })
    
})