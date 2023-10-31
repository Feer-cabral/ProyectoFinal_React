import "bootstrap/dist/css/bootstrap.min.css";
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import "./index.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <NavBarComponent />
      <ItemListContainer greeting="¡Hola! Bienvenidos a nuestra tienda en linea" />
    </div>
  );
}

export default App;
