import logo from './image/25231.png';
import './App.css';
import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
function App() {

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");


  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "yellow",
      mixBlendMode: "difference"
    }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div onMouseLeave={textEnter} className="App">
      <div>
        <motion.div
          className='cursor'
          variants={variants}
          animate={cursorVariant}
        />
        <header className="App-header">
          <div onMouseEnter={textEnter} onMouseLeave={textLeave} className="Text">
            <div className="r"><span><i></i>H</span></div>
            <div className="r"><span><i></i>E</span></div>
            <div className="r"><span><i></i>L</span></div>
            <div className="r"><span><i></i>L</span></div>
            <div className="r"><span><i></i>O</span></div>
          </div>
          <div className="space"></div>
          <div onMouseEnter={textEnter} onMouseLeave={textLeave} className="Text">
            <div className="r"><span><i></i>W</span></div>
            <div className="r"><span><i></i>O</span></div>
            <div className="r"><span><i></i>R</span></div>
            <div className="r"><span><i></i>L</span></div>
            <div className="r"><span><i></i>D</span></div>
          </div>
        </header>
        <div className="infor">
          <div onMouseEnter={textEnter} onMouseLeave={textLeave} className="logogithub">
            <img src={logo} alt={logo}/>
          </div>
          <a onMouseEnter={textEnter} onMouseLeave={textLeave} href="https://github.com/minhtri2908" target="blank" className="coder" >Pham Minh Tri</a>
        </div>
      </div>
    </div>
  );
}

export default App;
