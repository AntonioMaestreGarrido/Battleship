//factorry ships

//import { array } from "yargs";
//import './styles.css';

import {
  test,
  drawPosible,
  createBoard,
  casillaAddClass,
  casillaRemoveClass,
} from "./dom.js";
import { checkIfPossible } from "./testShip.js";

var flotaStandar = [
  ["portaaviones", 6],
  ["destructor", 5],
  ["acorazado", 3],
  ["destructor", 3],
  ["acorazado", 2],
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

const putRandomFleet = (tablero) => {
  let boardSize = 10;

  for (let i = 0; i < flotaStandar.length; i++) {
    var vertical = false;
    var maxX;
    var maxY;
    console.log("longitud=" + flotaStandar[i][1]);
    if (Math.floor(Math.random() * 2) ? (vertical = true) : (vertical = false));

    var tam = flotaStandar[i][1];
    if (vertical) {
      maxY = 9 - tam;
      maxX = 9;
    } else {
      {
        maxX = 9 - tam;
        maxY = 9;
      }
    }
    console.log("tamaños maximos", tam, maxX, maxY);

    var x = Math.floor(Math.random() * maxX);
    var y = Math.floor(Math.random() * maxY);
    while (!checkIfPossible(tablero, x, y, vertical, tam)) {
      if (
        Math.floor(Math.random() * 2) == 0
          ? (vertical = true)
          : (vertical = false)
      );
      if (vertical) {
        maxY = 9 - tam;
        maxX = 9;
      } else {
        {
          maxX = 9 - tam;
          maxY = 9;
        }
      }

      x = Math.floor(Math.random() * maxX);
      y = Math.floor(Math.random() * maxY);
    }

    tablero.map[x][y] = 1;

    createBoard(tablero);
    for (let i = 1; i < tam; i++) {
      console.log(x, y);
      if (vertical === true) {
        y++;
      } else {
        x++;
      }

      tablero.map[x][y] = 1;

      createBoard(tablero);
    }
  }

  console.log(vertical);

  createBoard(tablero);
};
var tablero = Gameboard(10);
var p1 = factoryPlayer("pp");
const FlotaJugador = function () {
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

FlotaJugador();

function setListener(tablero, ship) {
  console.log(ship);

  const bigDiv = document.querySelector("#board1");
  addClickHandler(bigDiv, tablero, ship);
  add2ClickHandler(bigDiv, tablero, ship);

  addEnterHandler(bigDiv,true, tablero, ship);
  saleCursor();
}
function test4(){
  console.log("H")
}
function removeListener() {
  const casillas = document.querySelectorAll(".casilla");
  casillas.forEach((elem) => {
  elem.removeEventListener(
  "mouseenter",
  test2,
  true)})
    
  
}

function addClickHandler(elem, tablero, ship) {
  elem.addEventListener("click", function (e) {
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
    drawShip(tablero, getX(e.target), getY(e.target), ship);
    console.log(ship.orienVert);
    addEnterHandler(document.querySelector("#board1"),false, tablero, ship);
  });
}
function addEnterHandler(elem, add,tablero, ship) {
  const casillas = document.querySelectorAll(".casilla");
  
  if(!addEnterHandler.test2){

   addEnterHandler.test2 = (e) => {
    console.log("test22222222222222222222");
    
    let x = getX(e.target);
    let y = getY(e.target);
    if (checkIfPossible(tablero, getX(e.target), getY(e.target), ship)) {
      saleCursor();
      drawShip(tablero, x, y, ship);
    }
  };}
  if (add){

  
  const test3 = (e) => {
    console.log("test333333333333333333333333");
    
    
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
  
  casillas.forEach((elem) => {
    
  elem.addEventListener(
  "mouseenter",
  addEnterHandler.test2,
  true

  // console.log( checkIfPossible(tablero,getX(e.target),getY(e.target),ship))

  // in the event handler function here, you can directly refer
  // to arg1 and arg2 from the parent function arguments
  );
  });}
  else{
    console.log(addEnterHandler.test2)
  casillas.forEach((elem) => {
  elem.removeEventListener(
  "mouseenter",
  addEnterHandler.test2,
  true)})}
}

function add2ClickHandler(elem, tablero, ship) {
  elem.addEventListener("dblclick", function (e) {
    console.log("2click");

    if (checkIfPossible(tablero, getX(e.target), getY(e.target), ship)) {
    }

    ponShip(tablero, getX(e.target), getY(e.target), ship);
  });
}

function ponShip(tablero, x, y, ship) {
  let vertical = ship.orienVert;
  let tam = ship.body.length;
  let Cx = x;
  let Cy = y;

  for (let i = 0; i < tam; i++) {
    //console.log(x, y);
    if (vertical === true) {
      Cy = y + i;
    } else {
      Cx = x + i;
    }

    tablero.map[Cx][Cy] = 1;
  }
  createBoard(tablero);
  removeListener();
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
