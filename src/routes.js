import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Menu from "./components/menu/index";
import Footer from "./components/footer/index";

import Main from "./pages/main/index";
import About from "./pages/about/index";
import NotFound from "./pages/404/index";

import "./index.sass";

function getElement(element) {
  return (
    <>
      <Menu />
      <motion.div
        initial={{
          transform: "translateX(100%)",
          opacity: 0,
        }}
        animate={{ 
          transform: "translateX(0%)",
          opacity: 1 ,
          transition: { 
            delay: 1,
            duration: 2
          }
        }}
        exit={{ 
          transform: "translateX(-100%)",
          opacity: 0 
        }}
        transition={{ delay: 0.2, duration: 2 }}
      >
        <div className="container">{element}</div>
      </motion.div>
      <Footer />
    </>
  );
}

const WebRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={getElement(<Main />)} />
        <Route path="/about" element={getElement(<About />)} />
        <Route path="*" element={getElement(<NotFound />)} />
      </Routes>
    </AnimatePresence>
  );
};

export default WebRoutes;
