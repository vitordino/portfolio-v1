var locs = [];

function setup() {
	var canvas = createCanvas(windowWidth, (windowHeight*0.8));
	canvas.parent('sketch')

	var res = 20;
	var countX = ceil(width / res) + 1;
	var countY = ceil(height / res) + 1;

	for (var j = 0; j < countY; j++) {
		for (var i = 0; i < countX; i++) {
			locs.push(new p5.Vector(res * i, res * j));
		}
	}

	noFill();
	stroke(220, 102, 102);
}

function draw() {
	background(18, 18, 19);
	for (var i = locs.length - 1; i >= 0; i--) {
		var h = calcVec(locs[i].x - mouseX, locs[i].y - mouseY);
		line(
			locs[i].x,
			locs[i].y,
			locs[i].x + 15 * cos(h.heading()),
			locs[i].y + 15 * sin(h.heading())
		);
	}
}

function calcVec(x, y) {
	return new p5.Vector(y - x, -x - y);
}





// Register an event listener to call the resizeCanvas() function
// each time the window is resized.
window.addEventListener('resize', resizeCanvas, false);
// Draw canvas border for the first time.


// Display custom canvas. In this case it's a blue, 5 pixel
// border that resizes along with the browser window.

// Runs each time the DOM window resize event fires.
// Resets the canvas dimensions to match window,
// then draws the new borders accordingly.
function resizeCanvas() {
	htmlCanvas.width = window.innerWidth;
	htmlCanvas.height = window.innerHeight;
	redraw();
}
