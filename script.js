let boxes = document.querySelectorAll(".box");
console.log(boxes);
let image = document.querySelector(".image");
boxes.forEach(function (box) {
  box.addEventListener("dragover", function (e) {
    e.preventDefault();
    box.classList.add("hovered");
  });
  box.addEventListener("dragleave", function (e) {
    e.preventDefault();
    box.classList.remove("hovered");
  })
  box.addEventListener("drop", function (e) {
    box.appendChild(image);
    box.classList.remove("hovered");
  })
});
