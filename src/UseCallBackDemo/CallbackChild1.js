import React, { memo } from 'react'

const CallbackChild1 = ({todoData,toDoFunc}) => {
    console.log("chaild CallbackChild")
  return (
    <div>
        {todoData && todoData.map((item,ind)=>{
          return  <p key={ind}>{item+ind}</p>
        })}
        <br/>
    <button onClick={toDoFunc}>Add toDo</button>
    </div>
  )
}

export default memo(CallbackChild1)   //HOC  higher Order Component privent re-rendering
// export default CallbackChild1