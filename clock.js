const hourHand = document.querySelector("#hour");
const minuteHand = document.querySelector("#minute");
const secondHand = document.querySelector("#second");


function secondRotation() {
      let degRotation = secondHand.setAttribute("transform", "rotate(100deg)");
      return degRotation;
}

secondRotation();