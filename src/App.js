import { Container } from "react-bootstrap";
import "./App.css";
import Bar from "./Components/Bar";
import Header from "./Components/Header";
import Category from "./Components/Category";
import Items from "./Components/Items";
import { items } from "./data";
import { useState } from "react";

function App() {
  const [itemsData, setItemsData] = useState(items);

  // get all cat uniqe
  const allCategory = ["الكل", ...new Set(items.map((i) => i.category))];
  // filter by category
  const filterByCategory = (cat) => {
    if (cat === "الكل") {
      setItemsData(items);
    } else {
      const newArr = items.filter((item) => item.category === cat);
      setItemsData(newArr);
    }
  };
  //filter by search
  const filterBySearch = (word) => {
    if (word !== "") {
      const newArr = items.filter((item) => item.title === word);
      setItemsData(newArr);
    }
  };
  return (
    <div className="color-body font">
      <Bar filterBySearch={filterBySearch} />

      <Container>
        <Header />
        <Category
          filterByCategory={filterByCategory}
          allCategory={allCategory}
        />
        <Items itemsData={itemsData} />
      </Container>
    </div>
  );
}

export default App;
