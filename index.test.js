//const sum = require('index');
import  {factoryShips,Gameboard} from './index.js'
var ship=factoryShips(3)


test('añadiendo ship tam 3', () => {
  
  expect(ship.body.length).toBe(3);
});
test('probando daño', () => {
  ship.hit(1)
  expect(ship.body).toStrictEqual([1,0,1]);
});
test('probando hundimiento', () => {
 
  expect(ship.isSunk()).toStrictEqual(false);
});
test('probando hundimiento', () => {
  ship.hit(0)
  
  ship.hit(2)
  expect(ship.isSunk()).toStrictEqual(true);
});

////////testing board
var board=Gameboard(10)
var a=1
test('size and array', () => {
  
  expect(ship.body.length).toBe(3);
});

test('size and array', () => {
  console.log("el tipo es "+ typeof(board.map[9]))
  console.log("es array? "+Array.isArray( board.map[9]))
  expect(Array.isArray( board.map[9])).toBe(true);
});