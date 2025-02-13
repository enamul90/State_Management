import React from 'react';
import  myCounterStore from '../stors/Counter.js';

const Counter = () => {
    let {count, addCount, removeCount,  reset} =  myCounterStore();
    return (
        <div className="container text-center p-4">
            <h1 className="fs-1">{count}</h1>

            <div className="mt-3">
                <button onClick={addCount} className="btn me-2 btn-primary">Add</button>
                <button onClick={removeCount} className="btn me-2 btn-secondary">Remove</button>
                <button onClick={reset} className="btn me-2 btn-dark">Restart</button>
            </div>

        </div>
    );
};

export default Counter;