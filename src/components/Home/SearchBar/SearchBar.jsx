import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

export default function SearchBar({ setResults }) {
  const [input, setInput] = useState("");
  // const Zones = [
  //   { id: 1, zone: "Dokki"},
  //   { id: 2, zone: "Shoubra"},
  //   { id: 3, zone: "Maddi"},
  //   { id: 4, zone: "Helwan"},
  //   { id: 5, zone: "Faisal "},
  // ];
  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((zone) => {
          return (
            value &&
            zone &&
            zone.name &&
            zone.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
      // className="inputField "
        placeholder="Where do you want to work?"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
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
