import { Route } from 'react-router-dom';
import './App.css';
import CartContainer from './componets/Cart/CartContainer';
import Header from './componets/Header/Header';
import ListContaier from './componets/List/ListContaier';

const App = () => {
  return (
    <div>
      <Header />
      <div className = "container" >
        <Route exact path = "/" render = { () => <ListContaier /> } />
        <Route path = "/cart" render = { () => <CartContainer /> } />
      </div>
    </div>
  );
}

export default App;
