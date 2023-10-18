import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dictionary from './Dictionary';


function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">

      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="text-center">
        Coded by Irina Oloinic <a href="https://github.com/irinaoloinic/dictionary-react"> open-sourced on GitHub </a>and hosted on Netlify.
      </footer>
     </div>
    </div>
  );
}

export default App;
