import React from 'react'

export class MultiFlavorsForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value : ['coconut', 'lime']
        };
    };

    handleChange = (event) => {
        console.log(event.target.value);
        
        
    };

    handleClick = (event) => {
        const valueArr = [];
        valueArr.push(event.target.value);
        console.log(valueArr);
    }

    handleSubmit = (event) => {
        alert('Your fav flavor is : ' + this.state.value);
        event.preventDefault();
    };

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your fav flavor : 
                    <select multiple={true} value={this.state.value} >
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