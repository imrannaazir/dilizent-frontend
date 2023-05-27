import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";

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
    {
      id: 3,
      link: "/testimonials",
      component: Testimonials,
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
