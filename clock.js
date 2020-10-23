const hourHand = document.querySelector("#hour");
const minuteHand = document.querySelector("#minute");
const secondHand = document.querySelector("#second");

const numbers = [30, 6];


function rotation(increment) {
      let degRotation = secondHand.style.transform = `rotate(${increment}deg)`;
      return degRotation;
}

// setInterval(rotation, 1000, 100)

function secondRotation() {
    let incrmnt = 0;
    for(let i = 0; i < 60; i++) {
        incrmnt += numbers[1];
    }
    rotation(incrmnt);
}

setInterval(secondRotation, 1000);