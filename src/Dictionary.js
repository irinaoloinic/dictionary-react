import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

function Dictionary(props){
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState (null);
  const [loaded, setLoaded] = useState(false);

function handleResponse(response){
  console.log(response.data);
  setResults(response.data);

}  
 function search(){
  let apiKey= "37f6a94ba46fa4c11df96b5390cdt21o"
  let apiUrl=`https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
 }

  function handleSubmit(event){
  event.preventDefault();
  search();
}

function handleKeywordChange(event){
 setKeyword(event.target.value);
}
 function load(){
  setLoaded(true);
  search();
 }

if(loaded){
 return (
    <div className="Dictionary">
      <section>
         <h1>What word are you looking for? </h1>
      <form onSubmit={handleSubmit} >
        <input type="search" autoFocus={true} onChange={handleKeywordChange} defaultValue={props.defaultKeyword} />
      </form>
      <div className="hint">
      Suggested words: book, city, sunset, plant ...
      </div>
      </section>
      <Results results={results} />
    </div>
  );
} else{
  load();
  return "Loading";
}
}
export default Dictionary;