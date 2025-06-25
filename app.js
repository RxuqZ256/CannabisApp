const products = [
  { name: 'Sorte A', thc: 20, cbd: 1 },
  { name: 'Sorte B', thc: 15, cbd: 5 },
  { name: 'Sorte C', thc: 10, cbd: 12 }
];

function renderProducts(list) {
  const container = document.getElementById('product-list');
  container.innerHTML = '';
  list.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `<h2>${p.name}</h2><p>THC: ${p.thc}%</p><p>CBD: ${p.cbd}%</p>`;
    container.appendChild(div);
  });
}

document.getElementById('search-input').addEventListener('input', e => {
  const term = e.target.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(term));
  renderProducts(filtered);
});

function setupNavigation() {
  const buttons = document.querySelectorAll('#main-menu button');
  const sections = document.querySelectorAll('.content-section');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      sections.forEach(sec => {
        sec.hidden = sec.id !== btn.dataset.target;
      });
    });
  });
}

window.addEventListener('load', () => {
  renderProducts(products);
  setupNavigation();
});
