import styles from "./SearchResultsList.module.css";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results }) => {
  return (
    <div className={`${styles.resultsList}`}>
      {results.map((result, id) => {
        return <SearchResult result={result.zoneId} key={id} />;
      })}
    </div>
  );
};
