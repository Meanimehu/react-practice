import React, { useEffect } from 'react'

const User = ({name}) => {

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("run useEfect Intervel");
        },1000)

        return ()=> {
            clearInterval(timer);
        }
    },[])
  return (
    <div>my name is {name}</div>
  )
}

export default User