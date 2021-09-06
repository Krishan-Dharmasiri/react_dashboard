import './App.css';

import {Welcome} from  './components/welcome';
import { Clock } from './components/clock';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Welcome name="Sarah" />
        
        <Clock />
        
      </header>
    </div>
  );
}

export default App;
