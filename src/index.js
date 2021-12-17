//factorry ships

//import { array } from "yargs";
//import './styles.css';
//import "./fake"
//import { mock } from "./fake";
//mock();
import {test,createBoard}from  "./dom.js";

test();

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

console.log(p1);
p1.fleet[0].coord[0][0] = "0";
p1.fleet[0].coord[1][0] = "1";
p1.fleet[0].coord[2][0] = "2";
p1.fleet[0].coord[3][0] = "3";
p1.fleet[0].coord[4][0] = "4";

p1.fleet[0].coord[0][1] = "0";
p1.fleet[0].coord[1][1] = "0";
p1.fleet[0].coord[2][1] = "0";
p1.fleet[0].coord[3][1] = "0";
p1.fleet[0].coord[4][1] = "0";

p1.fleet[1].coord[0][0] = "6";
p1.fleet[1].coord[1][0] = "6";

p1.fleet[1].coord[0][1] = "7";
p1.fleet[1].coord[1][1] = "8";

p1.fleet.forEach((ship) => {
  tablero.deployShip(ship);
});
//console.log(tablero.receiveAttack(0,0))

p1.resolveAttack(tablero.receiveAttack(0, 0));
createBoard(tablero)
export { Gameboard, factoryShips };
//module.exports{ Gameboard, factoryShips}
