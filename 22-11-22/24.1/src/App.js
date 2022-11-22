import { useCounter } from "./hooks/useCounter";

//* Custom Hooks?

function App() {
  const { counter, add, remove, double, divide } = useCounter(0);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={add}>add</button>
      <button onClick={remove}>remove</button>
      <button onClick={double}>double</button>
      <button onClick={divide}>divide</button>
    </div>
  );
}
export default App;
