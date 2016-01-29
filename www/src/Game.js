/* jshint browser:true */
// create BasicGame Class
BasicGame = {

};

// create Game function in BasicGame
BasicGame.Game = function (game) {
};

var cursors;

// set Game function prototype
BasicGame.Game.prototype = {

    init: function () {
        // set up input max pointers
        this.input.maxPointers = 1;
        // set up stage disable visibility change
        this.stage.disableVisibilityChange = true;
        // Set up the scaling method used by the ScaleManager
        // Valid values for scaleMode are:
        // * EXACT_FIT
        // * NO_SCALE
        // * SHOW_ALL
        // * RESIZE
        // See http://docs.phaser.io/Phaser.ScaleManager.html for full document
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        // If you wish to align your game in the middle of the page then you can
        // set this value to true. It will place a re-calculated margin-left
        // pixel value onto the canvas element which is updated on orientation /
        // resizing events. It doesn't care about any other DOM element that may
        // be on the page, it literally just sets the margin.
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        // Force the orientation in landscape or portrait.
        // * Set first to true to force landscape. 
        // * Set second to true to force portrait.
        this.scale.forceOrientation(true, false);
        // Sets the callback that will be called when the window resize event
        // occurs, or if set the parent container changes dimensions. Use this 
        // to handle responsive game layout options. Note that the callback will
        // only be called if the ScaleManager.scaleMode is set to RESIZE.
        this.scale.setResizeCallback(this.gameResized, this);
        // Set screen size automatically based on the scaleMode. This is only
        // needed if ScaleMode is not set to RESIZE.
        this.scale.updateLayout(true);
        // Re-calculate scale mode and update screen size. This only applies if
        // ScaleMode is not set to RESIZE.
        this.scale.refresh();

    },

    preload: function () {

        // Here we load the assets required for our preloader (in this case a 
        // background and a loading bar)

        //this.load.image('character', 'asset/characterSingle.png');
        //http://phaser.io/examples/v2/sprites/spritesheet
        this.load.spritesheet('characterOrange', 'asset/characterOrangeLine.png', 16, 16, 12);
    },

    create: function () {
        //http://phaser.io/examples/v2/input/cursor-key-movement
        cursors = this.game.input.keyboard.createCursorKeys();

        // this.character = this.add.sprite(
        //     this.world.centerX,
        //     this.world.centerY,
        //     'character');
        // this.character.anchor.setTo(0.5, 0.5);

        this.character = this.add.sprite(
             this.world.centerX,
             this.world.centerY, 
             'characterOrange');
        this.character.anchor.setTo(0.5, 0.5);

        // animation name, frames, FPS, true? (maybe swap)
        var framesPerSecond = 10;
        this.character.animations.add('down', [0, 1, 2], framesPerSecond, true);
        this.character.animations.add('right', [3, 4, 5], framesPerSecond, true);
        this.character.animations.add('up', [6, 7, 8], framesPerSecond, true);
        this.character.animations.add('left', [9, 10, 11], framesPerSecond, true);
    },

    gameResized: function (width, height) {

        // This could be handy if you need to do any extra processing if the 
        // game resizes. A resize could happen if for example swapping 
        // orientation on a device or resizing the browser window. Note that 
        // this callback is only really useful if you use a ScaleMode of RESIZE 
        // and place it inside your main game state.

    },

    update : function () {
        if (cursors.up.isDown)
        {
            this.character.y--;
            this.character.animations.play('up');
        }
        else if (cursors.down.isDown)
        {
            this.character.y++;
            this.character.animations.play('down');
        }
        else if (cursors.left.isDown)
        {
            this.character.x--;
            this.character.animations.play('left');
        }
        else if (cursors.right.isDown)
        {
            this.character.x++;
            this.character.animations.play('right');
        }
        else {
            this.character.animations.stop();
        }
    }

};