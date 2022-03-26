import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Menu from './component/Menu/Menu';
import Document from './component/Document/Document';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Menu></Menu>
     <Document></Document>
    </div>
  );
}

export default App;
