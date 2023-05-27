import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

export default function App() {
  const routes = [
    {
      id: 1,
      link: "/",
      component: Home,
    },
    {
      id: 2,
      link: "/contact",
      component: Contact,
    },
  ];

  return (
    <Routes>
      {routes?.map((route) => (
        <Route
          path={route?.link}
          key={route?.id}
          Component={route?.component}
        />
      ))}
    </Routes>
  );
}
