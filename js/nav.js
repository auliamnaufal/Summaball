document.addEventListener("DOMContentLoaded", function () {
  // Activate sidebar nav

  function topNav() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status != 200) return;

        // Muat daftar tautan menu
        document.querySelectorAll(".topnav").innerHTML = xhttp.responseText;
        $(".dropdown-trigger").dropdown();

        // Daftarkan event listener untuk setiap tautan menu
        document.querySelectorAll(".link1").forEach(function (elm) {
          elm.addEventListener("click", function (event) {
            // Muat konten halaman yang dipanggil
            page = event.target.getAttribute("href").substr(1);
            loadPage(page);
          });
        });
      }
    };
    xhttp.open("GET", "/pages/topnav.html", true);
    xhttp.send();
  }
  topNav();

  function sideNav() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status != 200) return;

        // Muat daftar tautan menu
        document.querySelectorAll(".sidenav").innerHTML = xhttp.responseText;
        $(".dropdown-trigger").dropdown();
        $(".sidenav").sidenav();

        // Daftarkan event listener untuk setiap tautan menu
        document.querySelectorAll(".link2").forEach(function (elm) {
          elm.addEventListener("click", function (event) {
            // Muat konten halaman yang dipanggil
            var sidenav = document.querySelectorAll(".sidenav");
            M.Sidenav.getInstance(sidenav).close();
            page = event.target.getAttribute("href").substr(1);
            loadPage(page);
          });
        });
      }
    };
    xhttp.open("GET", "/pages/sidenav.html", true);
    xhttp.send();
  }
  sideNav();

  // Load page content
  var page = window.location.hash.substr(1);
  if (page == "") page = "home";
  loadPage(page);

  function loadPage(page) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4) {
        var content = document.querySelector("#body-content");
        if (this.status == 200) {
          content.innerHTML = xhttp.responseText;
        } else if (this.status == 404) {
          content.innerHTML = "<p>Halaman tidak ditemukan.</p>";
        } else {
          content.innerHTML = "<p>Ups.. halaman tidak dapat diakses.</p>";
        }
      }
    };
    xhttp.open("GET", "pages/" + page + ".html", true);
    xhttp.send();
  }
});
