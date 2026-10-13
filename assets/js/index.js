'use strict';

const sphereWallThickness = 0.01,
    step = 2 * sphereWallThickness,
    dSmallSphere = 0.5 - step;

let totalVolume = 0,
    currentSphereD = 0;

for (let i = 0; i < 12; i++){
    currentSphereD = dSmallSphere + i * step;
    currentSphereD = currentSphereD.toFixed(2);
    totalVolume += Math.PI * currentSphereD**3 / 6;
}

console.log(totalVolume);