let allUsers = new Promise(async resolve => {

  const pro = await fetch("users.json")

  let data = await pro.json()

  resolve(data)

})

const validateInput = async e => {

  e.preventDefault()

  const usersList = await allUsers

  const form = e.target

  const email = form["el-lo-email"].value.toLowerCase()

  const password = form["el-lo-password"].value

  const validUser = usersList.find(item => item.email.toLowerCase() === email && item.password === password)

  if (validUser) {

    window.location.href = window.location.origin + '/ok.html'

  } else {

    window.location.href = window.location.origin + '/bad.html'

  }

}