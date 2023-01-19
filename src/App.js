import "./App.css";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import SwipeReact from 'swipe-react';
import amity from './image/amity-no-bg.png'
function App() {
  const [isFlip, setIsFlip] = useState(false);
  function handleClick() {
    setIsFlip(!isFlip);
  }
  const cardStyle = {
    front: { background: "#02845f", width: "360px", height: "250px", borderRadius: '20px' , border:'1px solid #008e66', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'},
    back: { background: "#c7f9ea", width: "360px", height: "250px",  borderRadius: '20px',border:'1px solid #008e66',boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' },
  };
  SwipeReact.config({
    left: () => {
      handleClick()
      console.log('Swipe left detected.');
    },
    right: () => {
      handleClick()
      console.log('Swipe right detected.');
    },
  
  });

  return (
    <div className="App">
      <div {...SwipeReact.events}  className="card-wrapper" onClick={handleClick}>
      <ReactCardFlip
        cardStyles={cardStyle}
        isFlipped={isFlip}
        flipDirection="horizontal"
      >
        <div className="front-card" >
          <div>
          This is the front of the card.
          </div>
          <div>
            name: Top Thanaphon
          </div>
        
        </div>

        <div className="back-card">
        <img alt='logo' src={amity}/>
        </div>
      </ReactCardFlip>
      </div>
    </div>
  );
}

export default App;
