import React from 'react'

export class EssayForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value : 'Please write an essay about your favorite DOM element'
        };
    };

    handleChange = (event) => {
        this.setState({value : event.target.value});
    };

    handleSubmit = (event) => {
        alert('An essay was submitted : ' + this.state.value);
        event.preventDefault();
    };

    clearTextArea = () => {
        this.setState({value : ''});
    };

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Essay :
                    <textarea value={this.state.value} onChange={this.handleChange} onFocus={this.clearTextArea} /> 
                </label>
                <input type="submit" value="submit"/>
            </form>
        )
    };
}