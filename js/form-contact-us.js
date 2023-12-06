function submitForm() {
  var name = $("#name").val();
  var email = $("#email").val();
  var messages = $("#messages").val();

  // Mengirim data formulir ke server menggunakan AJAX
  $.ajax({
    url: "proses_formulir.php", // harus di Ganti dengan URL backend
    method: "POST",
    data: { nama: name, email: email, pesan: messages },
    success: function (response) {
      // kalo berhasil.engga
      alert("Formulir berhasil dikirim!");
    },
    error: function (error) {
      // engga berhasil
      alert("Terjadi kesalahan, coba lagi nanti.");
    },
  });
}
document.addEventListener("DOMContentLoaded", function () {
  function signIn() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Proses signin
    // melakukan verifikasi

    alert("Sign In\nUsername: " + username + "\nPassword: " + password);
  }

  function signUp() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Proses signup
    // menyimpan informasi akun baru

    alert("Sign Up\nUsername: " + username + "\nPassword: " + password);
  }
});
