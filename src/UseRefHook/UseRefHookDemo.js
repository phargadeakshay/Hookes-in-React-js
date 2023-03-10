import { useRef, useEffect, useState } from 'react';

const UseRefHookDemo = () => {
  const [showComponent, setShowComponent] = useState(false);
  const countRef = useRef(0);

  useEffect(() => {
    if (countRef.current >= 5) {
      setShowComponent(true);
    }
  }, [countRef]);

  const handleButtonClick = () => {
    countRef.current += 1;
  }

  return (
    <div>
      <button onClick={handleButtonClick}>Click me</button>
      {showComponent && <div>This component only renders after 5 clicks</div>}
    </div>
  );
}

export default UseRefHookDemo