window.addEventListener('load', async () => {
  const no_job = document.querySelector('#display_number')
  const username = document.querySelector('#username')
  const logout = document.querySelector('#logout')
  // const company = document.querySelector('#company')
  // const position =document.querySelector('#position')
  // const status =document.querySelector('#status')
  // const date =document.querySelector('#date')
  // const edit =document.querySelector('#edit')
  // const del =document.querySelector('#del')
  const enter_company = document.querySelector('.enter_company')
  const enter_position = document.querySelector('.enter_position')
  const enter_status = document.querySelector('.enter_status')
  const create_job = document.querySelector('.job_create')
  const createdBy = localStorage.getItem("userid")
  username.value = localStorage.getItem('username')
  try {
    const data = await axios.get(`/job/get/${createdBy}`)
    console.log(data.data)
    no_job.value = data.data.length

    data.data.map((job, index) => {
      const { company, position, status, createdBy, createdAt, _id } = job

      const jobb = document.createElement('div')
      jobb.classList.add("jobs")
      const companyy = document.createElement('div')
      companyy.classList.add('company')
      companyy.textContent = "Company:"
      const positionn = document.createElement('div')
      positionn.classList.add('position')
      positionn.textContent = "Position:"
      const statuss = document.createElement('div')
      statuss.classList.add('status')
      statuss.textContent = "Status:"
      const datee = document.createElement('div')
      datee.classList.add('date')
      datee.textContent = "Date:"
      const edd = document.createElement('div')
      edd.classList.add("e_d")
      const editt = document.createElement('button')
      editt.id = "edit"
      //editt.classList.add(_id)
      editt.textContent = "EDIT"
      const deletee = document.createElement('button')
      deletee.id = "del"
      deletee.classList.add(_id)
      deletee.textContent = "DELETE"




      const companyinput = document.createElement('input')
      //companyinput.value = company
      companyinput.value = company
      companyinput.id = "company"
      //  companyinput.attributes("readonly", "readonly")
      const positioninput = document.createElement('input')
      positioninput.value = position
      const statusinput = document.createElement('input')
      statusinput.value = status
      const dateinput = document.createElement('input')
      dateinput.value = createdAt




      jobb.appendChild(companyy)
      jobb.appendChild(positionn)
      jobb.appendChild(statuss)
      jobb.appendChild(datee)
      companyy.appendChild(companyinput)
      positionn.appendChild(positioninput)
      statuss.appendChild(statusinput)
      datee.appendChild(dateinput)
      jobb.appendChild(edd)
      edd.appendChild(editt)
      edd.appendChild(deletee)

      document.querySelector('.displayofjobs').appendChild(jobb)



      //          const jobb = `

      //       <div class="jobs">
      //         <div class="company">Company : <input id="company" type="text" value='${job.company}'></div>
      //         <div class="position"> Position : <input id="position" type="text"></div>
      //         <div class="status">Status : <input id="status" type="text"></div>
      //         <div class="date"> Date : <input id="date" type="text"></div>
      //         <div class="e_d">
      //           <button id="edit"> Edit</button>
      //           <button id="del">Delete</button>
      //         </div>
      //     </div>`

      document.querySelector('.displayofjobs').appendChild(jobb)
      deletee.addEventListener('click', async () => {
        alert(deletee.className)
        const job_id = deletee.className
        await axios.delete(`/job/delete/${job_id}`)
        window.location = 'job.html'
      })
      editt.addEventListener('click', async () => {
        const job_id = deletee.className
        const data = await axios.post(`/job/update/${job_id}`, {
          company: companyinput.value,
          position: positioninput.value,
          status: statusinput.value
        })
        console.log(data)
      })



    })


  } catch (error) {
    console.log(error)
  }


  create_job.addEventListener('click', async () => {
    alert('yes im clicked')
    const enter_companyv = enter_company.value
    const enter_positionv = enter_position.value
    const enter_statusv = enter_status.value

    try {
      const data = await axios.post('/job/create', {
        company: enter_companyv,
        position: enter_positionv,
        status: enter_statusv,
        createdBy: createdBy
      })
      console.log(data)
    } catch (error) {
      console.log(error)
    }

  })

  logout.addEventListener("click",()=>{
    alert('thanks for visiting')
    window.location="mog_de_login_p.html"
  })


})