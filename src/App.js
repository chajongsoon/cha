import { useState } from 'react';

import Button from './button';

function App() {
  const [number, setNumber] = useState(1);

  const onIncrease = () => {
    setNumber(number + 1); 
  }

  return (
    <div>
      <Button type= ''onClick={onIncrease} />
      <div>{number}</div>
      <Button onClick={onIncrease} />

    </div>
  );
}

export default App;
