import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


class UsersList extends Component{

    constructor(props){
        super(props);
        this.state = {
            userslist: [],
            isLoaded:false,
        }
    }


    componentDidMount(){
        fetch('https://reqres.in/api/users?page=1')
        .then(response=>response.json())
        .then(data=>{
            console.log(data.data);
          this.setState({
            isLoaded:true,
            userslist:data.data,
          })
        });
      }


    render(){

        var{isLoaded,userslist}=this.state;

        function userProfile(val){
            return(
               
                    <tr key={val.id}>
                      <td><img src={val.avatar} alt={val.first_name}></img></td>
                      <td>{val.email}</td>
                       <td>{val.last_name}, {val.first_name}</td>
                       <td><Link to={`/${val.id}`}>
                                View User
                            </Link></td>
                    </tr>
            );
        }

        if(!isLoaded && !userslist){
            return <div>Loading...</div>;
          }

        else{
            return (
                <>
                    <div className="main">
                        <table className="table-auto">
                            <thead>
                                <tr>
                                <th></th>
                                <th>Email</th>
                                <th>Name</th>
                                <th>Profile</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userslist.map(userProfile)}  
                                
                            </tbody>
                        </table>
                         
                    </div>
                </>
            )
        }

    }
    
}

export default UsersList;