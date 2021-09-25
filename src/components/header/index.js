import { Twemoji } from 'react-emoji-render';
//import one from './svgs/one.svg';
//import two from './svgs/two.svg';
import Animation from './animation'
import './index.css'

function Header() {
    return (
        <div className="headerdiv">
            <header className="Header">
                <p className="main-text"><Twemoji svg text="👋" />Welcome!</p>
            </header>
            <Animation />
            {/*<img src={one} alt="header-svg" style={{width: "100%"}} />*/}
        </div>
    );
  }
  
  export default Header;
  