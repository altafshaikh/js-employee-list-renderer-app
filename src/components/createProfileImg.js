const createProfileImg = (src, alt) => {
  const div = document.createElement("div");
  div.classList.add("profile-img");

  const img = document.createElement("img");
  img.setAttribute("src", src);
  img.setAttribute("alt", alt);
  div.appendChild(img);

  return div;
};
