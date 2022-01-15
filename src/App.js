import './App.css';
import NewTable from './component/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import { Table } from 'react-bootstrap';


function App() {
  return (
    <Router>
       <div className="App">
<SideNav>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
              <Link to={"/home"}>Home</Link>
            </NavText>
        </NavItem>
        <NavItem eventKey="charts">
            <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
            <Link to={"/table"}>Charts</Link>
            </NavText>
        </NavItem>
    </SideNav.Nav>
</SideNav>
<Routes>
  <Route path={"/home"} element={<Home/>}></Route>
  <Route path={"/table"} element={<NewTable/>}></Route>
</Routes>
      {/* <Home></Home>
      <NewTable></NewTable> */}
    </div>
    </Router>
   
  );
}

export default App;
