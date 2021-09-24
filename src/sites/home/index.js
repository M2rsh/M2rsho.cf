import './index.css';
import { Twemoji } from 'react-emoji-render';
import {Helmet} from "react-helmet";
function App() {
  document.title = "Cumming Soon... - M2rsho.cf"
  return (
    <div className="App">
      <Helmet>
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="Cumming Soon..."/>
      </Helmet>
      <header className="App-header">
          <Twemoji svg text="☠️" options={{ className: "App-logo"}}/>
          <br/> <br/>
          <pre>Cumming Soon...</pre>
      </header>
    </div>
  );
}

export default App;
