import { createCard } from "../components/createCard.js";

const renderEmployee = (employee) => {
  const card = createCard(employee);
  const rootDiv = document.getElementById("employees");
  rootDiv.appendChild(card);

  return card;
};
