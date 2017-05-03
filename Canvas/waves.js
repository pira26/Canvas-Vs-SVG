window.requestAnimFrame = function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
        window.setTimeout(a, 1E3 / 60)
    }
}();

let canvas, context, canvasWidth, canvasHeight, globalTick, points, pointCount, pointSpeed, spacing, iPath, iPoints;

    canvas = document.getElementById('canvas2'),
    context = canvas.getContext('2d'),
    canvasWidth = canvas.width = window.innerWidth,
    canvasHeight = canvas.height = window.innerHeight,
    globalTick = 0,
    points = [],
    pointCount = 12,
    pointSpeed = 5,
    spacing = canvasWidth / pointCount,
    pointCount += 2,
    verticalPointRange = 100,
    randomRange = (min, max) => {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    },
    iPath,
    iPoints;

const Point = function(x, y, alt) {
    this.x = x;
    this.y = y;
    this.yStart = y;
    this.alt = alt;
}

Point.prototype.update = function(i) {
    let range = (this.alt) ? verticalPointRange : -verticalPointRange;
    this.x += pointSpeed;
    this.y = (this.yStart) + Math.sin(globalTick / 14) * -range;

    if (this.x > (canvasWidth + spacing)) {
        this.x = -spacing;
        let moved = points.splice(i, 1);
        points.unshift(moved[0]);
    }
}

const updatePoints = () => {
    let i = points.length;
    while (i--) {
        points[i].update(i);
    }
}

for (iPoints = 0; iPoints < pointCount; iPoints++) {
    let alt = (iPoints % 2 === 0);
    let offset = (alt) ? verticalPointRange : -verticalPointRange;
    points.push(new Point(spacing * (iPoints - 1), canvasHeight / 2, alt));
}

const renderPath = () => {
    context.beginPath();
    context.moveTo(points[0].x, points[0].y);
    for (iPath = 1; iPath < pointCount; iPath++) {
        context.lineTo(points[iPath].x, points[iPath].y);
    }
    context.stroke();
}

const clear = () => {
    context.fillStyle = 'hsla(0, 0%, 100%, .15)';
    context.fillRect(0, 0, canvasWidth, canvasHeight);
}

const loop = () => {
    window.requestAnimFrame(loop, canvas);
    clear();
    updatePoints();
    renderPath();
    globalTick++;
};

loop();
