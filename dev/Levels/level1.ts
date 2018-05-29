class Level1 {
    constructor() {
        aod.playground.add.image(window.innerWidth / 2, 300, 'background').setScale(1.2);
        aod.platforms = aod.playground.physics.add.staticGroup();
        aod.platforms.create(50, 700, 'ground').setScale(0.3).refreshBody();
        aod.platforms.create(700, 500, 'ground').setScale(0.3).refreshBody();
        aod.platforms.create(1200, 300, 'ground').setScale(0.3).refreshBody();
        

        aod.player = new Player();
        aod.aphrodite = new Aphrodite();
        aod.banaan = new Banaan();
        

        aod.playground.physics.add.collider(aod.player.player, aod.platforms);
        aod.playground.physics.add.collider(aod.aphrodite.aphrodite, aod.platforms);
        aod.playground.physics.add.overlap(aod.aphrodite, aod.player.player, this.hey, null, this);
        aod.playground.physics.world.setBounds(0, 0, 1260 * 4, 720 * 2);
    }
    update() {
        aod.player.movement()
    }
    hey() {
        console.log('ik ben een banaan')
    }
}