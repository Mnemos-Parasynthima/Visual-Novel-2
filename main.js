/* New visual novel object
* HTML element id 
* Width
* Height
* Image locations
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

// Sets vn config (bg color, dialog colo [bg and text])
vn.setBgColor("lightblue");
vn.setDialogBgColor("lightgrey");
vn.setDialogTextColor("black");

vn.fadeBg('out', 1000);
// // text, fade in, duration
// vn.fadeSceneText( "Mnemos-Parasynthima Presents", "in", 500 );
// // text, fade out, duration
// vn.fadeSceneText( "Mnemos-Parasynthima Presents", "out", 500 );
// // text, fade in, duration
// vn.fadeSceneText( "Visual Novel: Volume 1", "in", 500 );
// // text, fade out, duration
// vn.fadeSceneText( "Visual Novel: Volume 1", "out", 500 );
vn.fadeBg('in', 1000);

vn.input('name', "What's your name?"); // Asks user for char name

// Creates char object
const user = {
  name: {name},
  nameStyle: "color: darkblue",
  width: 600, // Temp, testing?
  height: 600, // Temp, testing?
  image: "chars/user.jpg", // Future object
  pos: {
    x: 1.0,
    y: 0.007
  } // Add dialog object (opt)
}

