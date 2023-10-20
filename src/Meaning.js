import React from "react";
import Synonyms from "./Synonyms";

function Meaning(props){
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div>
        <p> Definition:
          {props.meaning.definition}
          <br />
          <em>{props.meaning.example}</em>
          <br/>
          <Synonyms synonyms={props.meaning.synonyms} />
        </p>
      </div>
    </div>
  );
}
export default Meaning;