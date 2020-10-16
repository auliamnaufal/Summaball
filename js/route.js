let page = window.location.hash.substr(1);
let urlTeamParam = window.location.hash.substr(9);
if (page == "") page = "home";
  loadPage(page);

function loadPage(page) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4) {
        var content = document.querySelector("#body-content");
        console.log(urlTeamParam);

        switch (page) {
          case "liga-jerman":
            getStandingJer();
            break;
            case "liga-belanda":
              getStandingBel();
              break;
              case "liga-inggris":
                getStandingIng();
                break;
                case "liga-spanyol":
                  getStandingSpa();
                  break;
                  case "liga-perancis":
                    getStandingPer();
                    break;
                    case "saved":
                    showFav();
                    break;
          default:
            'home';
            break;
        }
        // FIXED
        // karena sudah beda case( page dan urlTeamParam ), makanya lebih baik dipisah kak
        if(urlTeamParam.length > 0) {
          getTeam(urlTeamParam);
        }

        if (this.status == 200) {
          content.innerHTML = xhttp.responseText;
          console.log(urlTeamParam);
          // FIXED
          // parameter urlTeamParam akan di setting mejadi 0 ketika proses fetch team telah selesai dan data sudah ditampilkan
          urlTeamParam = 0
        } else if (this.status == 404) {
          content.innerHTML = "<p>Halaman tidak ditemukan.</p>";
        } else {
          content.innerHTML = '<p>Ups.. halaman tidak dapat diakses.</p>';
        }
      }
    };
    if (urlTeamParam.length > 0) {
      xhttp.open('GET', '/pages/team.html');
      xhttp.send();
      return;

    } else if (
      page === "liga-jerman" || 
      page === 'liga-belanda' || 
      page === 'liga-inggris' || 
      page === 'liga-spanyol' || 
      page === 'liga-perancis'
      ) {
      xhttp.open("GET", "pages/standing.html", true);
      xhttp.send();

    } else {
      xhttp.open("GET", "pages/" + page + ".html", true);
      xhttp.send();
    }

}

loadPage(page)