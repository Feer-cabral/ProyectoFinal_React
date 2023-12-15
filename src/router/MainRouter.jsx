import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Category, Home, ItemDetailContainer } from "../pages";
import { NavBarComponent } from "../components";

export const MainRouter = () => {
  return (
    <Router>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/item/:productId" element={<ItemDetailContainer />} />
      </Routes>
    </Router>
  );
};
