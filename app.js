let products = [];
async function loadProducts() {
  try {
    const resp = await fetch("products.json");
    if (!resp.ok) throw new Error("products.json not found");
    products = await resp.json();
  } catch (err) {
    console.error("Fehler beim Laden der Produktdaten:", err);
  }
}

function renderProducts(list) {
  const container = document.getElementById('product-list');
  container.innerHTML = '';
  list.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product';
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

searchInput.addEventListener('input', applyFilters);
thcInput.addEventListener('input', applyFilters);
cbdInput.addEventListener('input', applyFilters);

function setupNavigation() {
  const buttons = document.querySelectorAll('button[data-target]');
  const sections = document.querySelectorAll('.content-section');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      sections.forEach(sec => {
        sec.hidden = sec.id !== btn.dataset.target;
      });
      buttons.forEach(b => b.classList.toggle('active', b === btn));
    });
  });
}

window.addEventListener('load', async () => {
  await loadProducts();
  renderProducts(products);
  setupNavigation();
  const homeButton = document.querySelector('button[data-target="home-section"]');
  if (homeButton) {
    homeButton.classList.add('active');
  }
});
