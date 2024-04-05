/** @format */

let lasAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.qurySelector(".date");
let losAngelesTimeElement = losAngelesElement.qurySelector(".time");
let losAngelesTime = moment();
losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do, YYYY");
losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
  "h:mm:ss"
)}<small>${losAngelesTime.format("A")}</small>`;
