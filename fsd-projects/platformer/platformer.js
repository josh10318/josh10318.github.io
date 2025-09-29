$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
       createPlatform(100,700,200,15,"black");
       createPlatform(300,600,200,15,"black");
       createPlatform(500,500,200,15,"black");
       createPlatform(300,400,200,15,"black");
       createPlatform(100,300,200,15,"black");
       createPlatform(300,200,200,15,"black");
       createPlatform(700,400,200,15,"black");
       createPlatform(900,300,200,15,"black");
       createPlatform(1100,200,200,15,"black");
       createPlatform(700,600,200,15,"black");
       createPlatform(1100,600,200,15,"black");
       
    // TODO 3 - Create Collectables
       createCollectable("database", 900, 100, 0.7, 0.5);
       createCollectable("database", 700, 200, 0.7, 0.5);
       createCollectable("database", 300, 500, 0.7, 0.5);
       createCollectable("database", 1100, 500, 0.7, 0.5);
       createCollectable("database", 700, 500, 0.7, 0.5);
       createCollectable("database", 1200, 100, 0.7, 0.5);
       createCollectable("database", 200, 100, 0.7, 0.5);
       createCollectable("database", 300, 100, 0.7, 0.5);
       createCollectable("database", 500, 400, 0.7, 0.5);
       
    // TODO 4 - Create Cannons
       createCannon("right", 300, 1300)
        createCannon("right", 600, 1300)
         createCannon("top", 300, 1300)
         createCannon("top", 600, 1300)
         
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
