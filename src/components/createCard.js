import { createProfileImg } from "./createProfileImg.js";
import { createCardContent } from "./createCardContent.js";

export const createCard = (employee) => {
  const div = document.createElement("div");
  div.classList.add("card");

  const cardWrapper = document.createElement("div");
  cardWrapper.classList.add("card-wrapper");

  const profileImg = createProfileImg(employee.imageUrl, "image descp");
  const cardContent = createCardContent(employee);

  cardWrapper.appendChild(profileImg);
  cardWrapper.appendChild(cardContent);

  div.appendChild(cardWrapper);

  return div;
};
