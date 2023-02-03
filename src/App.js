import "./App.css";
import { useState } from "react";

import Search from "./components/Search";
import Line from "./components/Line";
import data from "./data.json";
export { default as data } from "./data.json";

function App() {
  const [searchText, setSearchText] = useState("");

  const handleSearchText = (event) => {
    setSearchText(event.target.value);
  };

  let tab = [];

  for (let i = 0; i < Object.keys(data).length; i++) {
    const regExp = new RegExp(searchText, "gi");
    const result = regExp.test(data[i].title);
    const result2 = regExp.test(data[i].keywords);

    if (result || result2) {
      if (tab.length < 10) {
        tab.push(
          <Line
            key={data.indexOf(data[i])}
            emoji={data[i].symbol}
            title={data[i].title}
          />
        );
      } else {
        break;
      }
    }
  }

  // data.map((elem) => {
  //   const regExp = new RegExp(searchText, "gi");
  //   // const result = regExp.test(elem.title);
  //   const result2 = regExp.test(elem.keywords);

  //   if (result2) {
  //     if (tab.length < 5) {
  //       tab.push(
  //         <Line
  //           key={data.indexOf(elem)}
  //           emoji={elem.symbol}
  //           title={elem.title}
  //         />
  //       );
  //     }
  //   }
  //   return null;
  // });

  console.log(tab);

  return (
    <div className="App">
      <Search handleSearchText={handleSearchText} searchText={searchText} />
      <div className="linebox">{tab}</div>
    </div>
  );
}

export default App;
