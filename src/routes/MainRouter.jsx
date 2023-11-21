import Category from "../pages/Category";
import Home from "../pages/Home";
import Item from "../pages/Item";

import { NavBarComponent } from "../components/NavBarComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const MainRouter = () => {
  return (
    <Router>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/item/:id" element={<Item />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
