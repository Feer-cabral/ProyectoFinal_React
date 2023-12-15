import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { MainRouter } from "./router/MainRouter";
import { CartProvider } from "./context";

const App = () => {
  return (
    <CartProvider>
      <div>
        <MainRouter />
      </div>
    </CartProvider>
  );
};

export default App;
