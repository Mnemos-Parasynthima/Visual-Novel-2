/** New visual novel object
* @param {string} vn - HTML element id 
* @param {number} 800 - Width of the visual novel
* @param {number} 600 - Height of the visual novel
* @param {string} imgs/ - Image locations
*/
const vn = new VisualNovel(
  "vn",
  800,
  600,
  "imgs/"
);

// Initiates vn
vn.init();

// Start screen config (title, bg color, and start button pos)
vn.setNovelTitle("Visual Novel", "Volume 1");
vn.setStartScreenBgColor("lightblue");
vn.setStartScreenMenuPos(500, 500);

// Sets vn config (bg color, dialog color [bg and text])
vn.setBgColor("pink");
vn.setDialogBgColor("lightgrey");
vn.setDialogTextColor("black");

vn.input('name', "What's your name?"); // Asks user for char name

// Creates char object
const user = {
  name: { name },
  nameStyle: "color: darkblue",
  width: 600, // Temp, testing?
  height: 600, // Temp, testing?
  image: "chars/user.jpg", // Future object
  pos: {
    x: 1.0,
    y: 0.007
  } // Add dialog object (opt)
}

vn.setBgColor('black');
vn.fadeBg('in', 1000);
vn.addTextToScene("intro", "Mnemos-Parasynthima Presents",
  {
    x: 300, y: 100, z: 0.4,
    width: 300, height: 50,
    size: 50,
    color: "white",
    fade: 500
  }, 500
);
vn.fadeSceneText("intro", "out", 500);
