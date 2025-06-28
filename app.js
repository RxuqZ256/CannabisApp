let products = [];
let zones = [];
let map;
async function loadProducts() {
  try {
    const resp = await fetch("products.json");
    if (!resp.ok) throw new Error("products.json not found");
    products = await resp.json();
  } catch (err) {
    console.error("Fehler beim Laden der Produktdaten:", err);
  }
}

async function loadZones() {
  try {
    const resp = await fetch("zones.json");
    if (!resp.ok) throw new Error("zones.json not found");
    zones = await resp.json();
  } catch (err) {
    console.error("Fehler beim Laden der Zonen:", err);
  }
}

function renderProducts(list) {
  const container = document.getElementById('product-list');
  container.innerHTML = '';
  list.forEach(p => {
    const div = document.createElement('div');
    div.className = 'border rounded-lg p-4 bg-white shadow';
    div.innerHTML = `
      <h2>${p.name}</h2>
      <p>${p.description}</p>
      <p>Typ: ${p.type}</p>
      <p>Aroma: ${p.aroma}</p>
      <p>Herkunft: ${p.origin}</p>
      <p>Medizinische Verwendung: ${p.medicalUses}</p>
      <p>THC: ${p.thc}%</p>
      <p>CBD: ${p.cbd}%</p>`;
    container.appendChild(div);
  });
}

const searchInput = document.getElementById('search-input');
const thcInput = document.getElementById('thc-min');
const cbdInput = document.getElementById('cbd-min');

function applyFilters() {
  const term = searchInput.value.toLowerCase();
  const thcMin = parseFloat(thcInput.value) || 0;
  const cbdMin = parseFloat(cbdInput.value) || 0;

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(term) &&
    p.thc >= thcMin &&
    p.cbd >= cbdMin
  );
  renderProducts(filtered);
}

function initMap() {
  const mapElem = document.getElementById('map');
  if (!mapElem) return;
  map = L.map(mapElem).setView([52.52, 13.405], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  zones.forEach(z => {
    const color = z.allowed ? 'green' : 'red';
    L.circle([z.lat, z.lng], { radius: z.radius, color }).addTo(map)
      .bindPopup(`${z.name} - ${z.allowed ? 'Rauchen erlaubt' : 'Rauchen verboten'}`);
  });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
      const { latitude, longitude } = pos.coords;
      L.marker([latitude, longitude]).addTo(map)
        .bindPopup('Dein Standort').openPopup();
      checkZone(latitude, longitude);
    });
  }
}

function checkZone(lat, lng) {
  const info = document.getElementById('zone-info');
  if (!info) return;
  for (const z of zones) {
    const d = distance(lat, lng, z.lat, z.lng);
    if (d <= z.radius) {
      info.textContent = z.allowed
        ? 'Rauchen ist hier erlaubt.'
        : 'Rauchen ist hier nicht erlaubt.';
      return;
    }
  }
  info.textContent = 'Keine Informationen für diesen Standort.';
}

function distance(lat1, lon1, lat2, lon2) {
  const R = 6371000; // meters
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

searchInput.addEventListener('input', applyFilters);
thcInput.addEventListener('input', applyFilters);
cbdInput.addEventListener('input', applyFilters);

function showSection(id) {
  const buttons = document.querySelectorAll('button[data-target]');
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(sec => {
    sec.hidden = sec.id !== id;
  });
  buttons.forEach(b => {
    const active = b.dataset.target === id;
    b.classList.toggle('bg-blue-700', active);
    b.classList.toggle('text-white', active);
  });
}

function setupNavigation() {
  const buttons = document.querySelectorAll('button[data-target]');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      showSection(btn.dataset.target);
    });
  });
}

window.addEventListener('load', async () => {
  await loadProducts();
  await loadZones();
  renderProducts(products);
  setupNavigation();
  initMap();
  const params = new URLSearchParams(window.location.search);
  const target = params.get('section') || 'home-section';
  showSection(target);
});
