import React, {useState} from "react";
import { Alert } from "react-bootstrap";
import "./Dictionary.css";

function Dictionary(){
  const [keyword, setKeyword] = useState("");

  function search(event){
  event.preventDefault();
alert(`${keyword}`)
}

function handleKeywordChange(event){
 setKeyword(event.target.value);
}

  return (
    <div className="Dictionary">
      <form onSubmit={search} >
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
        <input type="submit" />
      </form>
    </div>
  )
}
export default Dictionary;