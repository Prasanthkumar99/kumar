import React, {Component} from 'react';

class Users extends Component{
    constructor(){
        super();
        this.state = {
            users:[],
            loading:true,
            error:false
        }

    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(responce=>responce.json())
        .then(users=>{
            this.setState({
            users:users,
            loading:false
            })
        })
        .catch((err)=>{
            this.setState({
                loading:false,
                error:true
            })
        })
    }

    render(){
        if(this.state.loading==true){
            return(
                <React.Fragment>
                <h1>Users</h1>
                <p>Loading..  please wait</p>
                </React.Fragment>
            )
        }

        if(this.state.error==true){
            return(
                <React.Fragment>
                <h1>Users</h1>
                <p>Sorry..  Our server is down. please try later</p>
                </React.Fragment>
            )
        }

        return(
            <div>
                <h1>Users</h1>
                <ul>
                {
                    this.state.users.map((user)=>{
                        return <li key={user.id}>{user.name}</li>
                    })
                }
                </ul>

            </div>
        )
    }
}

export default Users;