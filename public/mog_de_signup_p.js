window.addEventListener('load', () => {
  const surname = document.querySelector('#surname')
  const firstname = document.querySelector('#firstname')
  const address = document.querySelector('#address')
  const phone = document.querySelector('#phone')
  const email = document.querySelector('#email')
  const passward = document.querySelector('#password')
  const rpassword = document.querySelector('#rpassword')
  const nin = document.querySelector('#nin')
  const signup = document.querySelector('.signup_box')



  signup.addEventListener('click', async () => {
    const surnamev = surname.value
    const firstnamev = firstname.value
    const addressv = address.value
    const phonev = phone.value
    const emailv = email.value
    const passwardv = passward.value
    const rpasswordv = rpassword.value
    const ninv = nin.value

    if (passwardv === rpasswordv) {
      alert("password okay")
      try {
        const data = await axios.post('/member/create', {
          surname: surnamev,
          firstname: firstnamev,
          address: addressv,
          phone: phonev,
          email: emailv,
          password: passwardv,
          re_password: rpasswordv,
          nin: ninv
        })
        console.log(data)
      } catch (error) {
        console.log(error)

      }
      console.log(surnamev, phonev)
      window.location = "mog_de_login_p.html"

    }
    else if (!passwardv === !rpasswordv) {
      window.location = "mog_de_signup_p.html"
    }
    else{
      alert("wrong password")
    }
  })





})