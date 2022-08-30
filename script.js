let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.height = window.innerHeight
canvas.width = window.innerWidth
let drawCircle = (position, radius, color, toFill, text) => {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.arc(position.x, position.y, radius, 0, 2 * Math.PI);
    if (toFill == true) {
        ctx.fillStyle = color;
        ctx.fill();
    }
    ctx.stroke();
    ctx.beginPath();
    ctx.textAlign = "center";
    textBaseline = "bottom"
    ctx.fillStyle = "black";
    ctx.font = `${radius}px serif`;
    ctx.fillText(text, position.x, position.y + radius / 4)
    ctx.stroke();
}
let drawRing = (position, radius, color) => {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.arc(position.x, position.y, radius, 0, 2 * Math.PI);
    ctx.stroke();
}
let scale = 3;
let angle = 0;
let cycle = 0

function animate() {
    if (cycle == 0) {
        scale -= 0.025;
    }
    if (cycle == 1) {
        scale += 0.025;
    }
    if (scale < 3) {
        cycle = 1
    }
    if (scale > 5) {
        cycle = 0;
    }
    requestAnimationFrame(animate);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
    angle += Math.acos(1 - Math.pow(3 / (500 / scale), 2) / 2);
    drawCircle({ x: (canvas.width / 2), y: (canvas.height / 2) - (21.25 / scale) }, 112.5 / scale, "grey", true, "")
    drawCircle({ x: (canvas.width / 2) - (50 / scale), y: (canvas.height / 2) - (50 / scale) }, 50 / scale, "blue", true, "u")
    drawCircle({ x: (canvas.width / 2) + (50 / scale), y: (canvas.height / 2) - (50 / scale) }, 50 / scale, "red", true, "u")
    drawCircle({ x: (canvas.width / 2), y: (canvas.height / 2) + ((50 - (50 / 4)) / scale) }, 50 / scale, "lime", true, "d")
    drawRing({ x: (canvas.width / 2), y: (canvas.height / 2) - (21.25 / scale) }, 500 / scale, "lightblue")
    var newX = (50 / scale) + (500 / scale) * Math.cos(angle);
    var newY = (50 / scale) + (500 / scale) * Math.sin(angle);
    drawCircle({ x: (canvas.width / 2) + (50 / scale) - newX, y: ((canvas.height / 2) + ((50 - (50 / 4)) / scale)) - newY }, 50 / scale, "lightblue", true, "e")
    var newX = (50 / scale) - (500 / scale) * Math.cos(angle);
    var newY = (50 / scale) - (500 / scale) * Math.sin(angle);
    drawCircle({ x: (canvas.width / 2) + (50 / scale) - newX, y: ((canvas.height / 2) + ((50 - (50 / 4)) / scale)) - newY }, 50 / scale, "lightblue", true, "e")

}
animate();