const products = [
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
  },
  {
    name: 'Blue Dream',
    thc: 17,
    cbd: 2,
    description: 'Berühmte kalifornische Sorte mit ausgeglichenem High.'
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
    description: 'Klassiker aus den 90ern, sorgt für ausgeglichene Effekte.'
  },
  {
    name: 'Purple Kush',
    thc: 21,
    cbd: 0,
    description: 'Reine Indica-Sorte, bekannt für tief entspannende Wirkung.'
  },
  {
    name: 'OG Kush',
    thc: 16,
    cbd: 1,
    description: 'Starkes Aroma, häufig am Abend genutzt.'
  },
  {
    name: 'AK-47',
    thc: 17,
    cbd: 2,
    description: 'Fruchtiger Geschmack, liefert ausgeglichenes High.'
  },
  {
    name: 'Jack Herer',
    thc: 18,
    cbd: 0,
    description: 'Klassischer Strain mit typischem Cannabis-Duft.'
  },
  {
    name: 'White Russian',
    thc: 19,
    cbd: 1,
    description: 'Ergibt anregende Effekte und eignet sich für tagsüber.'
  },
  {
    name: 'Orange Bud',
    thc: 20,
    cbd: 2,
    description: 'Bekannt für hohen THC-Gehalt und intensives High.'
  },
  {
    name: 'Skunk #1',
    thc: 21,
    cbd: 0,
    description: 'Milder Geschmack und sanfte, beruhigende Wirkung.'
  },
  {
    name: 'Pineapple Express',
    thc: 22,
    cbd: 1,
    description: 'Sorgt für kreativen Energieschub.'
  },
  {
    name: 'Girl Scout Cookies',
    thc: 23,
    cbd: 2,
    description: 'Häufig für medizinische Zwecke eingesetzt.'
  },
  {
    name: 'Trainwreck',
    thc: 24,
    cbd: 0,
    description: 'Berühmt für sein süßes Aroma und entspannende Effekte.'
  },
  {
    name: 'Green Crack',
    thc: 15,
    cbd: 1,
    description: 'Beliebte Sorte mit entspannender Wirkung.'
  },
  {
    name: 'Strawberry Cough',
    thc: 16,
    cbd: 2,
    description: 'Starkes Aroma, häufig am Abend genutzt.'
  },
  {
    name: 'Banana Kush',
    thc: 17,
    cbd: 0,
    description: 'Fruchtiger Geschmack, liefert ausgeglichenes High.'
  },
  {
    name: 'Blackberry Kush',
    thc: 18,
    cbd: 1,
    description: 'Klassischer Strain mit typischem Cannabis-Duft.'
  },
  {
    name: 'Durban Poison',
    thc: 19,
    cbd: 2,
    description: 'Ergibt anregende Effekte und eignet sich für tagsüber.'
  },
  {
    name: 'Master Kush',
    thc: 20,
    cbd: 0,
    description: 'Bekannt für hohen THC-Gehalt und intensives High.'
  },
  {
    name: 'Afghan Kush',
    thc: 21,
    cbd: 1,
    description: 'Milder Geschmack und sanfte, beruhigende Wirkung.'
  },
  {
    name: 'Chemdawg',
    thc: 22,
    cbd: 2,
    description: 'Sorgt für kreativen Energieschub.'
  },
  {
    name: 'OG Diesel',
    thc: 23,
    cbd: 0,
    description: 'Häufig für medizinische Zwecke eingesetzt.'
  },
  {
    name: 'Bubba Kush',
    thc: 24,
    cbd: 1,
    description: 'Berühmt für sein süßes Aroma und entspannende Effekte.'
  },
  {
    name: 'Lemon Skunk',
    thc: 15,
    cbd: 2,
    description: 'Beliebte Sorte mit entspannender Wirkung.'
  },
  {
    name: 'Sour Diesel',
    thc: 16,
    cbd: 0,
    description: 'Starkes Aroma, häufig am Abend genutzt.'
  },
  {
    name: 'Purple Haze',
    thc: 17,
    cbd: 1,
    description: 'Fruchtiger Geschmack, liefert ausgeglichenes High.'
  },
  {
    name: 'Cherry Pie',
    thc: 18,
    cbd: 2,
    description: 'Klassischer Strain mit typischem Cannabis-Duft.'
  },
  {
    name: 'Godfather OG',
    thc: 19,
    cbd: 0,
    description: 'Ergibt anregende Effekte und eignet sich für tagsüber.'
  },
  {
    name: 'Bruce Banner',
    thc: 20,
    cbd: 1,
    description: 'Bekannt für hohen THC-Gehalt und intensives High.'
  },
  {
    name: 'Wedding Cake',
    thc: 21,
    cbd: 2,
    description: 'Milder Geschmack und sanfte, beruhigende Wirkung.'
  },
  {
    name: 'Gelato',
    thc: 22,
    cbd: 0,
    description: 'Sorgt für kreativen Energieschub.'
  },
  {
    name: 'Zkittlez',
    thc: 23,
    cbd: 1,
    description: 'Häufig für medizinische Zwecke eingesetzt.'
  },
  {
    name: 'Critical Mass',
    thc: 24,
    cbd: 2,
    description: 'Berühmt für sein süßes Aroma und entspannende Effekte.'
  },
  {
    name: 'Mango Haze',
    thc: 15,
    cbd: 0,
    description: 'Beliebte Sorte mit entspannender Wirkung.'
  },
  {
    name: 'Apple Fritter',
    thc: 16,
    cbd: 1,
    description: 'Starkes Aroma, häufig am Abend genutzt.'
  },
  {
    name: 'Blue Cheese',
    thc: 17,
    cbd: 2,
    description: 'Fruchtiger Geschmack, liefert ausgeglichenes High.'
  },
  {
    name: 'Orange Cookies',
    thc: 18,
    cbd: 0,
    description: 'Klassischer Strain mit typischem Cannabis-Duft.'
  },
  {
    name: 'Lava Cake',
    thc: 19,
    cbd: 1,
    description: 'Ergibt anregende Effekte und eignet sich für tagsüber.'
  },
  {
    name: 'Ice Cream Cake',
    thc: 20,
    cbd: 2,
    description: 'Bekannt für hohen THC-Gehalt und intensives High.'
  },
  {
    name: 'Banana Split',
    thc: 21,
    cbd: 0,
    description: 'Milder Geschmack und sanfte, beruhigende Wirkung.'
  },
  {
    name: 'Strawberry Banana',
    thc: 22,
    cbd: 1,
    description: 'Sorgt für kreativen Energieschub.'
  },
  {
    name: 'Tangerine Dream',
    thc: 23,
    cbd: 2,
    description: 'Häufig für medizinische Zwecke eingesetzt.'
  },
  {
    name: 'Lemon OG',
    thc: 24,
    cbd: 0,
    description: 'Berühmt für sein süßes Aroma und entspannende Effekte.'
  },
  {
    name: 'Purple Urkle',
    thc: 15,
    cbd: 1,
    description: 'Beliebte Sorte mit entspannender Wirkung.'
  },
  {
    name: 'Grape Ape',
    thc: 16,
    cbd: 2,
    description: 'Starkes Aroma, häufig am Abend genutzt.'
  },
  {
    name: 'Sour OG',
    thc: 17,
    cbd: 0,
    description: 'Fruchtiger Geschmack, liefert ausgeglichenes High.'
  },
  {
    name: 'Cookie Monster',
    thc: 18,
    cbd: 1,
    description: 'Klassischer Strain mit typischem Cannabis-Duft.'
  },
  {
    name: 'Do-Si-Dos',
    thc: 19,
    cbd: 2,
    description: 'Ergibt anregende Effekte und eignet sich für tagsüber.'
  },
  {
    name: 'Skywalker OG',
    thc: 20,
    cbd: 0,
    description: 'Bekannt für hohen THC-Gehalt und intensives High.'
  },
  {
    name: 'Vanilla Kush',
    thc: 21,
    cbd: 1,
    description: 'Milder Geschmack und sanfte, beruhigende Wirkung.'
  },
  {
    name: 'Romulan',
    thc: 22,
    cbd: 2,
    description: 'Sorgt für kreativen Energieschub.'
  },
  {
    name: 'Chocolate Thai',
    thc: 23,
    cbd: 0,
    description: 'Häufig für medizinische Zwecke eingesetzt.'
  },
  {
    name: 'Alien OG',
    thc: 24,
    cbd: 1,
    description: 'Berühmt für sein süßes Aroma und entspannende Effekte.'
  },
  {
    name: 'God Bud',
    thc: 15,
    cbd: 2,
    description: 'Beliebte Sorte mit entspannender Wirkung.'
  },
  {
    name: 'Headband',
    thc: 16,
    cbd: 0,
    description: 'Starkes Aroma, häufig am Abend genutzt.'
  },
  {
    name: 'Cheese',
    thc: 17,
    cbd: 1,
    description: 'Fruchtiger Geschmack, liefert ausgeglichenes High.'
  },
  {
    name: 'NYC Diesel',
    thc: 18,
    cbd: 2,
    description: 'Klassischer Strain mit typischem Cannabis-Duft.'
  },
  {
    name: 'Kosher Kush',
    thc: 19,
    cbd: 0,
    description: 'Ergibt anregende Effekte und eignet sich für tagsüber.'
  },
  {
    name: 'Moby Dick',
    thc: 20,
    cbd: 1,
    description: 'Bekannt für hohen THC-Gehalt und intensives High.'
  },
  {
    name: 'Thai Stick',
    thc: 21,
    cbd: 2,
    description: 'Milder Geschmack und sanfte, beruhigende Wirkung.'
  },
  {
    name: 'Hash Plant',
    thc: 22,
    cbd: 0,
    description: 'Sorgt für kreativen Energieschub.'
  },
  {
    name: 'Golden Goat',
    thc: 23,
    cbd: 1,
    description: 'Häufig für medizinische Zwecke eingesetzt.'
  },
  {
    name: 'Cherry Diesel',
    thc: 24,
    cbd: 2,
    description: 'Berühmt für sein süßes Aroma und entspannende Effekte.'
  },
  {
    name: 'Jillybean',
    thc: 15,
    cbd: 0,
    description: 'Beliebte Sorte mit entspannender Wirkung.'
  },
  {
    name: 'LA Confidential',
    thc: 16,
    cbd: 1,
    description: 'Starkes Aroma, häufig am Abend genutzt.'
  },
  {
    name: 'Kushberry',
    thc: 17,
    cbd: 2,
    description: 'Fruchtiger Geschmack, liefert ausgeglichenes High.'
  },
  {
    name: 'Pineapple Chunk',
    thc: 18,
    cbd: 0,
    description: 'Klassischer Strain mit typischem Cannabis-Duft.'
  },
  {
    name: 'Runtz',
    thc: 19,
    cbd: 1,
    description: 'Ergibt anregende Effekte und eignet sich für tagsüber.'
  },
  {
    name: 'Meat Breath',
    thc: 20,
    cbd: 2,
    description: 'Bekannt für hohen THC-Gehalt und intensives High.'
  },
  {
    name: 'Peanut Butter Breath',
    thc: 21,
    cbd: 0,
    description: 'Milder Geschmack und sanfte, beruhigende Wirkung.'
  },
  {
    name: 'Slurricane',
    thc: 22,
    cbd: 1,
    description: 'Sorgt für kreativen Energieschub.'
  },
  {
    name: 'Wedding Crasher',
    thc: 23,
    cbd: 2,
    description: 'Häufig für medizinische Zwecke eingesetzt.'
  },
  {
    name: 'Lemon Pie',
    thc: 24,
    cbd: 0,
    description: 'Berühmt für sein süßes Aroma und entspannende Effekte.'
  },
  {
    name: 'Critical Kush',
    thc: 15,
    cbd: 1,
    description: 'Beliebte Sorte mit entspannender Wirkung.'
  },
  {
    name: 'Dark Star',
    thc: 16,
    cbd: 2,
    description: 'Starkes Aroma, häufig am Abend genutzt.'
  },
  {
    name: 'Forbidden Fruit',
    thc: 17,
    cbd: 0,
    description: 'Fruchtiger Geschmack, liefert ausgeglichenes High.'
  },
  {
    name: 'Gelato #33',
    thc: 18,
    cbd: 1,
    description: 'Klassischer Strain mit typischem Cannabis-Duft.'
  },
  {
    name: 'Gelato #45',
    thc: 19,
    cbd: 2,
    description: 'Ergibt anregende Effekte und eignet sich für tagsüber.'
  },
  {
    name: 'God’s Gift',
    thc: 20,
    cbd: 0,
    description: 'Bekannt für hohen THC-Gehalt und intensives High.'
  },
  {
    name: 'G13',
    thc: 21,
    cbd: 1,
    description: 'Milder Geschmack und sanfte, beruhigende Wirkung.'
  },
  {
    name: 'Jet Fuel',
    thc: 22,
    cbd: 2,
    description: 'Sorgt für kreativen Energieschub.'
  },
  {
    name: 'Kryptonite',
    thc: 23,
    cbd: 0,
    description: 'Häufig für medizinische Zwecke eingesetzt.'
  },
  {
    name: 'Lemon Diesel',
    thc: 24,
    cbd: 1,
    description: 'Berühmt für sein süßes Aroma und entspannende Effekte.'
  },
  {
    name: 'Mimosa',
    thc: 15,
    cbd: 2,
    description: 'Beliebte Sorte mit entspannender Wirkung.'
  },
  {
    name: 'Moonrocks',
    thc: 16,
    cbd: 0,
    description: 'Starkes Aroma, häufig am Abend genutzt.'
  },
  {
    name: 'Orange Velvet',
    thc: 17,
    cbd: 1,
    description: 'Fruchtiger Geschmack, liefert ausgeglichenes High.'
  },
  {
    name: 'Pink Kush',
    thc: 18,
    cbd: 2,
    description: 'Klassischer Strain mit typischem Cannabis-Duft.'
  },
  {
    name: 'Quantum Kush',
    thc: 19,
    cbd: 0,
    description: 'Ergibt anregende Effekte und eignet sich für tagsüber.'
  },
  {
    name: 'Rainbow Kush',
    thc: 20,
    cbd: 1,
    description: 'Bekannt für hohen THC-Gehalt und intensives High.'
  },
  {
    name: 'Red Diesel',
    thc: 21,
    cbd: 2,
    description: 'Milder Geschmack und sanfte, beruhigende Wirkung.'
  },
  {
    name: 'Rockstar',
    thc: 22,
    cbd: 0,
    description: 'Sorgt für kreativen Energieschub.'
  },
  {
    name: 'Space Queen',
    thc: 23,
    cbd: 1,
    description: 'Häufig für medizinische Zwecke eingesetzt.'
  },
  {
    name: 'Super Silver Haze',
    thc: 24,
    cbd: 2,
    description: 'Berühmt für sein süßes Aroma und entspannende Effekte.'
  },
  {
    name: 'Tahoe OG',
    thc: 15,
    cbd: 0,
    description: 'Beliebte Sorte mit entspannender Wirkung.'
  },
  {
    name: 'White Fire OG',
    thc: 16,
    cbd: 1,
    description: 'Starkes Aroma, häufig am Abend genutzt.'
  },
  {
    name: 'White Rhino',
    thc: 17,
    cbd: 2,
    description: 'Fruchtiger Geschmack, liefert ausgeglichenes High.'
  },
  {
    name: 'Yoda OG',
    thc: 18,
    cbd: 0,
    description: 'Klassischer Strain mit typischem Cannabis-Duft.'
  },
  {
    name: '9 Pound Hammer',
    thc: 19,
    cbd: 1,
    description: 'Ergibt anregende Effekte und eignet sich für tagsüber.'
  },
  {
    name: 'Animal Cookies',
    thc: 20,
    cbd: 2,
    description: 'Bekannt für hohen THC-Gehalt und intensives High.'
  },
  {
    name: 'Banana Cream',
    thc: 21,
    cbd: 0,
    description: 'Milder Geschmack und sanfte, beruhigende Wirkung.'
  },
  {
    name: 'Blueberry',
    thc: 22,
    cbd: 1,
    description: 'Sorgt für kreativen Energieschub.'
  },
  {
    name: 'Candyland',
    thc: 23,
    cbd: 2,
    description: 'Häufig für medizinische Zwecke eingesetzt.'
  },
  {
    name: 'Death Star',
    thc: 24,
    cbd: 0,
    description: 'Berühmt für sein süßes Aroma und entspannende Effekte.'
  },
  {
    name: 'Double Dream',
    thc: 15,
    cbd: 1,
    description: 'Beliebte Sorte mit entspannender Wirkung.'
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
