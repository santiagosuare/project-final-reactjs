
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContextProvider from './context/cartContext';

function App() {

  
  return (
    <CartContextProvider> 
      <BrowserRouter>
        <div className = "App">

          <NavBar catalogo = {["Botines", "Camisetas", "Remeras", "Zapatillas"]}/>
          <Switch> 
            <Route path="/" exact>
              <ItemListContainer catalogo = {["Botines", "Camisetas", "Remeras", "Zapatillas"]} />
            </Route>
            <Route path="/categoria/:idCategoria" exact>
              <ItemListContainer catalogo = {["Botines", "Camisetas", "Remeras", "Zapatillas"]} />
            </Route>
            <Route path="/detalle/:id" exact>
              <ItemDetailContainer/>
            </Route>
          </Switch>

        </div>
      </BrowserRouter>
    </CartContextProvider>   
  );
}

export default App;
