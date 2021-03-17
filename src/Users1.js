import React, {Component} from 'react';

class Users1 extends Component{
    constructor(){
        super();
            this.state={
                users:[],// To store uesrs list (to store the array of data )
            }
    }

    componentDidMount(){ // calling of API is better componentDidMount and this will fire after render finish
          fetch('')                 // call the backend by using fetch function
          .then(response=>response.json())                     /* if in case any successful url comes to .then block, and .then will gives you responce object but we only want certain or body of the responce which is done by using json method  */
          .then(users=>{})
          

    render(){
        return(
            <React.Fragment>
                <h1>Users</h1>

            </React.Fragment>
        )
    }
}

export default Users;