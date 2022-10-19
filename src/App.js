import './App.css';
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
// import ReactAudioPlayer from 'react-audio-player';

function App() {
  const audioRef = useRef();
  const [duration, setDuration] = useState(0);
  const [isPlay, setPlay] = useState(false);
  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
    if (isPlay) audioRef.current.play();
  };

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
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
      backgroundColor: 'yellow',
      mixBlendMode: 'difference',
    },
  };

  const textEnter = () => setCursorVariant('text');
  const textLeave = () => setCursorVariant('default');

  return (
    <div onMouseLeave={textEnter} className="App">
      <div>
        <motion.div
          className="cursor"
          variants={variants}
          animate={cursorVariant}
        />
        <header className="App-header">
          <div
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="Text"
          >
            <div className="r">
              <span>
                <i></i>H
              </span>
            </div>
            <div className="r">
              <span>
                <i></i>A
              </span>
            </div>
            <div className="r">
              <span>
                <i></i>P
              </span>
            </div>
            <div className="r">
              <span>
                <i></i>P
              </span>
            </div>
            <div className="r">
              <span>
                <i></i>Y
              </span>
            </div>
          </div>
          <div className="space"></div>
          <div
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="Text"
          >
            <div className="r">
              <span>
                <i></i>B
              </span>
            </div>
            <div className="r">
              <span>
                <i></i>I
              </span>
            </div>
            <div className="r">
              <span>
                <i></i>R
              </span>
            </div>
            <div className="r">
              <span>
                <i></i>T
              </span>
            </div>
            <div className="r">
              <span>
                <i></i>H
              </span>
            </div>
            <div className="r">
              <span>
                <i></i>D
              </span>
            </div>
            <div className="r">
              <span>
                <i></i>A
              </span>
            </div>
            <div className="r">
              <span>
                <i></i>Y
              </span>
            </div>
          </div>
          <div className="space"></div>
          <div
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="Text"
          >
            <div className="r">
              <span>
                <i></i>T
              </span>
            </div>
            <div className="r">
              <span>
                <i></i>r
              </span>
            </div>
            <div className="r">
              <span>
                <i></i>à
              </span>
            </div>
            <div className="space"></div>
            <div className="r">
              <span>
                <i></i>G
              </span>
            </div>
            <div className="r">
              <span>
                <i></i>i
              </span>
            </div>
            <div className="r">
              <span>
                <i></i>a
              </span>
            </div>
            <div className="r">
              <span>
                <i></i>n
              </span>
            </div>
            <div className="r">
              <span>
                <i></i>g
              </span>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
