import React from 'react'

export class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value:'Type name here'
        }
    }

    handleChange = (event) => {
        this.setState({value : event.target.value});
    }

    handleSubmit = (event) => {
        alert('A name was submitted : ' + this.state.value);
        event.preventDefault();
    }

    clearNameInput = () =>{
        this.setState({value : ''});
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name : 
                    <input type="text" value={this.state.value} onChange={this.handleChange} onFocus={this.clearNameInput}/>
                </label>
                <input type="submit" value="submit" />
            </form>
        )
    }
}