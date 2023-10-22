import React from "react";
import './Synonyms.css';

function Synonyms(props){
  if(props.synonyms){
    return (
      <li> {props.synonyms} </li>
    )
    
  }else{
    return null;
  }
}
export default Synonyms;