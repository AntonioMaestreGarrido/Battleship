//factorry ships

//import { array } from "yargs";



var hola
console.log(hola)





const factoryShips = (size) => {
  var body = new Array(size);
  const sunk = false;
  var IDnumber
  const ID=()=>{
    
    if (typeof(factoryShips.IDnumber)==="undefined"){factoryShips.IDnumber=0}
    factoryShips.IDnumber++
    return factoryShips.IDnumber
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
    }
  };

  make2Darray(map);
  return { map };
};


export { Gameboard, factoryShips };
//module.exports{ Gameboard, factoryShips} 