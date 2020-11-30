const addEmployeeToDom = (employee) => {
  const card = createCard(employee);
  const rootDiv = document.getElementById("employees");
  rootDiv.appendChild(card);

  return card;
};
