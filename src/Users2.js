import React, {useState,useEffect} from 'react';

const Users2=()=>{
    const [users, setUsers] = useState([]);     // create or need a state variable to store the list of users from data base, for storing purpose initilize with empty array
    const [Loading,setLoading] = useState(false);
    const [error, seterror] = useState(false)
    // componentDidMount
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json()) // for fetching the data from the backend from the backend
        .then(users=>{
            setUsers(users)
            setLoading(false)
        })
        .catch((err)=>{
            setError(true)
            setLoading(false)
        })
    },[])

    // componentWillReceiveProps
    useEffect(()=>{
        setUsers(props.users); 
    },[props])

    useEffect(()=>{
        
    },[loading])

    if(loading==true){
        return(
        <div>
            <h1>Users</h1>
            <p>Loading.. Please wait </p>
             <ul>                                      {/* display the array of data inside the jsx we use the map function   */}
                {
                    users.map((user)=>{
                        return <li key={user.id}>{user.name}</li>
                    })
                }
            </ul>
        </div>
    )
}
}
export default Users2;
