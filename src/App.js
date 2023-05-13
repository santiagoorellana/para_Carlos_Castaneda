
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SidebarMenu from './components/sidevar';
import Header from './components/header';
import Content from './components/content';

function App() {
  return (
    <div className="app">
      <Header />
      <div className='box-flexbox'>
        <div className='box-sidebar-menu'>
          <SidebarMenu />
        </div>
        <Content />
      </div>
    </div>
  );
}

export default App;
