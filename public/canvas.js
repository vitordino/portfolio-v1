var locs = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	canvas.parent('sketch');

	var res = 24;
	var countX = ceil(width/res) + 1;
	var countY = ceil(height/res) + 1;

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

// [TODO]: resize canvas on window resize
