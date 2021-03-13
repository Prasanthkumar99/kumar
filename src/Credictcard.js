import React, {Component} from 'react';
import './Credictcard.css';

class Credictcard extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="arif">
            <div className='bg' > 
                <h2>HDFC BANK, Cr <span className="gap">platinum</span></h2><br/>
                <h3>7869 3241 7777 9809</h3>
               <pre><span className="valid"  > VALID<br/> THRU  </span>      04/2024 </pre>
               <h3>David Williams</h3>
             
            </div>
            </div>
        )
    }
}

export default Credictcard;