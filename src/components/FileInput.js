import React from 'react'

export class FileInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fileContent : ''
        };
    };

    handleChange = (event) => {
        console.log(event.target.files[0]);
        
    }

    render(){
        return(
            <form>
                <label>Choose a file : </label>
                <input type="file" onChange={this.handleChange}/>
                <input type="submit" value="submit"/>
            </form>
        )
    }
}