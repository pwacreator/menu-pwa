const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const data = {
  1: {
    title: "Thema 1",
    description: "Ausführliche Informationen zu Thema 1.",
  },
  2: {
    title: "Thema 2",
    description: "Details und Hintergrundinfos zu Thema 2.",
  },
  3: {
    title: "Thema 3",
    description: "Alles Wichtige über Thema 3.",
  },
};

if (data[id]) {
  document.getElementById("title").textContent = data[id].title;
  document.getElementById("description").textContent = data[id].description;
} else {
  document.getElementById("title").textContent = "Nicht gefunden";
}
