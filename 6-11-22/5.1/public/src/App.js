import logo from './logo.svg';
import './App.css';
import Button  from './components/Button.js';



function App() {

  return (
     <div>
      <Button className="important" style={{fontWeight : "bold"}}/>
      <Button className="not important"/>
     </div>
  )
}


export default App;
