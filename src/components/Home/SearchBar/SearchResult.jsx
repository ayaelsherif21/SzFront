import style from "./SearchResult.module.css";
import { Link } from 'react-router-dom';

export const SearchResult = ({ results }) => {
  return (
    <div>
    {results.map((result) => (
      <div key={result.id}>
        <h3>{result.title}</h3>
        <p>{result.description}</p>
        <Link to={`/Recommendation/${result.zoneId}`}>Go to Zone</Link>
      </div>
    ))}
  </div>
    // <div
    //   className={`${style.searchResult}`}
    //   onClick={(e) => alert(`You selected ${results}!`)}
    // >
    //   {results}
    // </div>
  );
};















/*import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

const App = () => {
  return (
    <Router>
      <div>
        <SearchBar />

        <Switch>
          <Route exact path="/zone/:zoneId">
  //           {/* Component to display individual zone */
  //           </Route>
  //           <Route path="/">
  //             {/* Component to display search results */}
  //             <SearchResults results={[]} />
  //           </Route>
  //         </Switch>
  //       </div>
  //     </Router>
  //   );
  // };
  
  // export default App;
   
