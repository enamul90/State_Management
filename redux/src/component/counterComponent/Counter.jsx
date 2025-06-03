import { useState } from 'react';
import './Counter.css';



const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <div className="counter-container">
            <h2 className="counter-title">Counter</h2>
            <div className="counter-row">
                <button className="counter-button decrement" onClick={decrement}>
                    -
                </button>
                <span className="counter-display">{count}</span>
                <button className="counter-button increment" onClick={increment}>
                    +
                </button>
            </div>
            <div className="counter-reset">
                <button className="counter-button reset" onClick={reset}>
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Counter;