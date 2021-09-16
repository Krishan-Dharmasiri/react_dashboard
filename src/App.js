import './App.css';

import {Welcome} from  './components/welcome';
import { Clock } from './components/clock';
import { Toggle } from './components/Toggle';


function App() {

  let userData = {
    name : "Saraha",
    country : "Australia",
    city:"Melbourne"
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <Welcome user={userData} />
        
        <Clock />
        
        <Toggle></Toggle>
      </header>
    </div>
  );
}

export default App;
