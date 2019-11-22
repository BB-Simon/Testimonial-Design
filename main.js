const container = document.querySelector(".testimonials-container");
const authorsEl = document.querySelectorAll(".author");
const nameEl = document.querySelector(".name");
const textEl = document.querySelector(".text");

const testimonials = [
  {
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ipsa veniam? Deserunt, deleniti! Architecto dolores animi voluptates laboriosam esse sunt totam quas aperiam, non alias maxime a sit.",
    name: "Arthur Birnbaum",
    color: "rgba(235, 59, 90, 1.0)"
  },
  {
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ipsa veniam? Deserunt, deleniti! Architecto dolores animi voluptates laboriosam esse sunt totam quas aperiam.",
    name: "Phobi Kotliar",
    color: "rgba(250, 130, 49, 1.0)"
  },
  {
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ipsa veniam? Deserunt, deleniti! Architecto dolores animi voluptates laboriosam esse sunt totam quas aperiam, non alias maxime a sit molestiae nesciunt, deleniti! Architecto dolores animi voluptates laboriosam esse sunt totam quas aperiam, non alias maxime a sit molestiae nesciunt.",
    name: "Louisa P. Huard",
    color: "rgba(75, 123, 236, 1.0)"
  },
  {
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ipsa veniam? Deserunt.",
    name: "Cristina Aurmoogum",
    color: "rgba(165, 49, 234, 1.0)"
  },
  {
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ipsa veniam? Deserunt, deleniti! Architecto dolores animi voluptates laboriosam esse sunt totam.",
    name: "J. Kent Pepper",
    color: "rgba(32, 191, 107, 1.0)"
  }
];

addTestimonial(0);

authorsEl.forEach((author, idx) => {
  author.addEventListener("click", e => {
    addTestimonial(idx);
    author.classList.add("selected");
  });
});

function addTestimonial(idx) {
  const testimonial = testimonials[idx];

  nameEl.innerHTML = testimonial.name;
  textEl.innerHTML = testimonial.text;
  container.style.background = testimonial.color;
  container.style.boxShadow = `0 35px 10px -20px ${testimonial.color.substring(
    0,
    testimonial.color.length - 4
  )}0.9)`;

  authorsEl.forEach(author => {
    author.classList.remove("selected");
  });
}
