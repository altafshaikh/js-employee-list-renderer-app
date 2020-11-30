// Trainees.forEach((emp) => {
//   addEmployeeToDom(emp);
// });

import { Trainees } from "./data.js";

window.onload = () => {
  Trainees.then((employees) => {
    console.log(
      "🚀 ~ file: app.js ~ line 11 ~ getUsers.then ~ employees",
      employees
    );
  });
};
