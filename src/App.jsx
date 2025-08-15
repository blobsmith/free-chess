import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Game from "./Game.jsx";
import './assets/styles/main.scss';

function App() {

  return (
    <>
        <Game />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </>
  )
}

export default App
