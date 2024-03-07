import styles from './App.module.scss';
import { Sidebar } from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>Valantis</h1>
      </header>
      <Sidebar />
      
    </div>
  );
}

export default App;
