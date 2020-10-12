function showStanding(data) {
  let standings = ``
  const standingElement = document.getElementById("standings");
  /* Jika dilihat melalui console.log, seharusnya kakak me looping data.standings[0].table, karena
disitulah object team berada
  */
  data.standings[0].table.forEach((standing) => {
    standings += `
        <div class="standing__team">
            <div class="favtim">
            <img src="${standing.team.crestUrl.replace(
              /^http:\/\//i, 'https://')}" alt="Logo team" />
            <h3><a class="link" href="#team?id=${standing.team.id}">${standing.team.name}</a></h3>
            <h3 class="point">Point: <span>${standing.points}</span></h3>
            </div>
        </div>
        `;
  });

  // di line ke 23 dan 24 seharusnya competition, bukan competitions
    standingElement.innerHTML = `
  <div class="standing__header blue lighten-3">
            <h1>${data.competition.name}</h1>
            <p class="standing__header--place">${data.competition.area.name}</p>
            <p class="standing__header--time">${data.season.startDate} - ${data.season.startDate}</p>
        </div>
  `;
  document.querySelectorAll(".link").forEach(function (link) {
    link.addEventListener("click", function (e) {
      urlTeamParam = e.target.getAttribute("href").substr(9);
      loadpage();
    });
  });


}
