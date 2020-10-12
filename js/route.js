let page = window.location.hash.substr(1);
let urlTeamParam = window.location.hash.substr(9);
if (page == "") page = "home";
  loadPage(page);

function loadPage(page) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4) {
        var content = document.querySelector("#body-content");
        console.log(page);

        if (page === "liga-jerman") {
          getStandingJer();
        }

        if (this.status == 200) {
          content.innerHTML = xhttp.responseText;
        } else if (this.status == 404) {
          content.innerHTML = "<p>Halaman tidak ditemukan.</p>";
        } else {
          content.innerHTML = "<p>Ups.. halaman tidak dapat diakses.</p>";
        }
      }
    };
    // Jika page adalah liga-jerman, maka buka standing.html, selain itu, buka page sesuai url
    if(page === "liga-jerman") {
      xhttp.open("GET", "pages/standing.html", true);
      xhttp.send();
    } else {
      xhttp.open("GET", "pages/" + page + ".html", true);
      xhttp.send();
    }

}
