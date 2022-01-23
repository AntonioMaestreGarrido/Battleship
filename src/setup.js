import { flotaStandar } from "./factorys.js";
import{casillaAddClass} from "./dom.js"
import { checkIfPossible } from "./testShip.js";
import { createBoard } from "./dom.js";
import { Gameboard } from "./factorys.js";
 

export function ramdonPosition(tablero, jugador) {
  console.log(jugador);
  let x, y, ship;
  for (let i = 0; i < jugador.fleet.length; i++) {
    console.log(jugador.fleet.length);
    ship = jugador.fleet[i];

    do {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
      Math.floor(Math.random() * 2) == 0
        ? (ship.orienVert = true)
        : (ship.orienVert = false);
    } while (!checkIfPossible(tablero, x, y, ship));

    jugador.fleet[i] = ponShip(tablero, x, y, ship);
  }
  //createBoard(tablero);
}
function FlotaJugador(jugador, tablero) {
  createBoard(tablero);
  const checkFleet = () => {
    if (typeof FlotaJugador.n === "undefined") {
      FlotaJugador.n = 0;
    } else {
      FlotaJugador.n++;
    }
  };
  checkFleet();

  //setListener(tablero, p1.fleet[FlotaJugador.n]);
}
export function PutPlayerFleet(player, tablero) {
  if (PutPlayerFleet.n === undefined) {
    PutPlayerFleet.n = 0;
    setListener(tablero, player.fleet[PutPlayerFleet.n], player);
  } else {
    PutPlayerFleet.n++;
  }
  if (PutPlayerFleet.n == flotaStandar.length) {
      let tablero2=Gameboard(10)
    createBoard(tablero2, "board2");
    
  }
  console.log("puttplayerrr " + PutPlayerFleet.n);
  console.log(player.fleet[PutPlayerFleet.n]);
}
function getNextShip(p1) {
  for (let i = 0; i < p1.fleet.length; i++) {
    if (p1.fleet[i].coord[0][0] === undefined) {
      return p1.fleet[i];
    }
  }
  return false;
}
function setListener(tablero, ship, player) {
  console.log(ship);

  const bigDiv = document.querySelector("#board1");
  addClickHandler(bigDiv, tablero, player);
  add2ClickHandler(bigDiv, tablero,  player);

  addEnterHandler(bigDiv, tablero, player);
  saleCursor();
}

function removeListener() {
  const casillas = document.querySelectorAll(".casilla");
  casillas.forEach((elem) => {
    elem.removeEventListener("mouseenter", test2, true);
  });
}

function addClickHandler(elem, tablero, p1, remove) {
  function hey(e) {
    let ship = getNextShip(p1);
    console.log(ship.orienVert);
    if (ship.orienVert) {
      ship.orienVert = false;
    } else {
      ship.orienVert = true;
    }

    saleCursor();
    console.log(ship);
    drawShip(tablero, getX(e.target), getY(e.target), ship);
  }

  elem.addEventListener("click", hey);
}
function addEnterHandler(elem, tablero, player) {
    
  elem.removeEventListener("mouseenter", hey, true);
  elem.addEventListener("mouseenter", hey, true);
  function hey(e) {
    let ship = getNextShip(player);
    let x = getX(e.target);
    let y = getY(e.target);
    //console.log(ship);
    saleCursor();
    drawShip(tablero, x, y, ship);
    if (checkIfPossible(tablero, getX(e.target), getY(e.target), ship)) {
    }
  }
  // document.querySelector("#board1").addEventListener("mouseenter", test3, true);
  //document.querySelector("#board1").addEventListener("mouseenter", test2, true);
}

function add2ClickHandler(elem, tablero,  player) {
  function hey(e) {
    console.log("2click");
    let ship = getNextShip(player);
    if (checkIfPossible(tablero, getX(e.target), getY(e.target), ship)) {
      ship = ponShip(tablero, getX(e.target), getY(e.target), ship);
      //elem.removeEventListener("dblclick", hey);
      PutPlayerFleet(player, tablero);
      createBoard(tablero, "board1");
    }
  }
  elem.addEventListener("dblclick", hey);
}

function ponShip(tablero, x, y, ship) {
  let vertical = ship.orienVert;
  let tam = ship.body.length;
  let Cx = x;
  let Cy = y;
  console.log("before", ship.coord[0][0]);

  for (let i = 0; i < tam; i++) {
    //console.log(x, y);
    if (vertical === true) {
      Cy = y + i;
    } else {
      Cx = x + i;
    }

    tablero.map[Cx][Cy] = ship.body[i];
    ship.coord[i][0] = Cx;
    ship.coord[i][1] = Cy;
  }
  //createBoard(tablero);
  return ship;
}

function saleCursor() {
  const casillas = document.querySelectorAll(".posible");

  casillas.forEach((c) => {
    c.classList.remove("posible");
  });

  console.log("sale");
  // createBoard(tablero)
  // setListener()
}

function drawShip(tablero, x, y, ship) {
  let Cx = x;
  let Cy = y;
  var tam = ship.body.length;
  let vertical = ship.orienVert;

  for (let i = 0; i < tam; i++) {
    //console.log(x, y);
    if (vertical === true) {
      Cy = y + i;
    } else {
      Cx = x + i;
    }

    casillaAddClass(Cx, Cy, "posible");
  }
}

function getX(element) {
  return parseInt(element.getAttribute("x"));
}

function getY(element) {
  return parseInt(element.getAttribute("y"));
}
