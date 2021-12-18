function createDomElement(tag, inner, parent, clase) {
  var newElement = document.createElement(tag);
  newElement.innerHTML = inner;
  parent.appendChild(newElement);
  if (clase) {
    newElement.classList.add(clase);
  }
  return newElement;
}

export function test() {
  console.log("test");
}
export function createBoard(board) {
  console.log(board);
  var container = document.querySelector(".board");
  
    container.innerHTML = "";

    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        let valor = board.map[x][y];
        if (valor > 0) {
          valor = "X";
        } else if (valor < 0) {
          valor = "O";
        } else {
          valor = "";
        }

        var casilla = createDomElement("div", valor, container, "casilla");
        casilla.setAttribute("x", x);
        casilla.setAttribute("y", y);
      }
    }
  
}
