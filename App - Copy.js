import React from 'react';
import Login from './Login';
import Register from './Register';
import Timer from './Timer';

function App() {
    const [view, setView] = React.useState('login');

    const toggleView = (newView) => {
        setView(newView);
    };

    return (
        <div className="app">
            {view === 'login' && <Login toggleView={toggleView} />}
            {view === 'register' && <Register toggleView={toggleView} />}
            {view === 'timer' && <Timer />}
        </div>
    );
}

export default App;: