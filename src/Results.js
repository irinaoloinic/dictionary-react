import React from "react";
import Meaning from "./Meaning";
import "./Results.css";


function Results(props){
  console.log(props.data);
  if (props.results) {
  return ( <div className="Results">
   <section>
    <h2> {props.results.word} </h2>
     <p> Phonetic: <text>{props.results.phonetic} </text> </p>
     </section>

     {props.results.meanings.map(function(meaning, index){
      return (
      <section key={index}> 
       <Meaning meaning={meaning} />
      </section>
      );
     })}
  </div>
  );
  } else{
    return null;
  }
  
}
export default Results;