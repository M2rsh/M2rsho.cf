import { Twemoji } from 'react-emoji-render';
import './index.css'
import react from 'react'
import { SiDiscord, SiGithub, SiYoutube } from 'react-icons/si'
import Animation from './animation'
class Footer extends react.Component {

    render() {
        return (
            <div className="footer">
                <Animation />
                <footer>
                    <p className="Footer-Text">
                        <Twemoji src text="✌"/>
                    </p>
                    <div className="Footer-Links">
                        
                        <a href="https://discord.com"> <SiDiscord /> </a>
                        <a href="https://github.com/m2rsho"> <SiGithub /> </a>
                        <a href="https://youtube.com/c/mariyt10"> <SiYoutube /> </a>
                    </div>
                </footer>
            </div>
        )
    }
  }
  
  export default Footer;
  