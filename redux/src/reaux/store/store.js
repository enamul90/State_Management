import {configureStore} from "@reduxjs/toolkit"

import counter from  "../state/counter/counterSlice.js"

export default configureStore (
    {
        reducer:{

            counter : counter

        }
    }
)
