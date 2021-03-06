export const createLink = (element, text = "", href, className = "") => {
  const a = document.createElement("a");
  a.appendChild(element);
  a.classList.add(className);
  a.href = "mailto:" + href;
  if (text) {
    a.innerHTML = text;
  }

  return a;
};
