import { useState } from 'react'
import logo from './logo.png'
import catship from './cat-ship.png'
import './App.css';
import { DashboardOutlined, LineChartOutlined, CalendarOutlined, WalletOutlined, WechatWorkOutlined, LogoutOutlined } from '@ant-design/icons'
function App() {
  const [selected, setSelected] = useState('Dashboard')
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navstart">
        <div className="brand"> <div className="container"><img src={logo} /></div> <h1>Terroni</h1> </div>
        <ul onClick={e => setSelected(e.target.innerText)}>
          <li style={selected === 'Dashboard' && { fontWeight: 'bold' } || {}}>
            <DashboardOutlined />
           <div> Dashboard </div>
           { selected === 'Dashboard' && <span className="dot" /> }
          </li>
          <li style={selected === 'Calendar' && { fontWeight: 'bold' } || {}}>
            <CalendarOutlined />
            <div> Calendar </div>
            { selected === 'Calendar' && <span className="dot" /> }
          </li>
          <li style={selected === 'Analytics' && { fontWeight: 'bold' } || {}}>
            <LineChartOutlined />
            <div> Analytics </div>
            { selected === 'Analytics' && <span className="dot" /> }
          </li>
          <li style={selected === 'Wallet' && { fontWeight: 'bold' } || {}}>
            <WalletOutlined />
            <div> Wallet </div>
            { selected === 'Wallet' && <span className="dot" /> }
          </li>
          <li style={selected === 'Chat' && { fontWeight: 'bold' } || {}}>
            <WechatWorkOutlined />
            <div> Chat </div>
            { selected === 'Chat' && <span className="dot" /> }
          </li>
        </ul>
        </div>
        <div className="navend">
          <div className="pro">
            <h1>Upgrade to </h1>
            <h1>PRO Account</h1>
            <p> Start your PRO </p>
            <p> subscription </p>
            <p> today for only </p>
            <p style={{ fontWeight: 'bold' }}> $35/month </p>
            <img style={{ marginTop: '-200px' }} src={catship} />
          </div>
          <div onClick={() => window.location.assign("https://davidjkamer.com")} className="logout">
            <div> Logout </div>
            <LogoutOutlined />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
