let game_over = false;
let music = document.getElementById("Sally_singing");

let hoverTimeout;
function setHoverTimeout() {
	hoverTimeout = setTimeout(() => {
		game_over = true;
		console.log(game_over);
	}, 1000);
}
function clearHoverTimeout() {
	clearTimeout(hoverTimeout);
}

const circles = [
	document.getElementById("circle1"),
	document.getElementById("circle2"),
	document.getElementById("circle3"),
];

const zones_visions = [
	document.getElementById("zone_vision1"),
	document.getElementById("zone_vision2"),
	document.getElementById("zone_vision3"),
];


function vision() {
   
	circles.forEach((circle) => {
		circle.style.visibility = "visible";
		let div_square = Math.random() * 900;
		circle.style.width = div_square + "px";
		circle.style.height = div_square + "px";
		circle.style.top = Math.random() * 400 + "px";
		circle.style.left = Math.random() * 700 + "px";
	});

	zones_visions.forEach((zone_vision) => {
		zone_vision.style.transition = "all 4.9s";
		let transformedZone = Math.random() * 200;
		zone_vision.style.width = transformedZone + "%";
		zone_vision.style.height = transformedZone + "%";
		zone_vision.addEventListener("transitionend", () => {
			zone_vision.style.transition = "all 0s";
			zone_vision.style.width = "0%";
			zone_vision.style.height = "0%";
		});
	});

	zones_visions.forEach((zone_vision) => {
		zone_vision.addEventListener("mouseenter", setHoverTimeout);
		zone_vision.addEventListener("mouseleave", clearHoverTimeout);
	});

   
}

function reloadPage() {
    window.location.reload()
}

const dialogues = [
	"...",
	"I sense there's something in the wind",
	"That feels like tragedy's at hand",
	"And though I'd like to stand by him",
	"Can't shake this... Oh !",
	"Well, hello you... What are you doing around here ?",
	"A pretty little thing like you shouldn't be lurking around in a graveyard.",
	"I mean...",
	"With such a handsome face",
	"And lovely arms",
	"And pleasing legs",
	"Oh...",
	"They would look so beautiful on me",
	"G I V E  T H E M  T O  M E",
	"Zero ? What is...",
	"HEY ! GET OUT OF MY FACE",
	"Urgh...",
	"You won't be able to hide for long, young one !"
];

const dialogues2 = [
	"Where did that little brat go now...",
	"Show yourse-... AAAAAAAAAAAAAAAH",
	"Who put a grave hole here !!",
	"Oh, here you are....",
	"Lend me a hand, would you ?",
	"Wait... What are you doing with that coffin ?",
	"You.... You wouldn't push it on an innocent and fragile girl wouldn't you ?",
	"Right ?",
	"NO ! Help-"
];

let dialogue_index = 0;

const button = document.getElementById("dialogues_bg");
let dialogue = document.getElementById("dialogues_text");
const name = document.getElementById("name");
const picture = document.getElementById("pp_Sally");

let timeOuts = [];
let skip = false;

function clear() {
	for (let j = 0; j < timeOuts.length; j++) {
		clearTimeout(timeOuts[j]);
	}
}
const endTimeout = [];

button.addEventListener("click", function () {
	dialogue.innerHTML = "";
	skip == true ? (skip = false) : (skip = true);
	if (dialogue_index < dialogues.length) {
		if (skip == false) {
			for (let i = 0; i < dialogues[dialogue_index].length; i++) {
				function timeOut() {
					dialogue.innerHTML += dialogues[dialogue_index].charAt(i);
				}
				timeOuts.push(setTimeout(timeOut, 50 * i));
			}
			if (music.paused && dialogue_index == 1) {
				music.play();
                music.volume = 0.2;
			}
			if (dialogue_index == 13) {
				document.getElementById('zero').style.right = '10%';
			}
			if (dialogue_index == 14) {
				document.getElementById('zero').style.right = '40%';
				document.getElementById('zero').style.top = '6%';
			}
			if (dialogue_index == 16) {
				document.getElementById('zero').style.top = '-100%';
			}
		} else {
			dialogue.innerHTML = dialogues[dialogue_index];
			dialogue_index++;
			clear();
		}

	} else {
		const startTime = Date.now();


        function loop() {
			const currentTime = Date.now();
			if (currentTime - startTime < 30000){
                document.body.style.backgroundImage = "none";
                document.body.style.backgroundColor = "black";
                document.getElementById("dialogues_bg").style.display = "none";
				document.getElementById("fb_sally").style.display = "none";
				document.getElementById('zero').style.display = 'none';
				vision()
                
				endTimeout.push(setTimeout(loop, 5000));
			} 
            
            if (currentTime - startTime > 30000){
                const button2 = document.getElementById("dialogues_bg2");
				let dialogue2 = document.getElementById("dialogues_text2");
                
				document.body.style.backgroundImage = "url('Sally_assets/bg-graveyard.jpg')";
				document.getElementById("fb_sally").style.display = "block";
                button2.style.display = "flex";
                document.getElementById('minigame').style.display = 'none';
                 
                let timeOuts2 = [];
                let dialogue_index2 = 0;
				let skip = false;

				function clear2() {
					for (let j = 0; j < timeOuts2.length; j++) {
						clearTimeout(timeOuts2[j]);
					}
				}

                button2.addEventListener("click", function () {
                    dialogue2.innerHTML = "";
                    skip == true ? (skip = false) : (skip = true);
                    if (dialogue_index2 < dialogues2.length) {
                        if (skip == false) {
                            for (let i = 0; i < dialogues2[dialogue_index2].length; i++) {
                                function timeOut2() {
                                    dialogue2.innerHTML += dialogues2[dialogue_index2].charAt(i);
                                }
                                timeOuts2.push(setTimeout(timeOut2, 50 * i));
                            }
                        } else {
                            dialogue2.innerHTML = dialogues2[dialogue_index2];
                            dialogue_index2++;
                            clear2();
                        }
                    } else {
						window.open(location.href = 'pages/ActeIV.html', '_blank');
					}
                })
                
			} 

			if (game_over) {
				endTimeout.forEach((timeout) => {
					clearTimeout(timeout);
				});
				console.log('game_over')
				document.body.style.backgroundImage = "url('Sally_assets/game_over.gif')";
                document.getElementById('minigame').style.display = 'none';
                document.getElementById('body').addEventListener('click', reloadPage);
			}
		}
        loop();
		
	}
    
});
