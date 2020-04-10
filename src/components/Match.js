import React,{Component} from 'react';
import MatchCard from "../ui/MatchCard";

import "../style/MatchCard.css";


export default class Match extends Component{
    render(){
        return(
        <div className="container text-center">
           <div className="row">
             <MatchCard />
           </div>
        </div>

            
        );
    }
}







