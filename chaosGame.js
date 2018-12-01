let n = 20;
let points = [];

let current;
let previous;

let percent = 0.5;

let ppi = 1000;
let rf = 10000;

let pentagon = false;

function setup() {
    let canvas = createCanvas(520, 500);
    canvas.parent("canvasDiv");

    for (let i = 0; i < n; i++) {
        let angle = (i * TWO_PI) / n;
        let v = p5.Vector.fromAngle(angle);
        v.mult(240);
        v.add(250, 250);
        points.push(v);
    }

    reset();
}

function reset() {
    current = createVector(random(500), random(500));

    background(0);
    stroke(255);
    strokeWeight(8);

    for (const p of points) {
        point(p.x, p.y);
    }
}

function draw() {
    if (frameCount % rf == 0) {
        reset();
    }

    if (pentagon) {
        for (let i = 0; i < 5000; i++) {
            strokeWeight(1);
            stroke(219, 98, 0);
            let next = random(points);
            if (next !== previous) {
                current.x = lerp(current.x, next.x, percent);
                current.y = lerp(current.y, next.y, percent);
                point(current.x, current.y);
            }

            previous = next;
        }
    } else {
        for (let i = 0; i < ppi; i++) {
            strokeWeight(1);
            stroke(255, 255, 123);

            let next = random(points);

            current.x = lerp(current.x, next.x, percent);
            current.y = lerp(current.y, next.y, percent);
            point(current.x, current.y);
        }
    }
}
