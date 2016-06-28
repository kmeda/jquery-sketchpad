var boxSize = $(".wrapper").width();
var defaultSquares = 16;
var defaultColor = "white";


$(document).ready(function() {
	
    
    $(':input#gridonoff').prop('checked', false);
    createSketchPad(defaultSquares);

    
	$('input#gridonoff').change( function() {
	    if($(this).is(':checked')) {
	    	$('.grid').css('outline', '1px solid white');
	    } 
	    else {
	        $('.grid').css('outline', "none");
	    }
	});
	

	$("#gridsize").click(function() {
		newSize();
	});

	$("#reset").click(function() {
		defaultOption();
	});

    $("#trail").click(function() {
        trailOption();
    });

    $("#gradient").click(function() {
    	gradientOption();
    });

    $("#random").click(function() {
        randomOption();
    });
});

function createSketchPad(userBoxes) {
	var squareSize = boxSize / userBoxes;
	for(var i = 0; i < (userBoxes * userBoxes); i++) {
		$('.wrapper').append('<div class="grid"></div>');
	}
	$(".grid").width(squareSize);
	$(".grid").height(squareSize);
	defaultOption();
	
}

function newSize() {
	$(".wrapper").html("");
	var numSquares = parseFloat(prompt("How many boxes (1-128) do you want on each side? " + 
		"RETURN for default sides."));
	
	if(isNaN(numSquares) ||  (numSquares < 1 || numSquares > 128)) {
		numSquares = defaultSquares;
	}
	createSketchPad(numSquares);
}

function clearBoard() {
	$(".grid").unbind(); 
	$(".grid").css("background-color", "black");
	$(".grid").css("opacity", 1);
}

function defaultOption() {
	clearBoard();
	$(".grid").mouseover(function() {
		$(this).css("background-color", defaultColor);
	});
}


function getRandomColor() {
	return ('#' + (Math.random().toString(16) + '000000').slice(2, 8));
}


function randomOption() {
	clearBoard();
	$(".grid").mouseover(function() {
		$(this).css("background-color", getRandomColor());
	});
}

function trailOption() {
	clearBoard();
	$(".grid").mouseenter(function() {
		$(this).fadeTo(0, 0);
	});
	$(".grid").mouseleave(function() {
		$(this).fadeTo(600, 1);
	});
}

function gradientOption() {
	clearBoard();
	$(".grid").mouseover(function() {
		var currentOpacity = $(this).css("opacity")
		if(currentOpacity != 0) {
			$(this).css("opacity", currentOpacity - .10);
		}
	});
}


