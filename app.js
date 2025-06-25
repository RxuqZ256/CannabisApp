const products = [
  {
    name: 'Amnesia Haze',
    thc: 22,
    cbd: 1,
    description: 'Energetische Sorte, h\u00e4ufig gegen M\u00fcdigkeit eingesetzt.'
  },
  {
    name: 'Northern Lights',
    thc: 18,
    cbd: 2,
    description: 'Bekannt f\u00fcr beruhigende Wirkung, ideal zum Entspannen am Abend.'
  },
  {
    name: "Charlotte's Web",
    thc: 1,
    cbd: 15,
    description: 'Speziell f\u00fcr medizinische Zwecke gez\u00fcchtet, z. B. bei Epilepsie.'
  },
  {
    name: 'Blue Dream',
    thc: 17,
    cbd: 2,
    description: 'Ber\u00fchmte kalifornische Sorte mit ausgeglichenem High.'
  },
  {
    name: 'Super Lemon Haze',
    thc: 20,
    cbd: 1,
    description: 'Fruchtig-zitroniges Aroma und anregende Wirkung.'
  },
  {
    name: 'White Widow',
    thc: 19,
    cbd: 1,
    description: 'Klassiker aus den 90ern, sorgt f\u00fcr ausgeglichene Effekte.'
  },
  {
    name: 'Purple Kush',
    thc: 21,
    cbd: 0,
    description: 'Reine Indica-Sorte, bekannt f\u00fcr tief entspannende Wirkung.'
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

function setupNavigation() {
  const buttons = document.querySelectorAll('button[data-target]');
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
