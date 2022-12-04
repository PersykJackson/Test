import { FC, useState } from 'react';
import { Shower } from './components/Shower';
import { BrowserRouter, Route } from 'react-router-dom';

export const App: FC = () => {
  const [count, setCount] = useState<number>(0);

  const incrementCount = (): void => {
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      {/*<BrowserRouter>*/}
      {/*  <Route path='/'></Route>*/}
      {/*</BrowserRouter>*/}
      <Shower num={count} />
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}
