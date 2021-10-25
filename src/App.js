import React, { useState, useEffect } from "react";
import Random from "randomcolor";
import { Howl } from "howler";
import bub from "./sounds/bubbles.mp3";
import clay from "./sounds/clay.mp3";
import conf from "./sounds/confetti.mp3";
import corona from "./sounds/corona.mp3";
import dotted from "./sounds/dotted.mp3";
import flash from "./sounds/flash-1.mp3";
import flash1 from "./sounds/flash-2.mp3";
import flash2 from "./sounds/flash-3.mp3";
import glimmer from "./sounds/glimmer.mp3";
import moon from "./sounds/moon.mp3";
import pinwheel from "./sounds/pin.mp3";
import piston1 from "./sounds/piston-1.mp3";
import piston2 from "./sounds/piston-2.mp3";
import piston3 from "./sounds/piston-3.mp3";
import prism1 from "./sounds/prism-1.mp3";
import prism2 from "./sounds/prism-2.mp3";
import prism3 from "./sounds/prism-3.mp3";
import splits from "./sounds/splits.mp3";
import squiggle from "./sounds/squiggle.mp3";
import strike from "./sounds/strike.mp3";
import suspension from "./sounds/suspension.mp3";
import timer from "./sounds/timer.mp3";
import ufo from "./sounds/ufo.mp3";
import veil from "./sounds/veil.mp3";
import wipe from "./sounds/wipe.mp3";
import zigZag from "./sounds/zig-zag.mp3";


function App() {
  const [colors, setcolor] = useState("");
  let [count, setcount] = useState(0);
  let [animate, setanimate] = useState("");

  const sound1 = new Howl({
    src: [bub],
  });

  const sound2 = new Howl({
    src: [clay],
  });

  const sound3 = new Howl({
    src: [conf],
  });

  const sound4 = new Howl({
    src: [corona],
  });

  const sound5 = new Howl({
    src: [dotted],
  });

  const sound6 = new Howl({
    src: [flash],
  });

  const sound7 = new Howl({
    src: [flash1],
  });

  const sound8 = new Howl({
    src: [flash2],
  });

  const sound9 = new Howl({
    src: [glimmer],
  });

  const sound10 = new Howl({
    src: [moon],
  });

  const sound11 = new Howl({
    src: [pinwheel],
  });

  const sound12 = new Howl({
    src: [piston1],
  });

  const sound13 = new Howl({
    src: [piston2],
  });

  const sound14 = new Howl({
    src: [piston3],
  });

  const sound15 = new Howl({
    src: [prism1],
  });

  const sound16 = new Howl({
    src: [prism2],
  });

  const sound17 = new Howl({
    src: [prism3],
  });

  const sound18 = new Howl({
    src: [splits],
  });

  const sound19 = new Howl({
    src: [squiggle],
  });

  const sound20 = new Howl({
    src: [strike],
  });

  const sound21 = new Howl({
    src: [suspension],
  });

  const sound22 = new Howl({
    src: [timer],
  });

  const sound23 = new Howl({
    src: [ufo],
  });

  const sound24 = new Howl({
    src: [veil],
  });

  const sound25 = new Howl({
    src: [wipe],
  });

  const sound26 = new Howl({
    src: [zigZag],
  });

  useEffect(() => {
    alert("Press any key or click round, A to Z or tap and turn up speakers");
  }, []);

  function changeclick() {
    setcolor(Random());
    setcount((pre) => {
      return pre + 1;
    });

    function Music() {
      if (count === 0) {
        sound1.play();
        setanimate("animate-left");
      }

      if (count === 2) {
        sound2.play();
        setanimate("animate-right");
      }

      if (count === 3) {
        sound3.play();
        setanimate("animate-up");
      }

      if (count === 4) {
        sound4.play();
        setanimate("animate-down");
      }

      if (count === 5) {
        sound5.play();
        setanimate("animate-size");
      }

      if (count === 6) {
        sound6.play();
        setanimate("animate-left");
      }

      if (count === 7) {
        sound7.play();
        setanimate("animate-slide");
      }

      if (count === 8) {
        sound8.play();
        setanimate("animate-slideout");
      }

      if (count === 9) {
        sound9.play();
        setanimate("animate-stretch");
      }

      if (count === 10) {
        sound10.play();
        setanimate("animate-pulse");
      }
      if (count === 11) {
        sound11.play();
        setanimate("animate-left");
      }

      if (count === 12) {
        sound12.play();
        setanimate("animate-right");
      }

      if (count === 13) {
        sound13.play();
        setanimate("animate-up");
      }

      if (count === 14) {
        sound14.play();
        setanimate("animate-down");
      }

      if (count === 15) {
        sound15.play();
        setanimate("animate-size");
      }

      if (count === 16) {
        sound16.play();
        setanimate("animate-down");
      }

      if (count === 17) {
        sound17.play();
        setanimate("animate-slide");
      }

      if (count === 18) {
        sound18.play();
        setanimate("animate-slideout");
      }

      if (count === 19) {
        sound19.play();
        setanimate("animate-stretch");
      }

      if (count === 20) {
        sound20.play();
        setanimate("animate-pulse");
      }

      if (count === 21) {
        sound21.play();
        setanimate("animate-left");
      }

      if (count === 22) {
        sound22.play();
        setanimate("animate-right");
      }

      if (count === 23) {
        sound23.play();
        setanimate("animate-pulse");
      }

      if (count === 24) {
        sound24.play();
        setanimate("animate-up");
      }

      if (count === 25) {
        sound25.play();
        setanimate("animate-down");
      }

      if (count === 26) {
        sound26.play();
        setanimate("animate-size");
      }if(count === 27){
        setcount(0)
      }
    }

    Music();
  }

  function changekey(e) {
    if (e.keyCode === 65) {
      setcolor(Random());
      sound1.play();
      setTimeout(() => {
        setanimate("animate-left");
      }, 1000);
      setanimate("");
    }

    if (e.keyCode === 66) {
      setcolor(Random());
      sound2.play();
      setTimeout(() => {
        setanimate("animate-right");
      }, 1000);
      setanimate("");
    }
    if (e.keyCode === 67) {
      setcolor(Random());
      sound3.play();
      setTimeout(() => {
        setanimate("animate-up");
      }, 1000);
      setanimate("");
    }
    if (e.keyCode === 68) {
      setcolor(Random());
      sound4.play();
      setTimeout(() => {
        setanimate("animate-down");
      }, 1000);

      setanimate("");
    }
    if (e.keyCode === 69) {
      setcolor(Random());
      sound5.play();
      setTimeout(() => {
        setanimate("animate-size");
      }, 1000);
      setanimate("");
    }
    if (e.keyCode === 70) {
      setcolor(Random());
      sound6.play();
      setTimeout(() => {
        setanimate("animate-up");
      }, 1000);
      setanimate("");
    }
    if (e.keyCode === 71) {
      setcolor(Random());
      sound7.play();
      setTimeout(() => {
        setanimate("animate-slide");
      }, 1000);
      setanimate("");
    }
    if (e.keyCode === 72) {
      setcolor(Random());
      sound8.play();
      setTimeout(() => {
        setanimate("animate-slideout");
      }, 1000);
      setanimate("");
    }
    if (e.keyCode === 73) {
      setcolor(Random());
      sound9.play();
      setTimeout(() => {
        setanimate("animate-stretch");
      }, 1000);
      setanimate("");
    }
    if (e.keyCode === 74) {
      setcolor(Random());
      sound10.play();
      setTimeout(() => {
        setanimate("animate-pulse");
      }, 1000);
      setanimate("");
    }
    if (e.keyCode === 75) {
      setcolor(Random());
      sound11.play();
      setTimeout(() => {
        setanimate("animate-down");
      }, 1000);
      setanimate("");
    }
    if (e.keyCode === 76) {
      setcolor(Random());
      sound12.play();
      sound5.play();
      setTimeout(() => {
        setanimate("animate-size");
      }, 1000);
      setanimate("");
    }
    if (e.keyCode === 77) {
      setcolor(Random());
      sound13.play();
      setTimeout(() => {
        setanimate("animate-up");
      }, 1000);
      setanimate("");
    }
    if (e.keyCode === 78) {
      setcolor(Random());
      sound14.play();
      setTimeout(() => {
        setanimate("animate-left");
      }, 1000);
      setanimate("");
    }
    if (e.keyCode === 79) {
      setcolor(Random());
      sound15.play();
      setTimeout(() => {
        setanimate("animate-down");
      }, 1000);

      setanimate("");
    }
    if (e.keyCode === 80) {
      setcolor(Random());
      sound16.play();
      setTimeout(() => {
        setanimate("animate-right");
      }, 1000);
      setanimate("");
    }
    if (e.keyCode === 81) {
      setcolor(Random());
      sound17.play();
      setTimeout(() => {
        setanimate("animate-left");
      }, 1000);
      setanimate("");
    }
    if (e.keyCode === 82) {
      setcolor(Random());
      sound18.play();
      setTimeout(() => {
        setanimate("animate-right");
      }, 1000);
      setanimate("");
    }
    if (e.keyCode === 83) {
      setcolor(Random());
      sound19.play();
      setTimeout(() => {
        setanimate("animate-up");
      }, 1000);
      setanimate("");
    }
    if (e.keyCode === 84) {
      setcolor(Random());
      sound20.play();
      setTimeout(() => {
        setanimate("animate-down");
      }, 1000);

      setanimate("");
    }
    if (e.keyCode === 85) {
      setcolor(Random());
      sound21.play();
      setTimeout(() => {
        setanimate("animate-size");
      }, 1000);
      setanimate("");
    }
    if (e.keyCode === 86) {
      setcolor(Random());
      sound22.play();
      setTimeout(() => {
        setanimate("animate-left");
      }, 1000);
      setanimate("");
    }
    if (e.keyCode === 87) {
      setcolor(Random());
      sound23.play();
      setTimeout(() => {
        setanimate("animate-slide");
      }, 1000);
      setanimate("");
    }
    if (e.keyCode === 88) {
      setcolor(Random());
      sound24.play();
      setTimeout(() => {
        setanimate("animate-slideout");
      }, 1000);
      setanimate("");
    }
    if (e.keyCode === 89) {
      setcolor(Random());
      sound25.play();
      setTimeout(() => {
        setanimate("animate-pulse");
      }, 1000);
      setanimate("");
    }
    if (e.keyCode === 90) {
      setcolor(Random());
      sound26.play();
      setTimeout(() => {
        setanimate("animate-left");
      }, 1000);
      setanimate("");
    }
  }

  return (
    <div onKeyDown={changekey} tabIndex={0} className="parent">
      <div
        style={{ backgroundColor: colors }}
        onClick={changeclick}
         id="round"
         className={animate}
      ></div>
    </div>
  );
}

export default App;
