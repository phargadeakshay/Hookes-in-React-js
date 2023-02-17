import { useState,useCallback } from "react";
import CallbackChild1 from "./CallbackChild1";


function UseCallBackDemo1() {
  const [count, setCount] = useState(0);
  const [todoData, settodoData] = useState([]);

  const handleClick = () => {
    setCount(count + 1);
  };

//   const toDoFunc = () => {
//     settodoData([...todoData, "new Entry"]);
//   };

  const toDoFunc = useCallback(() => {
    settodoData([...todoData, "new Entry"]);
  }, [todoData]);

  return (
    <div>
      <div>
        <p>Count: {count}</p>
        <button onClick={handleClick}>Increment</button>
      </div>
      <CallbackChild1 todoData={todoData} toDoFunc={toDoFunc} />
    </div>
  );
}
export default UseCallBackDemo1;
