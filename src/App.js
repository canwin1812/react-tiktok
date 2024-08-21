import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';
import Content from './Component/Content';
import Container from './Component/Container';



function App() {
  return (
    <div >
      <Header />
      <Container>
        <Sidebar />
        <Content />
      </Container>
    </div>


  );
}

export default App;
