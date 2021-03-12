import React, { Component } from 'react';



class Iframe extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div>
                <iframe src="https://www.bestrandoms.com/random-address-in-in" height="500px" width="1000px" title="Iframe Example">
       
                </iframe>
        
            </div>
        )
    }
}

export default Iframe;