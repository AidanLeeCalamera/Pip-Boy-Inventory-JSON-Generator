const consumablePresets = [
  {
    "name": "Stimpak",
    "type": "consumable",
    "quantity": 1,
    "effect": "Restores 30% of your health.",
    "sounds": [
      "Stimpak.wav"
    ],
    "image": "Stimpak_img.js",
    "stats": {
      "Health": "30%",
      "Weight": "0.1",
      "Value": "48"
    }
  },
  {
    "name": "RadAway",
    "type": "consumable",
    "quantity": 1,
    "effect": "Removes 300 points of radiation over time.",
    "sounds": [
      "Radaway.wav"
    ],
    "image": "Radaway_img.js",
    "stats": {
      "Rads": {
        "value": "-300",
        "isTimed": true
      },
      "Weight": "0.1",
      "Value": "80"
    }
  },
  {
    "name": "Rad-X",
    "type": "consumable",
    "quantity": 1,
    "effect": "Increases radiation resistance by 75 for 3 minutes.",
    "sounds": [
      "RadX_01.wav",
      "RadX_02.wav"
    ],
    "image": "Rad-X_img.js",
    "stats": {
      "Rad Resist": {
        "value": "75",
        "isTimed": true
      },
      "Weight": "0.1",
      "Value": "40"
    }
  },
  {
    "name": "Nuka Cola",
    "type": "consumable",
    "quantity": 1,
    "effect": "Refreshing! Restores 20 HP and provides a small AP boost.",
    "sounds": [
      "NukaCola.wav"
    ],
    "image": "NukaCola_img.js",
    "stats": {
      "Health": "20",
      "AP": "10",
      "Rads": "5",
      "Weight": "1.0",
      "Value": "20"
    }
  }

];
