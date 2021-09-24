import './index.css';
import { Twemoji } from 'react-emoji-render';

function App() {
  document.title = "Cumming Soon... - M2rsho.cf"
  return (
    <div className="App">
      <header className="App-header">
          <Twemoji svg text="☠️" options={{ className: "App-logo"}}/>
          <br/> <br/>
          <pre>Cumming Soon...</pre>
      </header>
    </div>
  );
}

export default App;
