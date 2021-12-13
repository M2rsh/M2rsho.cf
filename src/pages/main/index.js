import React from "react";
import "./index.css";
import Menu from '../../components/menu/index'

class Main extends React.Component {
  render() {
    return (
      <>
      <Menu/>
      <div className="App">
        <h1>Coming Soon...<span style={{fontSize: "0px"}}>Daddy</span></h1>
      </div>
      </>
    );
  }
}

export default Main;
