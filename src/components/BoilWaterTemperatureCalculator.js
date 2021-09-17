import React from 'react'
import { BoilingVerdict } from './BoilingVerdict';
import { TemperatureInput } from './TemperatureInput';

export class TemperatureCalculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            temperature : '',
            scale : 'c'
        };
    };

    handleCelciusChange = (temperature) => {
        this.setState({scale:'c', temperature : temperature});
    };

    handleFahrenheitChange = (temperature) => {
        this.setState({scale:'f', temperature : temperature});
    };

    render(){
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature,toCelsius) : temperature;
        const fahrentheight = scale === 'c' ? tryConvert(temperature,toFahrenheit) : temperature;

        return(
            <div>
                <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelciusChange}/>
                <TemperatureInput scale="f" temperature={fahrentheight} onTemperatureChange={this.handleFahrenheitChange}/>
                <BoilingVerdict celcius={celsius}/>
            </div>
        )
    };
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
  
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}