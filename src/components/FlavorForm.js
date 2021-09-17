import React from 'react'

export class FlavorsForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value : 'coconut'
        };
    };

    handleChange = (event) => {
        this.setState({value : event.target.value});
    };

    handleSubmit = (event) => {
        alert('Your fav flavor is : ' + this.state.value);
        event.preventDefault();
    };

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your fav flavor : 
                    <select value={this.state.value} onChange={this.handleChange}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    };
}