import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./paginas/about";
import { Book } from "./paginas/book";
import { Home } from "./paginas/home";
import { Menu } from "./paginas/menu";
import { Toño } from "./paginas/toño";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/menu" element={<Menu/>}></Route>
          <Route path="/book" element={<Book/>}></Route>
          <Route path="/toño" element={<Toño/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
