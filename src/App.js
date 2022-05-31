import "./App.css";
import Header from "./components/header/header.component";
import "./components/container/container.css";
import "./components/body/body.css"
import "./components/section/section.css"
import PanelControl from "./components/painel-control/painel-control.component";
import "./components/painel-control/painel-control.css"
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <body>
      <div id="container">
        <Header />
        <PanelControl/>
        <Footer/>
      </div>
    </body>
  );
}

export default App;
