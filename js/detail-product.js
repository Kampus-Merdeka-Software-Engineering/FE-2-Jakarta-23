function hideAllPages() {
  document.getElementById("kopi-hitam").style.display = "none";
  document.getElementById("kopi-susu-tubruk").style.display = "none";
  document.getElementById("kopi-oat-latte").style.display = "none";
  document.getElementById("kopi-almond-latte").style.display = "none";
  document.getElementById("kopi-cappuccino").style.display = "none";
  document.getElementById("kopi-susu").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  hideAllPages();
});

function showKopiHitam() {
  hideAllPages();
  document.getElementById("kopi-hitam").style.display = "block";
}

function showKopiSusuTubruk() {
  hideAllPages();
  document.getElementById("kopi-susu-tubruk").style.display = "block";
}

function showKopiOatLatte() {
  hideAllPages();
  document.getElementById("kopi-oat-latte").style.display = "block";
}

function showKopiAlmondLatte() {
  hideAllPages();
  document.getElementById("kopi-almond-latte").style.display = "block";
}

function showKopiCappuccino() {
  hideAllPages();
  document.getElementById("kopi-cappuccino").style.display = "block";
}

function showKopiSusu() {
  hideAllPages();
  document.getElementById("kopi-susu").style.display = "block";
}
