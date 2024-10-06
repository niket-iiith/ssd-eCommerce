import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom'
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
