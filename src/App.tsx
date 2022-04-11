import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, Friends, FriendDetails } from './pages';
import "./styles.css";

const App = () => (
  <Router>
    <Routes>
      <Route path="/friends/:id" element={<FriendDetails />} />
      <Route path="/friends" element={<Friends />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
);

export default App;
