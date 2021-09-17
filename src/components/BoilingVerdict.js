import React from 'react'

export class BoilingVerdict extends React.Component{
    render(){
        if(this.props.celcius >= 100)
        {
            return <p>Water would boil</p>
        }
        else
        {
            return <p>Water would not boil</p>
        }
    };
}