const API_KEY = "41f975413e87495cb7691c09090f4413";
const BASE_URL = "https://api.football-data.org/v2/";

// competitions
const ENPOINT_JER = `${BASE_URL}competitions/2002/standings`;
const ENPOINT_BEL = `${BASE_URL}competitions/2003/standings`;
const ENPOINT_ING = `${BASE_URL}competitions/2021/standings`;
const ENPOINT_SPA = `${BASE_URL}competitions/2014/standings`;
const ENPOINT_PER = `${BASE_URL}competitions/2015/standings`;

const fetchAPI = (url) => {
  return fetch(url, {
    headers: {
      "X-Auth-Token": API_KEY,
    },
  })
    .then((res) => {
      if (res.status !== 200) {
        console.log(`Error: ${res.status}`);
        return Promise.reject(new Error(res.statusText));
      } else {
        return Promise.resolve(res);
      }
    })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
};

function getStandingJer() {
  if ("caches" in window) {
    caches.match(ENPOINT_JER).then(function (response) {
      if (response) {
        response.json().then(function (data) {
          console.log("Competition Data: " + data);
          showStanding(data);
        });
      }
    });
  }

  fetchAPI(ENPOINT_JER)
    .then((data) => {
      showStanding(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function getStandingBel() {
  if ("caches" in window) {
    caches.match(ENPOINT_BEL).then(function (response) {
      if (response) {
        response.json().then(function (data) {
          console.log("Competition Data: " + data);
          showStanding(data);
        });
      }
    });
  }

  fetchAPI(ENPOINT_BEL)
    .then((data) => {
      showStanding(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function getStandingIng() {
  if ("caches" in window) {
    caches.match(ENPOINT_ING).then(function (response) {
      if (response) {
        response.json().then(function (data) {
          console.log("Competition Data: " + data);
          showStanding(data);
        });
      }
    });
  }

  fetchAPI(ENPOINT_ING)
    .then((data) => {
      showStanding(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function getStandingSpa() {
  if ("caches" in window) {
    caches.match(ENPOINT_SPA).then(function (response) {
      if (response) {
        response.json().then(function (data) {
          console.log("Competition Data: " + data);
          showStanding(data);
        });
      }
    });
  }

  fetchAPI(ENPOINT_SPA)
    .then((data) => {
      showStanding(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function getStandingPer() {
  if ("caches" in window) {
    caches.match(ENPOINT_PER).then(function (response) {
      if (response) {
        response.json().then(function (data) {
          console.log("Competition Data: " + data);
          showStanding(data);
        });
      }
    });
  }

  fetchAPI(ENPOINT_PER)
    .then((data) => {
      showStanding(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function getTeam(id) {
	const url = `${BASE_URL}teams/${id}`;

	if ('caches' in window) {
		caches.match(url).then(function (response) {
			if (response) {
				response.json().then(function (team) {
					showTeam(team);
				});
			}
		});
	}

	fetchAPI(url)
		.then((team) => {
			showTeam(team);
		})
		.catch((error) => {
			console.log(error);
		});
}