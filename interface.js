let setBtn = document.getElementById("setBtn");
let resetBtn = document.getElementById("resetBtn");

let seedPointsNumber = document.getElementById("seedPointsNumber");
let pointsPerIteration = document.getElementById("pointsPerIteration");
let restartFrame = document.getElementById("restartFrame");

setBtn.onclick = _ => {
    pentagon = false;
    n = parseInt(seedPointsNumber.value);
    ppi = parseInt(pointsPerIteration.value);
    rf = parseInt(restartFrame.value);

    points = [];

    reset();
    setup();
};

resetBtn.onclick = _ => reset();

let sierpinskiTriangle = (document.getElementById(
    "sierpinskiBtn"
).onclick = _ => {
    pentagon = false;
    n = 3;
    ppi = 100;
    rf = 300;

    points = [];

    stroke(255, 0, 123);
    reset();
    setup();

    seedPointsNumber.value = "";
    pointsPerIteration.value = "";
    restartFrame.value = "";
});

let pentagonFractal = (document.getElementById(
    "pentagonBtn"
).onclick = _ => {
    n = 5;
    ppi = 10;
    rf = 100;

    points = [];

    pentagon = true;

    reset();
    setup();

    seedPointsNumber.value = "";
    pointsPerIteration.value = "";
    restartFrame.value = "";
});
