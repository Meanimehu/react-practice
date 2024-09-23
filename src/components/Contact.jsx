import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addTodo, listProducts} from '../redux/reducer/addTodo'

const Contact = () => {
  const dispatch = useDispatch()
  const {count, result} = useSelector((state) => state.todo)
  
  console.log(count, result);

  const handleClick= () => {
    dispatch(addTodo());
    
  }

  useEffect(() => {
    dispatch(listProducts())
  },[dispatch])

  return (
    <div>
      <div>{count}</div>
      <button onClick={handleClick}>plus</button>
    </div>
  )
}

export default Contact