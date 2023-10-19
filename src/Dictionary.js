import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

function Dictionary(){
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState (null);

function handleResponse(response){
  console.log(response.data);
  setResults(response.data);
  


}  

  function search(event){
  event.preventDefault();

 let apiKey= "37f6a94ba46fa4c11df96b5390cdt21o"
  let apiUrl=`https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
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
      <Results results={results} />
    </div>
  )
}
export default Dictionary;