import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Layout from './components/layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
}

export default App;
