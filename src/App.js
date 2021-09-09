
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar catalogo = {["Botines", "Camisetas", "Pantalones", "Zapatillas"]}/>
      <ItemListContainer catalogo = {["Botines", "Camisetas", "Pantalones", "Zapatillas"]} />
    </>
  );
}

export default App;
