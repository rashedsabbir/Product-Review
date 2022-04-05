
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Reviews from './components/Reviews/Reviews';
import Blog from './components/Blog/Blog';
function App() {
  return (

    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route exact path='/home'>
          <Home></Home>
        </Route>
        <Route exact path='/reviews'>
          <Reviews></Reviews>
        </Route>
        <Route exact path='/blog'>
          <Blog></Blog>
        </Route>
        <Route exact path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;