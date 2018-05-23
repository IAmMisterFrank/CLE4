/// <reference path="phaser.d.ts">
class Game {
    game:Phaser.Game;
    player:Player;
    playground:object;
    aphrodite:Aphrodite;
    banaan:Banaan;


    constructor() {

        this.game = new Phaser.Game(this.config()) 
        console.log('hoi2')  
    }

    config()
    {
        return {
            type: Phaser.AUTO,
            width: 1280,
            height: 720,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 500 }
                }
            },
            scene: {
                preload: this.preload,
                create: this.create,
                update: this.update
            }
        }
    }     
    
    preload()
    {
        this.load.image('background', 'images/background1.jpg')
        this.load.image('ground', 'images/ground.png')
        this.load.image('idle', 'images/idle.png')
        this.load.image('banaan', 'images/banaan.png')
        this.load.image('retro-game-bg', 'images/retro-game-bg.jpg')
        this.load.spritesheet('player', 'images/player.png', {frameWidth: 125, frameHeight: 119})    
        this.load.spritesheet('afro', 'images/idleA.png', {frameWidth: 317, frameHeight: 391})
    }   

    create()
    {
        aod.playground = this;

        new Menu()
     
    }

    update()
    {
        // aod.player.movement()
    
    }
}





