const appsScriptUrl = "https://script.google.com/macros/s/AKfycb.../exec"; // la teva URL

function actualitzarDades() {
  fetch(appsScriptUrl)
    .then(res => res.json())
    .then(data => {
      document.getElementById("temp").innerText = data.temperatura;
      document.getElementById("llum").innerText = data.llum;
    })
    .catch(err => console.error("Error en rebre dades de la Sheet:", err));
}
