
const flotaStandar = [
    ["portaaviones", 6],
    ["destructor", 5],
    ["acorazado", 4],
    ["submarino", 3],
    ["submarino", 3],
    ["lancha", 2],
    ["lancha", 2],
  ];
export const factoryShips = (name, size) => {
    const body = new Array(size);
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
      for (let i = 0; i < body.length; i++) {
        if (body[i] == p) {
          body[i] = 0;
          console.log("hundido?" + isSunk());
        }
      }
    };
    const isSunk = () => {
      let sunk = true;
      body.forEach((p) => {
        if (p !== 0) {
          sunk = false;
          return sunk;
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
  
  export const Gameboard = (size) => {
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
      console.log("Game Over");
      return true;
    };
  
    const receiveAttack = (x, y) => {
      if (map[x][y] <= 0) {
        map[x][y] = -2;
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
  
  export const factoryPlayer = (nombre) => {
    const fleet = new Array();
    flotaStandar.forEach((ship) => {
      fleet.push(factoryShips(ship[0], ship[1]));
    });
    const resolveAttack = (n) => {
      if (!n) {
        return;
      }
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
  export function test(text) {
      alert (text)
      
  }
