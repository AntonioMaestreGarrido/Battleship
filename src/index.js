//factorry ships

//import { array } from "yargs";
//import './styles.css';+
//tetststststts

import {
  test,
  drawPosible,
  createBoard,
  casillaAddClass,
  casillaRemoveClass,
} from "./dom.js";
import { checkIfPossible } from "./testShip.js";
console.log("hla");
const flotaStandar = [
  ["portaaviones", 6],
  ["destructor", 5],
  ["acorazado", 3],
  ["submarino", 3],
  ["lancha", 2],
];

const factoryShips = (name, size) => {
  var body = new Array(size);
  var coord = new Array(size);
  var orienVert = true;
  const sunk = false;
  var IDnumber;
  const ID = () => {
    if (typeof factoryShips.IDnumber === "undefined") {
      factoryShips.IDnumber = 0;
    }
    factoryShips.IDnumber++;
    return factoryShips.IDnumber;
  };

  var ini = (body) => {
    for (let i = 0; i < body.length; i++) {
      body[i] = ID();
    }
  };

  const hit = (p) => {
    if (body[p] !== 0) {
      body[p] = 0;
    }
  };
  const isSunk = () => {
    let sunk = true;
    body.forEach((p) => {
      if (p !== 0) {
        sunk = false;
      }
    });

    return sunk;
  };

  // make a 2d array to hold coord (x,y) of every piece of the ship
  (() => {
    for (let i = 0; i < body.length; i++) {
      coord[i] = new Array(2);
    }
  })();
  ini(body);

  return { name, body, hit, isSunk, coord, orienVert };
};

const Gameboard = (size) => {
  const map = new Array(size);
  const make2Darray = (map) => {
    for (let i = 0; i < map.length; i++) {
      map[i] = new Array(size);
      for (let j = 0; j < map.length; j++) {
        map[i][j] = 0;
      }
    }
  };
  make2Darray(map);

  const isGameOver = () => {
    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map.length; j++) {
        if (map[i][j] > 0) {
          return false;
        }
      }
    }
    console.log("no se  encontro nada");
    return true;
  };

  const receiveAttack = (x, y) => {
    if (map[x][y] <= 0) {
      map[x][y] = -1;
      return "miss";
    } else {
      let n = map[x][y];
      map[x][y] = -1;

      return n;
    }
  };
  const deployShip = (ship) => {
    for (let i = 0; i < ship.body.length; i++) {
      let x = ship.coord[i][0];
      let y = ship.coord[i][1];
      map[x][y] = ship.body[i];
    }
  };
  return { map, isGameOver, receiveAttack, deployShip };
};

const factoryPlayer = (nombre) => {
  const fleet = new Array();
  flotaStandar.forEach((ship) => {
    fleet.push(factoryShips(ship[0], ship[1]));
  });
  const resolveAttack = (n) => {
    fleet.forEach((ship) => {
      let position = 0;
      ship.body.forEach((b, p) => {
        console.log(n);
        if (b == n) {
          console.log("hit");
          ship.hit(n);
        }
      });
    });
  };
  return { nombre, fleet, resolveAttack };
};

function ramdonPosition(tablero, jugador) {
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
  createBoard(tablero);
}
console.log("hla");
var p1 = factoryPlayer("you");
console.log(p1);
var p2 = factoryPlayer("Computer");
var tablero1 = Gameboard(10);

var tablero2 = Gameboard(10);
//ramdonPosition(tablero1,p1)
console.log(p1);
//createBoard(tablero1)
createBoard(tablero1);
PutPlayerFleet(p1, tablero1);

const FlotaJugador = function (jugador, tablero) {
  createBoard(tablero);
  const checkFleet = () => {
    if (typeof FlotaJugador.n === "undefined") {
      FlotaJugador.n = 0;
    } else {
      FlotaJugador.n++;
    }
  };
  checkFleet();

  setListener(tablero, p1.fleet[FlotaJugador.n]);
};
function PutPlayerFleet(player, tablero) {
  if (PutPlayerFleet.n === undefined) {
    PutPlayerFleet.n = 0;
  } else {
    PutPlayerFleet.n++;
  }
  console.log(PutPlayerFleet.n);
  console.log(player.fleet[PutPlayerFleet.n]);
  setListener(tablero, player.fleet[PutPlayerFleet.n], player);
}
function getNextShip(){
  for (let i = 0; i < p1.fleet.length; i++) {
    if(p1.fleet[i].coord[0][0]===undefined){
      return p1.fleet[i]
    }
    
  }
return false
}

function setListener(tablero, ship, player) {
  console.log(ship);

  const bigDiv = document.querySelector("#board1");
  addClickHandler(bigDiv, tablero, ship);
  add2ClickHandler(bigDiv, tablero, ship, player);

  addEnterHandler(bigDiv,  tablero, ship);
  saleCursor();
}
function test4() {
  console.log("H");
}
function removeListener() {
  const casillas = document.querySelectorAll(".casilla");
  casillas.forEach((elem) => {
    elem.removeEventListener("mouseenter", test2, true);
  });
}

function addClickHandler(elem, tablero, ship,remove) {

  function hey (e) {
    ship=getNextShip()
    console.log(ship.orienVert);
    if (ship.orienVert) {
      ship.orienVert = false;
    } else {
      ship.orienVert = true;
    }
    if (!checkIfPossible(tablero, getX(e.target), getY(e.target), ship)) {
      if (ship.orienVert) {
        ship.orienVert = false;
      } else {
        ship.orienVert = true;
      }
    }
    saleCursor();
    console.log(ship);
    drawShip(tablero, getX(e.target), getY(e.target), ship);
  }
  
  
  elem.addEventListener("click",hey );
}
function addEnterHandler(elem,  tablero, ship) {
  ship=getNextShip()
  elem.removeEventListener("mouseenter", hey, true);
  elem.addEventListener("mouseenter", hey, true);
  function  hey (e)  {
    ship=getNextShip()
    let x = getX(e.target);
    let y = getY(e.target);
    console.log(ship);
    if (checkIfPossible(tablero, getX(e.target), getY(e.target), ship)) {
      saleCursor();
      drawShip(tablero, x, y, ship);
    }
  };
  // document.querySelector("#board1").addEventListener("mouseenter", test3, true);
  //document.querySelector("#board1").addEventListener("mouseenter", test2, true);
}

function add2ClickHandler(elem, tablero, ship, player) {
  function hey(e) {
    console.log("2click");

    if (checkIfPossible(tablero, getX(e.target), getY(e.target), ship)) {
    }

    ship = ponShip(tablero, getX(e.target), getY(e.target), ship);
    elem.removeEventListener("dblclick", hey);
    PutPlayerFleet(p1, tablero);
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
  createBoard(tablero);
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
