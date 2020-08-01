import React from "react";
import { browserHistory } from "react-router";
import axios from 'axios';

export class User extends React.Component {
    constructor(props) { 
      super(props) 
      this.state = { 
      users: [{'user': 'MAriaAdam', 'job': 'Global Security'}, {'user': 'Ramya', 'job': 'Support Engineer'}, {'user': 'Edisom', 'job': 'Technical Advisor'}] 
      } 
    } 
    componentDidMount() { 
//      axios.get('https://v-edcaropythonfastapi.azurewebsites.net/users').then(
//    axios.get().then(
//        res => { 
//        const users = res.data; 
        const users = [{'user': 'MAriaAdam', 'job': 'Global Security'}, {'user': 'Ramya', 'job': 'Support Engineer'}, {'user': 'Edison', 'job': 'Technical Advisor'}]    
        this.setState({ users }); 
//      });
    }

    onNavigateHome() {
        browserHistory.push("/home");
    }
    render() {
        return (
            <div className="App"> 
                <h3>The User Page</h3>
                <p>User ID: {this.props.params.id}</p>
	        	<p>{this.state.users.map(user => <li>{user.user} - {user.job}</li>)}</p>

                <button onClick={this.onNavigateHome} className="btn btn-primary">Go Home!</button>
            </div>
        );
    }
}