import "./index.sass";
import React from "react";
import { Link } from 'react-router-dom';

class NotFound extends React.Component {
  redirect() {
    return (window.location = "/");
  }
  render() {
    return (
      <div className="Container404">
        <div style={{ top: "-100px", position: "relative" }}>
          <div
            className="filter"
            style={{
              borderRadius: "15px",
              padding: "25px",
              textAlign: "center",
            }}
          >
            <h1>
              Error <span style={{ fontWeight: "400" }}>404</span>
            </h1>
            <Link to="/">
              <button
                className="button"
                style={{
                  minWidth: "12vw",
                  minHeight: "4vh",
                }}
                onClick={this.redirect}
              >
                Go Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
