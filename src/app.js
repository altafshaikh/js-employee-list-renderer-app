import { Trainees } from "./data.js";
import { renderEmployee } from "./helper/renderEmployee.js";
import { lazyLoad } from "./helper/lazyLoad.js";

window.onload = () => {
  Trainees.then((employees) => {
    employees.slice(0, 8).forEach((employee) => {
      renderEmployee(employee);
    });
  });
  document.getElementById("load").addEventListener("click", lazyLoad);
};
