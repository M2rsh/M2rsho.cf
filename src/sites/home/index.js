import './index.css';
import { Twemoji } from 'react-emoji-render';


function App() {
  document.title = "Cumming Soon... - M2rsho.cf"
  return (
    <div className="App">
        <Twemoji svg text="☠️" options={{ className: "App-logo"}}/>
        <br/> <br/>
        <pre>Cumming Soon...</pre>
    </div>
  );
}

export default App;
