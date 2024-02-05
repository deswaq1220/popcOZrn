import Login from "./components/Login/Login";
import Signup from "./components/Signup";
import Nav from "./components/Nav/Nav";
import Ticketing from "./components/Ticketing/Ticketing";

import { Routes, Route, Outlet } from "react-router-dom";

const App: React.FC = () => {
  const Layout = () => {
    return (
      <>
        <Nav />
        <Outlet />
      </>
    );
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/ticketing" element={<Ticketing />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
