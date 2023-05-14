import { Container } from "react-bootstrap";
import "./App.css";
import Bar from "./Components/Bar";
import Header from "./Components/Header";
import Category from "./Components/Category";

function App() {
  return (
    <div className="color-body font">
      <Bar />

      <Container>
        <Header />
        <Category />
      </Container>
    </div>
  );
}

export default App;
