import React from 'react';
import './App.css';
import Index from './components/home/Index';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Archived from './components/home/Archived';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';

function App() {

  const [open , setOpen] = React.useState(false);
  const [titleHeader , setTitleHeader] = React.useState("Home");
  
  return (
    <div className="App">
      <Header  open={open} setOpen={setOpen} title={titleHeader} />
        <Router>
         <Sidebar open={open} setTitleHeader={setTitleHeader} />
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/archived" component={Archived} />
          </Switch>
        </Router>
    </div>

  );
}

export default App;
