import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import LogOut from './components/LogOut';
import VerifyEmail from './components/VerifyEmail';
import ResetPassword from './components/ResetPassword';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/login">Log In</Link>
        </li>
        <li>
          <Link to="/logout">Log Out</Link>
        </li>
        <li>
          <Link to="/verify-email">Verify Email</Link>
        </li>
        <li>
          <Link to="/reset-password">Reset Password</Link>
        </li>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        {/* Componente de navegación (links) */}
        <Navigation />
        
        {/* Rutas de la aplicación */}
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/logout" element={<LogOut />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;