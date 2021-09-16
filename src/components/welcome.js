import React from 'react'

export class Welcome extends React.Component{
    render(){
        return <p>How are you, {this.props.user.name} from {this.props.user.country} 
         who lives in {this.props.user.city}</p>
    }
}

