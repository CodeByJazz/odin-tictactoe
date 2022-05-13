//Setting up the gameBoard Module
let gameBoardModule = (() => {
  let gameBoard = ["X"];
  return { gameBoard };
})();

//Setting up the displayController module
let displayControllerModule = (() => {
  let testF = () => {
    console.log("testing private function call inside of a module object...");
  };
  return { testF };
})();

//Setting up the player factory function
let createPlayer = (playerName, playerNumber, assignedXO) => {
  let getPlayerName = () => {
    playerName;
    console.log(
      `This is the name of player ${playerNumber} ... ${playerName} `
    );
  };
  return { getPlayerName, playerName, playerNumber, assignedXO };
};

//Setting up the render module for array to display on gameboard
let renderArrayToScreenModule = (() => {
  const gridBoxes = document.querySelectorAll(".grid-box");
  gridBoxes[0].textContent = gameBoardModule.gameBoard;
  console.log(
    "show me the array as seen inside of renderArraryToScreenModeule...",
    gameBoardModule.gameBoard
  );
  console.log(
    "show me the node list of the gridBoxes as seen inside of renderArrayToScreenModule",
    gridBoxes
  );
  return {};
})();

let Jay = createPlayer("Jay", 1, "X");
let Jazz = createPlayer("Jazz", 1, "O");
renderArrayToScreenModule;
