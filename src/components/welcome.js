import React from 'react'

export class Welcome extends React.Component{
    render(){
        return <p>How are you, {this.props.name}</p>
    }
}

