$(document).ready(function () {
  // Semua elemen detail disembunyikan secara default
  $("[class^='detail']").hide();

  // Fungsi yang akan dipanggil saat tautan di klik
  $(".product-link").click(function (e) {
    // Mengambil ID dari href tautan
    var selectedId = $(this).attr("href");

    // Menyembunyikan semua detail
    $("[class^='detail']").hide();

    // Menampilkan detail berdasarkan ID yang terpilih
    $(selectedId).show();

    e.preventDefault(); // Mencegah tautan mengarahkan ke halaman baru
  });

  // Pemanggilan contoh fungsi untuk menampilkan elemen dengan ID 1 secara otomatis
  showElement("#1");
});

// Fungsi untuk menampilkan elemen dengan ID tertentu
function showElement(elementId) {
  // Menampilkan elemen dengan ID sesuai
  $(elementId).show();
}
