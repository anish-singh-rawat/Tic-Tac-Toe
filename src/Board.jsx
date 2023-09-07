import React, {useState} from 'react'
import Squre from './Squre'
import './Tic.css'

const Board = ()=> {

    let [state, setstate] = useState(Array(9).fill(null)); 
    const [isTurn, setisTurn] = useState(true);

    const heandleClick = (index)=>{
        const copyState = [...state];
        copyState[index] = isTurn ? 'X' : '0';
        setstate(copyState);
        setisTurn(!isTurn)
    };

    const CheckWinner = ()=>{
      const winnerlogic =   [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,4,8],
            [2,4,6],
            [0,3,6],
            [1,4,7],
            [2,5,8]
        ];
        
        for(let logic of winnerlogic){
            let [a,b,c] = logic;
            if(state[a] === state[b] && state[a] === state[c]){
                return state[a]
            }
        }
            return false;
           
    };
    const iswinner = CheckWinner();

    
    const playagain = ()=>{
     setstate(Array(9).fill(null)); 
    }
  
  return (
    <div className="container" >
        {iswinner  ? ( <h2> {iswinner} is winner <button onClick={playagain}> play again</button> </h2> ) : (
            <>
        <div className="board-row">
              <Squre onClick={()=>heandleClick(0)} value={state[0]} />
              <Squre onClick={()=>heandleClick(1)} value={state[1]} />
              <Squre onClick={()=>heandleClick(2)} value={state[2]} />
        </div>
        <div className="board-row">
               <Squre onClick={()=>heandleClick(3)} value={state[3]} />
               <Squre onClick={()=>heandleClick(4)} value={state[4]} />
               <Squre onClick={()=>heandleClick(5)} value={state[5]} />
        </div>
        <div className="board-row">
              <Squre onClick={()=>heandleClick(6)} value={state[6]} />
              <Squre onClick={()=>heandleClick(7)} value={state[7]} />
              <Squre onClick={()=>heandleClick(8)} value={state[8]} />
        </div>
        {
            iswinner == null ? playagain : null
        }
        </>
   )}
    </div>
  );
};
export default Board;