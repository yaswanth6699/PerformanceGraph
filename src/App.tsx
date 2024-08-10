import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PerformanceGraph from "./components/PerformanceGraph";
import TypeHead from "./components/TypeHead";
import { Container } from "./styles/Wrapper";

function App() {
  const [query, toggleQuery] = useState<string>("AAPL");
  return (
    <Container>
      <Header />
      <TypeHead query={query} toggleQuery={toggleQuery} />
      <PerformanceGraph query={query} />
      <i>
        *Disclaimer: Since we are using free APIs for ticker data, there is a
        possibility that some tickers may not function correctly.
      </i>
    </Container>
  );
}

export default App;
