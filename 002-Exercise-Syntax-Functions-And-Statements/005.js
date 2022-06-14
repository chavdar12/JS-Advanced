function solve(steps, footprint, speed) {
    let distance = (steps * footprint) / 1000;

    let time = distance * speed;

    if (distance % 500 === 0) {
        time++;
    }

    console.log(time);
    console.log(distance);
}

solve(4000, 0.60, 5);