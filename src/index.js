//factorry ships

//import { array } from "yargs";
//import './styles.css';
//import "./fake"
//import { mock } from "./fake";
//mock();
import { test, createBoard } from "./dom.js";

var flotaStandar = [
  
  ["portaaviones", 6],
  ["destructor", 5],
  ["acorazado", 3],
  ["destructor", 3],
  ["acorazado", 2],
];
console.log(flotaStandar);

const factoryShips = (name, size) => {
  var body = new Array(size);
  var coord = new Array(size);
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

  return { name, body, hit, isSunk, coord };
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
    console.log("map");
    console.log(map);
  };

  make2Darray(map);

  const isGameOver = () => {
    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map.length; j++) {
        if (map[i][j] > 0) {
          console.log("la casilla" + i + " " + j + " es igual a " + map[i][j]);
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
    console.log(map);
    for (let i = 0; i < ship.body.length; i++) {
      let x = ship.coord[i][0];
      let y = ship.coord[i][1];
      map[x][y] = ship.body[i];
    }
    console.log(map);
  };
  return { map, isGameOver, receiveAttack, deployShip };
};

const factoryPlayer = (nombre) => {
  const fleet = new Array();
  let a = factoryShips("portaaviones", 5);
  let b = factoryShips("submarino", 2);
  fleet.push(a);
  fleet.push(b);
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

let tablero = Gameboard(10);
console.log(tablero);
let p1 = factoryPlayer("pp");
createBoard(tablero);
console.log(p1);

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
    console.log("x = " + x + " y = " + y + " = " + tablero.map[x][y]);

    console.log("x = " + x + " y = " + y + " = " + tablero.map[x][y]);
    tablero.map[x][y] = 1;
    console.log("x = " + x + " y = " + y + " = " + tablero.map[x][y]);
    createBoard(tablero);
    for (let i = 1; i < tam; i++) {
      console.log(x, y);
      if (vertical === true) {
        y++;
      } else {
        x++;
      }
      console.log("x = " + x + " y = " + y + " = " + tablero.map[x][y]);
      tablero.map[x][y] = 1;
      console.log("x = " + x + " y = " + y + " = " + tablero.map[x][y]);
      createBoard(tablero);
    }
  }

  console.log(vertical);

  createBoard(tablero);
};
putRandomFleet(tablero);

function checkIfPossible(tablero, x, y, vertical, size) {
  var possible = true;

  if (vertical) {
    let xPlus = x;
    let xMinus = x;
    if (x > 0) {
      xMinus = x - 1;
    }
    if (x < 9) {
      xPlus = x + 1;
    }
    /////////////////////
    let yMinus = y;
    let yMax = y;
    if (y > 0) {
      yMinus = y - 1;
    }
    if (y + size  < 9) {
      yMax = y + size;
    }
    if (tablero.map[x][yMinus]!=0 || tablero.map[x][yMax] != 0) {
      possible = false;
      return possible;
    }
    ///////////////////////////
    for (let i = 0; i < size; i++) {
      console.log(tablero.map, x, y, vertical, size);
      if (
        tablero.map[x][y + i] != 0 ||
        tablero.map[xMinus][y + i] != 0 ||
        tablero.map[xPlus][y + i] != 0
      ) {
        possible = false;
        return possible;
      }
    }
  } else {
    /////////////////////
    let xMinus = x;
    let xMax = x;
    if (x > 0) {
      xMinus = x - 1;
    }
    if (x + size  < 9) {
      xMax = x+size ;
    }
    console.log(x,y,xMax,xMinus)
    if (tablero.map[xMax][y]!=0 || tablero.map[xMinus][y] != 0) {
      possible = false;
      return possible;
    }
    ///////////////////////////

    let yPlus = y;
    let yMinus = y;
    if (y > 0) {
      yMinus = y - 1;
    }
    if (y < 9) {
      yPlus = y + 1;
    }
    for (let i = 0; i < size; i++) {
      let ytest = y;
      console.log("check");

      console.log(tablero.map, x, y, vertical, size);
      let testststs = y;
      console.table(x, size, i, x + i);

      if (
        tablero.map[x + i][y] != 0 ||
        tablero.map[x + i][yPlus] != 0 ||
        tablero.map[x + i][yMinus] != 0
      ) {
        possible = false;
        return possible;
      }
    }
  }
  return possible;
}
