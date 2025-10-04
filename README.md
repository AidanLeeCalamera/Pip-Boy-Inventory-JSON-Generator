# Pip-Boy-Inventory-JSON-Generator
A HTML page for generating items.json files for my inventory patch for the Pip-Boy 3000 MK V.

## Usage
1. Download zip and extract to a folder.  
2. Run items-json-generator.html  
   Optional: If you want to use any of the audio and/or image<sup>**1**</sup> files provided, click "Select DATA Folder" and select the DATA folder included. If you want to add any audio and/or image<sup>**1**</sup> files just put them in that folder. (Tutorial for how to do images will come soon, as for audio, it's as simple as running
   `mkdir output && for %F in (*.mp3) do ffmpeg -i "%F" -ac 1 -ar 16000 -af "volume=5dB" -sample_fmt s16 -c:a pcm_s16le -f wav "output\%~nF.wav"`  
   in the directory with the audio you want to add, and putting the output files in the DATA folder.  
5. Select presets to add predefined items or add custom items with "Add New Item".  
   Optional: If making a custom item, select item type, this is very important.  
6. All stats are fully customizable, so you can name an item anything you want, name any stat whatever you want, have any value you want. There are 6 damage types, 10 apparel slots, and 5 defense types.  
7. Export the items by clicking "Export Files", this will give you a zip with items_(number).json and items_meta.json, extract these and uploaded to the DATA folder<sup>**2**</sup> (deleting any previously there) on your Pip-Boy 3000 MK V for use with the [Pip-Boy inventory patch](https://github.com/AidanLeeCalamera/Pip-Boy-Inventory-Patch) with the wonderful [Pip-Boy mainatanance tool](https://pip-boy.com/3000-mk-v/maintenance).  
8. Stock up on Stimpaks and Radaway for the wasteland!

\
<sup>**1**</sup>Images are not currently recommended for the average user (and most likely never will be) as they can be covered by stats and are quite processer intensive.<br/>
<sup>**2**</sup>If you have not uploaded the DATA folder that came with this tool, do so now. If you intend to use any community items with sounds or images, these can be found in community_DATA and should also be placed into DATA.
<br/>
<br/>

# Any PRs with custom items, whether from the games or just fun items you've made, are encouraged and welcome!
Simply create your custom item in the app, export the json files, and copy the item in the curly brackets into the corresponding preset js file. (If you have any custom sounds or images, you should PR those too into community_DATA)<br/>

For example, if you wanted to make a Nuka-Cola item, you would set all the stats names and values in the app, any sound(s) you want, any images<sup>**1**</sup>, etc. And export the files, in this case it would look like:
```
[
  {
    "name": "Stimpak",
    "type": "consumable",
    "quantity": 10,
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
  }
]
```
Then copy from the { before "name", to the second } after your last stat. Paste into the corresponding preset category, in this case consumables, and PR.
