import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from './Pages/App'
import './index.css'

function WebRoutes() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    );
}

export default WebRoutes