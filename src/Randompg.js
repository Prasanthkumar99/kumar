import React, { Component, COmponent } from 'react';

class Randompg extends Component{
    constructor(){
        super();
        this.state={
        characters :'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()<>,.?/[]{}-=_+|/0123456789'
    }
}

    render(){
        return(
            <div>
                <h2>PASSWORD GENERATOR</h2>
            </div>
        )
    }
    
}
export default Randompg;