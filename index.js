var jukebox = document.getElementById("jukebox")

var play = document.getElementById("play")
var pause = document.getElementById("pause")
var stop = document.getElementById("stop")
var ff = document.getElementById("ff")
var random = document.getElementById("random")

var playliststatus = 0

musiclist = ["audio/brazil.mp3", "audio/jungle.mp3", "audio/olah.mp3", "audio/dogs.mp3"]
var songs = document.createElement("audio");
songs.src=musiclist[playliststatus];
jukebox.appendChild(songs);


class media
{
	// constructor(music)
	// {
		play()
		{
			songs.play();
		}
	
		pause()
		{
			songs.pause();
		}

		stop()
		{
			songs.pause();
			songs.currenTime=0;
			songs.src=musiclist[playliststatus];
		}

		ff()
		{
			songs.pause()
			if(playliststatus>musiclist.length-1)
			{
				
				playliststatus = 0
				songs.src=musiclist[playliststatus]
				songs.play();
			}
			// else if(playliststatus==playliststatus)
			// {
			// 	playliststatus = playliststatus+1
			// 	songs.pause()
			// 	songs.src=musiclist[playliststatus]
			// 	songs.play();
			// }
			else
			{
				songs.src=musiclist[playliststatus++]
				songs.play();
			}
		
		}

		shuffle()
		{

		}

	// }

}

var Jukebox = new media(songs);

play.addEventListener("click",function(){Jukebox.play()})
pause.addEventListener("click",function(){Jukebox.pause()})
stop.addEventListener("click",function(){Jukebox.stop()})
ff.addEventListener("click",function(){Jukebox.ff()})

