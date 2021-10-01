import './index.css';
import Twemoji from 'react-twemoji';
import {SiJavascript, SiPython, SiHtml5, SiCss3, SiCplusplus, SiCsharp} from 'react-icons/si'

function AboutMe() {
  document.title = "About Me - M2rsho.cf"
  return (
    <div className="About">
        <Twemoji options={{className: "twemoji"}}>
          <p style={{padding: "25px"}}>
          <span style={{fontSize: "190%"}}>👋 Hello!</span> <br/>
          My name is <span style={{color: "#a47cdc"}}>Mariusz</span> and I'm from Poland 🇵🇱 🥟<br/>
          <br/>
          I love <span style={{color: "#a47cdc"}}>Science</span> ☄️ And <span style={{color: "#a47cdc"}}>Programming</span> 🤓<br/>

          <span className="list"/>
            <ul>
                <span style={{color: "#a47cdc"}}>Programming languages</span> that i know
              <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", alignItems: "center"}}>
                <li className="item" style={{color: "#f0db4f"}}> <SiJavascript className="twemoji"/> JavaScript</li>
                <li className="item" style={{color: "#4B8BBE"}}> <SiPython className="twemoji"/> Python</li>
                <li className="item" style={{color: "#f06529"}}> <SiHtml5 className="twemoji"/> HTML</li>
                <li className="item" style={{color: "#1474b4"}}> <SiCss3 className="twemoji"/> CSS</li>
                <li className="item" style={{color: "#649ad3"}}> <SiCplusplus className="twemoji"/> C++</li>
                <li className="item" style={{color: "#6c3cb2"}}> <SiCsharp className="twemoji"/> C#</li>
              </div>
            </ul>
          <span/>
          I love listening to <span style={{color: "#1e2124"}}>Eminem</span> 🗡️😈 And <span style={{color: "#1e2124"}}>Emo</span> Genre 🤍 <br/>
          My favourite animal is Snake 🐍 <br/>
          <br/>
          In my opinion <span style={{color: "#a47cdc"}}>Football ⚽ is boring</span> I prefer fencing 🤺 <br/>
          <br/>
          Animations Are Hella Cool 😎
          </p>
        </Twemoji>
    </div>
  );
}

export default AboutMe;
