import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Explore from './Pages/Explore/Explore';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import ProductBook from './Pages/ProductBook/ProductBook';
import Register from './Pages/Login/Register/Register';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>

            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route path='/home'>
              <Home></Home>
            </Route>

            <PrivateRoute path='/explore'>
              <Explore></Explore>
            </PrivateRoute>

            <PrivateRoute path='/product/:id'>
              <ProductBook></ProductBook>
            </PrivateRoute>

            <Route path='/register'>
              <Register></Register>
            </Route>

            <Route path='/login'>
              <Login></Login>
            </Route>

          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
