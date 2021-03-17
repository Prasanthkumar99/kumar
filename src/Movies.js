import React, { Component } from 'react';
import './Movies.css'
class Movies extends Component{
    constructor(){
        super();
         this.state={
             movies:[],
             title:'',
             rating:''
         }
        }componentDidMount(){
            fetch('https://gist.githubusercontent.com/yannski/3019778/raw/dfb34d018165f47b61b3bf089358a3d5ca199d96/movies.json')
            .then(response=>response.json())
            .then(movies=>{
                this.setState({
                    movies:movies,
                    title:this.state.title,
                    rating:this.state.rating,
                })
            })
    }render(){
        return(
            <div>
            <h1 className="h1">Movies</h1>
           <table className="tbl">
           <tr>
               <th>Title</th>
               <th>Rating</th>
           </tr>
               {
                   this.state.movies.map((movies)=>{
                       return (
                       <tr>
                          <td key={movies.id}>{movies.title}</td>
                       <td key={movies.id}>{movies.rating}
                       </td>
                       </tr>
                       )
                   })
               }
</table> 
            </div>
        )
    }
}
export default Movies;
