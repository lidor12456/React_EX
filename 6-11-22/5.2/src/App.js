import logo from './logo.svg';
import './App.css';
import Card  from './components/Card.js';



function App() {

  return (
     <div>
        <Card myClass={"card"} imageLink={"https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg?w=200"} title={"Hello"} description={"some interesting description"}/>
        <Card myClass={"card"} imageLink={"https://img.freepik.com/free-photo/grunge-paint-background_1409-1333.jpg?w=200"} title={"Bye Bye"} description={"some not interesting description"}/>
     </div>
  )
}


export default App;
