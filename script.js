let screen = document.querySelector(".container #screen p");

let elements = document.querySelectorAll(".container .elements div");

elements[0].addEventListener("click", console.log(elements));

let flag = false;
let operation = 0;
let result1 = 0;
let result2 = 0;
elements.forEach((element) => {
  element.addEventListener("click", () => {
    let text = Number(element.textContent);

    if (!isNaN(text)) {
      screen.textContent += element.textContent;
      if (flag === true) result2 = Number(element.textContent);
    } else if (element.textContent !== "=" && element.textContent !== "C") {
      if (flag === true) {
        alert("can not use more than one operation without use equal");
        return;
      }
      operation = element.textContent;
      result1 = Number(screen.textContent);
      screen.textContent += ` ${element.textContent} `;

      flag = true;
    } else if (element.textContent === "C") {
      screen.textContent = screen.textContent.slice(0, -1);
    } else {
      flag = false;
      console.log(operation)
      if (operation === "+") {
        result1 += result2;
        screen.textContent = String(result1);
      } else if (operation === "×") {
        result1 *= result2;
        screen.textContent = String(result1);
      } else if(operation === "–") {
        result1 -= result2;
        screen.textContent = String(result1);
      } else if(operation === "/") {
        result1 /= result2;
        screen.textContent = String(result1);
      }
    }
  });
});
