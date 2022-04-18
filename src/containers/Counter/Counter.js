import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

const Counter = () => {

    const counterState = useSelector((state) => state.counter);
    const resultsState = useSelector((state) => state.results);
    const dispatch = useDispatch();
    return (

        <div>
            <CounterOutput value={counterState} />
            <CounterControl label="Increment" clicked={() => dispatch({ type: "INCREMENT_COUNTER" })} />
            <CounterControl label="Decrement" clicked={() => dispatch({ type: "SUB_COUNTER" })} />
            <CounterControl label="Add 5" clicked={() => dispatch({ type: "ADD_COUNTER", payload: 5 })} />
            <CounterControl label="Subtract 5" clicked={() => dispatch({ type: "SUB_FIVE", payload: 5 })} />

            <CounterControl label="Add result" clicked={() => dispatch({ type: "SAVE-RESULTS" })} />
            <h2>Results</h2>
            <ul>
                {resultsState.map(result => (
                    <li className='d-flex' key={result.id}>
                        <h3>{result.value}</h3>
                        <div> <CounterControl label="Delete" clicked={() => dispatch({ type: "DELETE_NUM", payload: result.id })} /></div>

                    </li>
                ))}
            </ul>

        </div>



    );
}

export default Counter;