import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';
import Content from './Component/Content';
import Container from './Component/Container';
import Navbar from './Component/Navbar';



function App() {
  return (
    <div >
      <Header />
      <Container>
        <Sidebar />
        <Content />
      </Container>
      <Navbar/>
    </div>


  );
}

export default App;
