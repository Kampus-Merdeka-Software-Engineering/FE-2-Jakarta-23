// form-contact-us.js
function contact() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;


  fetch("http://localhost:3000/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message }),
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
