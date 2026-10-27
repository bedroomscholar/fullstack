function Nav({ view, setView }) {
    const labels = {
        tasks: 'Task',
        stats: 'Stats',
        settings:'Settings',
        info:'Info',
    };
  return (
    <nav className="nav">
      <button
        className={view === 'tasks' ? 'nav-button active' : 'nav-button'}
        onClick={() => setView('tasks')}
      >
        tasks
      </button>
      <button
        className={view === 'stats' ? 'nav-button active' : 'nav-button'}
        onClick={() => setView('stats')}
      >
        stats
      </button>
      <button
        className={view === 'settings' ? 'nav-button active' : 'nav-button'}
        onClick={() => setView('settings')}
      >
        settings
      </button>
      <button
        className={view === 'info' ? 'nav-button active' : 'nav-button'}
        onClick={() => setView('info')}
      >
        info
      </button>
      <p>current page: {labels[view]}</p>
    </nav>
  );
}

export default Nav;