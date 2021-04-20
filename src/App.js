import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './screens/Global/Login';
import Header from './components/Global/Header';
import Register from './screens/Global/Register';
import Dashboard from './screens/User/Dashboard';
import Review from './screens/User/Review';
import OrderList from './screens/admin/OrderList';
import AddService from './screens/admin/AddService';
import NewOrder from './screens/User/NewOrder';
import Home from './screens/Global/Home';
import PrivateRoute from './components/Global/PrivateRoute';
import MakeAdmin from './screens/admin/MakeAdmin';
import ManageServices from './screens/admin/ManageServices';
import EditService from './screens/admin/EditService';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <PrivateRoute exact path='/dashboard' component={Dashboard} />
          <PrivateRoute exact path='/dashboard/review' component={Review} />
          <PrivateRoute exact path='/service/order/:id?' component={NewOrder} />
          <PrivateRoute exact path='/admin/orders' component={OrderList} />
          <PrivateRoute exact path='/admin/addservice' component={AddService} />
          <PrivateRoute
            exact
            path='/service/edit/:id'
            component={EditService}
          />
          <PrivateRoute
            exact
            path='/admin/manage-services'
            component={ManageServices}
          />
          <PrivateRoute exact path='/admin/users' component={MakeAdmin} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
