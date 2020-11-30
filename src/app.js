import { Trainees } from "./data.js";
import { renderEmployee } from "./helper/renderEmployee.js";

window.onload = () => {
  Trainees.then((employees) => {
    employees.forEach((employee) => {
      renderEmployee(employee);
    });
  });
};
