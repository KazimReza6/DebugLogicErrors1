// Run this sample code as-is and examine the output. 
// Should the shuttle have launched? 
// Did it?
// Do not worry about fixing the code yet, we will do that in the next series of exercises.

let launchReady = false;
let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';
let fuel = 0;
let crewComputer = 0;

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   // launchReady = true;
   fuel = 1
} else { 
    fuel = -1;
    console.log('WARNING: Insufficient fuel!');
   // launchReady = false;
}

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   // launchReady = true;
   crewComputer = 1;
} else {
    crewComputer = -1;
    console.log('WARNING: Crew or computer not ready!');
   // launchReady = false;
}

if (fuel === 1 && crewComputer === 1) {
  launchReady = true;
} else {
  launchReady = false;
}
/*if (fuelLevel >= 20000 && crewStatus && computerStatus === 'green') {
   console.log('Ready to Launch.');
   launchReady = true;
} else {(launchReady = false);
} */

if (launchReady) {
   console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
   console.log('Liftoff!');
} else {
   console.log('Launch scrubbed.');
}