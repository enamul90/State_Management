
import './Counter.css';

import {useSelector, useDispatch} from "react-redux"
import {increment, decrement , receiveNumber} from "../../reaux/state/counter/counterSlice"




const Counter = () => {

    const count =   useSelector( (state)=>state.counter.value);
    const dispatch = useDispatch();

    const update = ()=>{
        dispatch(receiveNumber(0))
    }


    return (
        <div className="counter-container">
            <h2 className="counter-title">Counter</h2>
            <div className="counter-row">
                <button className="counter-button decrement" onClick={()=>{dispatch(decrement())}}
                >
                    -
                </button>
                <span className="counter-display">{count}</span>
                <button className="counter-button increment" onClick={()=>{dispatch(increment())}}
                >
                    +
                </button>
            </div>
            
            <button onClick={update}>
                funtion 
            </button>
        </div>
    );
};

export default Counter;