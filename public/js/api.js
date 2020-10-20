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
  preLoader();
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
      removePreloader();
      showStanding(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function getStandingBel() {
  preLoader();
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
      removePreloader();
      showStanding(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function getStandingIng() {
  preLoader();
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
      removePreloader();
      showStanding(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function getStandingSpa() {
  preLoader();
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
      removePreloader();
      showStanding(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function getStandingPer() {
  preLoader();
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
      removePreloader();
      showStanding(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function getTeam(id) {
  preLoader();
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
      removePreloader();
			showTeam(team);
		})
		.catch((error) => {
			console.log(error);
		});
}

function preLoader() {
  document.getElementById('preload').innerHTML = `
  <div class="loadingio-spinner-pulse-kznbmpg29hk"><div class="ldio-wst4pcb20f8">
  <div></div><div></div><div></div>
  </div></div>
  <style type="text/css">
  @keyframes ldio-wst4pcb20f8-1 {
    0% { top: 57.13px; height: 82.74px }
    50% { top: 68.95px; height: 59.1px }
    100% { top: 68.95px; height: 59.1px }
  }
  @keyframes ldio-wst4pcb20f8-2 {
    0% { top: 60.08500000000001px; height: 76.82999999999998px }
    50% { top: 68.95px; height: 59.1px }
    100% { top: 68.95px; height: 59.1px }
  }
  @keyframes ldio-wst4pcb20f8-3 {
    0% { top: 63.04px; height: 70.92px }
    50% { top: 68.95px; height: 59.1px }
    100% { top: 68.95px; height: 59.1px }
  }
  .ldio-wst4pcb20f8 div { position: absolute; width: 27.58px }.ldio-wst4pcb20f8 div:nth-child(1) {
    left: 35.46px;
    background: #1d3f72;
    animation: ldio-wst4pcb20f8-1 0.9345794392523364s cubic-bezier(0,0.5,0.5,1) infinite;
    animation-delay: -0.18691588785046728s
  }
  .ldio-wst4pcb20f8 div:nth-child(2) {
    left: 84.71px;
    background: #5699d2;
    animation: ldio-wst4pcb20f8-2 0.9345794392523364s cubic-bezier(0,0.5,0.5,1) infinite;
    animation-delay: -0.09345794392523364s
  }
  .ldio-wst4pcb20f8 div:nth-child(3) {
    left: 133.96px;
    background: #d8ebf9;
    animation: ldio-wst4pcb20f8-3 0.9345794392523364s cubic-bezier(0,0.5,0.5,1) infinite;
    animation-delay: undefineds
  }

  .loadingio-spinner-pulse-kznbmpg29hk {
    width: 197px;
    height: 197px;
    display: inline-block;
    overflow: hidden;
    background: none;
  }
  .ldio-wst4pcb20f8 {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
  }
  .ldio-wst4pcb20f8 div { box-sizing: content-box; }
  /* generated by https://loading.io/ */
  </style>
  `
}

function removePreloader() {
  document.getElementById('preload').innerHTML = "";
}