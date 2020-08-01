import React from 'react'; 
import logo from './logo.svg'; 
import './App.css'; 
import axios from 'axios'; 
 
export default class App extends React.Component {   
    constructor(props) {     
        super(props)     
        this.state = users: [{'user': 'MAriaAdam', 'job': 'Global Security'}, {'user': 'Ramya', 'job': 'Support Engineer'}, {'user': 'Edisom', 'job': 'Technical Advisor'}]    
            }   
        }   
        componentDidMount() {     
            axios.get('http://localhost:3000/users').then(       
                res => {         
                    const users = res.data;         
                    this.setState({ users });       
                });  
             }   
             render() {     
                return (       
                    <div className="App">         
                        <header className="App-header">           
                          <img src={logo} className="App-logo" alt="logo" />           
                          <h3>Our Users</h3>           
                          <p>             
                               {this.state.users.map(user => <li>{user.user} - {user.job}</li>)}
                          </p>                   
                        </header>      
                    </div>     
                    );       
                } 
            } 