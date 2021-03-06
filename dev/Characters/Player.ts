

class Player {
    player:object;
    canWalk:boolean = true;

    constructor() 
    {
        //maakt loop animatie voor aapje
        this.create()
        this.animations()
        this.movement()
    }

    create()
    {
        this.player = aod.playground.physics.add.sprite(125, 1200, 'player');
        this.player.setCollideWorldBounds(true);
        
    }

    animations()
    {
        aod.game.anims.create({
            key:'walk',
            frames: aod.game.anims.generateFrameNumbers('player', { start: 2, end: 5}),
            frameRate: 10,
            repeat: -1
        }) 

        aod.game.anims.create({
            key:'breath',
            frames: aod.game.anims.generateFrameNumbers('player', { start: 0, end: 1}),
            frameRate: 1,
            repeat: -1
        })
    }

    disableWalking()
    {
        this.canWalk = false;
    }

    enableWalking()
    {
        this.canWalk = true;
    }
    dead(){
        aod.player.player.x = 125;
        aod.player.player.y = 1200;
    }
    movement()
    {
        // If walking is disabled, do not walk
        if(!this.canWalk) {
            this.player.anims.play('breath', true);
            this.player.setVelocityX(0);
            return;
        }

        let Akey = aod.playground.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        let Wkey = aod.playground.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        //let Skey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        let Dkey = aod.playground.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        let upKey = aod.playground.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        let leftKey = aod.playground.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        let rightKey = aod.playground.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

       
        if (Akey.isDown || leftKey.isDown)
        {
            this.player.anims.play('walk', true);
            this.player.setVelocityX(-160);
            this.player.flipX = true;
        }
        //beweegt naar rechts als d is in gedrukt
        else if (Dkey.isDown || rightKey.isDown)
        {
            this.player.setVelocityX(160);
            this.player.flipX = false;
            this.player.anims.play('walk', true);
        }
        else
        {   
            //wat er gebruikt als de player niks indrukt
            this.player.anims.play('breath', true);
            this.player.setVelocityX(0);
        }
        //springt als w is ingedrukt
        if ((Wkey.isDown && this.player.body.touching.down) || (upKey.isDown && this.player.body.touching.down))
        {
           this.player.setVelocityY(-550);
        }  
    }
    delete(){
        this.player.destroy()
    }
}