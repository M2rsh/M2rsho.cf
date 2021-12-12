import "./index.css";
import React from "react";
import { CSSTransition } from "react-transition-group";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false };
  }
  render() {
    return (
      <>
        <CSSTransition
          in={this.state.showMenu}
          timeout={300}
          classNames="slide"
          unmountOnExit
        >
          <div className="menu">Menu</div>
        </CSSTransition>
        <CSSTransition
          in={true}
          timeout={300}
          classNames="slideButton"
          unmountOnExit
          onEnter={() => this.setState({ showMenu: true })}
          onExited={() => this.setState({ showMenu: false })}
        >
          <div className="menuButtonDiv">
            <button
              className="button"
              style={{
                minWidth: "4vw",
                minHeight: "4vh",
                float: "left",
                margin: "25px",
              }}
              onClick={() =>
                this.setState((prevState) => ({
                  showMenu: !prevState.showMenu,
                }))
              }
            >
              Open Menu
            </button>
          </div>
        </CSSTransition>

        <CSSTransition
          in={this.state.showMenu}
          timeout={300}
          classNames="fade"
          unmountOnExit
          onEnter={() => (document.body.style.overflowY = "hidden")}
          onExited={() => (document.body.style.overflowY = "visible")}
        >
          <div
            id="overlay"
            onClick={() => this.setState({ showMenu: false })}
          ></div>
        </CSSTransition>
        <header>
          <div className="header">Header</div>
          <hr className="hr" />
        </header>
      </>
    );
  }
}

export default Menu;
