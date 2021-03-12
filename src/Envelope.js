import React, { Component } from 'react';
import './Envelope.css';

class Envelope extends Component {
    constructor() {
        super();
    }

    render() {
        return (

            <div className="bg">
                <h4 className="toph4">Mr.Mosely <br /><div className="stamp">STAMP</div>Street:  Silver Apts.,<br /> Shankar Ghanekar Mar, Prabhadevi,<br />
                City:   Mumbai,<br />
                State/province/area:Maharashtra,<br />
                Country  India. 
                </h4><br /><br />
                <h4 className='bottomh4'>Mr.Rude<br />
                96, J.crdcrs(opp.shivajitalkies)blr2,<br />
                Jc Road<br />
                Bangalore <br />   
                Karnataka-560002
                </h4>

            </div>

        )
    }
}

export default Envelope;