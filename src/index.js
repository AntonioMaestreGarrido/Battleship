//factorry ships

//import { array } from "yargs";
//import './styles.css';
//import "./fake"
//import { mock } from "./fake";
//mock();

const factoryShips = (size) => {
  var body = new Array(size);
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

  ini(body);

  return { body, hit, isSunk };
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
          console.log("la casilla"+i+" "+j+" es igual a "+map[i][j])
          return false;
        }
      }
    }
    console.log("no se  encontro nada")
    return true;
  };

  const receiveAttack = (x, y) => {
    if (!map[x][y]) {
      return "miss";
    } else {
      let n = map[x][y];
      map[x][y] = 0;
      return n;
    }
  }
  return { map, isGameOver, receiveAttack };
};

let b=Gameboard;


export { Gameboard, factoryShips };
//module.exports{ Gameboard, factoryShips}
