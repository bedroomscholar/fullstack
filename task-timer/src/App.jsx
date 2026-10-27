import { useState } from 'react';
import Nav from './components/Nav';
import TasksView from './views/TasksView';
import StatsView from './views/StatsView';
import SettingsView from './views/SettingsView';
import InfoView from './views/InfoView';
import './App.css';

function App() {
  const [view, setView] = useState('info');
  const [dark, setDark] = useState(false);


  return (
    <div className={dark ? 'app dark': 'app'}>
      <Nav view={view} setView={setView} />
      <main>
        {view === 'tasks' && <TasksView />}
        {view === 'stats' && <StatsView />}
        {view === 'settings' && <SettingsView />}
        {view === 'info' && <InfoView />}
      </main>
      <button onClick = {() => setDark(!dark)}> {dark ? 'light mode' : 'dark mode'} </button>
    </div>
  );
}

export default App;