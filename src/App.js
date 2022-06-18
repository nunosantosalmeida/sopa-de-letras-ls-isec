/**
 * Trabalho Realizado por Micael Eid (2019112744), Nuno Almeida (2019121655) e Renato Craveiro (2018011392)
 * No âmbito da Unidade Curricular de Linguagens Script (1º Ano - 2º Semestre)
 * ISEC - Licenciatura em Engenharia Informática - Ano Letivo 2021/2022
 */

import "./App.css";
import "./assets/styles/body.css";
import "./assets/styles/container.css";
import "./assets/styles/header.css";
import "./assets/styles/section.css";
import Header from "./components/header/header.component";
import PanelControl from "./components/painel-control/painel-control.component";
import Footer from "./components/footer/footer.component";
import GameBoard from "./components/game-board/game-board.component";
import {React, useEffect, useState} from "react";
import {TIMEOUTGAME, LEVEL_SETTINGS} from "./constants";
import {fillBoard, checkSelection, markLetterFound} from "./helpers";

let timerId = undefined;
let levelSettings = LEVEL_SETTINGS[0];
let boardInfo = fillBoard(levelSettings[2]);
let finalArray = boardInfo[0], usedWords = boardInfo[1];
let startKey = 0, endKey = 0;
let lastSelection = [];
let foundLetters = [];  

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("0");
  const [boardSide, setBoardSide] = useState(10);
  const [refresh, setRefresh] = useState(false);
  const [selecting, setSelecting] = useState(false);  // -> Usado para saber se estamos em seleção ou não
  const [selection, setSelection] = useState([]);  // -> Usado para passar a seleção
  const [timer, setTimer] = useState(TIMEOUTGAME);

  // Mudança de dificuldade
  const handleLevelChange = (event) => {
    const { value } = event.currentTarget;
    setSelectedLevel(value);

    switch (value) {
      case '1': levelSettings = LEVEL_SETTINGS[1]; break;
      case '2': levelSettings = LEVEL_SETTINGS[2]; break;
      case '3': levelSettings = LEVEL_SETTINGS[3]; break;
      default: levelSettings = LEVEL_SETTINGS[0]; break;;
    }
    console.log("A mudar dificuldade para " + LEVEL_SETTINGS[0]);
  };

  // Temporizador
  useEffect(() => {
    if (gameStarted) {
      let nextTimer;
      timerId = setInterval(() => {
        setTimer((previousState) => {
          nextTimer = previousState - 1;
          return nextTimer;
        });
      }, 1000);
    } else if (timer !== TIMEOUTGAME) {
      setTimer(TIMEOUTGAME);
    }
    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [gameStarted]);

  // Se o tempo se esgotar, parar o jogo e fazer clearInterval do timerId
  useEffect(() => {
    if (timer <= 0) {
      setGameStarted(false);
      clearInterval(timerId);
    }
  }, [timer]);

  // Gerir inicio e fim de jogo
  const handleGameStart = () => {
    if (gameStarted) {
      console.log("Termina Jogo");
      setGameStarted(false);
    } else {
      console.log("Inicia Jogo");

      boardInfo = fillBoard(levelSettings[2]);
      finalArray = boardInfo[0];
      usedWords  = boardInfo[1];

      setGameStarted(true);
    }
  };

  // useEffect para lidar com a selection
  useEffect(() => {
    if(selecting){
      startKey = selection[0];
      lastSelection.pop();
      lastSelection.pop();
      lastSelection.pop();
      lastSelection.pop();
    }
    else if(!selecting) {
      endKey = selection[0];
      lastSelection.push(startKey);
      lastSelection.push(endKey);
      console.log("Foi selecionado -> " + lastSelection);

      // verificar se foi selecionada uma palavra do jogo
      if(checkSelection(lastSelection, usedWords)) {
        console.log("Encontramos uma palavra!");
        let startKey2D = [startKey%10, Math.floor(startKey/10)];
        let endKey2D = [endKey%10, Math.floor(endKey/10)];
        let direction = [endKey2D[0] - startKey2D[0], endKey2D[1] - startKey2D[1]] // Um bocadinho de calculo vectorial nunca fez mal a ninguém
        let incremento = 0;

        
        if(direction[0] < 0 && direction[1] < 0)  // DIAGONAL
          incremento = levelSettings[1] + 1;
        if(direction[0] > 0 && direction[1] < 0)  // DIAGONAL
          incremento = levelSettings[1] - 1;
        if(direction[0] < 0 && direction[1] > 0)  // DIAGONAL
          incremento = levelSettings[1] - 1;
        if(direction[0] > 0 && direction[1] > 0)  // DIAGONAL
          incremento = levelSettings[1] + 1;
        if(direction[0] === 0)             // VERTICAL
          incremento = levelSettings[1];
        if(direction[1] === 0)             // HORIZONTAL
          incremento = 1;

        for(let index = Math.min(...lastSelection); index <= Math.max(...lastSelection); index = index + incremento){
          foundLetters.push(index);
        }
      }
    }  

    setRefresh(!refresh);
    
  }, [selecting]);
  
  // Components
  return (
    <div id="container">
      <Header />
      <PanelControl
        gameStarted={gameStarted}
        onGameStart={handleGameStart}
        selectedLevel={selectedLevel}
        onLevelChange={handleLevelChange}
        timer={timer}
      />
      <GameBoard
        selectedLevel={selectedLevel}
        usedWords={usedWords}
        letters={finalArray}
        levelSettings={levelSettings}
        selecting={selecting}
        setSelecting={setSelecting}
        setSelection={setSelection}
        foundLetters={foundLetters}
      />
      <Footer/>
    </div>
  );
}

export default App;
