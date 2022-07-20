import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <main className="wrapper">
      <Link to={'/auth'}>
        <p>Login</p>
      </Link>
    </main>
  );
}

export default App;
