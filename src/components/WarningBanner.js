import React from 'react'

export class  WarningBanner extends React.Component{
    
    render(){
        if(!this.props.warn){
            return null;
        }

        return(
            <div className="warning">
                Warning!
            </div>
        );
    }
}