const products = [
  {
    name: 'Sorte A',
    thc: 20,
    cbd: 1,
    description: 'Klassische Hybridsorte mit ausgewogenem Wirkungsspektrum.'
  },
  {
    name: 'Sorte B',
    thc: 15,
    cbd: 5,
    description: 'Milderes Produkt, wird oft zur leichten Entspannung genutzt.'
  },
  {
    name: 'Sorte C',
    thc: 10,
    cbd: 12,
    description: 'CBD-reich, beliebt zur Linderung von Entzündungen.'
  },
  {
    name: 'Amnesia Haze',
    thc: 22,
    cbd: 1,
    description: 'Energetische Sorte, häufig gegen Müdigkeit eingesetzt.'
  },
  {
    name: 'Northern Lights',
    thc: 18,
    cbd: 2,
    description: 'Bekannt für beruhigende Wirkung, ideal zum Entspannen am Abend.'
  },
  {
    name: "Charlotte's Web",
    thc: 1,
    cbd: 15,
    description: 'Speziell für medizinische Zwecke gezüchtet, z. B. bei Epilepsie.'
  }
];

function renderProducts(list) {
  const container = document.getElementById('product-list');
  container.innerHTML = '';
  list.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `<h2>${p.name}</h2><p>${p.description}</p><p>THC: ${p.thc}%</p><p>CBD: ${p.cbd}%</p>`;
    container.appendChild(div);
  });
}

document.getElementById('search-input').addEventListener('input', e => {
  const term = e.target.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(term));
  renderProducts(filtered);
});

function showSection(id) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(sec => {
    sec.hidden = sec.id !== id;
  });
}

function setupNavigation() {
  const menuButtons = document.querySelectorAll('#main-menu button');
  const backButtons = document.querySelectorAll('.back-button');

  menuButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      showSection(btn.dataset.target);
    });
  });

  backButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      showSection('menu-section');
    });
  });
}

window.addEventListener('load', () => {
  renderProducts(products);
  setupNavigation();
  showSection('menu-section');
});
