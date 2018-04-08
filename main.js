var blockLeft = document.querySelector(".blockLeft");
var blockRight = document.querySelector(".blockRight");

var pointPlayer1 = document.querySelector(".pointPlayer1");
var pointPlayer2 = document.querySelector(".pointPlayer2");

var totalScorePlayer1 = document.querySelector(".totalScorePlayer1");
var totalScorePlayer2 = document.querySelector(".totalScorePlayer2");

var nbCurrentPlayer1 = document.querySelector(".nbCurrentPlayer1");
var nbCurrentPlayer2 = document.querySelector(".nbCurrentPlayer2");

var btnNewGame = document.querySelector(".btnNewGame");
var btnRoll = document.querySelector(".btnRoll");
var btnHold = document.querySelector(".btnHold");

var idWinner = document.querySelector(".idWinner");

var btnNotice = document.querySelector(".btnNotice");

var volon = document.querySelector(".volon");
var voloff = document.querySelector(".voloff");
var volumeBox = document.querySelector(".volumeBox");

var sonRoll = document.querySelector(".sonRoll");
var sonHold = document.querySelector(".sonHold");
var sonWin = document.querySelector(".sonWin");
var sonFail = document.querySelector(".sonFail");

var noticeBoxInformation = document.querySelector(".noticeBoxInformation");

var nb1 = document.querySelector(".nb1");
var nb2 = document.querySelector(".nb2");
var nb3 = document.querySelector(".nb3");
var nb4 = document.querySelector(".nb4");
var nb5 = document.querySelector(".nb5");
var nb6 = document.querySelector(".nb6");

var nb7 = document.querySelector(".nb7");
var nb8 = document.querySelector(".nb8");
var nb9 = document.querySelector(".nb9");
var nb10 = document.querySelector(".nb10");
var nb11 = document.querySelector(".nb11");
var nb12 = document.querySelector(".nb12");

var totalPlayer1 = 0;
var totalPlayer2 = 0;

var currentPlayer1 = 0;
var currentPlayer2 = 0;



function randomNumber(min, max) {
	var nb = min + (max-min+1)*Math.random();
    return Math.floor(nb);
}


var numDe1 = 0;
var numDe2 = 0;
var tourPlayer1 = true;
var tourPlayer2 = false;

btnRoll.addEventListener('click', function() {
	numDe1 = randomNumber(1,6);
	numDe2 = randomNumber(1,6);

	sonRoll.play();
	sonRoll.currentTime = 0;
	
	if(tourPlayer1) {
		
		currentPlayer1 += numDe1 + numDe2;
		nbCurrentPlayer1.textContent = currentPlayer1;

		if(numDe1 === 1 || numDe2 === 1) {
			sonFail.play();
			sonFail.currentTime = 0;
			$('.pointPlayer1').hide();
			$('.pointPlayer2').show();
			blockLeft.style.backgroundColor = "#D1D1D1FF";
			blockRight.style.backgroundColor = "#E3E3E3FF";
			currentPlayer1 = 0;
			nbCurrentPlayer1.textContent = currentPlayer1;
			tourPlayer1 = false;
			tourPlayer2 = true;
		}
		
		numDe1 === 1 ? nb1.style.display = "block" : nb1.style.display = "none";
		numDe1 === 2 ? nb2.style.display = "block" : nb2.style.display = "none";
		numDe1 === 3 ? nb3.style.display = "block" : nb3.style.display = "none";
		numDe1 === 4 ? nb4.style.display = "block" : nb4.style.display = "none";
		numDe1 === 5 ? nb5.style.display = "block" : nb5.style.display = "none";
		numDe1 === 6 ? nb6.style.display = "block" : nb6.style.display = "none";
		
		numDe2 === 1 ? nb7.style.display = "block" : nb7.style.display = "none";
		numDe2 === 2 ? nb8.style.display = "block" : nb8.style.display = "none";
		numDe2 === 3 ? nb9.style.display = "block" : nb9.style.display = "none";
		numDe2 === 4 ? nb10.style.display = "block" : nb10.style.display = "none";
		numDe2 === 5 ? nb11.style.display = "block" : nb11.style.display = "none";
		numDe2 === 6 ? nb12.style.display = "block" : nb12.style.display = "none";
	}

	else if (tourPlayer2) {

		currentPlayer2 += numDe1 + numDe2;
		nbCurrentPlayer2.textContent = currentPlayer2;

		if(numDe1 === 1 || numDe2 === 1) {
			sonFail.play();
			sonFail.currentTime = 0;
			$('.pointPlayer1').show();
			$('.pointPlayer2').hide();
			blockLeft.style.backgroundColor = "#E3E3E3FF";
			blockRight.style.backgroundColor = "#D1D1D1FF";
			currentPlayer2 = 0;
			nbCurrentPlayer2.textContent = currentPlayer1;
			tourPlayer1 = true;
			tourPlayer2 = false;
		}

		numDe1 === 1 ? nb1.style.display = "block" : nb1.style.display = "none";
		numDe1 === 2 ? nb2.style.display = "block" : nb2.style.display = "none";
		numDe1 === 3 ? nb3.style.display = "block" : nb3.style.display = "none";
		numDe1 === 4 ? nb4.style.display = "block" : nb4.style.display = "none";
		numDe1 === 5 ? nb5.style.display = "block" : nb5.style.display = "none";
		numDe1 === 6 ? nb6.style.display = "block" : nb6.style.display = "none";
		
		numDe2 === 1 ? nb7.style.display = "block" : nb7.style.display = "none";
		numDe2 === 2 ? nb8.style.display = "block" : nb8.style.display = "none";
		numDe2 === 3 ? nb9.style.display = "block" : nb9.style.display = "none";
		numDe2 === 4 ? nb10.style.display = "block" : nb10.style.display = "none";
		numDe2 === 5 ? nb11.style.display = "block" : nb11.style.display = "none";
		numDe2 === 6 ? nb12.style.display = "block" : nb12.style.display = "none";
	}
});

$('.pointPlayer1').show();
$('.pointPlayer2').hide();

blockLeft.style.backgroundColor = "#E3E3E3FF";
blockRight.style.backgroundColor = "#D1D1D1FF";
var winBox = document.querySelector(".winBox");

btnHold.addEventListener("click", function() {

	sonHold.play();
	sonHold.currentTime = 0;

	if(tourPlayer1) {
		blockLeft.style.backgroundColor = "#D1D1D1FF";
		blockRight.style.backgroundColor = "#E3E3E3FF";
		$('.pointPlayer1').hide();
		$('.pointPlayer2').show();
		totalPlayer1 += currentPlayer1;
		totalScorePlayer1.textContent = totalPlayer1;
		currentPlayer1 = 0;
		nbCurrentPlayer1.textContent = currentPlayer1;
		tourPlayer1 = false;
		tourPlayer2 = true;
		if(totalPlayer1 >= 100) {
			sonWin.play();
			sonWin.currentTime = 0;
			winBox.style.display = "block";
			idWinner.textContent = "1";
		}
	}
	else if (tourPlayer2) {
		blockLeft.style.backgroundColor = "#E3E3E3FF";
		blockRight.style.backgroundColor = "#D1D1D1FF";
		$('.pointPlayer1').show();
		$('.pointPlayer2').hide();
		totalPlayer2 += currentPlayer2;
		totalScorePlayer2.textContent = totalPlayer2;
		currentPlayer2 = 0;
		nbCurrentPlayer2.textContent = currentPlayer2;
		tourPlayer1 = true;
		tourPlayer2 = false;
		if(totalPlayer2 >= 100) {
			sonWin.play();
			sonWin.currentTime = 0;
			winBox.style.display = "block";
			idWinner.textContent = "2";
		}
	}
});

btnNewGame.addEventListener("click", function() {
	document.location.reload(false);
});

var volumee = true;
voloff.style.display = "none";
volumeBox.addEventListener("click", function() {
	if(volumee) {
		sonRoll.volume = 0;
		sonHold.volume = 0;
		sonWin.volume = 0;
		sonFail.volume = 0;
		volon.style.display = "none";
		voloff.style.display = "block";
		volumee = false;
	}
	else {
		sonRoll.volume = 1;
		sonHold.volume = 1;
		sonWin.volume = 1;
		sonFail.volume = 1;
		volon.style.display = "block";
		voloff.style.display = "none";
		volumee = true
	}
});


noticeBoxInformation.style.display = "none";
btnNotice.addEventListener("click", function() {
	$(".noticeBoxInformation").toggle();
});
