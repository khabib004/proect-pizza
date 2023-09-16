import { BrowserRouter, Route, Routes } from "react-router-dom";

import CartPage from "./pages/CartPage";
import CounterPage from "./pages/CounterPage";
import HomePage from "./pages/HomePage";
import { Container } from "react-bootstrap";
import Header from "./components/header";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
      </Container>
      <Container style={{ paddingTop: "100px" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/counter" element={<CounterPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
