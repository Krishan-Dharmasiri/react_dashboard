import React from 'react'

export class NumberList extends React.Component{
    render(){
        const numberListItems = this.props.numberList.map((number) => 
            <li id={number.toString()} key={number.toString()}>{number}</li>
        );

        return(
            <ul>{numberListItems}</ul>            
        );
    }
}