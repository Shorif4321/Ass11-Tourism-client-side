import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import PageError from './Pages/404/PageError'
import Login from './Pages/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import MagnageOrder from './Pages/ManageOrder/MagnageOrder';
import AddService from './Pages/AddService/AddService';
import MyOrder from './Pages/MyOrder/MyOrder';
import Purchase from './Pages/Purschase/Purchase';
function App() {
  return (
    <div className="App">
      {/* ==========Auth Context========== */}
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/myOrder">
              <MyOrder></MyOrder>
            </Route>
            <Route path="/addService">
              <AddService></AddService>
            </Route>
            <Route path="/magnageOrder">
              <MagnageOrder></MagnageOrder>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>


            {/* ============Private Route============  */}
            <PrivateRoute path="/purchase/:Id">
              <Purchase></Purchase>
            </PrivateRoute>


            {/* ========404 page=========== */}
            <Route path="*">
              <PageError></PageError>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
