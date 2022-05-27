import logo from './logo.svg';
import HelloWorld from "./helpers/helloworld";
import './assets/styles/App.css';

function App() {
  //HelloWorld();
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Aqui vai nascer uma <code>Sopa de Letras</code>!.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
