const products = [
  {
    name: 'Amnesia Haze',
    thc: 22,
    cbd: 1,
    description: 'Energetische Sorte, häufig gegen Müdigkeit eingesetzt.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Northern Lights',
    thc: 18,
    cbd: 2,
    description: 'Bekannt für beruhigende Wirkung, ideal zum Entspannen am Abend.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: "Charlotte's Web",
    thc: 1,
    cbd: 15,
    description: 'Speziell für medizinische Zwecke gezüchtet, z. B. bei Epilepsie.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Blue Dream',
    thc: 17,
    cbd: 2,
    description: 'Berühmte kalifornische Sorte mit ausgeglichenem High.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Super Lemon Haze',
    thc: 20,
    cbd: 1,
    description: 'Fruchtig-zitroniges Aroma und anregende Wirkung.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'White Widow',
    thc: 19,
    cbd: 1,
    description: 'Klassiker aus den 90ern, sorgt für ausgeglichene Effekte.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Purple Kush',
    thc: 21,
    cbd: 0,
    description: 'Reine Indica-Sorte, bekannt für tief entspannende Wirkung.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'OG Kush',
    thc: 16,
    cbd: 1,
    description: 'Starkes Aroma, häufig am Abend genutzt.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'AK-47',
    thc: 17,
    cbd: 2,
    description: 'Fruchtiger Geschmack, liefert ausgeglichenes High.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Jack Herer',
    thc: 18,
    cbd: 0,
    description: 'Klassischer Strain mit typischem Cannabis-Duft.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'White Russian',
    thc: 19,
    cbd: 1,
    description: 'Ergibt anregende Effekte und eignet sich für tagsüber.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Orange Bud',
    thc: 20,
    cbd: 2,
    description: 'Bekannt für hohen THC-Gehalt und intensives High.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Skunk #1',
    thc: 21,
    cbd: 0,
    description: 'Milder Geschmack und sanfte, beruhigende Wirkung.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Pineapple Express',
    thc: 22,
    cbd: 1,
    description: 'Sorgt für kreativen Energieschub.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Girl Scout Cookies',
    thc: 23,
    cbd: 2,
    description: 'Häufig für medizinische Zwecke eingesetzt.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Trainwreck',
    thc: 24,
    cbd: 0,
    description: 'Berühmt für sein süßes Aroma und entspannende Effekte.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Green Crack',
    thc: 15,
    cbd: 1,
    description: 'Beliebte Sorte mit entspannender Wirkung.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Strawberry Cough',
    thc: 16,
    cbd: 2,
    description: 'Starkes Aroma, häufig am Abend genutzt.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Banana Kush',
    thc: 17,
    cbd: 0,
    description: 'Fruchtiger Geschmack, liefert ausgeglichenes High.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Blackberry Kush',
    thc: 18,
    cbd: 1,
    description: 'Klassischer Strain mit typischem Cannabis-Duft.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Durban Poison',
    thc: 19,
    cbd: 2,
    description: 'Ergibt anregende Effekte und eignet sich für tagsüber.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Master Kush',
    thc: 20,
    cbd: 0,
    description: 'Bekannt für hohen THC-Gehalt und intensives High.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Afghan Kush',
    thc: 21,
    cbd: 1,
    description: 'Milder Geschmack und sanfte, beruhigende Wirkung.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Chemdawg',
    thc: 22,
    cbd: 2,
    description: 'Sorgt für kreativen Energieschub.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'OG Diesel',
    thc: 23,
    cbd: 0,
    description: 'Häufig für medizinische Zwecke eingesetzt.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Bubba Kush',
    thc: 24,
    cbd: 1,
    description: 'Berühmt für sein süßes Aroma und entspannende Effekte.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Lemon Skunk',
    thc: 15,
    cbd: 2,
    description: 'Beliebte Sorte mit entspannender Wirkung.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Sour Diesel',
    thc: 16,
    cbd: 0,
    description: 'Starkes Aroma, häufig am Abend genutzt.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Purple Haze',
    thc: 17,
    cbd: 1,
    description: 'Fruchtiger Geschmack, liefert ausgeglichenes High.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Cherry Pie',
    thc: 18,
    cbd: 2,
    description: 'Klassischer Strain mit typischem Cannabis-Duft.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Godfather OG',
    thc: 19,
    cbd: 0,
    description: 'Ergibt anregende Effekte und eignet sich für tagsüber.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Bruce Banner',
    thc: 20,
    cbd: 1,
    description: 'Bekannt für hohen THC-Gehalt und intensives High.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Wedding Cake',
    thc: 21,
    cbd: 2,
    description: 'Milder Geschmack und sanfte, beruhigende Wirkung.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Gelato',
    thc: 22,
    cbd: 0,
    description: 'Sorgt für kreativen Energieschub.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Zkittlez',
    thc: 23,
    cbd: 1,
    description: 'Häufig für medizinische Zwecke eingesetzt.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Critical Mass',
    thc: 24,
    cbd: 2,
    description: 'Berühmt für sein süßes Aroma und entspannende Effekte.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Mango Haze',
    thc: 15,
    cbd: 0,
    description: 'Beliebte Sorte mit entspannender Wirkung.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Apple Fritter',
    thc: 16,
    cbd: 1,
    description: 'Starkes Aroma, häufig am Abend genutzt.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Blue Cheese',
    thc: 17,
    cbd: 2,
    description: 'Fruchtiger Geschmack, liefert ausgeglichenes High.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Orange Cookies',
    thc: 18,
    cbd: 0,
    description: 'Klassischer Strain mit typischem Cannabis-Duft.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Lava Cake',
    thc: 19,
    cbd: 1,
    description: 'Ergibt anregende Effekte und eignet sich für tagsüber.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Ice Cream Cake',
    thc: 20,
    cbd: 2,
    description: 'Bekannt für hohen THC-Gehalt und intensives High.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Banana Split',
    thc: 21,
    cbd: 0,
    description: 'Milder Geschmack und sanfte, beruhigende Wirkung.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Strawberry Banana',
    thc: 22,
    cbd: 1,
    description: 'Sorgt für kreativen Energieschub.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Tangerine Dream',
    thc: 23,
    cbd: 2,
    description: 'Häufig für medizinische Zwecke eingesetzt.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Lemon OG',
    thc: 24,
    cbd: 0,
    description: 'Berühmt für sein süßes Aroma und entspannende Effekte.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Purple Urkle',
    thc: 15,
    cbd: 1,
    description: 'Beliebte Sorte mit entspannender Wirkung.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Grape Ape',
    thc: 16,
    cbd: 2,
    description: 'Starkes Aroma, häufig am Abend genutzt.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Sour OG',
    thc: 17,
    cbd: 0,
    description: 'Fruchtiger Geschmack, liefert ausgeglichenes High.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Cookie Monster',
    thc: 18,
    cbd: 1,
    description: 'Klassischer Strain mit typischem Cannabis-Duft.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Do-Si-Dos',
    thc: 19,
    cbd: 2,
    description: 'Ergibt anregende Effekte und eignet sich für tagsüber.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Skywalker OG',
    thc: 20,
    cbd: 0,
    description: 'Bekannt für hohen THC-Gehalt und intensives High.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Vanilla Kush',
    thc: 21,
    cbd: 1,
    description: 'Milder Geschmack und sanfte, beruhigende Wirkung.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Romulan',
    thc: 22,
    cbd: 2,
    description: 'Sorgt für kreativen Energieschub.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Chocolate Thai',
    thc: 23,
    cbd: 0,
    description: 'Häufig für medizinische Zwecke eingesetzt.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Alien OG',
    thc: 24,
    cbd: 1,
    description: 'Berühmt für sein süßes Aroma und entspannende Effekte.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'God Bud',
    thc: 15,
    cbd: 2,
    description: 'Beliebte Sorte mit entspannender Wirkung.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Headband',
    thc: 16,
    cbd: 0,
    description: 'Starkes Aroma, häufig am Abend genutzt.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Cheese',
    thc: 17,
    cbd: 1,
    description: 'Fruchtiger Geschmack, liefert ausgeglichenes High.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'NYC Diesel',
    thc: 18,
    cbd: 2,
    description: 'Klassischer Strain mit typischem Cannabis-Duft.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Kosher Kush',
    thc: 19,
    cbd: 0,
    description: 'Ergibt anregende Effekte und eignet sich für tagsüber.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Moby Dick',
    thc: 20,
    cbd: 1,
    description: 'Bekannt für hohen THC-Gehalt und intensives High.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Thai Stick',
    thc: 21,
    cbd: 2,
    description: 'Milder Geschmack und sanfte, beruhigende Wirkung.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Hash Plant',
    thc: 22,
    cbd: 0,
    description: 'Sorgt für kreativen Energieschub.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Golden Goat',
    thc: 23,
    cbd: 1,
    description: 'Häufig für medizinische Zwecke eingesetzt.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Cherry Diesel',
    thc: 24,
    cbd: 2,
    description: 'Berühmt für sein süßes Aroma und entspannende Effekte.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Jillybean',
    thc: 15,
    cbd: 0,
    description: 'Beliebte Sorte mit entspannender Wirkung.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'LA Confidential',
    thc: 16,
    cbd: 1,
    description: 'Starkes Aroma, häufig am Abend genutzt.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Kushberry',
    thc: 17,
    cbd: 2,
    description: 'Fruchtiger Geschmack, liefert ausgeglichenes High.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Pineapple Chunk',
    thc: 18,
    cbd: 0,
    description: 'Klassischer Strain mit typischem Cannabis-Duft.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Runtz',
    thc: 19,
    cbd: 1,
    description: 'Ergibt anregende Effekte und eignet sich für tagsüber.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Meat Breath',
    thc: 20,
    cbd: 2,
    description: 'Bekannt für hohen THC-Gehalt und intensives High.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Peanut Butter Breath',
    thc: 21,
    cbd: 0,
    description: 'Milder Geschmack und sanfte, beruhigende Wirkung.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Slurricane',
    thc: 22,
    cbd: 1,
    description: 'Sorgt für kreativen Energieschub.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Wedding Crasher',
    thc: 23,
    cbd: 2,
    description: 'Häufig für medizinische Zwecke eingesetzt.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Lemon Pie',
    thc: 24,
    cbd: 0,
    description: 'Berühmt für sein süßes Aroma und entspannende Effekte.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Critical Kush',
    thc: 15,
    cbd: 1,
    description: 'Beliebte Sorte mit entspannender Wirkung.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Dark Star',
    thc: 16,
    cbd: 2,
    description: 'Starkes Aroma, häufig am Abend genutzt.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Forbidden Fruit',
    thc: 17,
    cbd: 0,
    description: 'Fruchtiger Geschmack, liefert ausgeglichenes High.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Gelato #33',
    thc: 18,
    cbd: 1,
    description: 'Klassischer Strain mit typischem Cannabis-Duft.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Gelato #45',
    thc: 19,
    cbd: 2,
    description: 'Ergibt anregende Effekte und eignet sich für tagsüber.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'God’s Gift',
    thc: 20,
    cbd: 0,
    description: 'Bekannt für hohen THC-Gehalt und intensives High.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'G13',
    thc: 21,
    cbd: 1,
    description: 'Milder Geschmack und sanfte, beruhigende Wirkung.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Jet Fuel',
    thc: 22,
    cbd: 2,
    description: 'Sorgt für kreativen Energieschub.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Kryptonite',
    thc: 23,
    cbd: 0,
    description: 'Häufig für medizinische Zwecke eingesetzt.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Lemon Diesel',
    thc: 24,
    cbd: 1,
    description: 'Berühmt für sein süßes Aroma und entspannende Effekte.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Mimosa',
    thc: 15,
    cbd: 2,
    description: 'Beliebte Sorte mit entspannender Wirkung.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Moonrocks',
    thc: 16,
    cbd: 0,
    description: 'Starkes Aroma, häufig am Abend genutzt.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Orange Velvet',
    thc: 17,
    cbd: 1,
    description: 'Fruchtiger Geschmack, liefert ausgeglichenes High.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Pink Kush',
    thc: 18,
    cbd: 2,
    description: 'Klassischer Strain mit typischem Cannabis-Duft.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Quantum Kush',
    thc: 19,
    cbd: 0,
    description: 'Ergibt anregende Effekte und eignet sich für tagsüber.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Rainbow Kush',
    thc: 20,
    cbd: 1,
    description: 'Bekannt für hohen THC-Gehalt und intensives High.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Red Diesel',
    thc: 21,
    cbd: 2,
    description: 'Milder Geschmack und sanfte, beruhigende Wirkung.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Rockstar',
    thc: 22,
    cbd: 0,
    description: 'Sorgt für kreativen Energieschub.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Space Queen',
    thc: 23,
    cbd: 1,
    description: 'Häufig für medizinische Zwecke eingesetzt.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Super Silver Haze',
    thc: 24,
    cbd: 2,
    description: 'Berühmt für sein süßes Aroma und entspannende Effekte.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Tahoe OG',
    thc: 15,
    cbd: 0,
    description: 'Beliebte Sorte mit entspannender Wirkung.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'White Fire OG',
    thc: 16,
    cbd: 1,
    description: 'Starkes Aroma, häufig am Abend genutzt.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'White Rhino',
    thc: 17,
    cbd: 2,
    description: 'Fruchtiger Geschmack, liefert ausgeglichenes High.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Yoda OG',
    thc: 18,
    cbd: 0,
    description: 'Klassischer Strain mit typischem Cannabis-Duft.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: '9 Pound Hammer',
    thc: 19,
    cbd: 1,
    description: 'Ergibt anregende Effekte und eignet sich für tagsüber.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Animal Cookies',
    thc: 20,
    cbd: 2,
    description: 'Bekannt für hohen THC-Gehalt und intensives High.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Banana Cream',
    thc: 21,
    cbd: 0,
    description: 'Milder Geschmack und sanfte, beruhigende Wirkung.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Blueberry',
    thc: 22,
    cbd: 1,
    description: 'Sorgt für kreativen Energieschub.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Candyland',
    thc: 23,
    cbd: 2,
    description: 'Häufig für medizinische Zwecke eingesetzt.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Death Star',
    thc: 24,
    cbd: 0,
    description: 'Berühmt für sein süßes Aroma und entspannende Effekte.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  },
  {
    name: 'Double Dream',
    thc: 15,
    cbd: 1,
    description: 'Beliebte Sorte mit entspannender Wirkung.'
    type: "Hybrid",
    aroma: "Herb",
    origin: "Unbekannt",
    medicalUses: "Allgemein"
  }
];
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

window.addEventListener('load', () => {
  renderProducts(products);
  setupNavigation();
  const homeButton = document.querySelector('button[data-target="home-section"]');
  if (homeButton) {
    homeButton.classList.add('active');
  }
});
