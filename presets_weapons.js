const weaponPresets = [
  {
    name: "Shishkebab",
    type: "weapon",
    quantity: 1,
    effect:
      "A flaming sword forged from a motorcycle gas tank and lawnmower blade.",
    ammoType: null,
    image: "Shishkebab_img.js",
    damages: [
      { type: "attack", value: "13" },
      { type: "fire", value: "13" },
    ],
    stats: { Speed: "Medium", Weight: "3.0", Value: "100" },
  },
  {
    name: "Laser Musket",
    type: "weapon",
    quantity: 1,
    effect: "A powerful energy weapon. Crank to increase charge.",
    ammoType: "Fusion Cell",
    damages: [{ type: "energy", value: "35" }],
    stats: {
      "Fusion Cell": "1",
      "Fire Rate": "1",
      Range: "150",
      Accuracy: "70",
      Weight: "12.0",
      Value: "500",
    },
  },
  {
    name: "Plasma Rifle",
    type: "weapon",
    quantity: 1,
    effect: "A multi-damage weapon firing bolts of superheated plasma.",
    ammoType: "Plasma Cartridge",
    damages: [
      { type: "attack", value: "15" },
      { type: "energy", value: "15" },
      { type: "fire", value: "10" },
    ],
    stats: {
      "Plasma Cartridge": "1",
      "Fire Rate": "33",
      Range: "95",
      Accuracy: "71",
      Weight: "3.9",
      Value: "157",
    },
  },
];