document.addEventListener("DOMContentLoaded", function () {
  // Activate sidebar nav

  function topNav() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status != 200) return;

        // Muat daftar tautan menu
        document.querySelector(".topnav").innerHTML = xhttp.responseText;
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
        document.querySelector(".sidenav").innerHTML = xhttp.responseText;
        $(".dropdown-trigger").dropdown();
        $(".sidenav").sidenav();

        // Daftarkan event listener untuk setiap tautan menu
        document.querySelectorAll(".link2").forEach(function (elm) {
          elm.addEventListener("click", function (event) {
            // Muat konten halaman yang dipanggil
            // var sidenav = document.querySelectorAll(".sidenav");
            // M.Sidenav.getInstance(sidenav).init(sidenav);
            $(".sidenav").sidenav();
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

});