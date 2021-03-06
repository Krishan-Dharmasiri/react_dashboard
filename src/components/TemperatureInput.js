import React from 'react'
import { BoilingVerdict } from './BoilingVerdict';

const scaleNames = {
    c : 'Celcius',
    f : 'Fahrenheit'
};

export class TemperatureInput extends React.Component{
    constructor(props){
        super(props);
    };

    handleChange = (e) => {
        //Before : this.setState({temperature : e.target.value});
        this.props.onTemperatureChange(e.target.value);
    }

    render(){
        // Before : const temperature = this.state.temperature;
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}</legend>
                <input value={temperature} onChange={this.handleChange}/>                
            </fieldset>
        )
    };
}