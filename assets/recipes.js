/* Alle Rezepte an einem Ort. Neues Rezept: Eintrag in RECIPES ergänzen und die id beim Kapitel eintragen. */
window.CHAPTERS=[
 {
  "id": "fruehstueck",
  "file": "fruehstueck.html",
  "title": "Frühstück",
  "color": "#c98f12",
  "epigraph": "der beste Start in den Tag",
  "intro": "Fünf Rezepte für den Morgen: Menemen, Çilbir, Protein-Pancakes, das cremigste Rührei und ein italienisches Omelett.",
  "recipes": [
   "menemen",
   "cilbir",
   "pancakes",
   "ruehrei",
   "omlett"
  ]
 },
 {
  "id": "suppen",
  "file": "suppen.html",
  "title": "Vorspeisen & Suppen",
  "short": "Suppen",
  "color": "#c0572a",
  "epigraph": "warm, cremig, wärmend",
  "intro": "Vier Suppen für große Töpfe: französische Zwiebelsuppe, Kürbis mit Kokosmilch, geröstete Tomate mit Paprika und Kartoffelcreme mit knusprigem Speck.",
  "recipes": [
   "zwiebel",
   "kuerbis",
   "tomate",
   "kartoffel"
  ]
 },
 {
  "id": "pasta",
  "file": "pasta.html",
  "title": "Pasta",
  "color": "#4f7a36",
  "epigraph": "la mia cucina preferita",
  "intro": "Zwölf Rezepte, von der echten Carbonara ohne Sahne bis zum Ragù, das drei Stunden schmort.",
  "recipes": [
   "vodka",
   "carbonara",
   "toscana",
   "alfredo",
   "lachs",
   "limone",
   "garnelen",
   "kuerbis",
   "rotebete",
   "bolognese",
   "zitronenlachs",
   "cowboy"
  ]
 },
 {
  "id": "fleisch",
  "file": "fleisch.html",
  "title": "Fleisch & Fisch",
  "color": "#a3352a",
  "epigraph": "aus der Pfanne, aus dem Ofen",
  "intro": "Elf Rezepte vom Smash Burger über Zwiebelrostbraten bis zur Moussaka, zum Butter Chicken und einem knusprigen Kartoffel-Lachs-Salat.",
  "recipes": [
   "smash",
   "honeychicken",
   "taco",
   "pesto",
   "chickenparm",
   "rostbraten",
   "lachs",
   "kalorien",
   "moussaka",
   "butterchicken",
   "lachssalat"
  ]
 },
 {
  "id": "beilagen",
  "file": "sonstiges.html",
  "title": "Salat & Beilagen",
  "color": "#587064",
  "epigraph": "das Drumherum",
  "intro": "Spätzle, Kartoffeln auf zwei Arten und zwei Sommersalate. Alles, was den Teller voll macht.",
  "recipes": [
   "spaetzle",
   "smashed",
   "pommes",
   "gurkensalat",
   "avocadosalat"
  ]
 },
 {
  "id": "gebaeck",
  "file": "gebaeck.html",
  "title": "Gebäck",
  "color": "#a8692a",
  "epigraph": "frisch aus dem Ofen",
  "intro": "Zwei Pizzateige, ein türkisches Brot aus der Pfanne und fluffige Nutellabrötchen.",
  "recipes": [
   "pizzaschnell",
   "pizza24h",
   "pfannenbrot",
   "nutella"
  ]
 },
 {
  "id": "kuchen",
  "file": "Kuchen.html",
  "title": "Kuchen & Torten",
  "short": "Kuchen",
  "color": "#6a4677",
  "epigraph": "süß und frisch gebacken",
  "intro": "Fudgy Brownies, American Cookies, Blaubeermuffins und ein Oreo-Cheesecake ganz ohne Ofen.",
  "recipes": [
   "cookies",
   "muffins",
   "brownies",
   "cheesecake"
  ]
 },
 {
  "id": "dessert",
  "file": "dessert.html",
  "title": "Dessert",
  "color": "#a8364f",
  "epigraph": "im Glas serviert",
  "intro": "Zwei Desserts im Glas: Bratapfel für den Winter, Himbeer-Tiramisu für den Sommer.",
  "recipes": [
   "bratapfel",
   "himbeer"
  ]
 }
];

window.RECIPES=[
 {
  "id": "menemen",
  "ch": "fruehstueck",
  "name": "Menemen",
  "script": "türkische eierspeise · suçuk · spitzpaprika",
  "label": "Türkisch · Herzhaft",
  "desc": "Die türkische Pfanneneierspeise mit Spitzpaprika und reifen Tomaten — erinnert mich jedes Mal an frischen Sommer in der Türkei.",
  "time": "20 Min",
  "min": 20,
  "diff": 2,
  "diffLabel": "Leicht",
  "portions": "1-2 Personen",
  "rating": 7,
  "img": "bilder/Fruehstueck_menemen.png",
  "thumb": "bilder/klein/Fruehstueck_menemen.jpg",
  "ings": [
   [
    "2-3",
    "frische Eier"
   ],
   [
    "4 mittelgroße",
    "sehr reife Tomaten (oder aus der Dose)"
   ],
   [
    "1 große",
    "rote Spitzpaprika"
   ],
   [
    "1 mittelgroße",
    "Zwiebel"
   ],
   [
    "etwas",
    "Olivenöl"
   ],
   [
    "2 TL",
    "Salz"
   ],
   [
    "2 TL",
    "Pfeffer aus der Mühle"
   ],
   [
    "1 TL",
    "scharfes Chilipulver"
   ],
   [
    "etwas",
    "Petersiele gehackt"
   ]
  ],
  "steps": [
   [
    "Eier verquirlen",
    "Frische Eier in eine kleine Schüssel aufschlagen und mit einer Gabel verquirlen."
   ],
   [
    "Gemüse vorbereiten",
    "Tomaten und Paprika waschen, entkernen und in Würfel schneiden. Suçuk ebenfalls in Würfel schneiden. Zwiebel fein würfeln."
   ],
   [
    "Gemüse anbraten",
    "Olivenöl in einer Pfanne erhitzen. Anschließend die klein geschnittene Spitzpaprika und die Zwiebel hinzufügen und braten bis die Paprikastückchen bissfest gegart sind. Mit Salz, Pfeffer und Chilipulver würzen."
   ],
   [
    "Tomaten & Eier",
    "Die vorbereiteten Tomaten in die Pfanne geben und bei niedriger Hitze ca. 10–15 Minuten köcheln lassen. Die Herdplatte ausschalten, Pfanne aber auf der warmen Herdplatte stehen lassen. Die verquirlten Eier in die Pfanne mit dem Gemüse geben und alles gut vermischen bis die Eier beginnen zu stocken. Mit etwas Petersiele garnieren."
   ]
  ],
  "notes": [
   "Die große Pfanne mitten auf dem Tisch — alle dippen mit Brot rein. Das ist das echte Menemen-Erlebnis!",
   "Vor allem im Sommer mit frischen, sehr reifen Tomaten unbedingt probieren.",
   "Mit Suçuk ist es eine andere Version — ist genauso gut."
  ]
 },
 {
  "id": "cilbir",
  "ch": "fruehstueck",
  "name": "Çilbir — Pochierte Eier mit Joghurt",
  "script": "pochierte eier · knoblauchjoghurt · paprikabutter",
  "label": "Veggie · Besonders",
  "desc": "Pochierte Eier auf würzigem Knoblauch-Joghurt, übergossen mit heißer Paprikabutter — einfach, aber ein ganz besonderes Frühstücksgericht.",
  "time": "15 Min",
  "min": 15,
  "diff": 4,
  "diffLabel": "fast Einfach",
  "portions": "1 Person",
  "rating": 7,
  "img": "bilder/Fruehstueck_cilbir.png",
  "thumb": "bilder/klein/Fruehstueck_cilbir.jpg",
  "ings": [
   [
    "1",
    "Knoblauchzehe"
   ],
   [
    "1 TL",
    "Schnittlauch"
   ],
   [
    "200 g",
    "griechischer Joghurt"
   ],
   [
    "1 TL",
    "Salz"
   ],
   [
    "3",
    "Eier"
   ],
   [
    "3 EL",
    "Butter"
   ],
   [
    "1 TL",
    "Paprikapulver"
   ],
   [
    "optional",
    "etwas Essig (fürs Pochierwasser)"
   ]
  ],
  "steps": [
   [
    "Joghurt vorbereiten",
    "Knoblauchzehe reiben, Schnittlauch hacken. Beides mit dem griechischen Joghurt und dem Salz gut vermischen. Gleichmäßig auf einem Teller verteilen."
   ],
   [
    "Eier pochieren",
    "Wasser in einem großen Topf zum Kochen bringen. Dann Hitze reduzieren bis das Wasser nur noch leise köchelt. Optional: etwas Essig dazugeben — das hält das Eiweiß beim Pochieren besser zusammen. Ein Ei in ein kleines, feinmaschiges Sieb aufschlagen. Mit einem Kochlöffel im köchelnden Wasser einen Strudel erzeugen und das Ei aus dem Sieb ins Wasser gleiten lassen. Ca. 4 Minuten pochieren. Für alle drei Eier wiederholen."
   ],
   [
    "Eier auf Joghurt",
    "Die pochierten Eier aus dem Wasser nehmen und auf dem Joghurt verteilen."
   ],
   [
    "Paprikabutter",
    "In einem weiteren Topf oder einer Pfanne die Butter zerlassen bis kleine Bläschen entstehen. Paprikapulver hinzugeben und kurz anrösten bis es sich rostrot verfärbt."
   ],
   [
    "Fertigstellen",
    "Die heiße Paprikabutter über dem Joghurt mit den Eiern verteilen und sofort genießen!"
   ]
  ],
  "notes": [
   "Etwas Essig im Pochierwasser hält das Eiweiß zusammen — Geheimtipp!",
   "Das Ei magst du fester? Dann einfach 1 Minute länger im Wasser lassen.",
   "Ein Gericht das ich mir viel zu selten gönne — die Einfachheit ist unschlagbar.",
   "Dazu passt knuspriges frisches Brot."
  ]
 },
 {
  "id": "pancakes",
  "ch": "fruehstueck",
  "name": "High-Protein Pancakes",
  "script": "skyr · eier · gedünstet · soufflé-style",
  "label": "High-Protein · Fluffy",
  "desc": "Nur 3 Zutaten — Skyr, Mehl und Eier — gedünstet mit Wasserdampf für eine unglaublich fluffige, soufflé-artige Konsistenz. Der Fitness-Pancake.",
  "time": "15 Min",
  "min": 15,
  "diff": 2,
  "diffLabel": "Sehr leicht",
  "portions": "1 Person",
  "rating": 8,
  "img": "bilder/Fruehstueck_pancakes.png",
  "thumb": "bilder/klein/Fruehstueck_pancakes.jpg",
  "ings": [
   [
    "2 EL",
    "Skyr"
   ],
   [
    "2 EL",
    "Mehl"
   ],
   [
    "2",
    "Eier"
   ],
   [
    "optional",
    "Chunky Flavour nach Wahl"
   ],
   [
    "optional",
    "etwas Honig"
   ]
  ],
  "steps": [
   [
    "Teig verrühren",
    "Alle Zutaten (Skyr, Mehl, Eier) zu einem glatten Teig verrühren. Optional Chunky Flavour oder Honig einrühren."
   ],
   [
    "Pfanne vorbereiten",
    "Eine beschichtete Pfanne leicht erhitzen — niedrige Hitze ist wichtig!"
   ],
   [
    "Dünsten",
    "Den Teig in die Pfanne geben. Hitze niedrig halten und einen Deckel auf die Pfanne setzen. Während des Garens immer wieder ca. 1 EL Wasser an den Rand der Pfanne geben."
   ],
   [
    "Wenden & fertig",
    "Das Wasser verdampft unter dem Deckel und die Pancakes werden durch den Wasserdampf besonders fluffig und saftig gedünstet. Sobald die Unterseite goldbraun ist, vorsichtig wenden und fertig garen."
   ]
  ],
  "notes": [
   "Durch das Dünsten werden die Pancakes deutlich softer als klassisch gebratene — fast wie kleine Soufflé-Pancakes.",
   "Nur 3 Zutaten — und trotzdem high-protein und super fluffig.",
   "Mit Chunky Flavour gibt es viele Geschmacksvariationen — Schoko, Vanilla, Caramel usw."
  ]
 },
 {
  "id": "ruehrei",
  "ch": "fruehstueck",
  "name": "Perfektes Cremiges Rührei",
  "script": "eier · sahne · butter · avocado toast optional",
  "label": "Gourmet · Creamy",
  "desc": "Langsam und sanft gestockt — schieben und falten, nicht rühren. Mit Schnittlauch und optional auf Avocado-Toast. Einfach, aber extrem gut.",
  "time": "10 Min",
  "min": 10,
  "diff": 1,
  "diffLabel": "Leicht",
  "portions": "1 Person",
  "rating": 10,
  "img": "bilder/Fruehstueck_ruehrei.png",
  "thumb": "bilder/klein/Fruehstueck_ruehrei.jpg",
  "ings": [
   [
    "3",
    "Eier"
   ],
   [
    "1 Schuss",
    "Sahne"
   ],
   [
    "etwas",
    "Butter"
   ],
   [
    "Salz",
    "nach Geschmack"
   ],
   [
    "nach Bedarf",
    "Schnittlauch"
   ],
   [
    "optional",
    "etwas Chili"
   ],
   [
    "— Avocado Toast (optional) —",
    ""
   ],
   [
    "1",
    "Avocado"
   ],
   [
    "Salz, Pfeffer",
    "Zitronensaft"
   ],
   [
    "1–2 Scheiben",
    "Toast"
   ]
  ],
  "steps": [
   [
    "Eier verquirlen",
    "Eier mit einem Schuss Sahne und etwas Salz verquirlen."
   ],
   [
    "Butter schmelzen",
    "Eine Pfanne bei niedriger bis mittlerer Hitze erhitzen und etwas Butter schmelzen lassen."
   ],
   [
    "Sanft stocken lassen",
    "Die Eier in die Pfanne geben und langsam stocken lassen. Das Ei dabei nur sanft mit einem Pfannenwender schieben und falten — nicht hektisch rühren."
   ],
   [
    "Finish",
    "Kurz bevor das Rührei fertig ist, Schnittlauch unterheben. Optional mit etwas Chili servieren."
   ],
   [
    "Avocado Toast (optional)",
    "Avocado mit Salz, Pfeffer und Zitronensaft zerdrücken und auf Toast streichen. Das cremige Rührei daraufgeben. Einfach, aber extrem gut."
   ]
  ],
  "notes": [
   "Schieben und falten — nicht rühren! Das ist der Unterschied zwischen cremig und trocken.",
   "Niedrige Hitze ist der Schlüssel — Geduld zahlt sich aus.",
   "Mit Avocado-Toast wird daraus ein vollständiges Gourmet-Frühstück.",
   "Optional: etwas Chili gibt eine tolle Schärfe-Note dazu."
  ]
 },
 {
  "id": "omlett",
  "ch": "fruehstueck",
  "name": "Italienisches Omelett",
  "script": "prosciutto · mozzarella · basilikum · parmesan",
  "label": "Italiano ·",
  "desc": "Eier mit Sahne, Prosciutto Cotto, Cherrytomaten, Mozzarella und frischem Basilikum — gedünstet, zusammengeklappt, mit Parmesan gefinisht. Cremig und herzhaft.",
  "time": "15 Min",
  "min": 15,
  "diff": 2,
  "diffLabel": "Leicht",
  "portions": "1 Person",
  "rating": 8,
  "img": "bilder/Fruehstueck_omlett.png",
  "thumb": "bilder/klein/Fruehstueck_omlett.jpg",
  "ings": [
   [
    "3",
    "Eier"
   ],
   [
    "1 Schuss",
    "Sahne"
   ],
   [
    "etwas",
    "Butter"
   ],
   [
    "nach Bedarf",
    "Prosciutto Cotto oder normaler Schinken"
   ],
   [
    "nach Bedarf",
    "Cherrytomaten"
   ],
   [
    "nach Bedarf",
    "geriebene Mozzarella"
   ],
   [
    "etwas",
    "Parmesan"
   ],
   [
    "frisch",
    "Basilikum"
   ],
   [
    "Salz",
    "nach Geschmack"
   ],
   [
    "optional",
    "etwas Chili"
   ]
  ],
  "steps": [
   [
    "Eier verquirlen",
    "Eier mit einem Schuss Sahne verquirlen."
   ],
   [
    "Butter schmelzen",
    "Etwas Butter in einer Pfanne schmelzen lassen."
   ],
   [
    "Eier in die Pfanne",
    "Die verquirlten Eier in die Pfanne geben."
   ],
   [
    "Belegen",
    "Cherrytomaten klein schneiden und direkt zusammen mit dem Schinken auf das Ei geben. Frisches Basilikum darüberstreuen."
   ],
   [
    "Dünsten & Käse",
    "Einen Deckel auf die Pfanne setzen und alles langsam ziehen lassen. Ein paar Minuten bevor das Omelett fertig ist, geriebenen Mozzarella daraufgeben. Mit etwas Salz würzen, optional Chili dazugeben."
   ],
   [
    "Zusammenklappen",
    "Das Omelett vorsichtig zusammenklappen. Zum Schluss noch etwas Parmesan darüberreiben."
   ]
  ],
  "notes": [
   "Cremig, herzhaft und richtig italienisch — besonders gut mit frischem Brot oder Ciabatta.",
   "Der Deckel ist wichtig — das Omelett gart gleichmäßig durch ohne wenden.",
   "Mozzarella kurz vor Schluss — so bleibt er schön cremig und zieht nicht aus.",
   "Siehe Gebäck für das passende Ciabatta-Rezept."
  ]
 },
 {
  "id": "zwiebel",
  "ch": "suppen",
  "name": "Französische Zwiebelsuppe",
  "script": "karamellisierte zwiebeln · gruyère · baguette",
  "label": "France · Classic",
  "desc": "800 g Gemüsezwiebeln langsam karamellisiert, in Rinderbrühe geschmort — mit überbackenem Gruyère-Baguette serviert. Das wärmendste Gericht überhaupt.",
  "time": "90 Min",
  "min": 90,
  "diff": 3,
  "diffLabel": "Leicht",
  "portions": "4 Personen",
  "rating": 9,
  "img": "bilder/Suppen_zwiebelsuppe.png",
  "thumb": "bilder/klein/Suppen_zwiebelsuppe.jpg",
  "ings": [
   [
    "800 g",
    "Gemüsezwiebeln"
   ],
   [
    "2 EL",
    "Olivenöl"
   ],
   [
    "1 EL",
    "Butter"
   ],
   [
    "1 EL",
    "Mehl"
   ],
   [
    "500 ml",
    "Rinderbrühe"
   ],
   [
    "Optional: Schuss",
    "Rotwein"
   ],
   [
    "2",
    "Lorbeerblätter"
   ],
   [
    "1 Zweig",
    "Thymian"
   ],
   [
    "1 TL",
    "weißer Pfeffer aus der Mühle"
   ],
   [
    "2 TL",
    "Salz"
   ],
   [
    "— Überbacken (optional) —",
    ""
   ],
   [
    "nach Bedarf",
    "Baguette (frisch oder alt)"
   ],
   [
    "nach Bedarf",
    "Gruyère-Käse, gerieben"
   ]
  ],
  "steps": [
   [
    "Zwiebeln schneiden",
    "Zwiebeln schälen oder hobeln und in feine Streifen schneiden."
   ],
   [
    "Zwiebeln karamellisieren",
    "Etwas Olivenöl in einem großen Topf auf mittlerer Hitze erhitzen. Zwiebeln hinzufügen, Hitze auf maximal Stufe 4 reduzieren und unter mehrmaligem Umrühren ca. 1 Stunde andünsten. Dabei werden die Zwiebeln schön braun und der Zucker in ihnen karamellisiert. Gut aufpassen, dass nichts anbrennt!"
   ],
   [
    "Butter & Mehl",
    "Butter hinzufügen und langsam zerlassen. Zwiebel-Butter-Mischung mit Mehl bestäuben und unter ständigem Rühren anschwitzen bis das Mehl nicht mehr sichtbar ist."
   ],
   [
    "Suppe aufkochen",
    "(Optional: Mit lieblichen oder halbtrockene Schuss Rotwein aufgießen und einreduzieren)  mit Rinderbrühe und 1 l Wasser auffüllen und einmal aufkochen lassen. Temperatur auf mittlere Hitze reduzieren, Kräuter und Gewürze hinzufügen. Ca. 15 Minuten leise köcheln lassen. Vor dem Servieren Thymian und Lorbeerblätter entfernen."
   ],
   [
    "Baguette überbacken (Tipp)",
    "Baguette in Streifen schneiden, Gruyère-Käse darüber geben. Im Ofen auf der mittlere Schiene bei 180 °C Umluft backen bis der Käse geschmolzen ist. Zusammen mit der Suppe servieren."
   ]
  ],
  "notes": [
   "Die 1 Stunde Karamellisierzeit ist das Herzstück — nicht abkürzen!",
   "Das Gruyère-Baguette ist eigentlich Pflicht — macht die Suppe erst komplett.",
   "Wahrscheinlich das Rezept mit den meisten Zwiebeln überhaupt.",
   "Perfekt wenn du zu viele Zwiebeln zuhause hast — eine große Menge auf einen Schwung verarbeiten."
  ]
 },
 {
  "id": "kuerbis",
  "ch": "suppen",
  "name": "Kürbissuppe mit cremiger Kokosnussmilch",
  "script": "hokkaidokürbis · kurkuma · kokosmilch",
  "label": "Veggie · autumun",
  "desc": "Gerösteter Hokkaido mit Kurkuma, Knoblauch und Kokosmilch zu einer samtigen Cremesuppe püriert — herbstlich, aromatisch, veggie.",
  "time": "90 Min",
  "min": 90,
  "diff": 2,
  "diffLabel": "Sehr leicht",
  "portions": "4 Personen",
  "rating": 8,
  "img": "bilder/Suppen_kuerbissuppe.png",
  "thumb": "bilder/klein/Suppen_kuerbissuppe.jpg",
  "ings": [
   [
    "etwas",
    "Olivenöl"
   ],
   [
    "1 EL",
    "frischer Ingwer"
   ],
   [
    "2–3",
    "Knoblauchzehen"
   ],
   [
    "1",
    "ganze Knoblauchknolle"
   ],
   [
    "1",
    "mittelgroßer Hokkaido-Kürbis"
   ],
   [
    "1 Zweig",
    "Rosmarin (optional)"
   ],
   [
    "etwas",
    "Salz"
   ],
   [
    "etwas",
    "Pfeffer"
   ],
   [
    "150 ml",
    "Kokosmilch"
   ],
   [
    "500–750 ml",
    "Wasser"
   ],
   [
    "200 ml",
    "Gemüse- oder Hühnerbrühe"
   ],
   [
    "etwas",
    "Chiliöl (optional)"
   ],
   [
    "einige",
    "Salbeiblätter (optional)"
   ]
  ],
  "steps": [
   [
    "Kürbis vorbereiten",
    "Hokkaido-Kürbis gründlich waschen, halbieren und die Kerne mit einem Löffel entfernen. Oberen und unteren Teil abschneiden und den Kürbis anschließend in grobe Stücke schneiden. Von der Knoblauchknolle die Spitze abschneiden, damit die Zehen später weich rösten können."
   ],
   [
    "Gemüse rösten",
    "Kürbisstücke und die Knoblauchknolle in eine eingeölte Auflaufform geben. Mit Olivenöl beträufeln und mit Salz, Pfeffer und Rosmarin würzen. Im vorgeheizten Backofen bei 200 °C Ober-/Unterhitze etwa 40 Minuten rösten, bis der Kürbis weich und leicht gebräunt ist."
   ],
   [
    "Kürbis pürieren",
    "Das geröstete Gemüse etwas abkühlen lassen. Danach alles in einen Mixxer geben. Einen kleinen Schuss Wasser hinzufügen und alles fein pürieren."
   ],
   [
    "Aromen anbraten",
    "Etwas Olivenöl in einem großen Suppentopf erhitzen. Optional einige Salbeiblätter kurz knusprig anbraten und wieder herausnehmen. Ingwer und die 2–3 Knoblauchzehen fein hacken und im Topf kurz anschwitzen bis alles aromatisch duftet."
   ],
   [
    "Suppe kochen",
    "Das Kürbispüree in den Topf geben und gut verrühren. Danach Brühe, Wasser und Kokosmilch hinzufügen. Alles einige Minuten leicht köcheln lassen, bis die gewünschte Konsistenz erreicht ist."
   ],
   [
    "Abschmecken & servieren",
    "Die Suppe mit Salz und Pfeffer abschmecken. Wer eine besonders feine Konsistenz möchte, kann die Suppe zusätzlich durch ein Sieb streichen. Mit etwas Chiliöl/Kürbiskernöl servieren und am besten zusammen mit frischem Brot genießen."
   ]
  ],
  "notes": [
   "Hokkaido-Kürbis muss nicht geschält werden — die Schale wird beim Garen weich.",
   "Falls die Suppe zu dick wird, einfach etwas mehr Wasser hinzufügen.",
   "Auch Sahne ist,statt Kokusmilch,geeignet"
  ]
 },
 {
  "id": "tomate",
  "ch": "suppen",
  "name": "Roasted Tomato Soup mit roter Paprika",
  "script": "ofengeröstetes gemüse · cremig · chili",
  "label": "warm · creamy",
  "desc": "1 kg Tomaten und 400 g rote Paprika im Ofen geröstet und püriert — eine unglaublich cremige Suppe mit köstlichen Röstaromen und einem Hauch Chili.",
  "time": "90 Min",
  "min": 90,
  "diff": 2,
  "diffLabel": "Sehr leicht",
  "portions": "4 Personen",
  "rating": 8,
  "img": "bilder/Suppen_tomatosuppe.png",
  "thumb": "bilder/klein/Suppen_tomatosuppe.jpg",
  "ings": [
   [
    "1 kg",
    "Tomaten, halbiert"
   ],
   [
    "200 - 300g",
    "rote Paprika"
   ],
   [
    "1 große",
    "Zwiebel"
   ],
   [
    "1",
    "Knoblauchknolle"
   ],
   [
    "2 EL",
    "Olivenöl"
   ],
   [
    "2 TL",
    "Salz"
   ],
   [
    "½ TL",
    "Pfeffer aus der Mühle"
   ],
   [
    "¼ TL",
    "scharfes Chilipulver"
   ],
   [
    "250 ml",
    "Light Creme, Sahne oder Kokosmilch"
   ]
  ],
  "steps": [
   [
    "Ofen vorheizen",
    "Den Ofen auf 200 °C Umluft vorheizen."
   ],
   [
    "Gemüse rösten",
    "Tomaten halbieren, Paprika und Zwiebel vierteln und das Gemüse auf einem mit Backpapier ausgelegten Backblech verteilen. Olivenöl sowie etwas Salz und Pfeffer gleichmäßig darüber verteilen. Auf der mittleren Schiene im Ofen ca. 45 Minuten rösten."
   ],
   [
    "Pürieren & aufkochen",
    "Wenn das Gemüse leicht angebräunt ist, in einen geeigneten Topf geben. Mit dem Stabmixer zu einer homogenen Masse verarbeiten. Topf mit ca. 1 l Wasser auffüllen. Suppe kurz aufkochen lassen."
   ],
   [
    "Abschmecken & verfeinern",
    "Chilipulver sowie Salz und Pfeffer dazugeben. Für einen volleren Geschmack: Light Creme, Sahne oder Kokosmilch hinzufügen. Für eine sämigere Konsistenz nochmals kurz köcheln lassen bis die Suppe leicht eindickt."
   ]
  ],
  "notes": [
   "Überreife Tomaten und Paprika funktionieren hier sogar besonders gut — perfekt für Ende September.",
   "Light Creme, Sahne oder Kokosmilch — alle drei funktionieren, jede gibt einen anderen Charakter.",
   "Je länger das Gemüse röstet desto intensiver der Röstgeschmack — aber nicht verbrennen lassen.",
   "Super einfach und trotzdem unglaublich cremig und aromatisch."
  ]
 },
 {
  "id": "kartoffel",
  "ch": "suppen",
  "name": "Cremige Kartoffelcremesuppe mit knusprigem Speck",
  "script": "kartoffeln · lauch · knuspriger speck",
  "label": "Herzhaft · Cremig",
  "desc": "Samtige Kartoffelsuppe mit Lauch, Karotten und Majoran, obendrauf knuspriger Speck. In 40 Minuten fertig und richtig wärmend.",
  "time": "40 Min",
  "min": 40,
  "diff": 3,
  "diffLabel": "Leicht",
  "portions": "4 Personen",
  "rating": 8,
  "img": "bilder/Suppen_kartoffelsuppe.jpg",
  "thumb": "bilder/klein/Suppen_kartoffelsuppe.jpg",
  "ings": [
   [
    "500 g",
    "mehligkochende Kartoffeln"
   ],
   [
    "2",
    "Karotten"
   ],
   [
    "1",
    "mittelgroße Zwiebel"
   ],
   [
    "100 g",
    "Lauch (Porree)"
   ],
   [
    "75–100 g",
    "Speckwürfel"
   ],
   [
    "600 ml",
    "Geflügelbrühe"
   ],
   [
    "100–150 ml",
    "Sahne"
   ],
   [
    "100–200 ml",
    "Wasser, nach Bedarf"
   ],
   [
    "1 EL",
    "Olivenöl"
   ],
   [
    "1 EL",
    "Butter"
   ],
   [
    "½ TL",
    "getrockneter Majoran"
   ],
   [
    "1",
    "Lorbeerblatt"
   ],
   [
    "¼ TL",
    "edelsüßes Paprikapulver"
   ],
   [
    "1 Prise",
    "Muskatnuss"
   ],
   [
    "nach Geschmack",
    "schwarzer Pfeffer"
   ],
   [
    "nach Bedarf",
    "Salz"
   ],
   [
    "optional",
    "frische Petersilie zum Garnieren"
   ]
  ],
  "steps": [
   [
    "Speck knusprig braten",
    "Die Speckwürfel in einem großen Topf ohne zusätzliches Fett knusprig braten. Herausnehmen und beiseitestellen. Falls viel Fett im Topf zurückbleibt, einen Teil davon entfernen."
   ],
   [
    "Zwiebeln in Olivenöl anbraten",
    "Etwas Olivenöl zum Speckfett geben. Die fein gewürfelte Zwiebel darin bei mittlerer Hitze glasig dünsten und leicht goldgelb werden lassen."
   ],
   [
    "Lauch hinzufügen",
    "Den in feine Ringe geschnittenen Lauch hinzufügen und 2–3 Minuten mitdünsten."
   ],
   [
    "Butter und Gewürze hinzufügen",
    "Die Butter dazugeben und schmelzen lassen. Majoran und Paprikapulver kurz mitdünsten. Mit etwas schwarzem Pfeffer und einer Prise Muskatnuss würzen."
   ],
   [
    "Kartoffeln und Karotten mitdünsten",
    "Kartoffeln und Karotten schälen, klein würfeln und in den Topf geben. Alles 2–3 Minuten mitdünsten, damit sich die Aromen verbinden."
   ],
   [
    "Mit Geflügelbrühe aufgießen",
    "Die Geflügelbrühe und das Lorbeerblatt hinzufügen. Die Suppe etwa 20 Minuten bei mittlerer bis niedriger Hitze köcheln lassen, bis Kartoffeln und Karotten weich sind."
   ],
   [
    "Lorbeerblatt entfernen und pürieren",
    "Das Lorbeerblatt herausnehmen. Die Suppe mit einem Stabmixer fein pürieren."
   ],
   [
    "Sahne und Wasser hinzufügen",
    "Zunächst 100 ml Sahne einrühren. Falls die Suppe zu dickflüssig ist, nach und nach 100–200 ml Wasser hinzufügen, bis die gewünschte Konsistenz erreicht ist. Bei niedriger Hitze kurz erwärmen, aber nicht stark kochen lassen."
   ],
   [
    "Abschmecken",
    "Mit Pfeffer, Muskatnuss und bei Bedarf etwas Salz abschmecken. Vorsichtig salzen, da Geflügelbrühe und Speck bereits Salz enthalten."
   ],
   [
    "Anrichten und garnieren",
    "Die Suppe in Schüsseln füllen. Den knusprigen Speck erst direkt vor dem Servieren darüberstreuen. Nach Wunsch mit frisch gehackter Petersilie garnieren."
   ]
  ],
  "notes": [
   "Konsistenz: Die pürierte Suppe wird durch die Kartoffeln oft sehr dick. Wasser deshalb schluckweise hinzufügen.",
   "Knuspriger Speck: Immer erst beim Servieren auf die Suppe geben.",
   "Extra-Tipp: Ein kleines Stück kalte Butter zum Schluss einrühren, wenn du die Suppe besonders samtig möchtest."
  ]
 },
 {
  "id": "carbonara",
  "ch": "pasta",
  "name": "Spaghetti alla Carbonara Originale",
  "script": "la vera ricetta romana",
  "label": "Classic",
  "desc": "Das echte Original — keine Sahne! Nur Eier, Pecorino, Guanciale und frisch gemahlener schwarzer Pfeffer. Cremig durch Können.",
  "time": "20 Min",
  "min": 20,
  "diff": 3,
  "diffLabel": "Einfach",
  "portions": "4 Personen",
  "rating": 9,
  "img": "bilder/Pasta_carbonara.png",
  "thumb": "bilder/klein/Pasta_carbonara.jpg",
  "ings": [
   [
    "400 g",
    "Spaghetti"
   ],
   [
    "150 g",
    "Guanciale (oder Pancetta)"
   ],
   [
    "3",
    "Eigelb"
   ],
   [
    "1",
    "ganzes Ei"
   ],
   [
    "100 g",
    "Pecorino Romano, frisch gerieben"
   ],
   [
    "50 g",
    "Parmigiano Reggiano, frisch gerieben"
   ],
   [
    "nach Bedarf",
    "Salz (fürs Kochwasser)"
   ],
   [
    "reichlich",
    "frisch gemahlener schwarzer Pfeffer"
   ]
  ],
  "steps": [
   [
    "Guanciale vorbereiten",
    "Guanciale in dünne Streifen oder Würfel schneiden. In einer Pfanne bei mittlerer Hitze anbraten, bis das Fett schmilzt und das Fleisch goldbraun und knusprig ist."
   ],
   [
    "Spaghetti kochen",
    "Großen Topf Wasser zum Kochen bringen, reichlich Salz. Spaghetti al dente kochen. Unbedingt etwas Kochwasser aufbewahren!"
   ],
   [
    "Eiermischung",
    "In einer Schüssel Eigelb, ganzes Ei, Pecorino Romano, Parmigiano und reichlich schwarzen Pfeffer gut verrühren bis eine cremige Masse entsteht."
   ],
   [
    "Fertigstellen",
    "Pfanne vom Herd nehmen! Heiße Spaghetti zur Guanciale geben, vermengen. Ei-Käse-Mischung unterrühren und mit Kochwasser cremige Konsistenz erreichen."
   ],
   [
    "Servieren",
    "Sofort auf Tellern anrichten, mit Pecorino und frisch gemahlenem Pfeffer garnieren. Direkt essen!"
   ]
  ],
  "notes": [
   "Kein Sahne — der cremige Effekt kommt ausschließlich durch Eier und Käse.",
   "Pfanne vom Herd nehmen bevor die Eiermischung dazukommt — sonst stockt das Ei.",
   "Alternative: Statt Guanciale kann auch Bauchspeck verwendet werden."
  ]
 },
 {
  "id": "vodka",
  "ch": "pasta",
  "name": "Tomaten-Wodka-Pasta mit Burrata",
  "script": "pasta alla vodka con burrata",
  "label": "OnlyLove",
  "desc": "Cherry-Tomaten, ein Schuss Wodka, cremige pürierte Sauce — obendrauf eine ganze oder halbe Burrata. Einfach aber spektakulär.",
  "time": "35 Min",
  "min": 35,
  "diff": 3,
  "diffLabel": "Leicht",
  "portions": "4 Personen",
  "rating": 10,
  "img": "bilder/Pasta_vodka.jpg",
  "thumb": "bilder/klein/Pasta_vodka.jpg",
  "ings": [
   [
    "400 g",
    "Nudeln (Rigatoni empfohlen)"
   ],
   [
    "20",
    "Cherry-Tomaten, halbiert"
   ],
   [
    "4 EL",
    "Olivenöl"
   ],
   [
    "2",
    "Schalotten, fein gehackt"
   ],
   [
    "2-3",
    "Knoblauchzehen, gehackt"
   ],
   [
    "1½ EL",
    "Tomatenmark"
   ],
   [
    "45 ml",
    "Wodka"
   ],
   [
    "Saft ½",
    "Zitrone"
   ],
   [
    "200 ml",
    "Sahne"
   ],
   [
    "75 g",
    "Parmigiano Reggiano, gerieben"
   ],
   [
    "1 TL",
    "rote Paprikaflocken"
   ],
   [
    "Salz & Pfeffer",
    "nach Geschmack"
   ],
   [
    "1",
    "Burrata (ganz oder halb je nach Portion)"
   ],
   [
    "etwas",
    "frische Baslikum"
   ]
  ],
  "steps": [
   [
    "Nudeln kochen",
    "Wasser mit 1 EL Salz kochen. Nudeln al dente kochen. Eine Kelle Nudelkochwasser aufbewahren!"
   ],
   [
    "Sauce",
    "Olivenöl erhitzen. Cherry-Tomaten ~2 Min anbraten bis sie aufplatzen. Schalotten und Knoblauch 1 Min anschwitzen. Paprikaflocken einrühren."
   ],
   [
    "Tomatenmark & Wodka",
    "Tomatenmark einrühren und kurz anrösten. Wodka hinzufügen und 30–60 Sek köcheln bis der Alkohol verdampft."
   ],
   [
    "Sahne & Pürieren",
    "Sahne und 25 g Parmesan einrühren. Hitze reduzieren. Sauce mit Pürierstab glatt pürieren — das macht sie seidig!"
   ],
   [
    "Servieren",
    "Nudeln in die Sauce. Restlichen Parmesan, Zitronensaft dazugeben und Nudelwasser einrühren. Auf Tellern anrichten, mit Basilikum bestreuen, Burrata obenauf — ganz oder halb je nach Hunger. Sofort genießen!"
   ]
  ],
  "notes": [
   "Sauce unbedingt pürieren — das macht sie cremig statt stückig.",
   "Wodka nicht weglassen: Er hebt die Tomatensäure und macht die Sauce komplexer.",
   "Burrata ganz für einen großen Wow-Effekt, halb für leichtere Variante."
  ]
 },
 {
  "id": "toscana",
  "ch": "pasta",
  "name": "Creamy Toscana Pasta mit Hähnchen",
  "script": "pollo alla toscana cremoso",
  "label": "Toscana",
  "desc": "Hähnchen, getrocknete Tomaten, Babyspinat, Weißwein und cremige Parmesan-Sauce — würzig, intensiv, wie vom TikTok-Koch.",
  "time": "35 Min",
  "min": 35,
  "diff": 4,
  "diffLabel": "Einfach",
  "portions": "3–4 Personen",
  "rating": 8,
  "img": "bilder/Pasta_toscana.png",
  "thumb": "bilder/klein/Pasta_toscana.jpg",
  "ings": [
   [
    "250 g",
    "Hähnchenbrust"
   ],
   [
    "400 g",
    "Pasta (Rigatoni oder Penne)"
   ],
   [
    "2–3",
    "Knoblauchzehen"
   ],
   [
    "1 kleine",
    "Zwiebel"
   ],
   [
    "1 EL",
    "Tomatenmark"
   ],
   [
    "eine Handvoll",
    "Cherrytomaten"
   ],
   [
    "5–6",
    "getrocknete / eingelegte Tomaten"
   ],
   [
    "150–200 ml",
    "Sahne"
   ],
   [
    "ordentlicher Schuss",
    "Weißwein"
   ],
   [
    "etwas",
    "Nudelwasser"
   ],
   [
    "nach Bedarf",
    "Parmesan"
   ],
   [
    "nach Bedarf",
    "Babyblattspinat"
   ],
   [
    "nach Bedarf",
    "frisches Basilikum"
   ],
   [
    "nach Bedarf",
    "Olivenöl"
   ],
   [
    "1 TL",
    "Oregano"
   ],
   [
    "1 TL",
    "Paprikapulver"
   ],
   [
    "optional",
    "Chili"
   ],
   [
    "Salz & Pfeffer",
    "nach Geschmack"
   ]
  ],
  "steps": [
   [
    "Pasta kochen",
    "Pasta in Salzwasser al dente kochen. Eine Tasse Nudelwasser aufheben — wichtig für die Sauce!"
   ],
   [
    "Aromabasis",
    "Olivenöl in einer großen Pfanne erhitzen. Knoblauch fein schneiden und mit Oregano, Paprikapulver und optional Chili kurz anbraten. Nur kurz rösten, damit der Knoblauch nicht bitter wird."
   ],
   [
    "Hähnchen anbraten",
    "Hähnchen in Stücke schneiden und direkt in die Pfanne geben. Goldbraun anbraten."
   ],
   [
    "Tomatenbasis",
    "Zwiebel schneiden und dazugeben. Tomatenmark mit anrösten. Cherrytomaten dazugeben und leicht einkochen lassen."
   ],
   [
    "Weißwein-Sauce",
    "Ordentlichen Schluck Weißwein ablöschen. Etwas Nudelwasser dazugeben. Einkochen lassen, bis die Sauce intensiver wird."
   ],
   [
    "Cremigkeit & Toscana-Flavour",
    "Getrocknete Tomaten klein schneiden und dazugeben. Sahne einrühren. Babyblattspinat unterheben. Etwas Parmesan dazugeben. Basilikum mitkochen lassen."
   ],
   [
    "Finalisieren",
    "Hähnchen wieder dazugeben. Pasta direkt in die Sauce geben. Alles kräftig durchschwenken bis cremig und sämig."
   ]
  ],
  "notes": [
   "Knoblauch nur kurz anrösten — er wird sonst bitter und ruiniert die ganze Sauce.",
   "Weißwein wirklich gut einkochen lassen — das ist der Tiefgang.",
   "Die getrockneten Tomaten geben den typischen Toscana-Geschmack — nicht weglassen!",
   "Würzig · cremig · tomatig · leicht scharf · intensiver Weißwein-Tiefgang"
  ]
 },
 {
  "id": "alfredo",
  "ch": "pasta",
  "name": "Chicken Alfredo Pasta",
  "script": "cremig · würzig · perfekt für Pasta-Abende",
  "label": "Comfort Food",
  "desc": "Knusprig panierte Hähnchenbrust auf cremiger Linguine mit Mascarpone-Sauce. Die Cornflakes-Panade ist das Geheimnis.",
  "time": "35 Min",
  "min": 35,
  "diff": 4,
  "diffLabel": "fast Einfach",
  "portions": "4 Personen",
  "rating": 7.5,
  "img": "bilder/Pasta_alfredo.png",
  "thumb": "bilder/klein/Pasta_alfredo.jpg",
  "ings": [
   [
    "2",
    "Hähnchenbrüste"
   ],
   [
    "etwas",
    "Salz"
   ],
   [
    "etwas",
    "Pfeffer"
   ],
   [
    "etwas",
    "Paprika edelsüß"
   ],
   [
    "etwas",
    "Chiliflocken"
   ],
   [
    "etwas",
    "italienische Kräuter"
   ],
   [
    "400 g",
    "Pasta (Fettuccine oder Tagliatelle)"
   ],
   [
    "etwas",
    "Olivenöl"
   ],
   [
    "2–3 Zehen",
    "Knoblauch"
   ],
   [
    "1 kleinen EL",
    "Tomatenmarkt"
   ],
   [
    "200–250 ml",
    "Sahne"
   ],
   [
    "80–100 g",
    "Parmesan"
   ],
   [
    "etwas",
    "Pastawasser"
   ],
   [
    "etwas",
    "frische Petersilie"
   ],
   [
    "optional",
    "etwas Zitronensaft"
   ]
  ],
  "steps": [
   [
    "Chicken marinieren",
    "Hähnchenbrüste mit Olivenöl, Salz, Pfeffer, Paprika edelsüß, Chiliflocken und italienischen Kräutern einreiben. Anschließend etwa 1 Stunde ziehen lassen damit das Fleisch mehr Geschmack bekommt."
   ],
   [
    "Pasta kochen",
    "Die Pasta in reichlich Salzwasser al dente kochen. Vor dem Abgießen etwas Pastawasser aufheben."
   ],
   [
    "Chicken anbraten",
    "Die marinierten Hähnchenbrüste in einer Pfanne mit Olivenöl goldbraun anbraten bis sie außen schön gebräunt und innen saftig sind. Danach kurz beiseitestellen."
   ],
   [
    "Knoblauch anschwitzen",
    "Etwas Olivenöl in die gleiche Pfanne geben und den fein gehackten Knoblauch kurz anschwitzen bis er aromatisch duftet."
   ],
   [
    "Sauce zubereiten",
    "Tomatenmark kurz mit anbraten. Sahne in die Pfanne geben und anschließend etwas Pastawasser hinzufügen. Dadurch wird die Sauce cremiger und verbindet sich später besser mit der Pasta."
   ],
   [
    "Parmesan einrühren",
    "Den Parmesan langsam unterrühren bis eine cremige Alfredo-Sauce entsteht."
   ],
   [
    "Abschmecken",
    "Mit Salz, Pfeffer, Chiliflocken und frischer Petersilie würzen. Optional einen kleinen Spritzer Zitronensaft hinzufügen für mehr Frische."
   ],
   [
    "Alles vermengen",
    "Die gekochte Pasta und das Chicken in die Sauce geben und alles gut miteinander vermengen bis die Pasta vollständig von der Sauce umhüllt ist."
   ]
  ],
  "notes": [
   "Pastawasser ist wichtig — dadurch wird die Sauce besonders cremig.",
   "Frisch geriebener Parmesan schmilzt deutlich besser als fertiger Streukäse.",
   "Mit extra Petersilie und Parmesan servieren.",
   "Perfekt für ein schnelles aber trotzdem luxuriöses Pasta-Gericht."
  ]
 },
 {
  "id": "lachs",
  "ch": "pasta",
  "name": "Lachs-Pasta mit Burrata (Hauch Toscana)",
  "script": "salmone con burrata e basilico",
  "label": "Creamy",
  "desc": "Frischer Lachs, Toscana-Sahnesauce mit Basilikum und Zitrone — gekrönt mit einer cremigen Burrata die langsam über die heiße Pasta fließt.",
  "time": "30 Min",
  "min": 30,
  "diff": 4,
  "diffLabel": "Einfach",
  "portions": "2-3 Personen",
  "rating": 9,
  "img": "bilder/Pasta_lachs.jpg",
  "thumb": "bilder/klein/Pasta_lachs.jpg",
  "ings": [
   [
    "250 g",
    "Linguine"
   ],
   [
    "300 g",
    "Lachsfilet"
   ],
   [
    "½ Bio-Zitrone",
    "Abrieb"
   ],
   [
    "1 TL",
    "Knoblauchpulver"
   ],
   [
    "1 TL",
    "eldelsüß Paprikapulver"
   ],
   [
    "½ TL",
    "scharfes Paprikapulver"
   ],
   [
    "½ TL",
    "Tymian"
   ],
   [
    "Salz & Pfeffer",
    "nach Geschmack"
   ],
   [
    "Chiliflocken",
    "nach Geschmack"
   ],
   [
    "1 EL",
    "Öl zum Anbraten"
   ],
   [
    "½ Bio-Zitrone",
    "Saft"
   ],
   [
    "1 EL",
    "Butter"
   ],
   [
    "1",
    "Schalotte"
   ],
   [
    "1-2",
    "Knoblauchzehen"
   ],
   [
    "200 g",
    "Cherrytomaten"
   ],
   [
    "1 EL",
    "Tomatenmark"
   ],
   [
    "1 Handvoll",
    "frische Basilikumblätter"
   ],
   [
    "30-50 ml",
    "Weißwein"
   ],
   [
    "1-2 TL",
    "Zitronensaft"
   ],
   [
    "150 g",
    "Kochsahne"
   ],
   [
    "40-50 g",
    "Parmesan"
   ],
   [
    "60-100 g",
    "Babyblattspinat"
   ],
   [
    "½-1",
    "Burrata"
   ],
   [
    "etwas",
    "frischer Basilikum"
   ],
   [
    "etwas",
    "Zitronenabrieb"
   ]
  ],
  "steps": [
   [
    "Pasta kochen",
    "Linguine in reichlich Salzwasser al dente kochen. Etwas Nudelwasser aufheben."
   ],
   [
    "Lachs anbraten",
    "Lachs in Würfel schneiden und mit Zitronenabrieb, Knoblauchpulver, Paprikapulver, Salz, Pfeffer und Chiliflocken würzen. In etwas Öl goldbraun anbraten, herausnehmen und direkt mit Zitronensaft beträufeln."
   ],
   [
    "Sauce aufbauen",
    "Butter in derselben Pfanne schmelzen. Schalotte und Knoblauch anschwitzen, dann Cherrytomaten hinzufügen und weich werden lassen. Tomatenmark einrühren und kurz rösten."
   ],
   [
    "Aromen aufbauen",
    "Basilikum einrühren, mit Weißwein ablöschen und einkochen lassen. Zitronensaft einrühren."
   ],
   [
    "Cremige Sauce",
    "Kochsahne dazugeben, kurz köcheln lassen und Parmesan einrühren. Spinat unterheben und mit Salz & Pfeffer abschmecken. Bei Bedarf etwas Nudelwasser einrühren."
   ],
   [
    "Finalisieren",
    "Pasta in die Sauce geben und vermengen. Lachs unterheben oder oben drauf anrichten. Mit Burrata, frischem Basilikum und Zitronenabrieb servieren."
   ]
  ],
  "notes": [
   "Lachs direkt nach dem Anbraten mit Zitronensaft beträufeln für extra Frische.",
   "Etwas Nudelwasser macht die Sauce cremiger und verbindet alles besser.",
   "Burrata erst ganz am Ende auf die heiße Pasta geben, damit sie schön schmilzt.",
   "Weißwein gut einkochen lassen, damit nur Aroma bleibt und keine Säure dominiert."
  ]
 },
 {
  "id": "limone",
  "ch": "pasta",
  "name": "Pasta al Limone mit Weißwein",
  "script": "fresca, cremosa, senza panna",
  "label": "Summer Refresh",
  "desc": "Ohne Sahne — Bio-Zitrone, Parmesan, Weißwein und Technik. Cremig, frisch, restaurantmäßig in 20 Minuten. Bewertet mit 8/10.",
  "time": "20 Min",
  "min": 20,
  "diff": 3,
  "diffLabel": "Einfach",
  "portions": "3 Personen",
  "rating": 8,
  "img": "bilder/Pasta_limone.png",
  "thumb": "bilder/klein/Pasta_limone.jpg",
  "ings": [
   [
    "300 g",
    "Pasta (Spaghetti oder Linguine)"
   ],
   [
    "1–2",
    "Bio-Zitronen (Abrieb + Saft)"
   ],
   [
    "1",
    "Knoblauchzehe"
   ],
   [
    "2–3 EL",
    "Olivenöl"
   ],
   [
    "1–2 EL",
    "Butter"
   ],
   [
    "ca. 40 g",
    "Parmesan, fein gerieben"
   ],
   [
    "ein Schuss",
    "Weißwein"
   ],
   [
    "Salz & Pfeffer",
    "nach Geschmack"
   ],
   [
    "reichlich",
    "frisches Basilikum"
   ]
  ],
  "steps": [
   [
    "Pasta kochen",
    "Pasta in gesalzenem Wasser al dente kochen. Eine Tasse Nudelwasser aufheben — das ist das Herzstück der Sauce!"
   ],
   [
    "Zitronen vorbereiten",
    "Zitronen fein abreiben (nur die gelbe Schale!). Saft auspressen."
   ],
   [
    "Aromabasis",
    "Olivenöl erhitzen, Knoblauch anschwitzen, Zitronenabrieb und Basilikum dazugeben."
   ],
   [
    "Weißwein reduzieren",
    "Weißwein dazugeben und einkochen bis der Alkohol verkocht. Macht die Sauce komplexer."
   ],
   [
    "Sauce bauen",
    "Pasta in die Pfanne. Zitronensaft, Nudelwasser und Parmesan einrühren. Kräftig schwenken bis cremig — Emulgiertechnik!"
   ],
   [
    "Finish",
    "Butter einrühren und pfeffern. Sofort servieren!"
   ]
  ],
  "notes": [
   "⭐ 8/10 — Der Weißwein macht die Sauce komplexer und runder.",
   "Keine Sahne — Cremigkeit durch Parmesan + Nudelwasser + Butter.",
   "Bio-Zitronen verwenden — die Schale wird mitgekocht!"
  ]
 },
 {
  "id": "garnelen",
  "ch": "pasta",
  "name": "Pasta mit Garnelen, Spinat & Tomaten",
  "script": "gamberi al burro alle erbe",
  "label": "Di Mare",
  "desc": "Scharf angebratene Garnelen, Cherry-Tomaten, Blattspinat in Sahnesauce — mit Zitronenaroma als finalem Highlight.",
  "time": "35 Min",
  "min": 35,
  "diff": 4,
  "diffLabel": "Mittel-Einfach",
  "portions": "3-4 Personen",
  "rating": 8,
  "img": "bilder/Pasta_garnelen.png",
  "thumb": "bilder/klein/Pasta_garnelen.jpg",
  "ings": [
   [
    "200 g",
    "Garnelen"
   ],
   [
    "1 TL",
    "Salz"
   ],
   [
    "1 TL",
    "Paprika edelsüß"
   ],
   [
    "350 g",
    "Cherry-Tomaten"
   ],
   [
    "150 g",
    "Baby-Blattspinat"
   ],
   [
    "4–5",
    "Knoblauchzehen"
   ],
   [
    "350 g",
    "Pasta (Linguine)"
   ],
   [
    "150 ml",
    "Sahne"
   ],
   [
    "2–3 EL",
    "Olivenöl"
   ],
   [
    "1",
    "Zitrone"
   ]
  ],
  "steps": [
   [
    "Garnelen anbraten",
    "Mit Salz und Paprika würzen. Bei hoher Hitze scharf anbraten (1–2 Min pro Seite) bis sie rosa und gebräunt. Beiseitestellen."
   ],
   [
    "Tomaten & Knoblauch",
    "Cherrytomaten halbieren, Knoblauch hacken. In derselben Pfanne anbraten bis die Tomaten aufplatzen."
   ],
   [
    "Sahne & Spinat",
    "Sahne einrühren und einkochen. Baby-Blattspinat hinzufügen und 1–2 Min zusammenfallen lassen."
   ],
   [
    "Pasta einarbeiten",
    "Pasta al dente kochen, abgießen und in die Pfanne geben. Gut vermengen."
   ],
   [
    "Finish",
    "Garnelen zurück in die Pfanne. Mit Zitronensaft verfeinern — Sofort servieren."
   ]
  ],
  "notes": [
   "Garnelen kurz und scharf braten — zu lange und sie werden gummiartig.",
   "Schuss Weißwein beim Anbraten der Tomaten für mehr Tiefe."
  ]
 },
 {
  "id": "kuerbis",
  "ch": "pasta",
  "name": "Pasta mit Kürbiscreme",
  "script": "pasta alla crema di zucca",
  "label": "Autumn · comfort",
  "desc": "Gerösteter Hokkaido-Kürbis mit Kokosmilch zu einer samtigen Creme püriert — cremig, herbstlich, einfach und unvergesslich gut.",
  "time": "65 Min",
  "min": 65,
  "diff": 2,
  "diffLabel": "Leicht",
  "portions": "4 Personen",
  "rating": 7,
  "img": "bilder/Pasta_kuerbis.png",
  "thumb": "bilder/klein/Pasta_kuerbis.jpg",
  "ings": [
   [
    "1 kleiner",
    "Hokkaido-Kürbis"
   ],
   [
    "etwas",
    "Öl"
   ],
   [
    "Salz & Pfeffer",
    "nach Geschmack"
   ],
   [
    "150 ml",
    "Kokosmilch (kleine Dose)"
   ],
   [
    "400 g",
    "Pasta"
   ],
   [
    "1",
    "Knoblauchzehe"
   ],
   [
    "80 g",
    "Parmesan, gerieben"
   ]
  ],
  "steps": [
   [
    "Kürbis rösten",
    "Kürbis waschen, vierteln und Kerne entfernen. Kürbisviertel auf ein mit Backpapier ausgelegtes Backblech legen und mit etwas Öl bestreichen. Im vorgeheizten Ofen bei 180–200 °C Umluft garen bis er so weich ist, dass man ihn zerdrücken kann."
   ],
   [
    "Kürbiscreme pürieren",
    "Kürbisviertel in den Standmixer geben. Salz, Pfeffer und die Kokosmilch hinzugeben und auf mittlerer Stufe zu einer cremigen Masse pürieren. Beiseitestellen."
   ],
   [
    "Pasta kochen & Sauce",
    "Pasta nach Packungsanweisung in reichlich Salzwasser bissfest garen. In einer großen Pfanne Olivenöl erhitzen, Knoblauch fein würfeln und dünsten. Kürbiscreme dazugeben und kurz aufkochen lassen."
   ],
   [
    "Fertigstellen",
    "1–2 Kellen Nudelwasser zur Kürbiscreme geben — die Stärke bindet die Sauce. Abgegossene Nudeln in die Pfanne, Parmesan dazu und unter mehrmaligem Rühren kochen bis die Sauce cremig ist. Kürbiscreme unter die Nudeln heben."
   ]
  ],
  "notes": [
   "Die Konsistenz der Kürbiscreme spielt keine große Rolle — fest und cremig ist ideal.",
   "Statt Kokusmilch ist auch Sahne möglich.",
   "Hokkaido-Kürbis muss nicht geschält werden — die Schale wird beim Rösten weich."
  ]
 },
 {
  "id": "rotebete",
  "ch": "pasta",
  "name": "Pasta mit Roter Bete",
  "script": "pasta alla barbabietola rossa",
  "label": "New · colorful",
  "desc": "Gebackene Rote Bete mit Feta, Zwiebeln und Knoblauch zu einer leuchtend roten Sauce püriert — modern, überraschend und wahnsinnig lecker.",
  "time": "50 Min",
  "min": 50,
  "diff": 2,
  "diffLabel": "Leicht",
  "portions": "4 Personen",
  "rating": 8,
  "img": "bilder/Pasta_rotebete.jpg",
  "thumb": "bilder/klein/Pasta_rotebete.jpg",
  "ings": [
   [
    "2–3",
    "mittelgroße Rote Beten (oder vorgekocht)"
   ],
   [
    "1",
    "mittelgroße Zwiebel"
   ],
   [
    "2",
    "Knoblauchzehen"
   ],
   [
    "150 g",
    "Feta (Schafskäse)"
   ],
   [
    "2 TL",
    "Salz"
   ],
   [
    "1 TL",
    "italienische Kräuter"
   ],
   [
    "1½ EL",
    "Olivenöl"
   ],
   [
    "400 g",
    "Pasta"
   ],
   [
    "optional",
    "Walnüsse"
   ],
   [
    "optional",
    "Parmesan"
   ]
  ],
  "steps": [
   [
    "Rote Bete kochen",
    "Rote Beten waschen und ungeschält in einen Topf geben. Mit Wasser auffüllen bis sie gut bedeckt sind. Einmal aufkochen, dann bei leicht köchelndem Wasser ca. 45 Minuten garen bis eine Gabel ohne Druck hineingeht. Herausnehmen und 30 Minuten abkühlen lassen. (Alternativ: vorgekochte Rote Bete kaufen.)"
   ],
   [
    "Backen",
    "Rote Beten schälen und vierteln. Zwiebel schälen und vierteln, Knoblauch schälen. Rote Bete, Zwiebel und Knoblauchzehen in eine Auflaufform verteilen. Feta im Ganzen mittig in die Form legen. Salz, Kräuter und Olivenöl gleichmäßig über alles verteilen. Bei 220 °C Umluft ca. 30 Minuten backen bis Feta und Zwiebel leicht geröstet sind."
   ],
   [
    "Sauce pürieren",
    "Auflaufform aus dem Ofen nehmen. Inhalt in den Standmixer geben und auf mittlerer Stufe zerkleinern bis eine homogene Masse entsteht. Dabei den Mixer immer wieder ausschalten und den Inhalt von oben nach unten schieben."
   ],
   [
    "Pasta & Finish",
    "Pasta nach Packungsanweisung garen. 1–2 Schöpfkellen Nudelwasser zur Sauce in den Mixbecher geben und kurz durchmixen. Pasta abgießen und zurück in den Topf. Rote-Bete-Sauce dazugeben und unterheben. Mit gehackten Walnüssen und geriebenem Parmesan als Topping servieren."
   ]
  ],
  "notes": [
   "Walnüsse und Parmesan als Topping sind Pflicht — sie geben Crunch und Tiefe.",
   "Rote Beten färben alles — am besten Handschuhe tragen beim Schälen.",
   "Vorgekochte Rote Bete aus dem Supermarkt spart viel Zeit."
  ]
 },
 {
  "id": "bolognese",
  "ch": "pasta",
  "name": "Ragù alla Bolognese",
  "script": "con beinscheiben — il ragù perfetto",
  "label": "Classico · bolognese",
  "desc": "Mit geschmorten Rinderbeinscheiben — 4 Stunden Schmoren bis das Fleisch vom Knochen fällt. Das Lieblingsrezept für die perfekte Fleischsauce.",
  "time": "3 Std+",
  "min": 180,
  "diff": 5,
  "diffLabel": "Mittel",
  "portions": "6 Personen",
  "rating": 10,
  "img": "bilder/Pasta_bolognese.png",
  "thumb": "bilder/klein/Pasta_bolognese.jpg",
  "ings": [
   [
    "2",
    "Karotten"
   ],
   [
    "2 Stangen",
    "Staudensellerie"
   ],
   [
    "2 EL",
    "Butterschmalz (oder Sonnenblumenöl)"
   ],
   [
    "800 g",
    "Rinderbeinscheibe (mit Knochen)"
   ],
   [
    "3",
    "mittelgroße Zwiebeln"
   ],
   [
    "2 EL",
    "Tomatenmark"
   ],
   [
    "1 Dose",
    "Tomaten"
   ],
   [
    "500 ml",
    "Hühnerbrühe"
   ],
   [
    "2",
    "Lorbeerblätter"
   ],
   [
    "1 Zweig",
    "Thymian"
   ],
   [
    "Salz & Pfeffer",
    "nach Geschmack"
   ]
  ],
  "steps": [
   [
    "Gemüse vorbereiten",
    "Karotten und Sellerie putzen, waschen, schälen und in feine Würfel schneiden."
   ],
   [
    "Fleisch anbraten",
    "Einen Schmortopf auf hoher Temperatur erhitzen und das Butterschmalz darin zergehen lassen. Beinscheibe dazugeben und Temperatur auf mittlere Hitze reduzieren. Von beiden Seiten ca. 3–4 Minuten anbraten bis eine schöne Kruste entsteht. Fleisch aus dem Topf nehmen und beiseite stellen."
   ],
   [
    "Gemüse & Sauce aufbauen",
    "Zwiebeln fein würfeln und mit Karotten und Sellerie in den Topf geben. Sobald das Gemüse weich gedünstet ist, Tomatenmark hinzufügen und kurz mitrösten. Dosentomaten und Brühe hinzugeben und alles einmal aufkochen lassen. Temperatur auf niedrige Stufe reduzieren."
   ],
   [
    "Schmoren",
    "Fleisch mit Lorbeerblättern, Thymian, Salz und Pfeffer zurück in den Topf geben. Bei geschlossenem Deckel unter gelegentlichem Umrühren ca. 4 Stunden schmoren lassen."
   ],
   [
    "Finalisieren",
    "Nach ca. 4 Stunden ist das Fleisch unglaublich zart und löst sich vom Knochen. Beinscheibe herausnehmen, Fleisch vom Knochen lösen und mit einer Gabel zerkleinern. Zurück in den Topf geben und die Fleischsauce nochmal aufkochen. Mit Spaghetti oder Linguine servieren."
   ]
  ],
  "notes": [
   "Wenn sich das Fleisch von alleine vom Knochen löst — dann ist alles richtig gemacht.",
   "Am besten wird das Ragù, wenn es noch übernacht zieht!",
   "Ein Schuss Rotwein könnte noch ein Highlight sein vorm ablöschen."
  ]
 },
 {
  "id": "zitronenlachs",
  "ch": "pasta",
  "name": "Cremige Zitronen-Knoblauch-Pasta mit Lachs",
  "script": "salmone al limone e aglio",
  "label": "Creamy · Limone",
  "desc": "Goldbraun gebratener Lachs auf Bandnudeln in cremiger Zitronen-Knoblauch-Sauce mit Parmesan und frischer Petersilie. Das einfache Feierabend-Gericht.",
  "time": "35 Min",
  "min": 35,
  "diff": 4,
  "diffLabel": "Mittel-Einfach",
  "portions": "ca. 2–3 Personen",
  "rating": null,
  "img": "",
  "thumb": "",
  "ings": [
   [
    "— Lachs —",
    ""
   ],
   [
    "nach Bedarf",
    "Lachsfilets"
   ],
   [
    "2 EL",
    "Olivenöl"
   ],
   [
    "2 EL",
    "Butter"
   ],
   [
    "nach Geschmack",
    "Salz und schwarzer Pfeffer"
   ],
   [
    "1 TL",
    "Paprikapulver"
   ],
   [
    "½ TL",
    "Knoblauchpulver"
   ],
   [
    "½ TL",
    "Zwiebelpulver"
   ],
   [
    "1 TL",
    "getrocknete Petersilie"
   ],
   [
    "1 TL",
    "Zitronenabrieb"
   ],
   [
    "½ TL",
    "Thymian"
   ],
   [
    "½ TL",
    "Allzweck-Gewürzmischung"
   ],
   [
    "— Pasta —",
    ""
   ],
   [
    "nach Bedarf",
    "Fettuccine, Linguine oder Tagliatelle"
   ],
   [
    "etwas",
    "Salz für das Nudelwasser"
   ],
   [
    "— Cremige Zitronen-Knoblauch-Sauce —",
    ""
   ],
   [
    "1 EL",
    "Butter"
   ],
   [
    "1 EL",
    "Olivenöl"
   ],
   [
    "4",
    "Knoblauchzehen, fein gehackt"
   ],
   [
    "1 mittelgroße",
    "Zwiebel, fein gewürfelt"
   ],
   [
    "1 Schuss",
    "trockener Weißwein"
   ],
   [
    "250 ml",
    "Sahne"
   ],
   [
    "60 g",
    "Parmesan, gerieben"
   ],
   [
    "Abrieb von 1",
    "Zitrone"
   ],
   [
    "Saft von ½–1",
    "Zitrone, nach Geschmack"
   ],
   [
    "2 EL",
    "frische Petersilie, gehackt"
   ],
   [
    "nach Geschmack",
    "Salz und frisch gemahlener schwarzer Pfeffer"
   ],
   [
    "nach Geschmack",
    "Paprikapulver, Oregano, Chiliflocken, Allzweck-Gewürzmischung, Zwiebelpulver"
   ]
  ],
  "steps": [
   [
    "Pasta kochen",
    "Einen großen Topf mit Salzwasser zum Kochen bringen. Die Pasta nach Packungsanweisung al dente kochen. Vor dem Abgießen ca. 120 ml Nudelwasser auffangen."
   ],
   [
    "Lachs braten",
    "Die Lachsfilets mit Küchenpapier trocken tupfen. Mit Olivenöl beträufeln und mit Salz, Pfeffer, Paprikapulver, Knoblauchpulver, Zwiebelpulver, getrockneter Petersilie, Zitronenabrieb, Thymian und Allzweck-Gewürzmischung würzen. Olivenöl und Butter in einer großen Pfanne bei mittlerer bis hoher Hitze erhitzen. Den Lachs je nach Dicke ca. 3–4 Minuten pro Seite goldbraun braten, bis er gar ist. Dabei zwischendurch mit der geschmolzenen Butter aus der Pfanne beträufeln. Den Lachs aus der Pfanne nehmen und beiseitestellen."
   ],
   [
    "Cremige Zitronen-Knoblauch-Sauce zubereiten",
    "Die Hitze auf mittlere Stufe reduzieren. Butter und etwas Olivenöl in derselben Pfanne erhitzen. Die gewürfelte Zwiebel und den gehackten Knoblauch hinzufügen und ca. 30–60 Sekunden anschwitzen, bis sie duften. Mit einem Schuss Weißwein ablöschen und fast vollständig einkochen lassen. Dann die Sahne hineingießen und 2–3 Minuten sanft köcheln lassen. Mit Salz, Pfeffer, Paprikapulver, Oregano, Chiliflocken, Allzweck-Gewürzmischung und Zwiebelpulver abschmecken. Zitronenabrieb und Zitronensaft hinzufügen. Parmesan und frische Petersilie einrühren, bis eine cremige Sauce entsteht."
   ],
   [
    "Pasta mit der Sauce vermengen",
    "Die gekochte Pasta direkt in die Sauce geben und gut vermischen. Falls die Sauce zu dick ist, nach und nach etwas vom aufgefangenen Nudelwasser hinzufügen, bis die gewünschte Konsistenz erreicht ist."
   ],
   [
    "Anrichten und servieren",
    "Die Pasta auf Tellern anrichten. Die gebratenen Lachsfilets darauflegen oder in Stücke teilen und unter die Pasta heben. Nach Belieben mit zusätzlichem Parmesan, Petersilie und etwas Zitronensaft garnieren."
   ]
  ],
  "notes": [
   "Den Zitronensaft nach und nach hinzufügen und zwischendurch abschmecken. So wird die Sauce schön frisch, ohne dass die Zitrone den Geschmack von Lachs und Parmesan überdeckt."
  ]
 },
 {
  "id": "smash",
  "ch": "fleisch",
  "name": "Smash Burger",
  "script": "double smash · cheddar · karamellisierte Zwiebeln",
  "label": "TheBEST · Smasher",
  "desc": "600 g Rinderhack, doppelter Cheddar, karamellisierte Zwiebeln, knuspriger Bacon und die beste Burger-Soße die du je gegessen hast.",
  "time": "30 Min",
  "min": 30,
  "diff": 4,
  "diffLabel": "Einfach",
  "portions": "4 Burger",
  "rating": 10,
  "img": "bilder/Fleisch&Fisch_smashburger.png",
  "thumb": "bilder/klein/Fleisch&Fisch_smashburger.jpg",
  "ings": [
   [
    "600 g",
    "Rinderhack"
   ],
   [
    "4",
    "Brioche Buns"
   ],
   [
    "8 Scheiben",
    "Cheddar"
   ],
   [
    "optional",
    "Bacon"
   ],
   [
    "nach Bedarf",
    "Salat"
   ],
   [
    "nach Bedarf",
    "Tomaten"
   ],
   [
    "nach Bedarf",
    "Essiggurken"
   ],
   [
    "2",
    "Zwiebeln"
   ],
   [
    "Salz & Pfeffer",
    "nach Geschmack"
   ],
   [
    "— Soße —",
    ""
   ],
   [
    "2 EL",
    "Mayo"
   ],
   [
    "1 EL",
    "Senf"
   ],
   [
    "2 EL",
    "Ketchup"
   ],
   [
    "2 EL",
    "BBQ-Soße"
   ],
   [
    "2 TL",
    "Gurkenwasser"
   ],
   [
    "wenig",
    "Zitronensaft"
   ],
   [
    "1 TL",
    "Honig"
   ],
   [
    "Salz & Pfeffer",
    "nach Geschmack"
   ]
  ],
  "steps": [
   [
    "Alles vorbereiten",
    "Salat, Tomaten und Essiggurken schneiden. Käse bereitlegen. Bacon bereitlegen. Buns halbieren."
   ],
   [
    "Soße verrühren",
    "Mayo, Senf, Ketchup, BBQ-Soße, Gurkenwasser, Zitronensaft, Honig, Salz und Pfeffer gut verrühren. Kühl stellen."
   ],
   [
    "Zwiebeln karamellisieren",
    "Zwiebeln in Ringe schneiden und bei niedriger Hitze mit Butter und etwas Salz 10–15 Minuten langsam karamellisieren. Nicht hetzen — die Zeit macht es."
   ],
   [
    "Bacon braten",
    "Bacon in einer Pfanne knusprig braten. Beiseitestellen."
   ],
   [
    "Buns toasten",
    "Buns auf der Innenseite in der Pfanne goldbraun toasten."
   ],
   [
    "Fleisch formen",
    "Rinderhack in 8 gleichmäßige Kugeln formen (à ca. 75 g). Nicht würzen — erst auf der Pfanne!"
   ],
   [
    "Smashen & braten",
    "Pfanne sehr heiß erhitzen. Fleischkugel drauflegen, sofort mit einem Pfannenwender flach smashen. Salzen und pfeffern. 1–2 Minuten scharf braten. Wenden. Sofort Cheddar drauflegen und schmelzen lassen."
   ],
   [
    "Burger bauen",
    "Unten: Bun → Soße → Salat → Patty → Zwiebeln → Bacon → Patty → Tomaten → Gurken → Soße → oberes Bun. Sofort essen!"
   ]
  ],
  "notes": [
   "Die Pfanne muss SEHR heiß sein — das ist das Geheimnis der Kruste.",
   "Nicht zu früh würzen: erst auf der Pfanne, damit das Fleisch schön Farbe bekommt.",
   "Doppelter Patty = doppelter Geschmack. Nicht sparen.",
   "Gurkenwasser in der Soße ist der Geheimtipp — macht sie runder und frischer."
  ]
 },
 {
  "id": "honeychicken",
  "ch": "fleisch",
  "name": "Crispy Honey Chicken Burger",
  "script": "frittiert · honey-glaze · joghurt-sour-cream",
  "label": "Spicy · Honey",
  "desc": "Buttermilch-mariniertes Hähnchen, doppelt paniert und frittiert — mit süßer Honey-Glaze, doppeltem Käse und frischer Joghurt-Sour-Cream-Sauce.",
  "time": "60 Min + Marinierzeit",
  "min": 60,
  "diff": 6,
  "diffLabel": "Mittel",
  "portions": "2 Burger",
  "rating": 9,
  "img": "bilder/Fleisch&Fisch_honeychicken.png",
  "thumb": "bilder/klein/Fleisch&Fisch_honeychicken.jpg",
  "ings": [
   [
    "— Chicken —",
    ""
   ],
   [
    "2",
    "Hähnchenbrustfilets"
   ],
   [
    "200 ml",
    "Buttermilch"
   ],
   [
    "1 TL",
    "Paprikapulver"
   ],
   [
    "½ TL",
    "Knoblauchpulver"
   ],
   [
    "Salz & Pfeffer",
    "nach Geschmack"
   ],
   [
    "— Panade —",
    ""
   ],
   [
    "120 g",
    "Weizenmehl 450"
   ],
   [
    "2 EL",
    "Speisestärke"
   ],
   [
    "1 TL",
    "Paprikapulver"
   ],
   [
    "½ TL",
    "Salz"
   ],
   [
    "Pfeffer",
    "nach Geschmack"
   ],
   [
    "— Frittieren —",
    ""
   ],
   [
    "nach Bedarf",
    "Biskin Pflanzenöl (oder neutrales Öl)"
   ],
   [
    "— Honey-Glaze —",
    ""
   ],
   [
    "2 EL",
    "Honig"
   ],
   [
    "1 TL",
    "Butter"
   ],
   [
    "½ TL",
    "Sojasauce"
   ],
   [
    "Prise",
    "Chili oder Paprika"
   ],
   [
    "— Joghurt-Sour-Cream Sauce —",
    ""
   ],
   [
    "2 EL",
    "griechischer Joghurt"
   ],
   [
    "2 EL",
    "Saure Sahne"
   ],
   [
    "1 EL",
    "Mayonnaise"
   ],
   [
    "½ TL",
    "Zitronensaft"
   ],
   [
    "3–4 EL",
    "Gurke (sehr fein gehackt, gut ausgedrückt)"
   ],
   [
    "nach Bedarf",
    "Petersilie oder Dill"
   ],
   [
    "optional",
    "½ Schalotte (sehr fein gerieben)"
   ],
   [
    "Salz & Pfeffer",
    "nach Geschmack"
   ],
   [
    "— Burger —",
    ""
   ],
   [
    "2",
    "Burger Buns"
   ],
   [
    "nach Bedarf",
    "Rucola"
   ],
   [
    "nach Bedarf",
    "Vogerlsalat (Feldsalat)"
   ],
   [
    "2–4 Scheiben",
    "Tomaten (dünn)"
   ],
   [
    "1 Scheibe",
    "Gouda oder Emmentaler"
   ],
   [
    "1 Scheibe",
    "Cheddar"
   ],
   [
    "Butter",
    "für die Buns"
   ]
  ],
  "steps": [
   [
    "Chicken marinieren",
    "Hähnchen leicht flach klopfen. In Buttermilch mit Paprikapulver, Knoblauchpulver, Salz und Pfeffer einlegen. Mindestens 30 Minuten, besser 2 Stunden ziehen lassen."
   ],
   [
    "Sauce vorbereiten",
    "Gurke fein reiben oder hacken, salzen, 5 Minuten ziehen lassen und komplett ausdrücken. Joghurt, Saure Sahne, Mayo, Zitronensaft, Gurke, Petersilie oder Dill und optional Schalotte gut verrühren. Mit Salz & Pfeffer abschmecken. Kalt stellen."
   ],
   [
    "Panade mischen & panieren",
    "Mehl, Speisestärke, Paprikapulver und Salz vermengen. Chicken aus der Buttermilch heben, ins Mehl drücken, kurz zurück in die Buttermilch, nochmal ins Mehl. Panade ruhig uneben lassen — das gibt extra Crunch!"
   ],
   [
    "Frittieren",
    "Öl auf ca. 170–180 °C erhitzen (Stufe 6–7). Chicken vorsichtig einlegen und 5–7 Minuten frittieren bis es goldbraun und knusprig ist. Auf Küchenpapier + Gitter ablegen, 1 Minute ruhen lassen."
   ],
   [
    "Käse schmelzen",
    "Auf das heiße Chicken zuerst Gouda/Emmentaler, dann Cheddar legen. Kurz schmelzen lassen oder 1 Minute in den warmen Ofen stellen."
   ],
   [
    "Honey-Glaze erhitzen",
    "Honig, Butter, Sojasauce und Chili/Paprika kurz erhitzen und sirupartig machen. Großzügig über das Chicken träufeln."
   ],
   [
    "Buns vorbereiten",
    "Buns mit Butter in der Pfanne auf der Innenseite goldbraun anrösten."
   ],
   [
    "Burger bauen",
    "Reihenfolge: Bun unten → Joghurt-Sour-Cream Sauce → Rucola + Vogerlsalat → Tomate → Crispy Chicken mit Käse und Honey-Glaze → etwas extra Sauce → Bun oben. Sofort genießen!"
   ]
  ],
  "notes": [
   "Doppelt panieren ist das Geheimnis der unebenen, ultra-knusprigen Kruste.",
   "Gurke im Dip wirklich komplett ausdrücken — sonst wird die Sauce wässrig.",
   "Frittiertemperatur kontrollieren: zu heiß = außen dunkel, innen roh. 170–180 °C ist perfekt.",
   "Ergebnis: ultra knusprig · cremig frisch · süß-salzig · echter Restaurant-Level 🍔🔥"
  ]
 },
 {
  "id": "taco",
  "ch": "fleisch",
  "name": "Taco-Buffet für 2 Personen",
  "script": "hack + chicken · 3 dips · pico de gallo",
  "label": "Taco-Bar · Dips",
  "desc": "Knusprige Taco-Schiffchen, würziges Hackfleisch, frisches Zitronen-Chicken, Pico de Gallo, Avocado-Cream, Sour Cream und Chipotle-Dip.",
  "time": "45 Min",
  "min": 45,
  "diff": 6,
  "diffLabel": "Mittel",
  "portions": "2 Personen",
  "rating": 9.5,
  "img": "bilder/Fleisch&Fisch_taco.png",
  "thumb": "bilder/klein/Fleisch&Fisch_taco.jpg",
  "ings": [
   [
    "— Dips —",
    ""
   ],
   [
    "100 g",
    "Sour Cream"
   ],
   [
    "1",
    "kleine Avocado"
   ],
   [
    "1 EL",
    "Joghurt/Schmand"
   ],
   [
    "1,5 EL",
    "Mayo"
   ],
   [
    "½ EL",
    "Sour Cream (Chipotle)"
   ],
   [
    "½ TL",
    "geräuchertes Paprikapulver oder Chipotle"
   ],
   [
    "2 TL",
    "Limettensaft"
   ],
   [
    "1 Knoblauchzehe",
    "(halb)"
   ],
   [
    "Salz & Schnittlauch",
    "nach Geschmack"
   ],
   [
    "— Salat & Salsa —",
    ""
   ],
   [
    "1 Hand",
    "Eisbergsalat, fein geschnitten"
   ],
   [
    "1 TL",
    "Limettensaft"
   ],
   [
    "1",
    "Tomate, gewürfelt"
   ],
   [
    "¼",
    "Zwiebel, fein"
   ],
   [
    "optional",
    "Koriander"
   ],
   [
    "— Taco-Schiffchen —",
    ""
   ],
   [
    "6–8 kleine",
    "Tortillas"
   ],
   [
    "etwas",
    "Wasser"
   ],
   [
    "etwas",
    "Öl"
   ],
   [
    "Salz",
    "nach Geschmack"
   ],
   [
    "— Hackfleisch-Tacos —",
    ""
   ],
   [
    "200 g",
    "Rinderhack"
   ],
   [
    "1 kleine",
    "rote Zwiebel, fein"
   ],
   [
    "1",
    "Knoblauchzehe"
   ],
   [
    "½ EL",
    "Tomatenmark"
   ],
   [
    "½ TL",
    "Paprika edelsüß"
   ],
   [
    "½ TL",
    "geräuchertes Paprikapulver"
   ],
   [
    "½ TL",
    "Kreuzkümmel"
   ],
   [
    "Prise",
    "Chili"
   ],
   [
    "Salz & Pfeffer",
    "nach Geschmack"
   ],
   [
    "20–30 ml",
    "Wasser"
   ],
   [
    "— Chicken-Tacos —",
    ""
   ],
   [
    "200–250 g",
    "Hähnchenbrust"
   ],
   [
    "½ TL",
    "Paprika"
   ],
   [
    "½ TL",
    "Knoblauchpulver"
   ],
   [
    "½ TL",
    "Kreuzkümmel"
   ],
   [
    "½ EL",
    "Zitronen- oder Limettensaft"
   ],
   [
    "½ EL",
    "Öl"
   ],
   [
    "Salz & Pfeffer",
    "nach Geschmack"
   ],
   [
    "½",
    "Paprika"
   ],
   [
    "¼",
    "rote Zwiebel"
   ],
   [
    "etwas",
    "Petersilie oder Koriander"
   ]
  ],
  "steps": [
   [
    "Sour Cream Dip",
    "Sour Cream mit Limettensaft, halber Knoblauchzehe und Schnittlauch verrühren. Mit Salz abschmecken."
   ],
   [
    "Avocado Cream",
    "Avocado zerdrücken, mit Joghurt oder Schmand, Limettensaft, Salz und Pfeffer cremig rühren."
   ],
   [
    "Smoky Chipotle Dip",
    "Mayo, Sour Cream, geräuchertes Paprikapulver oder Chipotle, Limettensaft und Salz verrühren."
   ],
   [
    "Beilagen vorbereiten",
    "Eisbergsalat fein schneiden, mit Limettensaft und Prise Salz mischen. Pico de Gallo: Tomate würfeln, Zwiebel fein hacken, mit Limettensaft und Salz mischen. Optional Koriander dazu."
   ],
   [
    "Taco-Schiffchen backen",
    "Ofen auf 180–190 °C vorheizen. Tortillas leicht mit Wasser bepinseln, über das Ofengitter hängen (Schiffchenform). Mit wenig Öl bestreichen und salzen. 8–12 Minuten backen bis sie leicht knusprig sind. Kurz abkühlen lassen — werden dann stabil."
   ],
   [
    "Hackfleisch-Tacos",
    "Hack scharf anbraten. Zwiebel und Knoblauch dazugeben. Tomatenmark kurz mitrösten. Alle Gewürze und Wasser einrühren. 3–5 Minuten köcheln lassen."
   ],
   [
    "Chicken-Tacos",
    "Hähnchen würzen und 10 Minuten marinieren. Anbraten. Paprika und rote Zwiebel kurz mitbraten. Abschmecken und mit Petersilie oder Koriander bestreuen."
   ],
   [
    "Buffet aufbauen & genießen",
    "Alle Komponenten in Schälchen anrichten. Taco-Schiffchen, Hack und Chicken getrennt servieren. Jeder befüllt seinen Taco selbst — Buffet-Style! 🌮✨"
   ]
  ],
  "notes": [
   "Tortillas über das Ofengitter hängen gibt die perfekte Schiffchenform.",
   "Alle Dips können 30 Minuten vorher gemacht werden — schmecken dann noch besser.",
   "Das Buffet macht am meisten Spaß wenn jeder selbst belegen kann.",
   "Chipotle-Dip ist der Geheimtipp — gibt eine wunderbare rauchige Note."
  ]
 },
 {
  "id": "pesto",
  "ch": "fleisch",
  "name": "Pesto-Brot mit Hähnchen",
  "script": "hausgemachtes brot · pesto · mariniertes hähnchen",
  "label": "Refreshing · Bread",
  "desc": "Selbstgebackenes Pesto-Parmesan-Brot mit mariniertem Hähnchen, Mozzarella, Tomaten und Rucola — aufwändig, aber jeden Bissen wert.",
  "time": "2 Std 15 Min",
  "min": 135,
  "diff": 3,
  "diffLabel": "Leicht",
  "portions": "6 Stück",
  "rating": 7.5,
  "img": "bilder/Fleisch&Fisch_pestobrot.png",
  "thumb": "bilder/klein/Fleisch&Fisch_pestobrot.jpg",
  "ings": [
   [
    "— Teig —",
    ""
   ],
   [
    "500 g",
    "Mehl"
   ],
   [
    "40 g",
    "Parmesan"
   ],
   [
    "40 ml",
    "Olivenöl"
   ],
   [
    "10 g",
    "Trockenhefe"
   ],
   [
    "12 g",
    "Honig"
   ],
   [
    "8 g",
    "Salz"
   ],
   [
    "280 ml",
    "Wasser"
   ],
   [
    "— Hähnchen-Marinade —",
    ""
   ],
   [
    "4 g",
    "Salz"
   ],
   [
    "3 g",
    "Zwiebelpulver"
   ],
   [
    "3 g",
    "Knoblauchpulver"
   ],
   [
    "3 g",
    "Paprikapulver"
   ],
   [
    "2 g",
    "Cayennepfeffer"
   ],
   [
    "2 g",
    "getrocknete Petersilie"
   ],
   [
    "25 ml",
    "Olivenöl"
   ],
   [
    "— Füllung —",
    ""
   ],
   [
    "nach Bedarf",
    "Mozzarella in Scheiben"
   ],
   [
    "nach Bedarf",
    "Pesto"
   ],
   [
    "nach Bedarf",
    "Tomaten in Scheiben"
   ],
   [
    "nach Bedarf",
    "Rucola"
   ]
  ],
  "steps": [
   [
    "Teig kneten",
    "Alle Teigzutaten vermengen und zu einem glatten Teig kneten. Den Teig 1 Stunde an einem warmen Ort ruhen lassen."
   ],
   [
    "Teig portionieren",
    "Teig in 6 Portionen teilen, flach ausrollen, einmal aufeinander klappen und auf ein Backblech legen. Leicht mit Pesto bestreichen und mit Parmesan bestreuen. Weitere 30 Minuten ruhen lassen."
   ],
   [
    "Brot backen",
    "Teigstücke im vorgeheizten Backofen bei 190 °C (Ober- und Unterhitze) ca. 15 Minuten backen bis sie goldbraun sind."
   ],
   [
    "Hähnchen marinieren",
    "Hähnchen mit Salz, Zwiebelpulver, Knoblauchpulver, Paprikapulver, Cayennepfeffer und Petersilie einreiben. Mit Olivenöl vermengen und mindestens 30 Minuten marinieren."
   ],
   [
    "Hähnchen backen",
    "Mariniertes Hähnchen bei 190 °C ca. 20 Minuten garen. Mit geriebenem Käse bestreuen und weitere 5 Minuten überbacken. In den letzten 5 Minuten Tomatenscheiben auf das Hähnchen legen und mitbacken."
   ],
   [
    "Füllen & Servieren",
    "Das gebackene Brot aufschneiden. Mit dem gebackenen Hähnchen, Mozzarella-Scheiben, Rucola und nach Bedarf Pesto oder Soße belegen. Sofort servieren."
   ]
  ],
  "notes": [
   "Das Hähnchen kann nach Geschmack mit anderen Gewürzen variiert werden.",
   "Vegetarische Alternative: Hähnchen durch gegrillte Zucchini oder Aubergine ersetzen.",
   "Das Brot frisch essen — es schmeckt direkt aus dem Ofen am besten."
  ]
 },
 {
  "id": "chickenparm",
  "ch": "fleisch",
  "name": "Chickenparm-Sandwich",
  "script": "paniertes hähnchen · tomatensauce · mozzarella",
  "label": "Sandwich · Italian",
  "desc": "Knusprig paniertes Hähnchen auf geröstetem Ciabatta mit hausgemachter Tomatensauce, Mozzarella, Parmesan und frischem Basilikum.",
  "time": "60 Min",
  "min": 60,
  "diff": 4,
  "diffLabel": "Einfach",
  "portions": "2 Sandwiches",
  "rating": 6,
  "img": "bilder/Fleisch&Fisch_chickenparm.png",
  "thumb": "bilder/klein/Fleisch&Fisch_chickenparm.jpg",
  "ings": [
   [
    "— Sauce —",
    ""
   ],
   [
    "500 ml",
    "Tomatensauce"
   ],
   [
    "1",
    "kleine Zwiebel"
   ],
   [
    "1-2",
    "Knoblauchzehen"
   ],
   [
    "Salz & Pfeffer",
    "nach Geschmack"
   ],
   [
    "nach Bedarf",
    "Olivenöl"
   ],
   [
    "— Hähnchen —",
    ""
   ],
   [
    "2",
    "Hähnchenbrüste"
   ],
   [
    "1",
    "Brot (Baguette oder Ciabatta)"
   ],
   [
    "300 g",
    "Mozzarella"
   ],
   [
    "nach Bedarf",
    "Parmesan oder Bergkäse"
   ],
   [
    "frisch",
    "Basilikum"
   ],
   [
    "Ei, Mehl",
    "und Paniermehl"
   ]
  ],
  "steps": [
   [
    "Zwiebeln & Knoblauch",
    "Zwiebel und Knoblauch schälen, klein hacken und in Olivenöl anbraten."
   ],
   [
    "Tomatensauce",
    "Tomatensauce mit Zwiebeln und Knoblauch vermengen. Mit Salz, Pfeffer und gehacktem Basilikum würzen. Beiseitestellen."
   ],
   [
    "Hähnchen panieren",
    "Hähnchenbrüste halbieren und dünn klopfen. In Mehl, Ei und Paniermehl wenden."
   ],
   [
    "Hähnchen braten",
    "Paniertes Hähnchen in Olivenöl goldbraun braten. Beiseitestellen."
   ],
   [
    "Sandwich vorbereiten",
    "Brot halbieren und leicht anrösten. Tomatensauce auf die Brothälften geben."
   ],
   [
    "Belegen",
    "Gebratenes Hähnchen auf die Brote legen. Mit Mozzarella und Parmesan bestreuen."
   ],
   [
    "Backen",
    "Im Backofen bei 180 °C (Oberhitze) ca. 10 Minuten backen bis der Käse geschmolzen ist."
   ],
   [
    "Servieren",
    "Mit frischem Basilikum garnieren. Optional mit Salat oder Pommes servieren."
   ]
  ],
  "notes": [
   "Variante: Putenschnitzel als Alternative zu Hähnchen verwenden.",
   "Tipp: Auch Cornflakes sorgen für eine besonders knusprige Panade.",
   "Das Brot gut anrösten — sonst wird es durch die Sauce weich."
  ]
 },
 {
  "id": "rostbraten",
  "ch": "fleisch",
  "name": "Zwiebelrostbraten mit Rotwein-Zwiebelsauce",
  "script": "röstzwiebeln · rotwein · spätzle · rotkohl",
  "label": "Austria · Time",
  "desc": "Saftiges Rindersteak mit tiefer Rotwein-Zwiebelsauce, knusprigen Röstzwiebeln, Spätzle und Rotkohl — das perfekte Sonntagsgericht.",
  "time": "70 Min",
  "min": 70,
  "diff": 8,
  "diffLabel": "Anspruchsvoll",
  "portions": "3 Personen",
  "rating": 9.5,
  "img": "bilder/Fleisch&Fisch_zwiebelrostbraten.png",
  "thumb": "bilder/klein/Fleisch&Fisch_zwiebelrostbraten.jpg",
  "ings": [
   [
    "— Fleisch —",
    ""
   ],
   [
    "2–3",
    "Rindersteaks (Rostbraten / Hüfte / Entrecôte)"
   ],
   [
    "Salz & Pfeffer",
    "nach Geschmack"
   ],
   [
    "Öl oder Butterschmalz",
    "zum Braten"
   ],
   [
    "1 Butterflocke",
    "+ Rosmarinzweig (zum Warmhalten)"
   ],
   [
    "— Soße —",
    ""
   ],
   [
    "2 - 3 große",
    "Zwiebeln (grob geschnitten)"
   ],
   [
    "1 EL",
    "Tomatenmark"
   ],
   [
    "1 EL",
    "Mehl"
   ],
   [
    "200–300 ml",
    "Rotwein (trocken)"
   ],
   [
    "500 ml",
    "Rinderbrühe"
   ],
   [
    "Salz & Pfeffer",
    "nach Geschmack"
   ],
   [
    "1 kleines Stück",
    "Butter (Finish)"
   ],
   [
    "— Röstzwiebeln —",
    ""
   ],
   [
    "2 große",
    "Zwiebeln"
   ],
   [
    "nach Bedarf",
    "Mehl"
   ],
   [
    "Salz",
    "nach Geschmack"
   ],
   [
    "Öl",
    "zum Frittieren"
   ],
   [
    "— Beilagen —",
    ""
   ],
   [
    "nach Bedarf",
    "Rotkraut"
   ],
   [
    "Spätzle",
    "→ Rezept in Salat & Beilagen"
   ]
  ],
  "steps": [
   [
    "Fleisch braten & warmhalten",
    "Steaks salzen und pfeffern. In heißem Öl oder Butterschmalz scharf anbraten (2–3 Min. pro Seite). Herausnehmen. In Alufolie wickeln mit Butterflocke und Rosmarinzweig. Bei 70–80 °C im Ofen warmhalten."
   ],
   [
    "Röstzwiebeln (parallel)",
    "Zwiebeln in feine Ringe schneiden. Leicht salzen und in Mehl wenden. In heißem Öl (170–180 °C) goldbraun frittieren. Auf Küchenpapier abtropfen."
   ],
   [
    "Soße aufbauen",
    "Im Bratensatz die 2 groben Zwiebeln kräftig anrösten. Tomatenmark dazugeben und dunkel mitrösten. Mehl darüberstreuen und kurz anschwitzen."
   ],
   [
    "Ablöschen & reduzieren",
    "Mit Rotwein ablöschen, gut rühren. Kurz stark einkochen lassen. Mit Rinderbrühe auffüllen."
   ],
   [
    "Soße köcheln lassen",
    "15–25 Minuten leicht köcheln lassen. Die Zwiebeln dürfen zerfallen — das sorgt für natürliche Bindung und Tiefe."
   ],
   [
    "Soße vollenden",
    "Mit Salz und Pfeffer abschmecken. Eine kleine Butterflocke einrühren für Glanz und Rundung."
   ],
   [
    "Anrichten",
    "Spätzle als Basis auf den Teller geben. Steak darauf oder daneben legen. Rotkraut separat anrichten. Soße großzügig über alles geben. Röstzwiebeln ganz oben als Crunch-Topping. Sofort servieren!"
   ]
  ],
  "notes": [
   "Fleisch nicht zu lange kochen — Steak nur kurz in die Soße legen oder nappieren, nie mehr erhitzen.",
   "Den Bratensatz nicht vergessen — das ist der Geschmack der Soße!",
   "Rotwein wirklich gut einkochen lassen bevor die Brühe kommt — das gibt Tiefe.",
   "[Zum Spätzle-Rezept](sonstiges.html#spaetzle)"
  ]
 },
 {
  "id": "lachs",
  "ch": "fleisch",
  "name": "Zitronen-Lachs mit Petersilienkartoffeln",
  "script": "lachs im ofen · honig-olivenöl-marinade",
  "label": "Lovly · Zitrone",
  "desc": "Lachsfilets in Honig-Olivenöl-Marinade mit Thymian und Zitrone im Ofen gegart — dazu klassische Petersilienkartoffeln.",
  "time": "40 Min",
  "min": 40,
  "diff": 2,
  "diffLabel": "Sehr leicht",
  "portions": "4 Personen",
  "rating": 9,
  "img": "bilder/Fleisch&Fisch_zitronenlachs.png",
  "thumb": "bilder/klein/Fleisch&Fisch_zitronenlachs.jpg",
  "ings": [
   [
    "5–6",
    "Kartoffeln"
   ],
   [
    "20 g",
    "Butter"
   ],
   [
    "grobes",
    "Meersalz"
   ],
   [
    "nach Bedarf",
    "Petersilie, gehackt"
   ],
   [
    "Salz & Pfeffer",
    "nach Geschmack"
   ],
   [
    "1",
    "Zitrone"
   ],
   [
    "4",
    "Lachsfilets"
   ],
   [
    "60 ml",
    "Olivenöl"
   ],
   [
    "2–3",
    "Knoblauchzehen"
   ],
   [
    "1 EL",
    "Honig"
   ],
   [
    "5 Stiele",
    "Thymianzweige"
   ]
  ],
  "steps": [
   [
    "Kartoffeln kochen",
    "Geschälte Kartoffeln in gesalzenem Wasser ca. 20–30 Minuten weichkochen."
   ],
   [
    "Backofen vorheizen",
    "Den Backofen auf 200 °C Ober-/Unterhitze vorheizen. Eine Auflaufform mit etwas Olivenöl einfetten."
   ],
   [
    "Lachs vorbereiten",
    "Lachsfilets von der Haut entfernen, trocken tupfen und salzen. In die Auflaufform legen."
   ],
   [
    "Zitrone & Marinade",
    "Zitrone in grobe Scheiben schneiden. Zitronenscheiben und Thymianzweige um die Lachsfilets legen. Knoblauchzehen (geschält) dazugeben. 60 ml Olivenöl, 1 EL Honig und Salz & Pfeffer verrühren und über den Lachs geben."
   ],
   [
    "Lachs backen",
    "Lachs im Ofen für ca. 20 Minuten backen bis er durch und leicht goldbraun ist."
   ],
   [
    "Kartoffeln abschließen",
    "Die Kartoffeln mit zerlassener Butter, gehackter Petersilie, Salz und Pfeffer abschmecken."
   ],
   [
    "Anrichten",
    "Lachs mit den Kartoffeln servieren und mit frischen Thymianzweigen garnieren."
   ]
  ],
  "notes": [
   "Alternative: Statt Petersilie kann auch Rosmarin verwendet werden.",
   "Extra-Tipp: Die Kartoffeln mit etwas Zitronenschale verfeinern für mehr Frische.",
   "Den Lachs nicht überbacken — er soll innen noch leicht glasig und saftig bleiben."
  ]
 },
 {
  "id": "kalorien",
  "ch": "fleisch",
  "name": "650 Kalorien All-in-All",
  "script": "rinderhack · avocado · kartoffeln · fitness",
  "label": "Low fat · 650 kcal",
  "desc": "Ofenkartoffeln, gewürztes Rinderhack mit Käse, frischer Avocado-Dip und Tomatensalat — alles für ca. 650 Kalorien.",
  "time": "30 Min",
  "min": 30,
  "diff": 4,
  "diffLabel": "Einfach",
  "portions": "1 Person",
  "rating": 7,
  "img": "bilder/Fleisch&Fisch_650kalorien.jpg",
  "thumb": "bilder/klein/Fleisch&Fisch_650kalorien.jpg",
  "ings": [
   [
    "— Gemüse & Beilagen —",
    ""
   ],
   [
    "300 g",
    "Kartoffeln"
   ],
   [
    "1",
    "Zwiebel"
   ],
   [
    "1",
    "Avocado"
   ],
   [
    "1 Zehe",
    "Knoblauch"
   ],
   [
    "100 g",
    "Tomaten"
   ],
   [
    "30 g",
    "Joghurt"
   ],
   [
    "— Fleisch —",
    ""
   ],
   [
    "200 g",
    "Rinderhack"
   ],
   [
    "½",
    "Zitrone"
   ],
   [
    "nach Bedarf",
    "Petersilie (frisch)"
   ],
   [
    "Salz, Pfeffer",
    "Paprikapulver"
   ],
   [
    "nach Wahl",
    "light Mozzarella oder Protein Käse"
   ]
  ],
  "steps": [
   [
    "Kartoffeln backen",
    "Kartoffeln in mundgerechte Würfel schneiden. Mit Olivenöl, Salz und Paprikapulver vermengen. Auf ein Backblech legen und bei 200 °C Umluft ca. 20 Minuten backen."
   ],
   [
    "Avocado-Dip",
    "Avocado in einer Schüssel zerdrücken. Knoblauch pressen und hinzufügen. Mit Zitronensaft, Salz und Pfeffer abschmecken."
   ],
   [
    "Tomatensalat",
    "Tomaten klein schneiden. Zwiebel fein hacken und dazugeben. Mit Salz, Pfeffer und Zitronensaft würzen. Alles gut vermengen."
   ],
   [
    "Rinderhack",
    "Hackfleisch mit Salz, Pfeffer und Paprikapulver würzen. Petersilie hacken und untermischen. In einer Pfanne mit etwas Öl krümelig braten. Kurz vor Ende Käse untermischen und schmelzen lassen."
   ],
   [
    "Anrichten",
    "Kartoffeln auf dem Teller verteilen. Hackfleisch daraufgeben. Avocado-Dip und Tomatensalat dazu anrichten. Mit einem Klecks Joghurt abrunden."
   ]
  ],
  "notes": [
   "Vorsicht! Bei der Avocado Creme nicht zu viel Zitrone -> bittergeschmack",
   "Über die Tomaten Salsa etwas zucker darunter mischen, hilft beim Geschmack und ist leistbar.",
   "SKYR statt Joghurt gibt Proteine ohne Geschmacksverlust."
  ]
 },
 {
  "id": "moussaka",
  "ch": "fleisch",
  "name": "Moussaka nach griechischer Art",
  "script": "auberginen · hackfleisch · béchamel",
  "label": "Griechisch · Auflauf",
  "desc": "Geschichtete Auberginen, würzige Hackfleischsauce und cremige Béchamel — überbacken bis goldbraun. Eins der leckersten Gerichte überhaupt.",
  "time": "120 Min",
  "min": 120,
  "diff": 6,
  "diffLabel": "Mittel",
  "portions": "4 Personen",
  "rating": 8.5,
  "img": "bilder/Fleisch&Fisch_Moussaka.png",
  "thumb": "bilder/klein/Fleisch&Fisch_Moussaka.jpg",
  "ings": [
   [
    "— Gemüse —",
    ""
   ],
   [
    "2-3",
    "Auberginen"
   ],
   [
    "Salz",
    "nach Geschmack"
   ],
   [
    "4-6",
    "mittelgroße Kartoffeln"
   ],
   [
    "etwas",
    "Olivenöl zum Bestreichen"
   ],
   [
    "— Hackfleischsauce —",
    ""
   ],
   [
    "etwas",
    "Öl zum Braten"
   ],
   [
    "350 g",
    "Rinderhackfleisch"
   ],
   [
    "1",
    "Zwiebel"
   ],
   [
    "1",
    "Knoblauchzehe"
   ],
   [
    "1 EL",
    "Tomatenmark"
   ],
   [
    "Salz & Pfeffer",
    "nach Geschmack"
   ],
   [
    "300 ml",
    "passierte Tomaten"
   ],
   [
    "1",
    "getrocknetes Lorbeerblatt"
   ],
   [
    "etwas",
    "Kräuter der Provonce"
   ],
   [
    "— Béchamelsauce —",
    ""
   ],
   [
    "400 ml",
    "Milch"
   ],
   [
    "75 g",
    "Butter"
   ],
   [
    "75 g",
    "Mehl"
   ],
   [
    "2",
    "Eigelb"
   ],
   [
    "50 g",
    "Parmesan, gerieben"
   ],
   [
    "Salz, Pfeffer",
    "Muskatnuss, frisch gerieben"
   ]
  ],
  "steps": [
   [
    "Auberginen vorbereiten",
    "Auberginen in daumendicke Scheiben schneiden und in eine Schüssel geben. Gut salzen und ca. 30 Minuten ziehen lassen — das entzieht die Bitterstoffe."
   ],
   [
    "Kartoffeln backen",
    "Kartoffeln waschen, schälen und in Scheiben schneiden. Auf ein mit Backpapier belegtes Backblech legen, leicht mit Öl bestreichen und bei 220 °C Umluft ca. 15 Minuten backen bis sie weich sind. Einmal wenden."
   ],
   [
    "Auberginen backen",
    "Auberginen aus der Schüssel nehmen und trocken tupfen. Auf ein weiteres Backblech legen, mit Olivenöl bestreichen und im Backofen garen bis sie leicht braun und weich sind."
   ],
   [
    "Hackfleischsauce",
    "Pfanne mit etwas Öl auf höchster Stufe erhitzen. Hackfleisch verteilen und anbraten. Zwiebel fein würfeln und nach ca. 2 Minuten dazugeben. Weiterbraten bis alles schön angebräunt. Knoblauch pressen, mit Tomatenmark und Gewürzen hinzufügen, kurz mitrösten. Passierte Tomaten und Lorbeerblatt dazugeben und auf niedriger Hitze köcheln bis die Sauce dickflüssig ist."
   ],
   [
    "Schichten",
    "In eine Auflaufform schichten: etwas Hackfleischsauce auf den Boden → Kartoffeln → Teil der Auberginen → Hackfleischsauce → restliche Auberginen → gesamte restliche Hackfleischsauce."
   ],
   [
    "Béchamelsauce",
    "Milch ca. 1 Stunde vor der Zubereitung aus dem Kühlschrank nehmen. Butter auf kleiner Flamme schmelzen bis sie Blasen wirft. Mehl hinzufügen und unter ständigem Rühren anschwitzen. Warme Milch nach und nach einrühren und kurz aufkochen lassen bis eine dickflüssige Sauce entsteht. Eigelb, Parmesan, Salz, Pfeffer und Muskatnuss dazugeben und glatt rühren."
   ],
   [
    "Backen & Ruhen",
    "Béchamel warm über die Zutaten verteilen, etwas Parmesan darüberstreuen. Bei 220 °C Ober-/Unterhitze ca. 40 Minuten backen. Danach ca. 30 Minuten ziehen lassen bevor schneiden."
   ]
  ],
  "notes": [
   "Die 30 Minuten Ruhezeit nach dem Backen sind wichtig — sonst fällt die Moussaka beim Schneiden auseinander.",
   "Moussaka ist eines der leckersten Gerichte überhaupt — der Aufwand lohnt sich zu 100%.",
   "Perfekt zum Vorkochen — schmeckt am nächsten Tag aufgewärmt noch besser."
  ]
 },
 {
  "id": "butterchicken",
  "ch": "fleisch",
  "name": "Butter Chicken mit Hähnchenbrustfilet",
  "script": "indisches curry — cremig · würzig · aromatisch",
  "label": "Indisch · Curry",
  "desc": "Das weltberühmte indische Curry — über Nacht mariniertes Hähnchen, cremige Tomatensauce mit Garam Masala und Kurkuma. Intensiv und unwiderstehlich.",
  "time": "90 Min",
  "min": 90,
  "diff": 4,
  "diffLabel": "Einfach",
  "portions": "4 Personen",
  "rating": 9.5,
  "img": "bilder/Fleisch&Fisch_butterchicken.png",
  "thumb": "bilder/klein/Fleisch&Fisch_butterchicken.jpg",
  "ings": [
   [
    "500 g",
    "Hähnchen­brustfilet"
   ],
   [
    "— Marinade —",
    ""
   ],
   [
    "2 TL",
    "Salz"
   ],
   [
    "2 TL",
    "Paprikapulver"
   ],
   [
    "1 TL",
    "Garam Masala"
   ],
   [
    "1 TL",
    "Kurkuma"
   ],
   [
    "250 g",
    "Joghurt"
   ],
   [
    "2 EL",
    "Olivenöl und etwas zum Braten"
   ],
   [
    "1 EL",
    "Tomatenmark"
   ],
   [
    "Saft von ½",
    "Bio-Zitrone"
   ],
   [
    "— Sauce —",
    ""
   ],
   [
    "1",
    "Zwiebel"
   ],
   [
    "2 EL",
    "Butter"
   ],
   [
    "1 EL",
    "Ingwer"
   ],
   [
    "1 TL",
    "Salz"
   ],
   [
    "1 TL",
    "Kurkuma"
   ],
   [
    "1 TL",
    "Garam Masala"
   ],
   [
    "½ TL",
    "Kardamom"
   ],
   [
    "½ TL",
    "Koriander"
   ],
   [
    "400 g",
    "passierte Tomaten (1 Dose)"
   ],
   [
    "3 EL",
    "Naturjoghurt"
   ],
   [
    "optional",
    "2 Lorbeerblätter, einige Nelken, 1 Zimtstange"
   ]
  ],
  "steps": [
   [
    "Hähnchen marinieren",
    "Hähnchenbrustfilet in mundgerechte Würfel schneiden. Mit allen Marinade-Zutaten (Gewürze, Joghurt, Olivenöl, Tomatenmark, Zitronensaft) in einer Pfanne vermengen bis alle Stücke bedeckt sind. Mit Frischhaltefolie abdecken und mindestens 1 Stunde oder über Nacht im Kühlschrank marinieren."
   ],
   [
    "Sauce vorbereiten",
    "Zwiebel in grobe Würfel schneiden und in einem Topf mit etwas Wasser bei mittlerer Hitze dünsten. Butter hinzugeben und alle Sauce-Gewürze hinzufügen. Kurz rösten bis es aromatisch duftet."
   ],
   [
    "Tomaten & pürieren",
    "Passierte Tomaten dazugeben und alles ca. 5 Minuten köcheln lassen. Topf kurz vom Herd nehmen, Naturjoghurt hinzugeben und alles zu einer cremigen Flüssigkeit pürieren. Zurück in den Topf geben und langsam aufkochen lassen."
   ],
   [
    "Hähnchen anbraten",
    "In einer Pfanne Öl erhitzen und das marinierte Hähnchen von allen Seiten anbraten. Die Flüssigkeit der Marinade verdampft, der Geschmack bleibt — es entsteht eine braune Kruste."
   ],
   [
    "Fertigstellen",
    "Hähnchen in die Sauce geben und weitere 10 Minuten leise köcheln lassen. Optional: Lorbeerblätter, Nelken und Zimtstange dazugeben für noch mehr Geschmack. Mit Basmatireis servieren."
   ]
  ],
  "notes": [
   "Je länger das Hähnchen mariniert desto besser — über Nacht ist optimal.",
   "Lorbeerblätter, Nelken und Zimtstange in der Sauce geben nochmal extra Tiefe.",
   "Dazu passt am besten Basmatireis — der nimmt die Sauce perfekt auf."
  ]
 },
 {
  "id": "spaetzle",
  "ch": "beilagen",
  "name": "Hausgemachte Spätzle",
  "script": "mehl · ei · salz · milch",
  "label": "Austria · Classic",
  "desc": "Das klassische Nudelgericht — nur 4 Zutaten, einfach zu skalieren und die perfekte Beilage zu Zwiebelrostbraten oder Käsespätzle.",
  "time": "20 Min",
  "min": 20,
  "diff": 2,
  "diffLabel": "Leicht",
  "portions": "skalierbar",
  "rating": 9,
  "img": "bilder/Sonstiges_spaetzle.png",
  "thumb": "bilder/klein/Sonstiges_spaetzle.jpg",
  "ings": [
   [
    "— Pro Person —",
    ""
   ],
   [
    "100 g",
    "Mehl"
   ],
   [
    "1",
    "Ei"
   ],
   [
    "1 Prise",
    "Salz"
   ],
   [
    "50 ml",
    "Milch"
   ],
   [
    "— Einfach hochrechnen! —",
    ""
   ],
   [
    "2 Pers.",
    "200g Mehl · 2 Ei · 100ml Milch"
   ],
   [
    "4 Pers.",
    "400g Mehl · 4 Ei · 200ml Milch"
   ],
   [
    "6 Pers.",
    "600g Mehl · 6 Ei · 300ml Milch"
   ]
  ],
  "steps": [
   [
    "Teig anrühren",
    "Mehl, Ei, Salz und Milch zu einem glatten, zähflüssigen Teig verrühren. Der Teig sollte reißend vom Löffel fallen — nicht zu fest, nicht zu flüssig."
   ],
   [
    "Wasser kochen",
    "Einen großen Topf mit gut gesalzenem Wasser zum Kochen bringen."
   ],
   [
    "Spätzle schaben",
    "Teig portionsweise auf ein Spätzlebrett oder Schneidebrett geben und mit einem Schaber oder Messer dünne Streifen direkt ins kochende Wasser schaben. Alternativ: Teig durch ein Spätzlesieb oder eine Reibe drücken."
   ],
   [
    "Garen & abschöpfen",
    "Spätzle sind fertig wenn sie oben schwimmen (ca. 1–2 Minuten). Mit einer Schaumkelle herausnehmen und direkt servieren oder in Butter schwenken."
   ]
  ],
  "notes": [
   "Einfach hochrechnen je nach Personenzahl — Verhältnis immer gleich.",
   "Die perfekte Beilage zum Zwiebelrostbraten — Rezept unter Fleisch & Fisch.",
   "Zu Käsespätzle: Spätzle lagenweise mit geriebenem Emmentaler in eine Auflaufform und überbacken.",
   "Übrige Spätzle in Butter anbraten — werden dadurch nochmal besser!"
  ]
 },
 {
  "id": "smashed",
  "ch": "beilagen",
  "name": "Smashed Potatoes",
  "script": "plattgedrückt · gewürzt · ofenknusprig",
  "label": "Smashed · Potatoes",
  "desc": "Kleine Kartoffeln weich kochen, plattdrücken, mit Paprika-Knoblauch-Gewürzmix bestreichen und bei 200°C goldbraun backen. Beilage oder Snack.",
  "time": "45 Min",
  "min": 45,
  "diff": 2,
  "diffLabel": "Sehr leicht",
  "portions": "2 Personen",
  "rating": 9,
  "img": "bilder/Sonstiges_smashedpotatoes.png",
  "thumb": "bilder/klein/Sonstiges_smashedpotatoes.jpg",
  "ings": [
   [
    "500 g",
    "kleine Kartoffeln (mehligkochend)"
   ],
   [
    "— Gewürzmix —",
    ""
   ],
   [
    "3 EL",
    "Olivenöl"
   ],
   [
    "1 TL",
    "Paprikapulver"
   ],
   [
    "1½ TL",
    "Salz"
   ],
   [
    "1 TL",
    "schwarzer Pfeffer"
   ],
   [
    "1 TL",
    "Knoblauchpulver"
   ]
  ],
  "steps": [
   [
    "Kartoffeln kochen",
    "500 g kleine Kartoffeln waschen und in einem Topf mit gut gesalzenem Wasser kochen bis sie weich sind."
   ],
   [
    "Plattdrücken",
    "Kartoffeln aus dem Topf nehmen und trocken tupfen. Auf einem mit Backpapier belegten Backblech verteilen. Eine zweite Lage Backpapier darüberlegen und die Kartoffeln mit einem Glas plattdrücken."
   ],
   [
    "Würzen",
    "Olivenöl, Paprikapulver, Salz, Pfeffer und Knoblauchpulver in einer kleinen Schüssel mischen. Die Kartoffeln von beiden Seiten damit bestreichen."
   ],
   [
    "Backen",
    "Bei 200 °C Umluft ca. 30 Minuten backen bis sie eine goldbraune Farbe annehmen und rundum knusprig sind."
   ]
  ],
  "notes": [
   "Mehligkochende Kartoffeln sind wichtig — sie werden innen fluffig und außen knusprig.",
   "Als Beilage oder als Snack — funktioniert beides perfekt.",
   "Am besten schmeckt: etwas Rosmarin mit backen",
   "Extra-Tipp: mit Rosmarin oder frischem Thymian bestreuen vor dem Backen."
  ]
 },
 {
  "id": "pommes",
  "ch": "beilagen",
  "name": "Knusprige Ofenpommes",
  "script": "kaisernatron-trick · eiswasser · extra crispy",
  "label": "The best · Crunchy",
  "desc": "Mit dem Kaisernatron-Trick und Eiswasser-Bad werden diese Ofenpommes außergewöhnlich knusprig — ohne Friteuse, aber mit Restaurant-Ergebnis.",
  "time": "60 Min",
  "min": 60,
  "diff": 3,
  "diffLabel": "Leicht",
  "portions": "2 Personen",
  "rating": 10,
  "img": "bilder/Sonstiges_ofenpommes.png",
  "thumb": "bilder/klein/Sonstiges_ofenpommes.jpg",
  "ings": [
   [
    "3",
    "mittelgroße Kartoffeln"
   ],
   [
    "— Kaisernatron-Bad —",
    ""
   ],
   [
    "2 TL",
    "Kaisernatron"
   ],
   [
    "— Eiswasser-Bad —",
    ""
   ],
   [
    "nach Bedarf",
    "Eiswürfel"
   ],
   [
    "2 TL",
    "kaltes Wasser"
   ],
   [
    "3 TL",
    "Salz"
   ],
   [
    "— Backen —",
    ""
   ],
   [
    "nach Bedarf",
    "Olivenöl (großzügig)"
   ],
   [
    "nach Wahl",
    "Gewürzmischung zum Schwenken"
   ]
  ],
  "steps": [
   [
    "Kartoffeln schneiden",
    "Kartoffeln gründlich waschen, schälen und in ca. ½–1 cm dicke und 2 cm lange Streifen schneiden."
   ],
   [
    "Kaisernatron-Bad",
    "In einem Topf Wasser aufkochen und 2 TL Kaisernatron dazugeben. Nach dem Aufkochen den Topf vom Herd nehmen und die Kartoffelstreifen ca. 5 Minuten ziehen lassen."
   ],
   [
    "Eiswasser-Bad",
    "In eine Schüssel Eiswürfel, 2 TL kaltes Wasser und 3 TL Salz geben. Kartoffelstreifen aus dem heißen Wasser in das Eiswasser geben und 30 Minuten stehen lassen."
   ],
   [
    "Trocknen & ölen",
    "Kartoffelstreifen herausnehmen und mit einem Küchentuch trocken tupfen. Auf einem Backblech verteilen. Großzügig Olivenöl dazugeben — alle Pommes müssen bedeckt sein und das Öl setzt sich sichtbar auf dem Blech ab."
   ],
   [
    "Backen",
    "Bei 220 °C Umluft backen. Nach ca. 5 Minuten Ofentür kurz öffnen damit Feuchtigkeit entweichen kann. Nach 15 Minuten wenden und nochmals ca. 15 Minuten backen bis sie goldbraun sind."
   ],
   [
    "Würzen & servieren",
    "Pommes direkt aus dem Ofen in eine Schüssel geben. Solange sie noch heiß sind, Gewürzmischung nach Wahl hinzufügen und darin schwenken. Sofort servieren!"
   ]
  ],
  "notes": [
   "Der Kaisernatron-Trick sorgt für die extra-knusprige Außenhaut — nicht weglassen!",
   "Das Eiswasser-Bad stoppt den Garprozess und gibt Struktur — 30 Minuten einhalten.",
   "Ofentür nach 5 Minuten kurz öffnen — die entweichende Feuchtigkeit macht den Unterschied.",
   "Alle Kartoffelrezepte auf dieser Seite sind vegetarisch!"
  ]
 },
 {
  "id": "gurkensalat",
  "ch": "beilagen",
  "name": "Gurkensalat mit Joghurt, Dill & Aromat",
  "script": "joghurt · dill · schalotte · aromat",
  "label": "Summer · Fresh",
  "desc": "Fein gehobelter Gurkensalat mit cremigem Naturjoghurt, frischem Dill, Schalotte und einer Prise Aromat — die perfekte erfrischende Beilage.",
  "time": "25 Min",
  "min": 25,
  "diff": 1,
  "diffLabel": "Sehr leicht",
  "portions": "2-3 Personen",
  "rating": 9,
  "img": "bilder/Sonstiges_gurkensalat.png",
  "thumb": "bilder/klein/Sonstiges_gurkensalat.jpg",
  "ings": [
   [
    "1 große",
    "Gurke"
   ],
   [
    "100 g",
    "Naturjoghurt"
   ],
   [
    "1–2 EL",
    "Öl (neutral oder Sonnenblumenöl)"
   ],
   [
    "etwa ¼",
    "Schalotte, fein gerieben"
   ],
   [
    "1–2 EL",
    "frischer Dill, fein gehackt"
   ],
   [
    "Salz",
    "nach Geschmack"
   ],
   [
    "Pfeffer",
    "nach Geschmack"
   ],
   [
    "etwas",
    "Zucker"
   ],
   [
    "1–2 TL",
    "Essig oder Zitronensaft"
   ],
   [
    "1 Prise",
    "Aromat"
   ]
  ],
  "steps": [
   [
    "Gurke hobeln & salzen",
    "Gurke fein hobeln. Gut salzen und ca. 15–20 Minuten stehen lassen."
   ],
   [
    "Gurke ausdrücken",
    "Danach die Gurke ausdrücken oder gut abtropfen lassen — das ist wichtig damit der Salat nicht wässrig wird."
   ],
   [
    "Dressing mischen",
    "Joghurt mit Öl verrühren. Die geriebene Schalotte dazugeben. Dill untermischen."
   ],
   [
    "Abschmecken",
    "Mit Pfeffer, wenig Zucker, Essig oder Zitronensaft und einer kleinen Prise Aromat abschmecken."
   ],
   [
    "Fertigstellen",
    "Gurken unterheben und kurz ziehen lassen. Am besten 10–15 Minuten vor dem Servieren vorbereiten."
   ]
  ],
  "notes": [
   "Die Gurke wirklich gut ausdrücken — sonst wird das Dressing zu wässrig.",
   "Eine Prise Aromat ist der Geheimtipp — gibt eine wunderbare Würze.",
   "Passt perfekt zu Grillfleisch, Schnitzel oder als leichte Sommerbeilage.",
   "Kurz ziehen lassen vor dem Servieren — der Salat wird dadurch noch besser."
  ]
 },
 {
  "id": "avocadosalat",
  "ch": "beilagen",
  "name": "Gurken-Avocado-Salat mit Chili-Limetten-Dressing",
  "script": "chili-limetten-dressing · Petersilie · rote zwiebel",
  "label": "Summer · Fresh",
  "desc": "Der einfachste Salat des ganzen Sommers — knackige Gurke, cremige Avocado und ein Chili-Limetten-Dressing. Super erfrischend und unglaublich lecker.",
  "time": "15 Min",
  "min": 15,
  "diff": 1,
  "diffLabel": "Sehr leicht",
  "portions": "2 Personen",
  "rating": null,
  "img": "",
  "thumb": "",
  "ings": [
   [
    "— Salat —",
    ""
   ],
   [
    "1",
    "Salatgurke (oder 2–3 Minigurken), in Scheiben"
   ],
   [
    "1",
    "reife Avocado, gewürfelt"
   ],
   [
    "¼",
    "rote Zwiebel, in dünnen Ringen"
   ],
   [
    "etwas",
    "frische Petersilie , gehackt"
   ],
   [
    "— Dressing —",
    ""
   ],
   [
    "2 EL",
    "natives Olivenöl extra"
   ],
   [
    "1 EL",
    "frischer Limettensaft"
   ],
   [
    "1 TL",
    "Honig"
   ],
   [
    "½ TL",
    "Chiliflocken"
   ],
   [
    "½ TL",
    "Meersalz"
   ],
   [
    "¼ TL",
    "schwarzer Pfeffer"
   ]
  ],
  "steps": [
   [
    "Dressing",
    "In einer kleinen Schüssel Olivenöl, Limettensaft, Honig, Chiliflocken, Salz und schwarzen Pfeffer verquirlen."
   ],
   [
    "Vorbereiten",
    "Gurke fein in dünne Scheiben schneiden, rote Zwiebel in Ringe schneiden, Petersilie fein hacken, Avocado in Würfel schneiden."
   ],
   [
    "Zusammenstellen",
    "Gurke, Avocado, rote Zwiebel und Petersilie in eine große Schüssel geben. Das Dressing darübergießen und alles vorsichtig vermengen, bis alles gleichmäßig überzogen ist."
   ],
   [
    "Servieren",
    "Den Salat 5–10 Minuten ziehen lassen. Vor dem Servieren mit Meersalzflocken und frisch gemahlenem schwarzem Pfeffer abschließen."
   ]
  ],
  "notes": [
   "Der einfachste Salat des ganzen Sommers — erfrischend und unglaublich lecker.",
   "Avocado erst kurz vor dem Servieren schneiden, damit sie nicht braun wird.",
   "Die 5–10 Minuten Ziehzeit nicht auslassen — dann nimmt der Salat das Dressing richtig auf."
  ]
 },
 {
  "id": "pizzaschnell",
  "ch": "gebaeck",
  "name": "Schneller Pizzateig",
  "script": "mit bier · 1 stunde ruhe · haushaltsofen",
  "label": "Pizza · Fast",
  "desc": "Pizzateig mit der Geheimzutat Bier — ready in 1,5 Stunden. Knuspriger Rand, fluffig innen. Ofen auf maximale Hitze: 250 °C.",
  "time": "1 Std 40 Min",
  "min": 100,
  "diff": 5,
  "diffLabel": "Mittel",
  "portions": "2–3 Pizzen",
  "rating": 8,
  "img": "bilder/Gebaeck_pizzaschnell.png",
  "thumb": "bilder/klein/Gebaeck_pizzaschnell.jpg",
  "ings": [
   [
    "325 g",
    "Weizenmehl (Typ 00)"
   ],
   [
    "200 g",
    "Bier"
   ],
   [
    "14 g",
    "frische Hefe"
   ],
   [
    "12 g",
    "Olivenöl"
   ],
   [
    "8 g",
    "feines Meersalz"
   ],
   [
    "5 g",
    "Zucker"
   ]
  ],
  "steps": [
   [
    "Teig kneten",
    "Alle Zutaten in eine Schüssel geben und 1–2 Minuten kneten bis ein homogener Teig entsteht. Anschließend den Teig 3–4 Minuten von Hand weiterkneten bis er geschmeidig ist."
   ],
   [
    "Teig teilen & ruhen",
    "Den fertigen Teig in 280-g-Stücke teilen. Die Teigstücke mit Spannung von innen nach außen ziehen und zu runden Kugeln formen. Die Teiglinge luftdicht verschließen und 1 Stunde ruhen lassen."
   ],
   [
    "Ausrollen & vorbacken",
    "Nach der Ruhezeit die Luft aus den Kugeln drücken und den Teig flach ausrollen. Mit Tomatensoße bestreichen und bei maximaler Ofenhitze — 250 °C Ober-/Unterhitze — für ca. 2 Minuten vorbacken."
   ],
   [
    "Belegen & fertig backen",
    "Die Lieblings-Toppings auf den vorgebackenen Pizzaböden verteilen. Die Pizzen weitere 3–4 Minuten fertig backen bis der Rand goldbraun ist."
   ]
  ],
  "notes": [
   "Ofen unbedingt auf maximale Hitze vorheizen: 250 °C Ober-/Unterhitze — je heißer desto besser der Rand.",
   "Echten Mozzarella für den Belag verwenden — macht den entscheidenden Unterschied.",
   "Vor dem zweiten Backen, für einen optimalen Rand, ihn leicht mit Olvienöl bepinseln",
   "Ideale auf der Obersten oder Vorletzen Schiene die Pizza zu backen."
  ]
 },
 {
  "id": "pizza24h",
  "ch": "gebaeck",
  "name": "24h-Pizzateig",
  "script": "kalte gare · wenig hefe · restaurant-qualität",
  "label": "Pizza · Patience",
  "desc": "Der ultimative Pizzateig — 24 Stunden Gare, winzige Hefemenge, maximaler Geschmack. Ofen auf 250 °C Ober-/Unterhitze. Ergebnis: Restaurant-Level.",
  "time": "24h+",
  "min": 1440,
  "diff": 7,
  "diffLabel": "Aufwändig",
  "portions": "3–4 Pizzen (à 280 g)",
  "rating": 10,
  "img": "bilder/Gebaeck_pizza24h.jpg",
  "thumb": "bilder/klein/Gebaeck_pizza24h.jpg",
  "ings": [
   [
    "400 ml",
    "kaltes Wasser"
   ],
   [
    "1 g",
    "frische Hefe"
   ],
   [
    "20 g",
    "Salz"
   ],
   [
    "700 g",
    "Weizenmehl (Typ 00)"
   ],
   [
    "etwas",
    "Olivenöl"
   ]
  ],
  "steps": [
   [
    "Hefe lösen & Mehl einarbeiten",
    "Die Hefe im kalten Wasser auflösen und die Hälfte des Mehls hinzugeben. Gut vermischen bis ein glatter Teig entsteht. Das restliche Mehl einarbeiten. Den Teig 2 Minuten kneten bis er geschmeidig wird. Dann 15 Minuten ruhen lassen (Autolyse)."
   ],
   [
    "Salz & Olivenöl",
    "Salz hinzugeben und mit etwas Olivenöl auf den Teig einreiben um ihn geschmeidig zu halten."
   ],
   [
    "Lange Ruhephase (18+ Stunden)",
    "Den Teig luftdicht abdecken und für mindestens 18 Stunden bei Raumtemperatur ruhen lassen. In dieser Zeit entwickelt der Teig seinen vollen Geschmack."
   ],
   [
    "Portionieren & zweite Gare",
    "Nach der Ruhezeit den Teig in 280-g-Stücke teilen, zu runden Kugeln formen und abgedeckt für weitere 6–8 Stunden gehen lassen."
   ],
   [
    "Formen & vorbacken",
    "Die Kugeln zu flachen Pizzaböden ausrollen. Den Boden mit Tomatensauce bestreichen und kurz im Ofen vorbacken."
   ],
   [
    "Finalisieren",
    "Die Pizzen mit den gewünschten Toppings belegen und nochmals für ca. 4 Minuten fertigbacken. Ofen unbedingt auf maximale Hitze vorheizen: 250 °C Ober-/Unterhitze — das ist entscheidend für den perfekten Rand!"
   ]
  ],
  "notes": [
   "Ofen auf maximale Hitze: 250 °C Ober-/Unterhitze — je heißer desto besser Boden und Rand.",
   "Vor dem zweiten Backen, für einen optimalen Rand, ihn leicht mit Olvienöl bepinseln",
   "Ideale auf der Obersten oder Vorletzen Schiene die Pizza zu backen.",
   "Mit frischem Mozzarella oder Parmaschinken belegen für das beste Ergebnis."
  ]
 },
 {
  "id": "pfannenbrot",
  "ch": "gebaeck",
  "name": "Türkisches Pfannenbrot",
  "script": "ohne ofen · joghurt-teig · weich & fluffig",
  "label": "Pan · turkish",
  "desc": "Fluffiges Fladenbrot aus der Pfanne — kein Ofen nötig! Mit Joghurt im Teig wird es besonders weich. Perfekt als Beilage oder zum Dippen.",
  "time": "90 Min",
  "min": 90,
  "diff": 4,
  "diffLabel": "Einfach",
  "portions": "9 Brote",
  "rating": 9,
  "img": "bilder/Gebaeck_pfannenbrot.png",
  "thumb": "bilder/klein/Gebaeck_pfannenbrot.jpg",
  "ings": [
   [
    "320 g",
    "Mehl"
   ],
   [
    "165 ml",
    "lauwarmes Wasser"
   ],
   [
    "1,5 TL",
    "Hefe"
   ],
   [
    "1 Schuss",
    "Olivenöl"
   ],
   [
    "2 EL",
    "Joghurt"
   ],
   [
    "2–3 TL",
    "Salz"
   ]
  ],
  "steps": [
   [
    "Teig zubereiten",
    "Alle Zutaten in eine Schüssel geben und vermengen. Anschließend den Teig ca. 10 Minuten kneten bis er geschmeidig ist."
   ],
   [
    "Ruhen lassen",
    "Den Teig abgedeckt an einem warmen Ort ca. 1 Stunde gehen lassen bis er sein Volumen verdoppelt hat."
   ],
   [
    "Portionieren",
    "Den Teig in 60-Gramm-Stücke teilen und diese zu Kugeln formen. Abgedeckt ruhen lassen damit sie nicht austrocknen."
   ],
   [
    "Fladen formen",
    "Jede Kugel so dünn wie möglich ausrollen."
   ],
   [
    "Braten",
    "Die Fladen in einer Pfanne bei stärkerer Hitze auf beiden Seiten kurz anbraten bis sie leicht aufgehen."
   ],
   [
    "Servieren",
    "Die fertigen Brote auf einen Teller geben und warm servieren."
   ]
  ],
  "notes": [
   "Ergibt ca. 5–6 Brote.",
   "Perfekt dazu: [Butter Chicken](fleisch.html#butterchicken)",
   "Je dünner ausgerollt desto knuspriger wird das Brot."
  ]
 },
 {
  "id": "nutella",
  "ch": "gebaeck",
  "name": "Nutellabrötchen",
  "script": "fluffig · nutella-füllung · mit puderzucker",
  "label": "Sweet · breakfast",
  "desc": "Weiche Hefebrötchen gefüllt mit Nutella, goldbraun gebacken und mit Puderzucker bestäubt. Am besten noch warm genießen.",
  "time": "3 Stunden",
  "min": 180,
  "diff": 3,
  "diffLabel": "Leicht",
  "portions": "16 Brötchen",
  "rating": 9,
  "img": "bilder/Gebaeck_nutellabrotchen.png",
  "thumb": "bilder/klein/Gebaeck_nutellabrotchen.jpg",
  "ings": [
   [
    "270 ml",
    "Milch"
   ],
   [
    "ca. 20 g",
    "frische Hefe (½ Stück)"
   ],
   [
    "100 g",
    "Zucker"
   ],
   [
    "1 Pck.",
    "Vanillezucker"
   ],
   [
    "ca. 600 g",
    "Mehl"
   ],
   [
    "½ TL",
    "Salz"
   ],
   [
    "1",
    "Ei"
   ],
   [
    "100 g",
    "geschmolzene Butter"
   ],
   [
    "— Füllung & Dekoration —",
    ""
   ],
   [
    "nach Bedarf",
    "Nutella"
   ],
   [
    "1",
    "Ei zum Bestreichen"
   ],
   [
    "nach Bedarf",
    "Puderzucker zum Bestäuben"
   ]
  ],
  "steps": [
   [
    "Teig vorbereiten",
    "In einer großen Schüssel Milch, Hefe, Zucker und Vanillezucker verrühren. Das Mehl und Salz hinzufügen, dann das Ei und die geschmolzene Butter dazugeben. Alles zu einem glatten Teig kneten."
   ],
   [
    "Erste Ruhephase",
    "Den Teig abdecken und an einem warmen Ort 1 Stunde ruhen lassen."
   ],
   [
    "Formen",
    "Den Teig in 14–16 Portionen teilen und zu Brötchen formen. Jedes Brötchen flachdrücken, mit etwas Nutella füllen, die Ränder nach innen klappen und aufrollen."
   ],
   [
    "Zweite Ruhephase",
    "Die geformten Brötchen auf ein mit Backpapier belegtes Blech legen, abdecken und weitere 30–45 Minuten gehen lassen."
   ],
   [
    "Backen",
    "Die Brötchen mit verquirltem Ei bestreichen und im vorgeheizten Backofen bei 190 °C (Ober- und Unterhitze) ca. 10 Minuten backen."
   ],
   [
    "Verzieren",
    "Mit Puderzucker bestäuben und am besten noch warm genießen."
   ]
  ],
  "notes": [
   "Nutella kann durch eine andere Lieblingsfüllung wie Marmelade oder Nussmus ersetzt werden.",
   "Noch warm servieren — schmecken sie am besten!",
   "Die Brötchen am nächsten Tag kurz bei 160 °C aufwärmen, dann werden sie wieder weich."
  ]
 },
 {
  "id": "cookies",
  "ch": "kuchen",
  "name": "American Cookies",
  "script": "chocolate chip · knusprig außen · chewy innen",
  "label": "American Style",
  "desc": "Klassische American Cookies mit Zartbitter-Schokostücken — knusprig an den Rändern, weich und chewy in der Mitte. Der perfekte Cookie.",
  "time": "57 Min (inkl. Kühlzeit)",
  "min": 57,
  "diff": 4,
  "diffLabel": "Einfach",
  "portions": "ca. 10-12 Stück",
  "rating": 9,
  "img": "bilder/Kuchen&Torten_cookies.png",
  "thumb": "bilder/klein/Kuchen&Torten_cookies.jpg",
  "ings": [
   [
    "220 g",
    "Mehl"
   ],
   [
    "130 g",
    "Butter (geschmolzen)"
   ],
   [
    "125 g",
    "brauner Zucker"
   ],
   [
    "100 g",
    "weißer Zucker"
   ],
   [
    "2",
    "Eier"
   ],
   [
    "1,5 TL",
    "Vanilleextrakt"
   ],
   [
    "1,5 TL",
    "Natron"
   ],
   [
    "1 TL",
    "Salz"
   ],
   [
    "150 g",
    "Zartbitter-Schokolade"
   ]
  ],
  "steps": [
   [
    "Butter & Zucker",
    "Geschmolzene Butter mit braunem und weißem Zucker cremig schlagen. Eier einzeln hinzugeben und gut verrühren. Vanilleextrakt dazugeben und untermischen."
   ],
   [
    "Trockene Zutaten",
    "Mehl, Natron und Salz in einer separaten Schüssel vermengen und nach und nach zur feuchten Masse geben. Alles gut verrühren bis ein geschmeidiger Teig entsteht."
   ],
   [
    "Schokolade unterheben",
    "Die Zartbitterschokolade grob hacken und vorsichtig in den Teig einarbeiten."
   ],
   [
    "Teig kühlen",
    "Den fertigen Teig für 30 Minuten in den Kühlschrank stellen. Dies sorgt für festere Cookies die beim Backen ihre Form besser behalten."
   ],
   [
    "Formen & backen",
    "Backofen auf 175 °C Ober-/Unterhitze vorheizen. Aus dem Teig ca. 100 g schwere Kugeln formen und mit ausreichend Abstand auf ein mit Backpapier ausgelegtes Backblech setzen. Für 10–12 Minuten backen bis die Ränder goldbraun sind."
   ],
   [
    "Abkühlen",
    "Nach dem Backen die Cookies kurz auf dem Blech abkühlen lassen, dann auf ein Gitter legen."
   ]
  ],
  "notes": [
   "Cookies in einer luftdichten Dose aufbewahren — bleiben so länger frisch.",
   "Der Teig kann auch über Nacht im Kühlschrank ruhen um die Aromen noch besser zu entfalten.",
   "Je länger die Kühlzeit, desto kompakter und aromatischer werden die Cookies.",
   "ENTSCHEIDEND: Nach der halben Backzeit das Backblech rausnehmen einmal aus paar cm Höhe fallen lassen"
  ]
 },
 {
  "id": "muffins",
  "ch": "kuchen",
  "name": "Blaubeermuffins mit Streuseln",
  "script": "saftig · zitronig · mit knusprigen Streuseln",
  "label": "Muffins · Crumble",
  "desc": "Saftige Blaubeermuffins mit Zitronenaroma, Sauerrahm für extra Saftigkeit und knusprigen Butterstreuseln obendrauf.",
  "time": "45 Min",
  "min": 45,
  "diff": 4,
  "diffLabel": "Einfach",
  "portions": "10–12 Muffins",
  "rating": 10,
  "img": "bilder/Kuchen&Torten_blaubeermuffins.png",
  "thumb": "bilder/klein/Kuchen&Torten_blaubeermuffins.jpg",
  "ings": [
   [
    "— Streusel —",
    ""
   ],
   [
    "55 g",
    "Butter, kalt"
   ],
   [
    "90 g",
    "Mehl"
   ],
   [
    "55 g",
    "Zucker"
   ],
   [
    "— Muffinteig —",
    ""
   ],
   [
    "230 g",
    "Weizenmehl (Type 405)"
   ],
   [
    "150 g",
    "Zucker"
   ],
   [
    "Schale von ½",
    "Bio-Zitrone"
   ],
   [
    "2 TL",
    "Backpulver"
   ],
   [
    "1 Prise",
    "Salz"
   ],
   [
    "85 g",
    "Butter, geschmolzen & abgekühlt"
   ],
   [
    "1 EL",
    "neutrales Öl"
   ],
   [
    "2",
    "Eier (Gr. M), zimmerwarm"
   ],
   [
    "180 ml",
    "Vollmilch"
   ],
   [
    "50 g",
    "Sauerrahm / Schmand"
   ],
   [
    "1 EL",
    "Vanilleextrakt oder Vanillepaste"
   ],
   [
    "200–230 g",
    "Blaubeeren (frisch oder TK, leicht bemehlt)"
   ]
  ],
  "steps": [
   [
    "Vorbereitung",
    "Backofen auf 180 °C Ober-/Unterhitze vorheizen. Muffinform mit Papierförmchen auslegen."
   ],
   [
    "Streusel herstellen",
    "Butter, Mehl und Zucker mit den Fingern zu Streuseln verreiben. Bis zur Verwendung kalt stellen."
   ],
   [
    "Zitronenzucker",
    "Zucker mit der Zitronenschale in einer großen Schüssel verreiben bis der Zucker leicht feucht ist und intensiv duftet."
   ],
   [
    "Flüssige Zutaten",
    "Zum Zitronenzucker Butter, Öl und Eier geben und glatt verrühren. Milch, Sauerrahm und Vanille unterrühren."
   ],
   [
    "Trockene Zutaten",
    "Mehl, Backpulver und Salz mischen und kurz unter den Teig heben — nur so lange rühren bis alles verbunden ist. Nicht zu viel rühren!"
   ],
   [
    "Blaubeeren & Backen",
    "Die bemehlten Blaubeeren vorsichtig unter den Teig heben. Teig in die Förmchen füllen (ca. ¾ voll), Streusel darauf verteilen. 20–25 Minuten backen bis goldgelb und die Stäbchenprobe sauber bleibt."
   ],
   [
    "Abkühlen",
    "Kurz in der Form abkühlen lassen, dann auf ein Gitter setzen."
   ]
  ],
  "notes": [
   "Blaubeeren leicht bemehlen verhindert dass sie im Teig absinken.",
   "TK-Blaubeeren nicht auftauen — direkt gefroren unter den Teig heben.",
   "Nicht zu viel rühren: ein paar Mehlstreifen im Teig sind okay — das macht die Muffins luftiger.",
   "Tipp: Selbstgemachte Muffinformen aus Backpapier passen oft besser und sehen schöner aus als gekaufte! [So geht’s (Video auf TikTok)](https://www.tiktok.com/@kuechendeern/video/7605668162071203094?is_from_webapp=1&sender_device=pc&web_id=7636684556422956577)"
  ]
 },
 {
  "id": "brownies",
  "ch": "kuchen",
  "name": "Fudgy Brownies",
  "script": "schokoladig · fudgy · mit rillen-technik",
  "label": "Chocolate · Fudgy",
  "desc": "Intensiv schokoladige Brownies — fudgy in der Mitte, mit knuspriger Kruste. Die Rillen-Technik beim Backen macht sie besonders.",
  "time": "55 Min",
  "min": 55,
  "diff": 3,
  "diffLabel": "Leicht",
  "portions": "20×30 cm Form",
  "rating": 8.5,
  "img": "bilder/Kuchen&Torten_brownies.png",
  "thumb": "bilder/klein/Kuchen&Torten_brownies.jpg",
  "ings": [
   [
    "300 g",
    "Schokolade (100 g Vollmilch + 200 g Zartbitter)"
   ],
   [
    "125 g",
    "Butter"
   ],
   [
    "3",
    "Eier"
   ],
   [
    "150 g",
    "Zucker"
   ],
   [
    "1 Päckchen",
    "Vanillezucker"
   ],
   [
    "100 ml",
    "Vollmilch"
   ],
   [
    "95 g",
    "Mehl"
   ],
   [
    "25 g",
    "Backkakao"
   ]
  ],
  "steps": [
   [
    "Schokolade schmelzen",
    "Vollmilch- und Zartbitterschokolade mit der Butter schmelzen und leicht abkühlen lassen."
   ],
   [
    "Eiermasse",
    "Eier mit Zucker und Vanillezucker in einer Schüssel cremig schlagen."
   ],
   [
    "Schokomasse einarbeiten",
    "Die geschmolzene Schokolade langsam unter die Eiermasse rühren."
   ],
   [
    "Milch hinzufügen",
    "Die Vollmilch hinzugeben und gut vermengen."
   ],
   [
    "Trockene Zutaten",
    "Mehl und Backkakao in einer separaten Schüssel vermengen und dann vorsichtig unter die Schoko-Ei-Masse heben."
   ],
   [
    "Backform & 1. Backen",
    "Eine rechteckige Backform (ca. 20 × 30 cm) einfetten oder mit Backpapier auslegen. Teig gleichmäßig einfüllen. Im vorgeheizten Ofen bei 175 °C Umluft für 15 Minuten backen."
   ],
   [
    "Rillen formen",
    "Die Brownies aus dem Ofen nehmen und mit einem Spatel oder Messer leichte Rillen in die Oberfläche drücken."
   ],
   [
    "2. Backen & Abkühlen",
    "Die Brownies erneut für 10 Minuten in den Ofen geben. Leicht auskühlen lassen bevor sie in Stücke geschnitten werden."
   ]
  ],
  "notes": [
   "Die Rillen-Technik ist das Geheimnis: sie sorgen für die charakteristische Brownie-Kruste oben.",
   "Nicht zu lange backen — Brownies werden beim Abkühlen noch fester.",
   "Für extra Fudgy: kurz vor dem Fertigsein aus dem Ofen nehmen, sie garen in der Restwärme nach."
  ]
 },
 {
  "id": "cheesecake",
  "ch": "kuchen",
  "name": "Oreo-Cheesecake ohne Backen",
  "script": "kein ofen · cremig · oreo-keksboden",
  "label": "No-Bake · Oreo",
  "desc": "Cremiger No-Bake Cheesecake mit Oreo-Keksboden, Mascarpone-Frischkäse-Creme und gehackten Oreos in der Füllung und als Dekoration.",
  "time": "60 Min (inkl. Kühlzeit)",
  "min": 60,
  "diff": 2,
  "diffLabel": "Sehr leicht",
  "portions": "∅ 18 cm",
  "rating": 8,
  "img": "bilder/Kuchen&Torten_oreocheesecake.png",
  "thumb": "bilder/klein/Kuchen&Torten_oreocheesecake.jpg",
  "ings": [
   [
    "— Keksboden —",
    ""
   ],
   [
    "10",
    "Oreo-Kekse (für den Boden)"
   ],
   [
    "25 g",
    "Butter"
   ],
   [
    "— Füllung —",
    ""
   ],
   [
    "100 g",
    "Schlagsahne"
   ],
   [
    "200 g",
    "Frischkäse"
   ],
   [
    "125 g",
    "Magerquark"
   ],
   [
    "50 g",
    "Puderzucker"
   ],
   [
    "125 g",
    "Mascarpone"
   ],
   [
    "16",
    "Oreo-Kekse (für die Füllung)"
   ],
   [
    "— Dekoration —",
    ""
   ],
   [
    "6",
    "Oreo-Kekse (für die Dekoration)"
   ]
  ],
  "steps": [
   [
    "Keksboden vorbereiten",
    "10 Kekse von der Creme entfernen (Creme aufbehalten) und in einem Gefrierbeutel mit einem Nudelholz fein zerbröseln. Butter schmelzen und mit den Keksbröseln vermengen. In eine kleine Springform (∅ ca. 18 cm) oder wie auf den Bild gezeigte Schüssel geben und mit einem Löffel gleichmäßig andrücken. Für 10–15 Minuten kalt stellen."
   ],
   [
    "Creme zubereiten",
    "Sahne steif schlagen und beiseite stellen. Frischkäse, Magerquark, Puderzucker,Oreo Creme und Mascarpone in einer Schüssel glatt rühren. Von 16 werden bei 8 die Creme wieder entfernt und untergerührt, der Rest + 8 ganze Kekse grob hacken und unter die Creme heben. Steif geschlagene Sahne vorsichtig unter die Creme ziehen."
   ],
   [
    "Zusammensetzen",
    "Die Creme auf dem gekühlten Keksboden gleichmäßig glatt streichen."
   ],
   [
    "Dekorieren & kühlen",
    "Die restlichen 6 Kekse grob hacken und auf der Oberfläche verteilen. Kuchen nochmals ca. 30–40 Minuten kalt stellen. Springformrand lösen, auf eine Tortenplatte setzen und bis zum Servieren kühl lagern."
   ]
  ],
  "notes": [
   "Am besten über Nacht kühlen lassen — der Cheesecake wird dann noch cremiger, fester und der Geschmack intensiver. Mindestens 4 Stunden, optimal 12 Stunden im Kühlschrank.",
   "Kein Backen nötig — perfekt für heiße Tage oder wenn der Ofen belegt ist.",
   "Variation: Mit Erdbeeren oder Himbeeren dekorieren für mehr Frische."
  ]
 },
 {
  "id": "bratapfel",
  "ch": "dessert",
  "name": "Weihnachtliches Bratapfel-Dessert im Glas",
  "script": "karamellisierte Äpfel · Mascarpone-Creme · Amarettini",
  "label": "Christmas · Winter",
  "desc": "Karamellisierte Bratapfelstücke mit Vanille und Zimt geschichtet mit einer cremigen Mascarpone-Quark-Creme und knusprigen Amarettini-Bröseln.",
  "time": "65 Min (45 Arbeit + 20 Kühlen)",
  "min": 65,
  "diff": 4,
  "diffLabel": "Einfach",
  "portions": "6 Gläser à 125 ml",
  "rating": 9,
  "img": "bilder/Dessert_bratapfel.png",
  "thumb": "bilder/klein/Dessert_bratapfel.jpg",
  "ings": [
   [
    "— Apfelschicht —",
    ""
   ],
   [
    "5",
    "Äpfel (ca. 500 g)"
   ],
   [
    "½",
    "Vanilleschote"
   ],
   [
    "50 g",
    "Butter"
   ],
   [
    "70 g",
    "brauner Zucker"
   ],
   [
    "1 Prise",
    "Zimt"
   ],
   [
    "3 EL",
    "Apfelsaft (aus den gebratenen Äpfeln)"
   ],
   [
    "— Mascarpone-Creme —",
    ""
   ],
   [
    "250 g",
    "Mascarpone"
   ],
   [
    "250 g",
    "Magerquark"
   ],
   [
    "3 EL",
    "brauner Zucker"
   ],
   [
    "½",
    "Vanilleschote"
   ],
   [
    "100 g",
    "Amarettini"
   ],
   [
    "guter Schuss",
    "Apfelsaft (aus den gebratenen Äpfeln)"
   ],
   [
    "2 EL",
    "Apfelmus"
   ]
  ],
  "steps": [
   [
    "Äpfel vorbereiten",
    "Sechs Dessertgläser à 125 ml bereitstellen. Äpfel schälen, entkernen und klein würfeln. Vanilleschote halbieren und das Mark herauskratzen."
   ],
   [
    "Karamell ansetzen",
    "Butter, braunen Zucker, Vanillemark und Zimt in einen höheren Topf geben und kurz ohne Rühren köcheln lassen bis der Zucker etwas karamellisiert."
   ],
   [
    "Äpfel karamellisieren",
    "Apfelstücke und 3 EL Apfelsaft hinzufügen. Ca. 5 Minuten köcheln lassen, dabei immer wieder umrühren. Die Apfelstücke sollten weich, aber noch nicht komplett verkocht sein. Mit einem Siebschöpfer herausnehmen."
   ],
   [
    "Saft einkochen",
    "Den restlichen Apfelsaft im Topf ca. 5 Minuten weiterköcheln lassen bis er dickflüssiger wird. Beiseite stellen und abkühlen lassen."
   ],
   [
    "Creme rühren",
    "Mascarpone, Magerquark, braunen Zucker und das Mark der zweiten Vanilleschote verrühren. Großzügiger Schuss Apfelsaft und 2 EL Apfelmus hinzufügen und gut einrühren bis eine cremige Konsistenz entsteht."
   ],
   [
    "Schichten & kühlen",
    "In die Gläser: 2 TL Apfelstücke → zerbrochene Amarettini → 2–3 TL Creme. Diesen Vorgang wiederholen. Mit Apfelstücken abschließen und ein paar Amarettini-Brösel oben drüber streuen. Mindestens 20 Minuten kalt stellen."
   ]
  ],
  "notes": [
   "Falls du keine Amarettini magst: normale Löffelbiskuits oder Butterkekse zerbröseln funktioniert genauso gut.",
   "Die Äpfel sollten weich aber noch bissfest sein — nicht zu lange kochen.",
   "Der eingekochte Apfelsaft gibt der Creme extra Tiefe — nicht weglassen!",
   "Schmeckt auch warm serviert direkt nach dem Schichten — ohne Kühlzeit."
  ]
 },
 {
  "id": "himbeer",
  "ch": "dessert",
  "name": "Himbeer-Tiramisu im Glas",
  "script": "passierte Himbeeren · Mascarpone-Sahne · Biskotten",
  "label": "Summer · fruity",
  "desc": "Fein passierte Himbeersauce, luftige Mascarpone-Sahne-Creme und Biskotten-Schichten — cremig, fruchtig und das perfekte Sommerdessert.",
  "time": "30 Min + mind. 2h Kühlen",
  "min": 150,
  "diff": 3,
  "diffLabel": "Leicht",
  "portions": "6 Gläser",
  "rating": 9,
  "img": "bilder/Dessert_himbeertiramisu.png",
  "thumb": "bilder/klein/Dessert_himbeertiramisu.jpg",
  "ings": [
   [
    "— Himbeerschicht —",
    ""
   ],
   [
    "500 g",
    "Himbeeren (frisch oder TK)"
   ],
   [
    "2–3 EL",
    "Zucker"
   ],
   [
    "1 TL",
    "Zitronensaft"
   ],
   [
    "— Mascarpone-Creme —",
    ""
   ],
   [
    "250 g",
    "Mascarpone"
   ],
   [
    "250 g",
    "Quark oder Frischkäse"
   ],
   [
    "200 ml",
    "Schlagsahne"
   ],
   [
    "60 g",
    "Puderzucker"
   ],
   [
    "1 TL",
    "Vanilleextrakt oder Vanillezucker"
   ],
   [
    "— Außerdem —",
    ""
   ],
   [
    "150–200 g",
    "Löffelbiskuits / Biskotten"
   ],
   [
    "optional",
    "Himbeersirup oder -saft zum Beträufeln"
   ],
   [
    "nach Bedarf",
    "frische Himbeeren zur Dekoration"
   ],
   [
    "optional",
    "weiße Schokolade, Biskuitbrösel"
   ]
  ],
  "steps": [
   [
    "Himbeeren passieren",
    "Himbeeren mit Zucker und Zitronensaft kurz pürieren. Dann durch ein feines Sieb passieren — am besten 2–3 Mal damit wirklich keine Kerne mehr drin sind und die Sauce super samtig wird. Fertige Himbeersauce kalt stellen."
   ],
   [
    "Creme zubereiten",
    "Sahne steif schlagen. Mascarpone, Quark, Puderzucker und Vanille glatt rühren. Dann die geschlagene Sahne vorsichtig unterheben bis alles richtig fluffig und cremig ist."
   ],
   [
    "Biskotten vorbereiten",
    "Löffelbiskuits grob zerbröseln. Nach Wunsch leicht mit Himbeersaft oder etwas Milch beträufeln — aber nicht zu nass machen."
   ],
   [
    "Schichten",
    "In jedes Glas: Biskotten-Brösel → Himbeersauce → Creme. Diesen Vorgang wiederholen. Oben mit frischen Himbeeren, Biskuitbröseln oder weißer Schokolade dekorieren."
   ],
   [
    "Kühlen",
    "Mindestens 2 Stunden kalt stellen — über Nacht wird es noch besser. Die Biskotten ziehen durch und das Dessert wird noch cremiger."
   ]
  ],
  "notes": [
   "Das Passieren durch ein feines Sieb 2–3 Mal ist der entscheidende Schritt — macht die Himbeersauce komplett samtig ohne jede Kernspur.",
   "Über Nacht kühlen lassen — dann ist es noch viel besser als nach 2 Stunden.",
   "Extra-Tipp: etwas Limettenabrieb in die Creme gibt eine tolle Frische.",
   "Noch mehr Geschmack: weiße Schokolade fein gehackt zwischen die Schichten legen."
  ]
 },
 {
  "id": "lachssalat",
  "ch": "fleisch",
  "name": "Knuspriger Kartoffel-Lachs-Salat mit Gurke & Dill",
  "script": "quetschkartoffeln · lachs · gurke · dill",
  "label": "Crispy · Fresh",
  "desc": "Knusprige Quetschkartoffeln und zarter Ofenlachs mit Gurke, roter Zwiebel und viel Dill in einem cremigen Joghurt-Senf-Dressing.",
  "time": "45 Min",
  "min": 45,
  "diff": 2,
  "diffLabel": "Leicht",
  "portions": "ca. 2–3 Personen",
  "rating": null,
  "img": "",
  "thumb": "",
  "ings": [
   [
    "— Salat —",
    ""
   ],
   [
    "500–700 g",
    "Kartoffel-Drillinge"
   ],
   [
    "etwas",
    "Olivenöl"
   ],
   [
    "nach Geschmack",
    "Salz und Pfeffer"
   ],
   [
    "nach Belieben",
    "Kartoffelgewürz"
   ],
   [
    "ca. 250 g",
    "Lachs"
   ],
   [
    "1",
    "rote Zwiebel"
   ],
   [
    "½",
    "Salatgurke"
   ],
   [
    "nach Geschmack",
    "Gewürzgurken"
   ],
   [
    "nach Geschmack",
    "frischer Dill"
   ],
   [
    "— Dressing —",
    ""
   ],
   [
    "50–100 g",
    "Mayonnaise"
   ],
   [
    "200 g",
    "Joghurt oder Skyr"
   ],
   [
    "etwas",
    "Gewürzgurkenwasser"
   ],
   [
    "1 TL",
    "Senf"
   ],
   [
    "nach Geschmack",
    "Salz und Pfeffer"
   ]
  ],
  "steps": [
   [
    "Kartoffeln kochen",
    "Die Kartoffeln in Wasser gar kochen und anschließend abgießen."
   ],
   [
    "Kartoffeln zerdrücken",
    "Die gekochten Kartoffeln auf ein mit Backpapier belegtes Backblech geben und mit einem Glas oder Kartoffelstampfer leicht zerquetschen."
   ],
   [
    "Lachs und Kartoffeln würzen",
    "Den Lachs neben die Kartoffeln auf das Blech legen. Kartoffeln und Lachs mit Salz, Pfeffer und optional Kartoffelgewürz würzen. Etwas Olivenöl darüberträufeln."
   ],
   [
    "Im Ofen backen",
    "Das Backblech bei 180 °C für ca. 30 Minuten backen, bis die Kartoffeln knusprig und der Lachs vollständig gar sind."
   ],
   [
    "Gemüse schneiden",
    "Währenddessen die rote Zwiebel, die Salatgurke und die Gewürzgurken klein schneiden. Den Dill fein hacken."
   ],
   [
    "Dressing anrühren",
    "Mayonnaise, Joghurt oder Skyr, etwas Gewürzgurkenwasser und Senf miteinander verrühren. Mit Salz und Pfeffer abschmecken."
   ],
   [
    "Lachs zerkleinern",
    "Den fertigen Lachs aus dem Ofen nehmen, die Haut entfernen und das Fischfleisch mit einer Gabel zerkleinern. In eine große Salatschüssel geben."
   ],
   [
    "Salat vermengen",
    "Das geschnittene Gemüse, den Dill und das Dressing zum Lachs geben und vorsichtig vermischen."
   ],
   [
    "Kartoffeln hinzufügen",
    "Die knusprigen Quetschkartoffeln dazugeben und alles gut vermengen."
   ]
  ],
  "notes": [
   "Für eine besonders cremige und proteinreiche Variante Skyr verwenden.",
   "Die Kartoffeln am besten erst kurz vor dem Servieren unterheben, damit sie möglichst lange knusprig bleiben."
  ]
 },
 {
  "id": "cowboy",
  "ch": "pasta",
  "name": "Cowboy Butter Steak Pasta mit trockenem Weißwein",
  "script": "rigatoni · steak · cowboy butter",
  "label": "Steak · Creamy",
  "desc": "Cremige Rigatoni mit saftigem Steak in Scheiben und einer würzigen Cowboy-Butter-Sauce aus Knoblauch, Schalotten, trockenem Weißwein, Parmesan und frischen Kräutern.",
  "time": "45 Min",
  "min": 45,
  "diff": 5,
  "diffLabel": "Mittel",
  "portions": "4 Personen",
  "rating": null,
  "img": "",
  "thumb": "",
  "ings": [
   [
    "— Steak —",
    ""
   ],
   [
    "2",
    "Ribeye- oder New-York-Strip-Steaks"
   ],
   [
    "nach Geschmack",
    "Salz und schwarzer Pfeffer"
   ],
   [
    "2 EL",
    "Butter"
   ],
   [
    "3",
    "Knoblauchzehen, angedrückt"
   ],
   [
    "2 Zweige",
    "Rosmarin oder Thymian"
   ],
   [
    "— Cowboy-Butter-Sauce —",
    ""
   ],
   [
    "115 g",
    "ungesalzene Butter"
   ],
   [
    "1",
    "Schalotte, fein gewürfelt"
   ],
   [
    "5",
    "Knoblauchzehen, fein gehackt"
   ],
   [
    "100 ml",
    "trockener Weißwein"
   ],
   [
    "360 ml",
    "Sahne"
   ],
   [
    "125 g",
    "Parmesan, frisch gerieben"
   ],
   [
    "Saft von ½",
    "Zitrone"
   ],
   [
    "1 EL",
    "Dijon-Senf"
   ],
   [
    "1 gehäufter EL",
    "frische Petersilie, gehackt"
   ],
   [
    "1 gehäufter EL",
    "frischer Schnittlauch, gehackt"
   ],
   [
    "1 TL",
    "Thymian"
   ],
   [
    "1 TL",
    "Knoblauchpulver"
   ],
   [
    "1 TL",
    "Oregano"
   ],
   [
    "½–1 TL",
    "Cayennepfeffer, nach Geschmack"
   ],
   [
    "½ TL",
    "Chiliflocken"
   ],
   [
    "½ TL",
    "geräuchertes Paprikapulver"
   ],
   [
    "nach Geschmack",
    "Salz und schwarzer Pfeffer"
   ],
   [
    "— Pasta —",
    ""
   ],
   [
    "450 g",
    "Rigatoni"
   ],
   [
    "etwas",
    "Salz für das Nudelwasser"
   ],
   [
    "ca. 60–120 ml",
    "Pastawasser"
   ],
   [
    "— Zum Garnieren —",
    ""
   ],
   [
    "nach Belieben",
    "Parmesan"
   ],
   [
    "nach Belieben",
    "frische Petersilie"
   ],
   [
    "nach Belieben",
    "frischer Schnittlauch"
   ],
   [
    "optional",
    "Chiliflocken"
   ]
  ],
  "steps": [
   [
    "Pasta kochen",
    "Einen großen Topf mit Salzwasser zum Kochen bringen. Die Rigatoni nach Packungsanweisung al dente kochen. Vor dem Abgießen etwa 120 ml Pastawasser auffangen."
   ],
   [
    "Steak braten",
    "Die Steaks mit Küchenpapier trocken tupfen und von beiden Seiten großzügig mit Salz und schwarzem Pfeffer würzen. Eine große Pfanne bei mittlerer bis hoher Hitze erhitzen. Die Steaks je nach Dicke etwa 3–4 Minuten pro Seite scharf anbraten. In der letzten Minute 2 EL Butter, die angedrückten Knoblauchzehen und Rosmarin oder Thymian hinzufügen. Die Pfanne leicht schräg halten und die Steaks wiederholt mit der geschmolzenen Kräuterbutter übergießen. Die Steaks aus der Pfanne nehmen und 5–10 Minuten ruhen lassen. Anschließend das Fleisch quer zur Faser in dünne Scheiben schneiden."
   ],
   [
    "Schalotten und Knoblauch anbraten",
    "Die Hitze auf mittlere Stufe reduzieren. Die 115 g Butter in derselben Pfanne schmelzen. Die fein gewürfelte Schalotte hinzufügen und etwa 2–3 Minuten glasig dünsten. Den gehackten Knoblauch dazugeben und weitere 30–60 Sekunden anschwitzen, bis er duftet."
   ],
   [
    "Mit Weißwein ablöschen",
    "Die 100 ml trockenen Weißwein in die Pfanne gießen. Etwa 2–3 Minuten köcheln lassen, damit der Wein etwas reduziert und die Aromen intensiver werden. Den Bratensatz vom Pfannenboden lösen, damit er sich mit der Sauce verbindet."
   ],
   [
    "Cremige Cowboy-Butter-Sauce zubereiten",
    "Dijon-Senf, Zitronensaft, Thymian, Knoblauchpulver, Oregano, Cayennepfeffer, Chiliflocken und geräuchertes Paprikapulver einrühren. Die Sahne hinzufügen und bei niedriger bis mittlerer Hitze sanft köcheln lassen. Den Parmesan nach und nach einrühren, bis er geschmolzen ist und die Sauce cremig wird. Petersilie und Schnittlauch unterheben. Mit Salz und schwarzem Pfeffer abschmecken. Die Sauce nicht zu stark kochen lassen."
   ],
   [
    "Pasta mit der Sauce vermengen",
    "Die gekochten Rigatoni direkt in die Sauce geben und gut vermischen. Nach und nach etwas Pastawasser hinzufügen, bis die Sauce schön cremig ist und gleichmäßig an den Nudeln haftet. Noch einmal abschmecken und bei Bedarf etwas Zitronensaft hinzufügen."
   ],
   [
    "Anrichten",
    "Die cremigen Rigatoni auf vier Teller verteilen. Die Steakscheiben dekorativ auf der Pasta anrichten. Mit zusätzlichem Parmesan, frischer Petersilie, Schnittlauch und nach Wunsch Chiliflocken garnieren."
   ]
  ],
  "notes": [
   "Weißwein: Verwende einen trockenen Weißwein, beispielsweise Sauvignon Blanc oder Pinot Grigio.",
   "Steak: Nach dem Ruhen quer zur Faser schneiden, damit die Scheiben besonders zart bleiben.",
   "Sauce: Den Parmesan bei niedriger Hitze einrühren, damit die Sauce glatt und cremig bleibt.",
   "Schärfe: Cayennepfeffer und Chiliflocken nach Geschmack dosieren."
  ]
 }
];
