//factorry ships

//import { array } from "yargs";
//import './styles.css';+
//tetststststts

document.querySelector("#myModal").style.display = "block";
document.querySelector("#general").style.display = "none";
document.querySelector(".close").onclick = function() {
  console.log(document.querySelector("#myModal").style.display)
  document.querySelector("#myModal").style.display = "none";
  document.querySelector("#general").style.display = "flex";
}
import * as Factory from './factorys.js'
import * as Setup from './setup.js'

import {
  test,
  drawPosible,
  createBoard,
  casillaAddClass,
  casillaRemoveClass,
  marcaCasila,
  marcaHundido,
} from "./dom.js";
import { checkIfPossible } from "./testShip.js";
console.log("hla");













Factory.factoryPlayer("q")
var p1 = Factory.factoryPlayer("you");
var p2 = Factory.factoryPlayer("Computer");

var tablero1 = Factory.Gameboard(10);
var tablero2 = Factory.Gameboard(10);


createBoard(tablero1, "board1");
//createBoard(tablero2, "board2");

Setup.ramdonPosition(tablero2,p2)
Setup.PutPlayerFleet(p1,tablero1)
console.log(p1);
//createBoard(tablero1)
//createBoard(tablero2,"board2");
//PutPlayerFleet(p1, tablero1);

gameloop();






function addEventListenerForPlay() {
  const board = document.querySelector("#board2");
  board.addEventListener("click", click);
}
function click(e) {
  let x = getX(e.target);
  let y = getY(e.target);
  if (tablero2.map[x][y]<0){return}
  let computerShoot
  console.log(tablero1.map);
  console.log(tablero2.map[x][y]);
  console.log(tablero1.map[x][y]);
  p2.resolveAttack(tablero2.receiveAttack(x, y));
  marcaCasila(board2, x, y, tablero2.map[x][y]);
  marcaHundido(p2, "board2");
  
  console.log(tablero2.isGameOver());
  computerShoot=randomHit(tablero1);
  //computerShoot[0]=x
  //computerShoot[1]=y
  p1.resolveAttack(tablero1.receiveAttack(computerShoot[0],computerShoot[1]));
  marcaCasila(board1, computerShoot[0], computerShoot[1], tablero1.map[computerShoot[0]][computerShoot[1]]);
  marcaHundido(p1, "board1");
}
function gameloop() {
  console.log("loop");

  addEventListenerForPlay();
}
function randomHit(tablero) {
  let coor = new Array();
  let x,y;
  do{
    x=Math.floor(Math.random() * 10)
    y=Math.floor(Math.random() * 10)
    
    
  } while (tablero.map[x][y]<0) 
  coor.push(x);
  coor.push(y);

  return coor;
}
