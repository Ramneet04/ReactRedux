import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increament, reset } from '../redux/slices/CounterSlice';
const Counter = () => {
    const count = useSelector((state) => {return state.Counter.value});
    const dispatch = useDispatch();
  return (
    <div>
        <button onClick={()=> {return dispatch(increament())}}>Increment</button>
        <div>{count}</div>
        <button onClick={()=> {return dispatch(decrement())}}>Decrement</button>
        <button onClick={()=> {return dispatch(reset())}}>Reset</button>
    </div>
  )
}

export default Counter