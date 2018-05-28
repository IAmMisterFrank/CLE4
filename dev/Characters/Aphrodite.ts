

class Aphrodite {
    aphrodite:object;
    constructor(){
        this.create();
    }
        
    create()
    {
        this.animations()
        this.aphrodite = aod.playground.physics.add.sprite(700, 200, 'afro')
        this.aphrodite.setScale(0.5);
        this.aphrodite.anims.play('afro');
        this.aphrodite.flipX = true

    }
    animations(){
        aod.game.anims.create({
            key:'afro',
            frames: aod.game.anims.generateFrameNumbers('afro', { start:0, end: 14}),
            frameRate: 10,
            repeat : -1,
            yoyo : true
           });
    }

    }