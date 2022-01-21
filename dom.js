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
export function createBoard(board, container) {
  var container = document.querySelector(`#${container}`);

  container.innerHTML = "";

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      let valor = board.map[x][y];
      if (valor > 0) {
        valor = "O";
      } else if (valor < 0) {
        valor = "X";
      } else {
        valor = "";
      }

      var casilla = createDomElement("div", valor, container, "casilla");
      casilla.setAttribute("x", x);
      casilla.setAttribute("y", y);
    }
  }
}
export function drawPosible(board, x, y, vertical, size) {
  //board,x,y,vertical,size
  for (let i = 0; i < size; i++) {
    document.querySelector(["x='1'"]).classList.add("posible");
  }
}
export function casillaAddClass(x, y, clase) {
  var c = document.querySelector(`[x='${x}'][y='${y}']`);

  c.classList.add(clase);
}
export function casillaRemoveClass(x, y, clase) {
  var c = document.querySelector(`[x='${x}'][y='${y}']`);
  c.classList.remove(clase);
}
export function marcaCasila(board, x, y, valor) {
  console.log(valor);
  //let casilla =document.querySelector(`#board2`).querySelector(`[x="${x}"][y="${y}"]`)
  let casilla = board.querySelector(`[x="${x}"][y="${y}"]`);
  console.log(valor);
  console.log('#board2[x="${x}"][y="${y}"]');
 
  if (valor == -2) {
    valor = "X";
    
  } else if (valor == 0) {
    valor = "X";
  } else if (valor == -1) {
    casilla.classList.add("hit")
    valor = "O";
  }
  console.log(valor);
  casilla.innerHTML = valor;
}
export function marcaHundido(player, board) {
  let casilla;
  let x;
  let y;
  console.log("boarddd " + board);
  player.fleet.forEach((ship) => {
    if (ship.isSunk()) {
      for (let i = 0; i < ship.body.length; i++) {
        console.log(ship);
        x = ship.coord[i][0];
        y = ship.coord[i][1];
        let casilla = document
          .querySelector(`#${board}`)
          .querySelector(`[x="${x}"][y="${y}"]`)
          .classList.add("hundido");
        console.log(casilla);
      }
    }
  });
}
