import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
import ProductScreen from "./screen/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">adeshop</Link>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen/>} />
            <Route exact path="/" element={<HomeScreen/>}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
