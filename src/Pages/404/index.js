import "./index.css";
import React from "react";

class NotFound extends React.Component {
  redirect() {
    return (window.location = "/");
  }
  render() {
    return (
      <div className="Container404">
        <div className="filter" style={{
          borderRadius: '15px',
          padding: '25px',
          textAlign: 'center'
        }}>
        <h1>Error <span style={{fontWeight: "400"}}>404</span></h1>
        <button className="button"
          style={{
            minWidth: "12vw",
            minHeight: "4vh",
          }}
          onClick={this.redirect}
        >
          Go Back
        </button>
        </div>
      </div>
    );
  }
}

export default NotFound;