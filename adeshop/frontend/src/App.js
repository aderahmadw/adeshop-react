import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <a href="/">adeshop</a>
        </header>
        <main>
          <Routes>
            <Route path="/" exact element={<HomeScreen/>}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
