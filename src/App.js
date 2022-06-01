import "./App.css";
import Header from "./components/header/header.component";
import PanelControl from "./components/painel-control/painel-control.component";
import Footer from "./components/footer/footer.component";
import GameBoard from "./components/game-board/game-board.component";
import "./assets/styles/body.css";
import "./assets/styles/container.css";
//import "./assets/styles/game-board.css";
import "./assets/styles/header.css";
//import "./assets/styles/letter.css";
import "./assets/styles/painel-control.css";
import "./assets/styles/section.css";


function App() {

  let boardSize = 7 * 7;


  return (
    <body>
      <div id="container">
        <Header />
        <GameBoard lnumb={boardSize} />
        <PanelControl/>
        <Footer/>
      </div>
    </body>
  );
}

export default App;
