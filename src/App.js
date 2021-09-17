import './App.css';

import { Welcome } from  './components/welcome';
import { Clock } from './components/clock';
import { Toggle } from './components/Toggle';
import { NumberList } from './components/NumberList';
import { NameForm } from './components/NameForm';
import { EssayForm } from './components/EssayForm';
import { FlavorsForm } from './components/FlavorForm';
import { MultiFlavorsForm } from './components/MultiFlavorForm';
import { FileInput } from './components/FileInput';
import { TemperatureCalculator } from './components/BoilWaterTemperatureCalculator';


function App() {

  let userData = {
    name : "Saraha",
    country : "Australia",
    city:"Melbourne"
  };

  const numbersArray = [1,2,3,4,5]; 

  return (
    <div className="App">
      <header className="App-header">
        
        <TemperatureCalculator/>


      </header>
    </div>
  );
}

export default App;
