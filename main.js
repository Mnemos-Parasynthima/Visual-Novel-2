// Create Visual Novel:
// HTML element id = getting-started-vn
// Width = 800
// Height = 600
// Images location = img/
const vn = new VisualNovel( "vn", 800, 600, "img/" );

vn.init();

// Title
vn.setNovelTitle( "Visual Novel JS", "getting started" );

// Start screen settings
vn.setStartScreenBgColor( "black" );
vn.setStartScreenMenuPos( 550, 500 );

// Background
vn.setBgColor( "black" );

// Dialog settings
vn.setDialogBgColor( "white" );
vn.setDialogTextColor( "black" );

vn.say( "Me", "Hello World" );
vn.say( "World", "Hi Me" );

// Go back to start screen
vn.reset();