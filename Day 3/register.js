
document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault()

  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const password = document.getElementById('password').value;

  const user = {
    email,
    phone,
    password,
  }

  firebase.auth()
    .createUserWithEmailAndPassword(user.email, user.password)
    .then(function(response){
      console.log('sucessful', response.user)
        Swal.fire({
        title: 'Success!',
        text: 'Succesful session',
        html: `
          <button class="btn btn-success" >
            <a href="./login.html" class="color">Sign In</a>
          </button>
        `,
        icon: 'success',
        showConfirmButton: false,
      })
      db.collection('users').add({
        email,
        password,
        phone,
      })
    })
    .catch(function(error){
        Swal.fire({
        title: 'Error!',
        text: error,
        icon: 'error',
        })
    })
})

