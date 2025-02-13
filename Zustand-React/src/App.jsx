import React from 'react';
import Counter from "./components/Counter.jsx";
import Brand from "./components/Brand.jsx";
import InputData from "./components/InputData.jsx";

const App = () => {
    return (
            <div>
                <Counter />
                <Brand />

                <InputData />
            </div>
    );
};

export default App;