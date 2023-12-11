// form-contact-us.js

function signIn() {
  const username = document.getElementById("usernameSignIn").value;
  const password = document.getElementById("passwordSignIn").value;

  fetch("http://localhost:3000/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      alert(data.message);
    });
}

function signUp() {
  const username = document.getElementById("usernameSignUp").value;
  const email = document.getElementById("emailSignUp").value;
  const password = document.getElementById("passwordSignUp").value;

  fetch("http://localhost:3000/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      alert(data.message);
    });
}
