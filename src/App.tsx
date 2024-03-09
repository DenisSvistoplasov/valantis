import './App.scss';
import { Content } from './components/Content/Content';
import { Sidebar } from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className='app'>
      <header className='header'>
        <h1>Valantis</h1>
      </header>
      <Sidebar />
      <Content/>
    </div>
  );
}

export default App;
