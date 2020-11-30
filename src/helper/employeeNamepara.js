export const employeeNamePara = (employee) => {
  const p = document.createElement("p");
  p.innerHTML = `${employee.firstName} ${employee.lastName}`;
  p.id = employee.empid;
  p.classList.add("employee-name");

  return p;
};
