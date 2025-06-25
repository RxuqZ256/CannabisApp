const products = [
  {
    "name": "Amnesia Haze",
    "thc": 18,
    "cbd": 2,
    "description": "beliebt für entspannende Wirkung."
  },
  {
    "name": "Northern Lights",
    "thc": 21,
    "cbd": 2,
    "description": "wird häufig gegen Stress eingesetzt."
  },
  {
    "name": "Charlotte's Web",
    "thc": 22,
    "cbd": 1,
    "description": "geeignet für kreative Phasen."
  },
  {
    "name": "OG Kush",
    "thc": 20,
    "cbd": 4,
    "description": "hat ein fruchtiges Aroma."
  },
  {
    "name": "Sour Diesel",
    "thc": 24,
    "cbd": 5,
    "description": "ideal für medizinische Anwendungen."
  },
  {
    "name": "Blue Dream",
    "thc": 25,
    "cbd": 3,
    "description": "wirkt stark euphorisierend."
  },
  {
    "name": "White Widow",
    "thc": 15,
    "cbd": 3,
    "description": "bietet ausgewogene Effekte."
  },
  {
    "name": "Girl Scout Cookies",
    "thc": 16,
    "cbd": 2,
    "description": "besonders für erfahrene Nutzer empfohlen."
  },
  {
    "name": "Jack Herer",
    "thc": 17,
    "cbd": 2,
    "description": "hoher CBD-Gehalt, mild in der Wirkung."
  },
  {
    "name": "AK-47",
    "thc": 20,
    "cbd": 2,
    "description": "klassische Sorte für jeden Anlass."
  },
  {
    "name": "Pineapple Express",
    "thc": 22,
    "cbd": 5,
    "description": "beliebt für entspannende Wirkung."
  },
  {
    "name": "Blueberry",
    "thc": 24,
    "cbd": 1,
    "description": "wird häufig gegen Stress eingesetzt."
  },
  {
    "name": "Green Crack",
    "thc": 20,
    "cbd": 0,
    "description": "geeignet für kreative Phasen."
  },
  {
    "name": "Purple Haze",
    "thc": 17,
    "cbd": 4,
    "description": "hat ein fruchtiges Aroma."
  },
  {
    "name": "Super Lemon Haze",
    "thc": 24,
    "cbd": 4,
    "description": "ideal für medizinische Anwendungen."
  },
  {
    "name": "Durban Poison",
    "thc": 20,
    "cbd": 5,
    "description": "wirkt stark euphorisierend."
  },
  {
    "name": "Skunk #1",
    "thc": 17,
    "cbd": 3,
    "description": "bietet ausgewogene Effekte."
  },
  {
    "name": "Trainwreck",
    "thc": 17,
    "cbd": 4,
    "description": "besonders für erfahrene Nutzer empfohlen."
  },
  {
    "name": "Bubba Kush",
    "thc": 18,
    "cbd": 4,
    "description": "hoher CBD-Gehalt, mild in der Wirkung."
  },
  {
    "name": "Strawberry Cough",
    "thc": 25,
    "cbd": 2,
    "description": "klassische Sorte für jeden Anlass."
  },
  {
    "name": "Tahoe OG",
    "thc": 21,
    "cbd": 4,
    "description": "beliebt für entspannende Wirkung."
  },
  {
    "name": "Granddaddy Purple",
    "thc": 20,
    "cbd": 0,
    "description": "wird häufig gegen Stress eingesetzt."
  },
  {
    "name": "Wedding Cake",
    "thc": 23,
    "cbd": 4,
    "description": "geeignet für kreative Phasen."
  },
  {
    "name": "Gelato",
    "thc": 16,
    "cbd": 0,
    "description": "hat ein fruchtiges Aroma."
  },
  {
    "name": "Gorilla Glue",
    "thc": 16,
    "cbd": 5,
    "description": "ideal für medizinische Anwendungen."
  },
  {
    "name": "Cheese",
    "thc": 20,
    "cbd": 0,
    "description": "wirkt stark euphorisierend."
  },
  {
    "name": "Critical Mass",
    "thc": 16,
    "cbd": 5,
    "description": "bietet ausgewogene Effekte."
  },
  {
    "name": "Lemon Skunk",
    "thc": 22,
    "cbd": 5,
    "description": "besonders für erfahrene Nutzer empfohlen."
  },
  {
    "name": "Mango Kush",
    "thc": 24,
    "cbd": 3,
    "description": "hoher CBD-Gehalt, mild in der Wirkung."
  },
  {
    "name": "Master Kush",
    "thc": 22,
    "cbd": 2,
    "description": "klassische Sorte für jeden Anlass."
  },
  {
    "name": "Maui Wowie",
    "thc": 19,
    "cbd": 3,
    "description": "beliebt für entspannende Wirkung."
  },
  {
    "name": "Banana Kush",
    "thc": 19,
    "cbd": 0,
    "description": "wird häufig gegen Stress eingesetzt."
  },
  {
    "name": "Cherry Pie",
    "thc": 18,
    "cbd": 4,
    "description": "geeignet für kreative Phasen."
  },
  {
    "name": "Candyland",
    "thc": 20,
    "cbd": 3,
    "description": "hat ein fruchtiges Aroma."
  },
  {
    "name": "Harlequin",
    "thc": 17,
    "cbd": 4,
    "description": "ideal für medizinische Anwendungen."
  },
  {
    "name": "Harle-Tsu",
    "thc": 23,
    "cbd": 1,
    "description": "wirkt stark euphorisierend."
  },
  {
    "name": "ACDC",
    "thc": 20,
    "cbd": 3,
    "description": "bietet ausgewogene Effekte."
  },
  {
    "name": "Pennywise",
    "thc": 25,
    "cbd": 1,
    "description": "besonders für erfahrene Nutzer empfohlen."
  },
  {
    "name": "Cheesequake",
    "thc": 24,
    "cbd": 2,
    "description": "hoher CBD-Gehalt, mild in der Wirkung."
  },
  {
    "name": "Chocolope",
    "thc": 20,
    "cbd": 5,
    "description": "klassische Sorte für jeden Anlass."
  },
  {
    "name": "Kosher Kush",
    "thc": 20,
    "cbd": 4,
    "description": "beliebt für entspannende Wirkung."
  },
  {
    "name": "Do-Si-Dos",
    "thc": 17,
    "cbd": 1,
    "description": "wird häufig gegen Stress eingesetzt."
  },
  {
    "name": "Zkittlez",
    "thc": 21,
    "cbd": 3,
    "description": "geeignet für kreative Phasen."
  },
  {
    "name": "White Rhino",
    "thc": 19,
    "cbd": 2,
    "description": "hat ein fruchtiges Aroma."
  },
  {
    "name": "Blue Cheese",
    "thc": 23,
    "cbd": 1,
    "description": "ideal für medizinische Anwendungen."
  },
  {
    "name": "Skywalker OG",
    "thc": 21,
    "cbd": 4,
    "description": "wirkt stark euphorisierend."
  },
  {
    "name": "Sour Tsunami",
    "thc": 21,
    "cbd": 4,
    "description": "bietet ausgewogene Effekte."
  },
  {
    "name": "LA Confidential",
    "thc": 22,
    "cbd": 3,
    "description": "besonders für erfahrene Nutzer empfohlen."
  },
  {
    "name": "God's Gift",
    "thc": 18,
    "cbd": 3,
    "description": "hoher CBD-Gehalt, mild in der Wirkung."
  },
  {
    "name": "Orange Bud",
    "thc": 25,
    "cbd": 4,
    "description": "klassische Sorte für jeden Anlass."
  },
  {
    "name": "Super Silver Haze",
    "thc": 20,
    "cbd": 3,
    "description": "beliebt für entspannende Wirkung."
  },
  {
    "name": "Critical Kush",
    "thc": 19,
    "cbd": 4,
    "description": "wird häufig gegen Stress eingesetzt."
  },
  {
    "name": "Ice Cream Cake",
    "thc": 24,
    "cbd": 3,
    "description": "geeignet für kreative Phasen."
  },
  {
    "name": "Fire OG",
    "thc": 20,
    "cbd": 5,
    "description": "hat ein fruchtiges Aroma."
  },
  {
    "name": "Tangie",
    "thc": 24,
    "cbd": 0,
    "description": "ideal für medizinische Anwendungen."
  },
  {
    "name": "Thin Mint GSC",
    "thc": 25,
    "cbd": 4,
    "description": "wirkt stark euphorisierend."
  },
  {
    "name": "Sunset Sherbet",
    "thc": 23,
    "cbd": 0,
    "description": "bietet ausgewogene Effekte."
  },
  {
    "name": "Forbidden Fruit",
    "thc": 24,
    "cbd": 2,
    "description": "besonders für erfahrene Nutzer empfohlen."
  },
  {
    "name": "Platinum Kush",
    "thc": 19,
    "cbd": 1,
    "description": "hoher CBD-Gehalt, mild in der Wirkung."
  },
  {
    "name": "Alien OG",
    "thc": 18,
    "cbd": 5,
    "description": "klassische Sorte für jeden Anlass."
  },
  {
    "name": "Bruce Banner",
    "thc": 22,
    "cbd": 0,
    "description": "beliebt für entspannende Wirkung."
  },
  {
    "name": "Lemon OG",
    "thc": 17,
    "cbd": 0,
    "description": "wird häufig gegen Stress eingesetzt."
  },
  {
    "name": "Animal Cookies",
    "thc": 22,
    "cbd": 5,
    "description": "geeignet für kreative Phasen."
  },
  {
    "name": "Blackberry Kush",
    "thc": 18,
    "cbd": 0,
    "description": "hat ein fruchtiges Aroma."
  },
  {
    "name": "Big Bud",
    "thc": 21,
    "cbd": 1,
    "description": "ideal für medizinische Anwendungen."
  },
  {
    "name": "Dutch Treat",
    "thc": 19,
    "cbd": 1,
    "description": "wirkt stark euphorisierend."
  },
  {
    "name": "Headband",
    "thc": 18,
    "cbd": 5,
    "description": "bietet ausgewogene Effekte."
  },
  {
    "name": "Jillybean",
    "thc": 16,
    "cbd": 2,
    "description": "besonders für erfahrene Nutzer empfohlen."
  },
  {
    "name": "Mr. Nice",
    "thc": 21,
    "cbd": 1,
    "description": "hoher CBD-Gehalt, mild in der Wirkung."
  },
  {
    "name": "Nebula",
    "thc": 20,
    "cbd": 4,
    "description": "klassische Sorte für jeden Anlass."
  },
  {
    "name": "NYC Diesel",
    "thc": 16,
    "cbd": 3,
    "description": "beliebt für entspannende Wirkung."
  },
  {
    "name": "Power Plant",
    "thc": 24,
    "cbd": 5,
    "description": "wird häufig gegen Stress eingesetzt."
  },
  {
    "name": "Romulan",
    "thc": 23,
    "cbd": 0,
    "description": "geeignet für kreative Phasen."
  },
  {
    "name": "Shiva Skunk",
    "thc": 16,
    "cbd": 5,
    "description": "hat ein fruchtiges Aroma."
  },
  {
    "name": "Snow Leopard",
    "thc": 21,
    "cbd": 5,
    "description": "ideal für medizinische Anwendungen."
  },
  {
    "name": "Strawberry Banana",
    "thc": 25,
    "cbd": 4,
    "description": "wirkt stark euphorisierend."
  },
  {
    "name": "Sweet Tooth",
    "thc": 18,
    "cbd": 3,
    "description": "bietet ausgewogene Effekte."
  },
  {
    "name": "Tangerine Dream",
    "thc": 16,
    "cbd": 3,
    "description": "besonders für erfahrene Nutzer empfohlen."
  },
  {
    "name": "White Fire OG",
    "thc": 24,
    "cbd": 0,
    "description": "hoher CBD-Gehalt, mild in der Wirkung."
  },
  {
    "name": "Yoda OG",
    "thc": 25,
    "cbd": 5,
    "description": "klassische Sorte für jeden Anlass."
  },
  {
    "name": "Afghani",
    "thc": 15,
    "cbd": 1,
    "description": "beliebt für entspannende Wirkung."
  },
  {
    "name": "Critical Jack",
    "thc": 19,
    "cbd": 0,
    "description": "wird häufig gegen Stress eingesetzt."
  },
  {
    "name": "El Chapo",
    "thc": 17,
    "cbd": 2,
    "description": "geeignet für kreative Phasen."
  },
  {
    "name": "Chem Dog",
    "thc": 23,
    "cbd": 0,
    "description": "hat ein fruchtiges Aroma."
  },
  {
    "name": "Hindu Kush",
    "thc": 17,
    "cbd": 5,
    "description": "ideal für medizinische Anwendungen."
  },
  {
    "name": "Island Sweet Skunk",
    "thc": 19,
    "cbd": 0,
    "description": "wirkt stark euphorisierend."
  },
  {
    "name": "Jean Guy",
    "thc": 20,
    "cbd": 1,
    "description": "bietet ausgewogene Effekte."
  },
  {
    "name": "Kandy Kush",
    "thc": 16,
    "cbd": 0,
    "description": "besonders für erfahrene Nutzer empfohlen."
  },
  {
    "name": "Lemon Kush",
    "thc": 19,
    "cbd": 0,
    "description": "hoher CBD-Gehalt, mild in der Wirkung."
  },
  {
    "name": "Mars OG",
    "thc": 19,
    "cbd": 1,
    "description": "klassische Sorte für jeden Anlass."
  },
  {
    "name": "Pineapple Chunk",
    "thc": 18,
    "cbd": 2,
    "description": "beliebt für entspannende Wirkung."
  },
  {
    "name": "Quantum Kush",
    "thc": 20,
    "cbd": 2,
    "description": "wird häufig gegen Stress eingesetzt."
  },
  {
    "name": "Red Dragon",
    "thc": 20,
    "cbd": 2,
    "description": "geeignet für kreative Phasen."
  },
  {
    "name": "Super Skunk",
    "thc": 17,
    "cbd": 5,
    "description": "hat ein fruchtiges Aroma."
  },
  {
    "name": "Trinity",
    "thc": 19,
    "cbd": 4,
    "description": "ideal für medizinische Anwendungen."
  },
  {
    "name": "White Russian",
    "thc": 18,
    "cbd": 2,
    "description": "wirkt stark euphorisierend."
  },
  {
    "name": "Yumboldt",
    "thc": 25,
    "cbd": 1,
    "description": "bietet ausgewogene Effekte."
  },
  {
    "name": "Zeus OG",
    "thc": 24,
    "cbd": 0,
    "description": "besonders für erfahrene Nutzer empfohlen."
  },
  {
    "name": "Chernobyl",
    "thc": 25,
    "cbd": 1,
    "description": "hoher CBD-Gehalt, mild in der Wirkung."
  },
  {
    "name": "Grape Ape",
    "thc": 20,
    "cbd": 3,
    "description": "klassische Sorte für jeden Anlass."
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
