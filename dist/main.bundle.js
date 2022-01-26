/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"test\": () => (/* binding */ test),\n/* harmony export */   \"createBoard\": () => (/* binding */ createBoard),\n/* harmony export */   \"drawPosible\": () => (/* binding */ drawPosible),\n/* harmony export */   \"casillaAddClass\": () => (/* binding */ casillaAddClass),\n/* harmony export */   \"casillaRemoveClass\": () => (/* binding */ casillaRemoveClass),\n/* harmony export */   \"marcaCasila\": () => (/* binding */ marcaCasila),\n/* harmony export */   \"marcaHundido\": () => (/* binding */ marcaHundido)\n/* harmony export */ });\nfunction createDomElement(tag, inner, parent, clase) {\n  var newElement = document.createElement(tag);\n  newElement.innerHTML = inner;\n  parent.appendChild(newElement);\n\n  if (clase) {\n    newElement.classList.add(clase);\n  }\n\n  return newElement;\n}\n\nfunction test() {\n  console.log(\"test\");\n}\nfunction createBoard(board, container) {\n  var container = document.querySelector(\"#\".concat(container));\n  container.innerHTML = \"\";\n\n  for (var y = 0; y < 10; y++) {\n    for (var x = 0; x < 10; x++) {\n      var valor = board.map[x][y];\n\n      if (valor > 0) {\n        valor = \"O\";\n      } else if (valor < 0) {\n        valor = \"X\";\n      } else {\n        valor = \"\";\n      }\n\n      var casilla = createDomElement(\"div\", valor, container, \"casilla\");\n      casilla.setAttribute(\"x\", x);\n      casilla.setAttribute(\"y\", y);\n    }\n  }\n}\nfunction drawPosible(board, x, y, vertical, size) {\n  //board,x,y,vertical,size\n  for (var i = 0; i < size; i++) {\n    document.querySelector([\"x='1'\"]).classList.add(\"posible\");\n  }\n}\nfunction casillaAddClass(x, y, clase) {\n  var c = document.querySelector(\"[x='\".concat(x, \"'][y='\").concat(y, \"']\"));\n  c.classList.add(clase);\n}\nfunction casillaRemoveClass(x, y, clase) {\n  var c = document.querySelector(\"[x='\".concat(x, \"'][y='\").concat(y, \"']\"));\n  c.classList.remove(clase);\n}\nfunction marcaCasila(board, x, y, valor) {\n  console.log(valor); //let casilla =document.querySelector(`#board2`).querySelector(`[x=\"${x}\"][y=\"${y}\"]`)\n\n  var casilla = board.querySelector(\"[x=\\\"\".concat(x, \"\\\"][y=\\\"\").concat(y, \"\\\"]\"));\n  console.log(valor);\n  console.log('#board2[x=\"${x}\"][y=\"${y}\"]');\n\n  if (valor == -2) {\n    valor = \"X\";\n  } else if (valor == 0) {\n    valor = \"X\";\n  } else if (valor == -1) {\n    casilla.classList.add(\"hit\");\n    valor = \"O\";\n  }\n\n  console.log(valor);\n  casilla.innerHTML = valor;\n}\nfunction marcaHundido(player, board) {\n  var casilla;\n  var x;\n  var y;\n  console.log(\"boarddd \" + board);\n  player.fleet.forEach(function (ship) {\n    if (ship.isSunk()) {\n      for (var i = 0; i < ship.body.length; i++) {\n        console.log(ship);\n        x = ship.coord[i][0];\n        y = ship.coord[i][1];\n\n        var _casilla = document.querySelector(\"#\".concat(board)).querySelector(\"[x=\\\"\".concat(x, \"\\\"][y=\\\"\").concat(y, \"\\\"]\")).classList.add(\"hundido\");\n\n        console.log(_casilla);\n      }\n    }\n  });\n}\n\n//# sourceURL=webpack://battleship/./src/dom.js?");

/***/ }),

/***/ "./src/factorys.js":
/*!*************************!*\
  !*** ./src/factorys.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"flotaStandar\": () => (/* binding */ flotaStandar),\n/* harmony export */   \"factoryShips\": () => (/* binding */ factoryShips),\n/* harmony export */   \"Gameboard\": () => (/* binding */ Gameboard),\n/* harmony export */   \"factoryPlayer\": () => (/* binding */ factoryPlayer),\n/* harmony export */   \"test\": () => (/* binding */ test)\n/* harmony export */ });\nvar log = document.querySelector('#log');\nvar flotaStandar = [[\"Un Portaaviones\", 6], [\"Un Destructor\", 5], [\"Un Acorazado\", 4], [\"Un Submarino\", 3], [\"Un Submarino\", 3], [\"Una Lancha\", 2], [\"Una Lancha\", 2]];\nvar factoryShips = function factoryShips(name, size) {\n  var body = new Array(size);\n  var coord = new Array(size);\n  var orienVert = true;\n  var sunk = false;\n  var IDnumber;\n\n  var ID = function ID() {\n    if (typeof factoryShips.IDnumber === \"undefined\") {\n      factoryShips.IDnumber = 0;\n    }\n\n    factoryShips.IDnumber++;\n    return factoryShips.IDnumber;\n  };\n\n  var ini = function ini(body) {\n    for (var i = 0; i < body.length; i++) {\n      body[i] = ID();\n    }\n  };\n\n  var hit = function hit(p) {\n    for (var i = 0; i < body.length; i++) {\n      if (body[i] == p) {\n        body[i] = 0;\n      }\n    }\n\n    if (isSunk()) {\n      log.innerText = \"Has Hundido \" + name;\n    }\n  };\n\n  var isSunk = function isSunk() {\n    var sunk = true;\n    body.forEach(function (p) {\n      if (p !== 0) {\n        sunk = false;\n        return sunk;\n      }\n    });\n    return sunk;\n  }; // make a 2d array to hold coord (x,y) of every piece of the ship\n\n\n  (function () {\n    for (var i = 0; i < body.length; i++) {\n      coord[i] = new Array(2);\n    }\n  })();\n\n  ini(body);\n  return {\n    name: name,\n    body: body,\n    hit: hit,\n    isSunk: isSunk,\n    coord: coord,\n    orienVert: orienVert\n  };\n};\nvar Gameboard = function Gameboard(size) {\n  var map = new Array(size);\n\n  var make2Darray = function make2Darray(map) {\n    for (var i = 0; i < map.length; i++) {\n      map[i] = new Array(size);\n\n      for (var j = 0; j < map.length; j++) {\n        map[i][j] = 0;\n      }\n    }\n  };\n\n  make2Darray(map);\n\n  var isGameOver = function isGameOver() {\n    for (var i = 0; i < map.length; i++) {\n      for (var j = 0; j < map.length; j++) {\n        if (map[i][j] > 0) {\n          return false;\n        }\n      }\n    }\n\n    console.log(\"Game Over\");\n    return true;\n  };\n\n  var receiveAttack = function receiveAttack(x, y) {\n    if (map[x][y] <= 0) {\n      map[x][y] = -2;\n      return \"miss\";\n    } else {\n      var n = map[x][y];\n      map[x][y] = -1;\n      return n;\n    }\n  };\n\n  var deployShip = function deployShip(ship) {\n    for (var i = 0; i < ship.body.length; i++) {\n      var x = ship.coord[i][0];\n      var y = ship.coord[i][1];\n      map[x][y] = ship.body[i];\n    }\n  };\n\n  return {\n    map: map,\n    isGameOver: isGameOver,\n    receiveAttack: receiveAttack,\n    deployShip: deployShip\n  };\n};\nvar factoryPlayer = function factoryPlayer(nombre) {\n  var fleet = new Array();\n  flotaStandar.forEach(function (ship) {\n    fleet.push(factoryShips(ship[0], ship[1]));\n  });\n\n  var resolveAttack = function resolveAttack(n) {\n    if (!n) {\n      return;\n    }\n\n    fleet.forEach(function (ship) {\n      var position = 0;\n      ship.body.forEach(function (b, p) {\n        console.log(n);\n\n        if (b == n) {\n          console.log(\"hit\");\n          ship.hit(n);\n        }\n      });\n    });\n  };\n\n  return {\n    nombre: nombre,\n    fleet: fleet,\n    resolveAttack: resolveAttack\n  };\n};\nfunction test(text) {\n  alert(text);\n}\n\n//# sourceURL=webpack://battleship/./src/factorys.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _factorys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factorys.js */ \"./src/factorys.js\");\n/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setup.js */ \"./src/setup.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var _testShip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./testShip.js */ \"./src/testShip.js\");\n//factorry ships\n//import { array } from \"yargs\";\n //tetststststts\n\ndocument.querySelector(\"#myModal\").style.display = \"block\";\ndocument.querySelector(\"#general\").style.display = \"none\";\n\ndocument.querySelector(\".close\").onclick = function () {\n  console.log(document.querySelector(\"#myModal\").style.display);\n  document.querySelector(\"#myModal\").style.display = \"none\";\n  document.querySelector(\"#general\").style.display = \"flex\";\n  var log = document.querySelector('#log');\n};\n\n\n\n\n\nconsole.log(\"hla\");\n_factorys_js__WEBPACK_IMPORTED_MODULE_1__.factoryPlayer(\"q\");\nwindow.p1 = _factorys_js__WEBPACK_IMPORTED_MODULE_1__.factoryPlayer(\"you\");\nwindow.p2 = _factorys_js__WEBPACK_IMPORTED_MODULE_1__.factoryPlayer(\"Computer\");\nwindow.tablero1 = _factorys_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard(10);\nwindow.tablero2 = _factorys_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard(10);\n(0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.createBoard)(tablero1, \"board1\"); //createBoard(tablero2, \"board2\");\n\n_setup_js__WEBPACK_IMPORTED_MODULE_2__.PutPlayerFleet(p1, tablero1);\nconsole.log(p1); //createBoard(tablero1)\n//createBoard(tablero2,\"board2\");\n//PutPlayerFleet(p1, tablero1);\n\ngameloop();\n\nfunction addEventListenerForPlay() {\n  console.log(\"wwwwwwwwwwwwwwwwww\" + log.style.display);\n  log.style.display = 'flex';\n  log.innerText = \"Suerte\";\n  var board = document.querySelector(\"#board2\");\n  board.addEventListener(\"click\", click);\n}\n\nfunction click(e) {\n  var x = getX(e.target);\n  var y = getY(e.target);\n\n  if (tablero2.map[x][y] < 0) {\n    return;\n  }\n\n  var computerShoot; //alert(p2.resolveAttack(tablero2.receiveAttack(x, y)))\n\n  p2.resolveAttack(tablero2.receiveAttack(x, y));\n  (0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.marcaCasila)(board2, x, y, tablero2.map[x][y]);\n  (0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.marcaHundido)(p2, \"board2\");\n  computerShoot = randomHit(tablero1); //computerShoot[0]=x\n  //computerShoot[1]=y\n\n  p1.resolveAttack(tablero1.receiveAttack(computerShoot[0], computerShoot[1]));\n  (0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.marcaCasila)(board1, computerShoot[0], computerShoot[1], tablero1.map[computerShoot[0]][computerShoot[1]]);\n  (0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.marcaHundido)(p1, \"board1\");\n\n  if (tablero2.isGameOver()) {\n    alert(\"you win\");\n    document.location.reload();\n  }\n}\n\nfunction gameloop() {\n  console.log(\"loop\");\n  addEventListenerForPlay();\n}\n\nfunction randomHit(tablero) {\n  var coor = new Array();\n  var x, y;\n\n  do {\n    x = Math.floor(Math.random() * 10);\n    y = Math.floor(Math.random() * 10);\n  } while (tablero.map[x][y] < 0);\n\n  coor.push(x);\n  coor.push(y);\n  return coor;\n}\n\nfunction getX(element) {\n  return parseInt(element.getAttribute(\"x\"));\n}\n\nfunction getY(element) {\n  return parseInt(element.getAttribute(\"y\"));\n}\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/setup.js":
/*!**********************!*\
  !*** ./src/setup.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ramdonPosition\": () => (/* binding */ ramdonPosition),\n/* harmony export */   \"PutPlayerFleet\": () => (/* binding */ PutPlayerFleet)\n/* harmony export */ });\n/* harmony import */ var _factorys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factorys.js */ \"./src/factorys.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var _testShip_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./testShip.js */ \"./src/testShip.js\");\n\n\n\n\n\nfunction ramdonPosition(tablero, jugador) {\n  console.log(jugador);\n  var x, y, ship;\n\n  for (var i = 0; i < jugador.fleet.length; i++) {\n    console.log(jugador.fleet.length);\n    ship = jugador.fleet[i];\n\n    do {\n      x = Math.floor(Math.random() * 10);\n      y = Math.floor(Math.random() * 10);\n      Math.floor(Math.random() * 2) == 0 ? ship.orienVert = true : ship.orienVert = false;\n    } while (!(0,_testShip_js__WEBPACK_IMPORTED_MODULE_2__.checkIfPossible)(tablero, x, y, ship));\n\n    jugador.fleet[i] = ponShip(tablero, x, y, ship);\n  } //createBoard(tablero);\n\n}\n\nfunction FlotaJugador(jugador, tablero) {\n  (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.createBoard)(tablero);\n\n  var checkFleet = function checkFleet() {\n    if (typeof FlotaJugador.n === \"undefined\") {\n      FlotaJugador.n = 0;\n    } else {\n      FlotaJugador.n++;\n    }\n  };\n\n  checkFleet(); //setListener(tablero, p1.fleet[FlotaJugador.n]);\n}\n\nfunction PutPlayerFleet(player, tablero) {\n  if (PutPlayerFleet.n === undefined) {\n    PutPlayerFleet.n = 0;\n    setListener(tablero, player.fleet[PutPlayerFleet.n], player);\n  } else {\n    PutPlayerFleet.n++;\n  }\n\n  if (PutPlayerFleet.n == _factorys_js__WEBPACK_IMPORTED_MODULE_0__.flotaStandar.length) {\n    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.createBoard)(window.tablero2, \"board2\");\n    ramdonPosition(window.tablero2, p2);\n    console.log(document.querySelector('#log').style.display);\n    document.querySelector('#info').style.display = 'flex';\n  }\n\n  console.log(\"puttplayerrr \" + PutPlayerFleet.n);\n  console.log(player.fleet[PutPlayerFleet.n]);\n}\n\nfunction getNextShip(p1) {\n  for (var i = 0; i < p1.fleet.length; i++) {\n    if (p1.fleet[i].coord[0][0] === undefined) {\n      return p1.fleet[i];\n    }\n  }\n\n  return false;\n}\n\nfunction setListener(tablero, ship, player) {\n  console.log(ship);\n  var bigDiv = document.querySelector(\"#board1\");\n  addClickHandler(bigDiv, tablero, player);\n  add2ClickHandler(bigDiv, tablero, player);\n  addEnterHandler(bigDiv, tablero, player);\n  saleCursor();\n}\n\nfunction removeListener() {\n  var casillas = document.querySelectorAll(\".casilla\");\n  casillas.forEach(function (elem) {\n    elem.removeEventListener(\"mouseenter\", test2, true);\n  });\n}\n\nfunction addClickHandler(elem, tablero, p1, remove) {\n  function hey(e) {\n    var ship = getNextShip(p1);\n    console.log(ship.orienVert);\n\n    if (ship.orienVert) {\n      ship.orienVert = false;\n    } else {\n      ship.orienVert = true;\n    }\n\n    saleCursor();\n    console.log(ship);\n    drawShip(tablero, getX(e.target), getY(e.target), ship);\n  }\n\n  elem.addEventListener(\"click\", hey);\n}\n\nfunction addEnterHandler(elem, tablero, player) {\n  elem.removeEventListener(\"mouseenter\", hey, true);\n  elem.addEventListener(\"mouseenter\", hey, true);\n\n  function hey(e) {\n    var ship = getNextShip(player);\n    var x = getX(e.target);\n    var y = getY(e.target); //console.log(ship);\n\n    saleCursor();\n    drawShip(tablero, x, y, ship);\n\n    if ((0,_testShip_js__WEBPACK_IMPORTED_MODULE_2__.checkIfPossible)(tablero, getX(e.target), getY(e.target), ship)) {}\n  } // document.querySelector(\"#board1\").addEventListener(\"mouseenter\", test3, true);\n  //document.querySelector(\"#board1\").addEventListener(\"mouseenter\", test2, true);\n\n}\n\nfunction add2ClickHandler(elem, tablero, player) {\n  function hey(e) {\n    console.log(\"2click\");\n    var ship = getNextShip(player);\n\n    if ((0,_testShip_js__WEBPACK_IMPORTED_MODULE_2__.checkIfPossible)(tablero, getX(e.target), getY(e.target), ship)) {\n      ship = ponShip(tablero, getX(e.target), getY(e.target), ship); //elem.removeEventListener(\"dblclick\", hey);\n\n      PutPlayerFleet(player, tablero);\n      (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.createBoard)(tablero, \"board1\");\n    }\n  }\n\n  elem.addEventListener(\"dblclick\", hey);\n}\n\nfunction ponShip(tablero, x, y, ship) {\n  var vertical = ship.orienVert;\n  var tam = ship.body.length;\n  var Cx = x;\n  var Cy = y;\n  console.log(\"before\", ship.coord[0][0]);\n\n  for (var i = 0; i < tam; i++) {\n    //console.log(x, y);\n    if (vertical === true) {\n      Cy = y + i;\n    } else {\n      Cx = x + i;\n    }\n\n    tablero.map[Cx][Cy] = ship.body[i];\n    ship.coord[i][0] = Cx;\n    ship.coord[i][1] = Cy;\n  } //createBoard(tablero);\n\n\n  return ship;\n}\n\nfunction saleCursor() {\n  var casillas = document.querySelectorAll(\".posible\");\n  casillas.forEach(function (c) {\n    c.classList.remove(\"posible\");\n  });\n  console.log(\"sale\"); // createBoard(tablero)\n  // setListener()\n}\n\nfunction drawShip(tablero, x, y, ship) {\n  var Cx = x;\n  var Cy = y;\n  var tam = ship.body.length;\n  var vertical = ship.orienVert;\n\n  for (var i = 0; i < tam; i++) {\n    //console.log(x, y);\n    if (vertical === true) {\n      Cy = y + i;\n    } else {\n      Cx = x + i;\n    }\n\n    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.casillaAddClass)(Cx, Cy, \"posible\");\n  }\n}\n\nfunction getX(element) {\n  return parseInt(element.getAttribute(\"x\"));\n}\n\nfunction getY(element) {\n  return parseInt(element.getAttribute(\"y\"));\n}\n\n//# sourceURL=webpack://battleship/./src/setup.js?");

/***/ }),

/***/ "./src/testShip.js":
/*!*************************!*\
  !*** ./src/testShip.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkIfPossible\": () => (/* binding */ checkIfPossible)\n/* harmony export */ });\nfunction checkIfPossible(tablero, x, y, ship) {\n  try {\n    if (isNaN(x) || isNaN(y)) {\n      return false;\n    }\n\n    console.log(ship);\n    var possible = true;\n    var vertical = ship.orienVert;\n    var size = ship.body.length;\n\n    if (vertical) {\n      var xPlus = x;\n      var xMinus = x;\n\n      if (x > 0) {\n        xMinus = x - 1;\n      }\n\n      if (x < 9) {\n        xPlus = x + 1;\n      } /////////////////////\n\n\n      var yMinus = y;\n      var yMax = y;\n\n      if (y > 0) {\n        yMinus = y - 1;\n      }\n\n      if (y + size < 9) {\n        yMax = y + size;\n      } else {\n        yMax = 9;\n      }\n\n      console.log(\"ymax=\".concat(yMax, \" and x =\").concat(x, \" tablero.map[xMax][y]=\").concat(tablero.map[x][yMax]));\n\n      if (tablero.map[x][yMinus] != 0 || tablero.map[x][yMax] != 0) {\n        possible = false;\n        return possible;\n      } ///////////////////////////\n\n\n      for (var i = 0; i < size; i++) {\n        if (tablero.map[x][y + i] != 0 || tablero.map[xMinus][y + i] != 0 || tablero.map[xPlus][y + i] != 0) {\n          possible = false;\n          return possible;\n        }\n      }\n    } else {\n      /////////////////////\n      var _xMinus = x;\n      var xMax = x;\n\n      if (x > 0) {\n        _xMinus = x - 1;\n      }\n\n      if (x + size < 9) {\n        xMax = x + size;\n      } else {\n        xMax = 9;\n      }\n\n      console.log(\"xmax=\".concat(xMax, \" and y =\").concat(y, \" tablero.map[xMax][y]=\").concat(tablero.map[xMax][y]));\n\n      if (tablero.map[xMax][y] != 0 || tablero.map[_xMinus][y] != 0) {\n        possible = false;\n        return possible;\n      } ///////////////////////////\n\n\n      var yPlus = y;\n      var _yMinus = y;\n\n      if (y > 0) {\n        _yMinus = y - 1;\n      }\n\n      if (y < 9) {\n        yPlus = y + 1;\n      }\n\n      for (var _i = 0; _i < size; _i++) {\n        if (tablero.map[x + _i][y] != 0 || tablero.map[x + _i][yPlus] != 0 || tablero.map[x + _i][_yMinus] != 0) {\n          possible = false;\n          return possible;\n        }\n      }\n    }\n\n    return possible;\n  } catch (err) {\n    return false;\n  }\n}\n\n//# sourceURL=webpack://battleship/./src/testShip.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.css ***!
  \***********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box;\\n  margin: 0; }\\n\\nh1 {\\n  font-size: 50px;\\n  color: blue;\\n  text-align: center; }\\n\\n#general {\\n  display: flex;\\n  width: 900px;\\n  justify-content: center;\\n  margin: auto;\\n  border: blue 1px solid; }\\n\\n.board {\\n  display: flex;\\n  flex-wrap: wrap;\\n  background-color: aqua;\\n  margin: auto;\\n  max-width: 400px;\\n  min-width: 0;\\n  height: 400px; }\\n\\n.casilla {\\n  font-size: 35px;\\n  width: 40px;\\n  height: 40px;\\n  border: solid 1px black;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center; }\\n\\n.ship {\\n  background-color: darkgrey; }\\n\\n.posible {\\n  background-color: green; }\\n\\n.hundido {\\n  color: red; }\\n\\n.hit {\\n  background-color: yellow; }\\n\\n.modal {\\n  display: none;\\n  /* Hidden by default */\\n  position: fixed;\\n  /* Stay in place */\\n  z-index: 1;\\n  /* Sit on top */\\n  width: 100%;\\n  /* Full width */\\n  height: 100%;\\n  /* Full height */\\n  overflow: auto;\\n  /* Enable scroll if needed */\\n  background-color: black;\\n  /* Fallback color */\\n  background-color: rgba(0, 0, 0, 0.4);\\n  /* Black w/ opacity */ }\\n\\n/* Modal Content/Box */\\n.modal-content {\\n  background-color: #fefefe;\\n  margin: 15% auto;\\n  /* 15% from the top and centered */\\n  padding: 20px;\\n  border: 1px solid #888;\\n  width: 50%;\\n  /* Could be more or less, depending on screen size */ }\\n\\n#info {\\n  display: none;\\n  flex-direction: column;\\n  padding: 10px;\\n  border: solid 2px red;\\n  justify-content: center;\\n  justify-items: center;\\n  text-align: center; }\\n\\n#players {\\n  display: flex;\\n  padding: 20px;\\n  gap: 290px;\\n  justify-content: center;\\n  width: 100%;\\n  font-size: 40px; }\\n\\n#log {\\n  font-size: 20px;\\n  padding: 10px;\\n  border: solid 2px green;\\n  justify-content: center; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;