import './index.css';
//import { Twemoji } from 'react-emoji-render';

const NovaArmy = () => {
  document.title = "Nova Army - M2rsho.cf"
  return (
    <>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#D6D7D2" />
        <meta name="description" content="We Want You For Nova Simp Army!"/>
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/icons/apple-touch-icon.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <meta property="og:image"  content="%PUBLIC_URL%/UncleSam.jpg" />
        <meta property="twitter:image"  content="%PUBLIC_URL%/UncleSam.jpg" />
        
    </head>
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
