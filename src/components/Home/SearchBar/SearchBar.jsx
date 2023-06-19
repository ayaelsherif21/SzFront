import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./SearchBar.module.css";
import axios from "../../../api/axios";
import { useNavigate } from 'react-router-dom';

export default function SearchBar({ setResults }) {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState('');
  const navigate  = useNavigate();
  // const Zones = [
  //   { id: 1, zone: "Dokki"},
  //   { id: 2, zone: "Shoubra"},
  //   { id: 3, zone: "Maddi"},
  //   { id: 4, zone: "Helwan"},
  //   { id: 5, zone: "Faisal "},
  // ];
  // const fetchData = (value) => {
  //   fetch(`api/places/getAllPlaces?zone=${search}`
  //   )
  //     .then((response) => response.json())
  //     .then((json) => {
  //       const results = json.filter((zone) => {
  //         return (
  //           value &&
  //           zone &&
  //           zone.name &&
  //           zone.name.toLowerCase().includes(value)
  //         );
  //       });
  //       setResults(results);
  //     });
  // };

  // const handleChange = (value) => {
  //   setInput(value);
  //   fetchData(value);
  // };
  // const handleSearch = async (e) => {
  //   e.preventDefault();

  //   // Make API request to fetch search results
  //   const response = await axios.get(`api/places/getAllPlaces?zone=${searchTerm}`);

  //   // Assuming the API response contains an array of results
  //   const results = response.data.results;

  //   // Navigate to the first result's zone, if available
  //   if (results.length > 0) {
  //     const firstResult = results[0];
  //     navigate(`/Recommendation/${firstResult.zone}`);
  //   }
  // };
  // const fetchSurfData = async () => {
  //   try {
  //     const response = await axios.get(
  //       "api/places/getAllPlaces"
  //     );
  //     setPlaces(response.data.data.places);
  //   } catch (error) {
  //     console.log("Error fetching surf data:", error);
  //   }
  // };

  // const handleSearch = async () => {
  //   let data = await axios.get(`api/places/getAllPlaces?zone=${search}`
  //     )
  //     .then((response) => {
  //       console.log(response.data.data);
  //       navigate("Recommendation", { data: response.data.data });
  //       alert(`Search Successful`);
  //     });
  // };
  return (
    <div className={`input-wrapper ${styles.inputWrapper}`}>
      <FaSearch id="search-icon" className={`${styles.searchIcon}`}/>
      <form>
      <input
      className={`${styles.searchInp}`}
        placeholder="Where do you want to work?"
        // value={search}
        // onChange={(e) => setSearch(e.target.value)}
        // onChange={(e) => handleChange(e.target.value)}
      />
        
      </form>
    </div>
  );
};


// import { useRef, useState } from "react";

// export default function SearchBar() {
//   const [text, setText] = useState("");
//   const fakeData =
//     ["dokki", "shoubra", "maddi", "helwan", "giza"];
//   const [searchvalue, setsearchValue] = useState();

//   const inputData = useRef();

//   const handler = (data) => {
//     // let intext = inputData.current.value;
//     setText(data);
//     const result = fakeData.filter((item) => {
//       if (item.includes(data)) {
//         return true;
//       }
//     });
//     data === "" ? setsearchValue([]) : setsearchValue(result);
//   };

//   const makeStyle = {
//     searchstyle: {
      
//       width:"100%",
//       border: "2px solid #145355",
//       display: "flex",
//       backgroundColor:"white",
//       paddingLeft: "20px",
//       padding: "4px",
//       margin: "1px",
//       // borderRedius:"20px",
//     }
//   };
//   return (
//     <div>
//       <div
//         style={{
//           width:"100%",
//           display: "inline-block",
//           background: "light",
//           // border: "solid 1px",
//           color:"black"
//         }}
//       >
//         <input
//         className="w-100 inputField bg-white"
//           type="text"
//           value={text}
//           ref={inputData}
//           onChange={(e) => {
//             handler(e.target.value);
//           }}
//         />
//         <div>
//           {searchvalue?.map((item) => {
//             return <p style={makeStyle.searchstyle}>{item}</p>;
//           })}
//         </div>
//       </div>
//     </div>
//   )
// }
