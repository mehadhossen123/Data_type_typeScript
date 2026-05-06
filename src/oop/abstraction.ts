// //  here we have to learn abstraction 

// //  1 . interface 
// //  2. abstract

interface MediaPlayer{
    paly():void
    pause():void,
    stop():void
}

 class MusicPlayer implements MediaPlayer{
    paly(): void {
        console.log("playing music ----")
    }
    pause(): void {
        console.log("pausing music --------")
     }
     stop(): void {
         console.log("Music stopped ")
     }
 }

 const myPlayer=new MusicPlayer()
 myPlayer.paly()






// example 2 using abstract class 

abstract class MediaPlayer {
   abstract play():void
   abstract pause():void
    abstract stop ():void
}
 class MusicPlayer extends MediaPlayer{
    play(): void {
        console.log("this music is playing ---")
    }

    pause(): void {
        console.log("the music is pausing ")
    }
    stop(): void {
        console.log("the music is stopping ")
    }
 }
 const music=new MusicPlayer();
 music.play()