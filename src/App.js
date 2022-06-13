/**
 * Trabalho Realizado por Micael Eid (2019112744), Nuno Almeida (2019121655) e Renato Craveiro (2018011392)
 * No âmbito da Unidade Curricular de Linguagens Script (1º Ano - 2º Semestre)
 * ISEC - Licenciatura em Engenharia Informática - Ano Letivo 2021/2022  
 */

import "./App.css";
import Header from "./components/header/header.component";
import PanelControl from "./components/painel-control/painel-control.component";
import Footer from "./components/footer/footer.component";
import GameBoard from "./components/game-board/game-board.component";
import "./assets/styles/body.css";
import "./assets/styles/container.css";
import "./assets/styles/header.css";
import "./assets/styles/painel-control.css";
import "./assets/styles/section.css";
import { useEffect, useState } from "react";

function App() {

  let levelSettings =[["Fácil", "10",false], // <- 0
                      ["Médio", "20", false], // <- 1
                      ["Difícil","25", true]]; // <- 2

  let boardSize = 7 * 7;
  let TIMEOUTGAME = 60;

  const [gameStarted, setGameStarted] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("0");
  const [timer, setTimer] = useState(TIMEOUTGAME);
  let timerId = undefined;

  const handleLevelChange = (event) => {
    
    const { value } = event.currentTarget;
    setSelectedLevel(value);
  
    switch (value) {
      case 1:
        boardSize = 10*10;
        break;
      case 2:
        boardSize = 20*20;
        break;
      case 3:
        boardSize = 25*25;
        break;
      default:
        break;
    }
  }

  const handleGameStart = () => {
    if (gameStarted) {
      console.log("Termina Jogo");
      setGameStarted(false);
    } else {
      console.log("Inicia Jogo");
      setGameStarted(true);
    }
  };

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

  useEffect(() => {
    if (timer <= 0) {
      setGameStarted(false);
      clearInterval(timerId);
    }
  }, [timer]);

  return (
    <body>
      <div id="container">
        <Header />
        <PanelControl
          gameStarted={gameStarted}
          handleGameStart={handleGameStart}
          selectedLevel={selectedLevel}
          handleLevelChange ={handleLevelChange}
          timer={timer}
        />
        <GameBoard lnumb={boardSize} />
        <Footer/>
      </div>
    </body>
  );
}

export default App;
