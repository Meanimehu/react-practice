import React from 'react'
import { useParams } from 'react-router-dom'

const Dynamicpage = () => {

    const {id} = useParams()
    // {id:1234, work:098}
    console.log(id)

  return (
    <div>this is Dynamicpage with the value of {id}</div>
  )
}

export default Dynamicpage