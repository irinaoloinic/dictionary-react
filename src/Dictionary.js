import React, {useState} from "react";
import axios from "axios";
import Photos from "./Photos";
import Results from "./Results";
import "./Dictionary.css";


function Dictionary(props){
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState (null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState (null);

function handleResponse(response){
  console.log(response.data);
  setResults(response.data);

}  
 function handlePexelResponse(response){
 console.log(response);
 setPhotos(response.data.photos);
 }

 function search(){
  let apiKey= "37f6a94ba46fa4c11df96b5390cdt21o"
  let apiUrl=`https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

  let pexelApiKey = "q4AwuNTDCaEdF6i9UbyCpFI3L6tsOlK0J6ivdPp4KFAWw6J281LCQVO7";
  let pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
  let headers =  { Authorization: `${pexelApiKey}` };
  axios.get(pexelApiUrl, { headers: headers }).then(handlePexelResponse).catch(err => console.err(err));;
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
      <Photos photos={photos} />
    </div>
  );
} else{
  load();
  return "Loading";
}
}
export default Dictionary;