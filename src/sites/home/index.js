import './index.css';
import { Twemoji } from 'react-emoji-render';

function Home() {
  document.title = "Home - M2rsho.cf"
  return (
    <div className="Home">
        <Twemoji svg text="☠️" options={{ className: "Home-logo"}}/>
        <br/> <br/>
        <pre>I dunno what to do here</pre>
    </div>
  );
}

export default Home;
