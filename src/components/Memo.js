import React, { useMemo, useState } from 'react'

const Memo = () => {

    const[data, setData] = useState(0)
    const[datatwo, setDatatwo] = useState(1)

    const memoizedvalues = useMemo(()=>{
        return data
    },[data])
    console.log(memoizedvalues)
  return (
    <div>
        <button onClick={()=>{setData(data + 1)}}>save {data}</button>
        <button onClick={()=>{setDatatwo(datatwo + 2)}}>save {datatwo}</button> 
    </div>
  )
}

export default Memo