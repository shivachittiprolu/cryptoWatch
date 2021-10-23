import { NavBar, HomePage, Exchanges, CryptoCurrencies, CryptoDetails, News } from './components'
import { Switch, Route, Link } from 'react-router-dom';
import { Layout,  Space } from 'antd';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <NavBar />
      </div>

      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/exchanges">
                <Exchanges />
              </Route>
              <Route exact path="/cryptocurrencies">
                <CryptoCurrencies />
              </Route>
              <Route exact path="/crypto/:coinid">
                <CryptoDetails />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
      </div>
      
      <div className = "footer" level={5} style={{color: 'white', textAlign:'center'}}>
          CryptoWatch  <br/>
          All rights reserved
        <Space>
          <Link to = '/'>Home</Link>
          <Link to = '/Exchanges'>Exchanges</Link>
          <Link to = '/Cryptocurrencies'>Cryptocurrencies</Link>
          <Link to = '/News'>News</Link>
        </Space>
      </div>  
    </div>
  );
}

export default App;
