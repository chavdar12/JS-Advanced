function timeToWalk(steps, footprintMeters, speedKmh) {
    const distance = steps * footprintMeters;
    const restSeconds = Math.floor(distance / 500) * 60;
    const totalSeconds = Math.round(distance / (speedKmh / 3.6) + restSeconds);

    const pad = (n) => String(n).padStart(2, '0');
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    console.log(`${pad(hours)}:${pad(minutes)}:${pad(totalSeconds % 60)}`);
}

module.exports = timeToWalk;
