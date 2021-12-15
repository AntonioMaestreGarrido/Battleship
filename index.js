//factorry ships

//import { array } from "yargs";

const factoryShips = (size) => {
  var body = new Array(size);
  const sunk = false;
  var i
  const ID=()=>{
    
    if (this.i==undefined){this.i=0}
    this.i++
    return this.i
  }
  
  var ini = (body) => {
    for (let i = 0; i < body.length; i++) {
      body[i] = ID();
    }
  };

  const hit = (p) => {
    if (body[p] !==0) {
      body[p] = 0;
    }
  };
  const isSunk = () => {
    let sunk = true;
    body.forEach((p) => {
      if (p !== 1) {
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
    }
  };

  make2Darray(map);
  return { map };
};
var b = Gameboard(8);
const ship1=factoryShips(3)
const ship2=factoryShips(8)
console.log(ship1)
console.log(ship2)
const ship3=factoryShips(8)
console.log(ship3)

//export { Gameboard, factoryShips };
