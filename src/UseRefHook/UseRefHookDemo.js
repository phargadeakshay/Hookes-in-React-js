import React, { useRef } from 'react'

const UseRefHookDemo = () => {
     const inputValueRef = useRef(null)
     const handleClickFuc = () => {
        const value = inputValueRef.current.value.replace(/\d/g, '');
        inputValueRef.current.value = value;
      };
      
  return (
    <div>
    <div>
        <input type="text" ref={inputValueRef} onChange={handleClickFuc}/>
        <div ></div>
        <button onClick={ handleClickFuc}>Click Button</button>
    </div>
    </div>
  )
}

export default UseRefHookDemo