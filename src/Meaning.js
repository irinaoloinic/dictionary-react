import React from "react";
import Synonyms from "./Synonyms";
import './Meaning.css';

function Meaning(props){
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>

      <div className="Definition">
          {props.meaning.definition}
      </div>

        <div className="Example">
         {props.meaning.example}
         </div>
          <br/>
          <Synonyms synonyms={props.meaning.synonyms} />
       
      
    </div>
  );
}
export default Meaning;