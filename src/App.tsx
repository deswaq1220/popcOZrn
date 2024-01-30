import Nav from "./components/Nav/Nav";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Ticketing from "./components/Ticketing/Ticketing";
const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};
const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/ticketing" element={<Ticketing />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
