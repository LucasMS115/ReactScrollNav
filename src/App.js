import './App.css';
import {BrowserRouter as Switch, HashRouter} from 'react-router-dom'; 
import MyNavBar from './components/Nav/MyNavBar';
import TopBtn from './components/TopBtn'

const App = () => {
  return (
    <div className="App">

      <HashRouter>
        <Switch>

          <MyNavBar/>
          <TopBtn />

          <div id="Header" className="header">
            <h1> HEADER </h1>
          </div>

          <section id="S1" className="section-1">
            <h1> SECTION 1 </h1>
          </section>

          <section id="S2" className="section-2">
            <h1> SECTION 2 </h1>
          </section>

          <section id="S3" className="section-3">
            <h1> SECTION 3 </h1>
          </section>

        </Switch>

      </HashRouter>
        
    </div>
  );
}

export default App;
