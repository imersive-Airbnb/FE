import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
