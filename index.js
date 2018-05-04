var jukebox = document.getElementById("jukebox")

var play = document.getElementById("play")
var pause = document.getElementById("pause")
var stop = document.getElementById("stop")
var ff = document.getElementById("ff")
var shuffle = document.getElementById("shuffle")
var createPlaylist = document.getElementById("createPlaylist")

var playliststatus = 0

musiclist = ["audio/brazil.mp3", "audio/jungle.mp3", "audio/olah.mp3", "audio/dogs.mp3"]
var songs = document.createElement("audio");
songs.src=musiclist[playliststatus];
jukebox.appendChild(songs);


class media
{
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
			songs.currentTime=0;
			songs.pause()
			// songs.src=musiclist[playliststatus];
		}

		ff()
		{
			if(playliststatus>musiclist.length-1)
			{
				playliststatus = 0
				songs.src=musiclist[playliststatus]
				songs.play();
			}
			else
			{
				songs.src=musiclist[playliststatus++]
				songs.play();
			}
		
		}

		shuffle()
		{
			var z = Math.floor(Math.random()*musiclist.length)
			songs.src=musiclist[z]
			songs.play();
		}

		createBox() // used to create playlist
		{
			for(var i=0;i<musiclist.length;i++)
			{	
				var box = document.createElement("div")

				box.style.width = "150px"
				box.style.height = "30px"
				// box.style.backgroundColor = "red"
				box.style.border = "2px solid black"
				box.style.display = "inline-block"
				box.style.margin = "5px"
				box.innerHTML = musiclist[i]
				box.id="button"+musiclist[i]
				// var "button"+musiclist[i] = document.getElementById("button"+musiclist[i])
				document.body.appendChild(box)
			}	
		}

}

var Jukebox = new media(songs);

play.addEventListener("click",function(){Jukebox.play()})
pause.addEventListener("click",function(){Jukebox.pause()})
stop.addEventListener("click",function(){Jukebox.stop()})
ff.addEventListener("click",function(){Jukebox.ff()})
shuffle.addEventListener("click",function(){Jukebox.shuffle()})
createPlaylist.addEventListener("click",function(){Jukebox.createBox()})








