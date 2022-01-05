import React from "react";
import "./index.sass";
import icon from "../../assets/favicon.svg";
import { RiGithubLine, RiYoutubeLine, RiDiscordLine } from 'react-icons/ri';


class Footer extends React.Component {
  render() {
    return (
      <>
        <footer>
          <div style={{ margin: "30px", color: "#353131" }}>
            <p>
            <img
              src={icon}
              alt="Icon"
              style={{ top: "1em", position: "relative", height: "3em" }}
            />
            &nbsp;
            <span style={{ fontSize: "2em" }} className="text">M2rsh</span>
            <br/>
            <span style={{ fontSize: ".75em"}}>Copyright © 2021-2022</span>
            </p>
          </div>
          <div style={{float: "right", display: "flex", fontSize: "3em", position: "relative", top: "-2em", marginLeft: "150px"}}>
                <a href="https://github.com/M2rsho" target="_blank" rel="noreferrer"><RiGithubLine/></a>
                <a href="https://youtube.com/mariyt10" target="_blank" rel="noreferrer"><RiYoutubeLine/></a>
                <a href="https://discord.com/invite/dfKMTx9Eea" target="_blank" rel="noreferrer"><RiDiscordLine/></a>
            </div>
        </footer>
      </>
    );
  }
}

export default Footer;
