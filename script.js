// Navigasi antar halaman
document.querySelectorAll("header nav ul li a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = e.target.getAttribute("href");
    
    document.querySelectorAll(".page").forEach((page) => {
      page.classList.add("hidden");
    });
    document.querySelector(targetId).classList.remove("hidden");

    document.querySelectorAll("header nav ul li a").forEach((a) => {
      a.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

// Simulasi Perhitungan
const simulationForm = document.getElementById("simulationForm");
const resultElement = document.getElementById("result");

simulationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const area = parseFloat(document.getElementById("area").value);
  const thickness = parseFloat(document.getElementById("thickness").value);
  const porosity = parseFloat(document.getElementById("porosity").value) / 100;

  if (isNaN(area) || isNaN(thickness) || isNaN(porosity) || area <= 0 || thickness <= 0 || porosity <= 0) {
    resultElement.textContent = "Harap masukkan angka positif yang valid.";
    return;
  }

  const volume = area * thickness * porosity;
  resultElement.textContent = `Volume Minyak dalam Reservoir: ${volume.toFixed(2)} m³`;
});

// Feedback Form
feedbackForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !message) {
    alert("Harap isi semua field dengan benar!");
    return;
  }

  const listItem = document.createElement("li");
  listItem.textContent = `${name}: ${message}`;
  feedbackList.appendChild(listItem);

  feedbackForm.reset();
});

