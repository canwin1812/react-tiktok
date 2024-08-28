import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';
import Content from './Component/Content';
import Container from './Component/Container';
import Navbar from './Component/Navbar';
import MuiBottomNavbar from './Component/MuiBottomNavbar';


function App() {
  return (
    <div >
      <Header />
      <Container>
        <Sidebar />
        <Content />
      </Container>
      <Navbar/>
      <MuiBottomNavbar/>
    </div>


  );
}

export default App;
