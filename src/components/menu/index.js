import "./index.css";
import React from "react";
import icon from "../../assets/favicon.svg";
import { CSSTransition } from "react-transition-group";
import HamburgerMenu from "react-hamburger-menu";
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false, onMobile: false };
    this.handleResize = this.handleResize.bind(this);
  }

  handleResize() {
    var { width } = getWindowDimensions();
    if (width <= 600) {
      this.setState({ showMenu: false, onMobile: true });
    } else {
      this.setState({ showMenu: true, onMobile: false });
    }
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize.bind(this));
  }
  nothing() {
    // This function does absolutely nothing.. Maybe except taking too much bytes.. like 119 bytes..
  }
  render() {
    const getTimeout = () => {
      if (!this.state.onMobile) {
        return 0;
      } else {
        return 300;
      }
    };
    const renderMenuButton = () => {
      if (this.state.onMobile) {
        return (
          <>
            <button
              className="button"
              style={{
                width: "50px",
                height: "50px",
                margin: "25px",
                padding: "0px",
                borderRadius: "500px",
                position: "fixed",
                top: '88%',
                left: '100vw',
                marginLeft: '-56vw',
              }}
              onClick={() =>
                this.setState((prevState) => ({
                  showMenu: !prevState.showMenu,
                }))
              }
            >
              <span style={{position: 'relative', left: '12.5px'}}>
                <HamburgerMenu
                  isOpen={this.state.showMenu}
                  menuClicked={this.nothing}
                  width={25}
                  height={20}
                  strokeWidth={1}
                  rotate={0}
                  color="#F5F5F5"
                  borderRadius={50}
                  animationDuration={0.5}
                />
              </span>
            </button>
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
          </>
        );
      } else {
        return;
      }
    };
    return (
      <>
        {renderMenuButton()}
        <CSSTransition
          in={this.state.showMenu}
          timeout={getTimeout()}
          classNames="slide"
          unmountOnExit
          onEnter={() => (document.body.style.overflowY = "hidden")}
          onExited={() => (document.body.style.overflowY = "visible")}
        >
          <div className="menu">
            <span style={{ margin: "10px" }}>
              <p
                style={{
                  textAlign: "center",
                  fontWeight: "normal",
                  fontSize: "24px",
                  color: "#bccca5",
                }}
              >
                <img
                  src={icon}
                  alt="Icon"
                  width={32}
                  height={32}
                  style={{ top: "8px", position: "relative" }}
                />
                &nbsp;M2rsh
              </p>
            </span>
            <div style={{ textAlign: "center" }}>
              <button
                className="button"
                onClick={() => {
                  window.location = "/";
                }}
              >
                Home
              </button>
            </div>
          </div>
        </CSSTransition>
      </>
    );
  }
}

export default Menu;
