import React from 'react'
import ReactDOM from 'react-dom'
import WebRoutes from './routes.js'
import { BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(<Router><WebRoutes /></Router>, document.getElementById('root'))
