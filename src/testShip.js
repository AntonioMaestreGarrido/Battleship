export function test2() {
  console.log("log");
}
export function checkIfPossible(tablero, x, y, vertical, size) {
  var possible = true;
    var x=parseInt (x)
    var y=parseInt (y)
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
    if (y + size < 9) {
      yMax = y + size;
    }
    if (tablero.map[x][yMinus] != 0 || tablero.map[x][yMax] != 0) {
      possible = false;
      return possible;
    }
    ///////////////////////////
    for (let i = 0; i < size; i++) {
     
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
    if (x + size < 9) {
      xMax = x + size;
    }
   
    if (tablero.map[xMax][y] != 0 || tablero.map[xMinus][y] != 0) {
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
