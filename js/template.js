function showStanding(data) {
  let standings = ``;
  const standingElement = document.getElementById("standings");
  
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
            <p class="standing__header--time">${data.season.startDate} - ${data.season.endDate}</p>
        </div>

        <div>
          ${standings}
        </div>
  `;
  document.querySelectorAll(".link").forEach(function (link) {
    link.addEventListener("click", function (e) {
      urlTeamParam = e.target.getAttribute("href").substr(9);
      loadPage();
    });
  });


}

function showTeam(team) {
  const teamElement  = document.getElementById('team');
  let player = ``;

  team.squad.forEach((p) => {
    player += `
    <div class="team__player" id="player">
      <h3>${p.name}</h3>
    </div>

    <ul class="collapsible">
      <li>
        <div class="collapsible-header">Informasi Pemain</div>
        <div class="collapsible-body">
          <span>
            <ul class="info">
              <li>Position:  ${p.position}</li>
              <li>Negara Kelahiran: ${p.countryOfBirth}</li>
              <li>Kebangsaan: ${p.nationality}</li>
            </ul>
          </span>
        </div>
      </li>
  </ul>
    `
  })

  teamElement.innerHTML = `
    <div class="team__header">
      <img src="${team.crestUrl.replace(/^http:\/\//i, 'https://')}" alt="Team logo">
      <div class="team__header--info">
        <h2>${team.name}</h2>
        <p class="flow-text">
          ${team.name} pertama kali di temukan pada tahun ${team.founded === null ? 'yang tidak diketahui' : team.founded}, alamat ${team.name} ada di ${team.addredd}. tim ini menggunakan warna ${team.clubColors}
        </p>
      </div>
      <div class="fixed-action-btn">
        <a class="btn-floating btn-large pink accent-3 waves-effect" id="save" href="${team.id}">
          <i class="large material-icons" id="save-icon">save</i>
        </a>
      </div>
    </div>

    ${player}
  `;

  $('.collapsible').collapsible();
  const ikon = document.querySelector('#save-icon');
  async function checkId() {
		if (await isFav(parseInt(window.location.hash.substr(9)))) {
      ikon.innerHTML = "delete";
		}
  }
  
  checkId();

  $('#save').on('click', async (e) => {
		e.preventDefault();
		// mendapatkan id team dari nilai href
		const teamId = parseInt(e.currentTarget.getAttribute('href'));

		if (await isFav(teamId)) {
      ikon.innerHTML = 'save'
			deleteTeamFav(teamId);
      M.toast({ html: `${team.name}  Dihapus Dari Tim Favorit` });
		} else {
      ikon.innerHTML = 'delete'
      addTeamFav(team);
			M.toast({ html: `${team.name}  Ditambahkan Ke Tim Favorit` });
		}
  });
  
}

function showFav() {
  getAllTeamFav().then((favs) => {
		let header = '';
		let savedTeam = '';
		// looping data dari database
		favs.forEach((favs) => {
      savedTeam += `
      <div class="favtim" id="fav">
        <img src="${favs.crestUrl.replace(/^http:\/\//i,'https://')}"  
          alt="Logo team" />
        <h3><a href="#team?id=${favs.id}" class="saved">${favs.name}</a></h3>
      </div> 
      `;
		});
    header += `
      <div class="fav blue lighten-3">
        <h1 class="fav__header">Tim Favorit</h1>
     </div>
     ${savedTeam === '' ? 'Tidak ada tim favorit' : savedTeam} 

     `;

		document.getElementById('saved').innerHTML = header;
		document.querySelectorAll('.saved').forEach(function (link) {
			link.addEventListener('click', function (event) {
				urlTeamParam = event.target.getAttribute('href').substr(9);
				loadPage();
			});
		});
	});
}