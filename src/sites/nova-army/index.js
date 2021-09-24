import './index.css';
import {Helmet} from "react-helmet";
//import { Twemoji } from 'react-emoji-render';


const NovaArmy = () => {
  document.title = "Nova Army - M2rsho.cf"
  return (
    <>
    <Helmet>
        <meta name="theme-color" content="#D6D7D2" />
        <meta name="description" content="We Want You For Nova Simp Army!"/>
        <meta property="og:image"  content="%PUBLIC_URL%/UncleSam.jpg" />
        <meta property="twitter:image"  content="%PUBLIC_URL%/UncleSam.jpg" />
    </Helmet>

    <div className="App">
      <header className="App-header">
          <img src="assets/UncleSam.jpg" alt="Uncle Sam" style={{width: "40vw"}}/>
          <br/> <br/>
          <p>Join Nova Simp Army now!</p>
      </header>
    </div>
    </>
  );
}

export default NovaArmy;
