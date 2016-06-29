
var gridSize = $('.wrapper').width();
var defaultSquares = 16;
var defaultColor = "white";

$(document).ready(function(){
	
	$(":input#gridonoff").prop('checked', false);
	createGrid(defaultSquares);

	$("input#gridonoff").change(function(){
		if ($(this).is(':checked')) {
			$('.grid').css("outline", '1px solid white');
		} else {
			$('.grid').css("outline", "none");
		}
	});
	

	$('#reset').click(function(){
		defaultGrid();
	});

	$('#newgrid').click(function(){
		newGrid();

	});

	$('#randomcolor').click(function(){
		randomColor();
	});

	$('#gradient').click(function(){
		gradient();
	});

	$('#trail').click(function(){
		trail();
	});

});


function createGrid(numberOfSquares){
	var squareSize = gridSize/numberOfSquares;

	for(var i=0; i<(numberOfSquares*numberOfSquares); i++){
		$('.wrapper').append('<div class="grid"></div>');
	}
	$(".grid").width(squareSize);
	$(".grid").height(squareSize);
	defaultGrid();
}

function clearAll(){
	$('.grid').unbind();
	$('.grid').css("background-color", "black");
	$('.grid').css("opacity", 1);
}


function defaultGrid(){
	clearAll();
	$('.grid').mouseover(function(){
		$(this).css("background-color", defaultColor);
	});
}

function newGrid(){
	$('.wrapper').html("");
	var numSquares = parseFloat(prompt("Enter a number between (1-128) or RETURN for default."));
	if (isNaN(numSquares) || (numSquares < 1 || numSquares > 128)) {
		numSquares = defaultSquares;
	}
	createGrid(numSquares);
}	

function getRandomColor(){
	return ("#" + (Math.random().toString(16) + '000000').slice(2, 8));
}

function randomColor(){
	clearAll();
	$('.grid').mouseover(function(){
		$(this).css("background-color", getRandomColor());
	});
}

function gradient(){
	clearAll();
	
	$('.grid').mouseover(function(){
		var currentOpacity = $(this).css("opacity");
		if(currentOpacity != 0){
			$(this).css("opacity", currentOpacity - 0.15);
		}
	});

}

function trail() {
	clearAll();
	$('.grid').mouseenter(function(){
		$(this).fadeTo(0, 0);
	});
	$('.grid').mouseleave(function(){
		$(this).fadeTo(700, 1);
	});
}