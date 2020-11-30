export const createPara = (text, className = "") => {
  const p = document.createElement("p");
  p.innerHTML = text;
  p.classList.add(className);

  return p;
};
