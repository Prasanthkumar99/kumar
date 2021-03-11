import React, { Component } from 'react';
import './StylingAccount.css'

class Account extends Component{
    constructor(){
        super();

        this.state={
            amount:20000
        }
    }
withdraw=()=>{
 
    this.setState({
        amount:this.state.amount-1000
       
        
    },()=>{
        if(this.state.amount==3000){
            alert("minimum balance reached")
            this.setState({
                disabled:true
            })
        }
    })
}
    

//  handleCheckAmount=(type)=>{
//      if(type==="WithDarw"){
//         this.setState({
//             amount:this.state.amount-1000  
//         },()=>{
//             if(this.state.amount==3000){
//                 alert("Reached Minimum Balance")
//                 this.setState({
//                     disabled:true
            
//                 })
//             }
//         })
//         // alert("Minimum Balance reached")
//      }
//      else{
//         this.setState({
//             amount:this.state.amount+1000,
//             disabled:false
        
//         })
//      }
//     console.log("GGG",(type))
// }

deposit=()=>{
    this.setState({
        amount:this.state.amount+1000,
        disabled:false
    
    })
}
   
   render(){
       return(
           <div className="container">

<h1>My account</h1>
<p>Minimum balance: ₹3000</p>

<h3>₹{this.state.amount}</h3>

<button className="btn btn-dashed1" onClick={this.withdraw} disabled={this.state.disabled}>Withdraw₹1000</button>
<button className="btn btn-dashed2" onClick={this.deposit} >Deposit₹1000</button>

           </div>    
           
       )
   }

}
   export default Account;


   
