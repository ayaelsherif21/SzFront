import style from "./SearchResult.module.css";

export const SearchResult = ({ result }) => {
  return (
    <div
      className={`${style.searchResult}`}
      onClick={(e) => alert(`You selected ${result}!`)}
    >
      {result}
    </div>
  );
};
