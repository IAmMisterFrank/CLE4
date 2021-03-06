
class SoundEffects
{
    menuTheme:any;
    fantasyMusic:any;
    zeusMusic:any;

    constructor()
    {
        this.menuTheme = this.createMenuTheme();
        this.fantasyMusic = this.createFantasyTheme();
        this.zeusMusic = this.createZeusMusic();
    }

    fadeToLevel1()
    {
        
        this.menuTheme.fade(1, 0, 1000);
        this.fantasyMusic.play();
        this.fantasyMusic.fade(0, 1, 800);
    }

    fadeToZeus()
    {
        
        this.menuTheme.fade(1, 0, 1000);
        this.zeusMusic.play();
        this.zeusMusic.fade(0, 1, 800);
    }

    createMenuTheme()
    {
        return new Howl({
            src: ['./audio/menu.mp3'],
            autoplay: true,
            loop: true,
            volume: 1
        });
    }

    createFantasyTheme()
    {
        return new Howl({
            src: ['./audio/fantasy.mp3'],
            autoplay: false,
            loop: true,
            volume: 0
        });
    }

    createZeusMusic()
    {
        return new Howl({
            src: ['./audio/zeus.mp3'],
            autoplay: false,
            loop: true,
            volume: 0
        });
    }
}