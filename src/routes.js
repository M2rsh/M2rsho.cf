import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Main from './pages/main/index'
import NotFound from './pages/404/index'
import './index.css'

function WebRoutes() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
}

export default WebRoutes