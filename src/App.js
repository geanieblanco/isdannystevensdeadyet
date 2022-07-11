import './App.css';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { db } from './resources/firebase/config';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (authToken) {
      console.log(authToken);
    }
  }, [])

  return (
    <main className="wrapper">
      <Link to={'/auth'}>
        <p>Login</p>
      </Link>
    </main>
  );
}

export default App;
