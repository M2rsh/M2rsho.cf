import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Main from './pages/main/index'
import NotFound from './pages/404/index'
import './index.css'
import Menu from './components/menu/index'

function getElement(element) {
  return(
    <>
    <Menu />
    <div className="container">
    {element}
    </div>
    </>
  )
}

function WebRoutes() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={getElement(<Main />)} />
          <Route path='*' element={getElement(<NotFound />)} />
        </Routes>
      </BrowserRouter>
    );
}

export default WebRoutes