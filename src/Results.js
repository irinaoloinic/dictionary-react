import React from "react";
import Meaning from "./Meaning";


function Results(props){
  console.log(props.data);
  if (props.results) {
  return ( <div className="Results">
    <h2> {props.results.word} </h2>
     <p> Phonetic: {props.results.phonetic}</p>
     {props.results.meanings.map(function(meaning, index){
      return (
      <div key={index}> 
       <Meaning meaning={meaning} />
      </div>
      );
     })}
  </div>
  );
  } else{
    return null;
  }
  
}
export default Results;