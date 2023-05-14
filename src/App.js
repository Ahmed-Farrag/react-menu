import { Container } from "react-bootstrap";
import "./App.css";
import Bar from "./Components/Bar";
import Header from "./Components/Header";
import Category from "./Components/Category";
import Items from "./Components/Items";

function App() {
  return (
    <div className="color-body font">
      <Bar />

      <Container>
        <Header />
        <Category />
        <Items />
      </Container>
    </div>
  );
}

export default App;
