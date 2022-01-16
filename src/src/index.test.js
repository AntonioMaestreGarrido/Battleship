//const sum = require('index');
import { factoryShips, Gameboard } from "./index.js";
var ship = factoryShips(3);

test("añadiendo ship tam 3", () => {
  expect(ship.body.length).toBe(3);
});
test("probando daño", () => {
  ship.hit(1);
  expect(ship.body).toStrictEqual([1, 0, 3]);
});
test("probando hundimiento", () => {
  expect(ship.isSunk()).toStrictEqual(false);
});
test("probando hundimiento", () => {
  console.log(ship.body);
  ship.hit(0);
  console.log(ship.body);
  ship.hit(2);
  console.log(ship.body);
  expect(ship.isSunk()).toStrictEqual(true);
});

////////testing board
var board = Gameboard(10);
var a = 1;
test("size and array", () => {
  expect(ship.body.length).toBe(3);
});
test("size and array", () => {
  console.log("el tipo es " + typeof board.map[9]);
  console.log("es array? " + Array.isArray(board.map[9]));
  expect(Array.isArray(board.map[9])).toBe(true);
});
test("end game false", () => {
  board.map[1][1] = 8;
  console.log(board);
  let a = board.isGameOver();
  expect(a).toStrictEqual(false);
});

test("recieve attac hit", () => {
  console.log("valor de 1 , 1 = "+board.map[1][1])
  expect(board.receiveAttack(1, 1)).toStrictEqual(8);
});
test("recibing attack miss", () => {
  board.receiveAttack(1, 1);
  console.log("valor de 1 , 1 = "+board.map[1][1])
  let a = board.receiveAttack(1, 1);
  expect(a).toBe("miss");
});
test("end game true", () => {
  console.log(board.map+"yeeeeeeeeeeeee")
  console.log("valor de 1 , 1 = "+board.map[1][1])
  let a = board.isGameOver();
  expect(a).toStrictEqual(true);
});
