//Setting up the gameBoard Module
let gameBoardModule = (() => {
  let gameBoard = [];
  return {};
})();

//Setting up the displayController module
let displayControllerModule = (() => {
  let testF = () => {
    console.log("testing private function call inside of a module object...");
  };
  return { testF };
})();
