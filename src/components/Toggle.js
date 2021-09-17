import React from 'react'
import { WarningBanner } from './WarningBanner';

export class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isToggleOn : true,
            showWarning : true
        };
    }

    handleClick = () => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn,
            showWarning : !prevState.showWarning
          }));
    }

    handleClickWithParameter = (id) => {
        console.log(id);
    }


    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning}/>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                <hr/>
                <button onClick={this.handleClickWithParameter.bind(this, 5)}>
                    Click will you
                </button>
            </div>
        );
    }

}