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


import SimpleGB from "./components/simple-gb/simple-gb.component";

function App() {

  let boardSize = 7 * 7;


  return (
    <body>
      <div id="container">
        <Header />
        <PanelControl/>
        <GameBoard lnumb={boardSize} />
        {/*<SimpleGB lnumb={boardSize} />*/}
        <Footer/>
      </div>
    </body>
  );
}

export default App;
