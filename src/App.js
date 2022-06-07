/**
 * Trabalho Realizado por Micael Eid (2019112744), Nuno Almeida (2019121655) e Renato Craveiro (2018011392)
 * No âmbitio da Unidade Curricular de Linguagens Script (1º Ano - 2º Semestre)
 * ISEC - Licenciatura em Engenharia Informática - Ano Letivo 2021/2022  
 */

import "./App.css";
import Header from "./components/header/header.component";
import "./components/container/container.css";
import "./components/body/body.css"
import "./components/section/section.css"
import PanelControl from "./components/painel-control/painel-control.component";
import "./components/painel-control/painel-control.css"
import Footer from "./components/footer/footer.component";
import "./components/game-board/game-board.css"
import GameBoard from "./components/game-board/game-board.component";


function App() {

  let boardSize = 7 * 7;


  return (
    <body>
      <div id="container">
        <Header />
        <PanelControl/>
        <GameBoard lnumb={boardSize} />
        <Footer/>
      </div>
    </body>
  );
}

export default App;
