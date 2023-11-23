import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import MainRouter from "./routes/MainRouter";
import { CartProvider } from "./context";

function App() {
  return (
    <CartProvider>
      <div>
        <MainRouter />
      </div>
    </CartProvider>
  );
}

export default App;
