const text = document.querySelector("label");

text.innerHTML = text.textContent.split("").map((wave, index) => {
  return `<span style="transition-delay: ${index * 25}ms">${wave}</span>`;
}).join("");