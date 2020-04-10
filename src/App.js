import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Match from './components/Match';

class App extends Component{
  render(){
    return(
       <div className="container">
         <Match />
         </div>
    );
  }
}


export default App;
