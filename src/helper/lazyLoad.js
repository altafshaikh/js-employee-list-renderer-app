import { Trainees } from "../data.js";
import { renderEmployee } from "./renderEmployee.js";

let start = 8;
let amountOfCardFetch = 4;
let end = start + amountOfCardFetch;

export const lazyLoad = (event) => {
  event.target.style.display = "none";

  const loader = document.getElementById("loader");
  loader.style.display = "block";
  loader.addEventListener("animationend", () => {
    loader.style.display = "none";
    event.target.style.display = "block";
    Trainees.then((employees) => {
      if (!(start >= employees.length)) {
        employees.slice(start, end).forEach((employee) => {
          renderEmployee(employee);
        });
        start += amountOfCardFetch;
        end = start + amountOfCardFetch;
      } else {
        document.getElementById("load").textContent = "no more content to load";
        document.getElementById("load").disabled = true;
      }
    });
  });
};
