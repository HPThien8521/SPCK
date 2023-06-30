document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = {
    email,
    password,
  };
  firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then(function (response) {
      console.log("sucessful", response.user);
      Swal.fire({
        title: "Success!",
        text: "Sign In Success",
        html: `
          <button class="btn btn-success" >
            <a href="./index.html" class="no-id">Go back Home</a>
          </button>
        `,
        icon: "success",
        showConfirmButton: false,
      });
    })
    .catch(function (error) {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: error,
        icon: "error",
      });
    });
});
