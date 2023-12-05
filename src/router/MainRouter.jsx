import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Category, Home, Item } from "../pages";
import { NavBarComponent } from "../components";
import { propTypes } from "react-bootstrap/esm/Image";

export const MainRouter = () => {
  return (
    <Router>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/item/:productId" element={<Item />} />
      </Routes>
    </Router>
  );
};
