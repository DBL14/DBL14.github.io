$(document).ready(function() {

	// var mouse = $("#image")
	// //attach image to cursor
	// $(document).mousemove(function(e){
	// 	mouse.css({left:e.pageX, top:e.pageY});
	// })


	//how many points a player starts with
	var score = 3;
	$("#display").html(score);

	//how to begin the game
	$('#button1').click(function() {
		$('.shape').mouseenter(function() {
			score = score-1
			console.log(player, score)
			$('#display').html(score);
			
			if (score == 0) {
				// $("body").html("Game over");
				console.log('resetting the game.....')
				resetGame();
				playerScore();
				
			}	
		});
	});

	//second stage
	$('#button2').click(function() {
		$('#div8').fadeOut("slow");	
	});

	//third stage
	$('#button3').click(function() {
		$('#div10').animate({
			'marginTop' : "-=100px"
		});

			$('#bird').animate({
				'marginLeft' : "-=500px"
			});
			// animateDiv();
			
		});

	//complete the game
	$('#last').click(function() {
		$('.shape').off('mouseenter');
		playerScore();
		resetGame();

		$("#display").html(score);
		$('#label').html("Player 2 Score:")
	});

	//reload the game
	$('#reset').click(function() {
		location.reload();
		console.log('reset');
	});

	// default settings

	var player1Score;

	var player2Score;

	var player = 1;

	
	//determine score
	function playerScore() {
		if (player == 1) {
			player1Score = score;
			player = 0;
			score = 3
		$('#label').html("Player 2 Score:")
		$('#display').html(score);
			
		} else if (player == 0) {
			player2Score = score;
			getResult();
			//game over code
		$('.shape').off('mouseenter');
		// $('#gameBoard').slideUp();

		}
	}

	function resetGame(){
		$('#div8').fadeIn("slow");
		$('#div10').animate({
			'marginTop' : "50px"
		});
		$('#bird').animate({
				'marginLeft' : "10px"
			});
		
	}
	

	//determine the result
	function getResult() {
		console.log('p1 - ', player1Score, 'p2 - ', player2Score)

		if (player1Score == player2Score) {
			alert("The result is a tie!");
		} else if (player1Score > player2Score) {
			alert("Player 1 wins!");
		} else {
			alert("Player 2 wins!");
		}
	}

	//move the bird

	
		function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
		}

		function animateDiv(){
    var newq = makeNewPosition();
    $('.a').animate({ top: newq[0], left: newq[1] }, function(){
      animateDiv();        
    });
    
	};

		//bird noise

	// 	soundManager.setup({
	//   url: 'development/first-project/swf',
	//   flashVersion: 9, // optional: shiny features (default = 8)
	//   // optional: ignore Flash where possible, use 100% HTML5 mode
	//   // preferFlash: false,
	// })
  
 //    // Ready to use; soundManager.createSound() etc. can now be called.
 //    // console.log('hello');
 //    var soundOne = soundManager.createSound({
 //    	"id": 'a',
 //    	"url" : "Bird Chirping Sound Effect.mp3"
 //    });
 //    var playButton = document.getElementById("#button1");

 //    playButton.addEventListener("click", function(event){
 //      soundOne.togglePause();
 //    });

});

