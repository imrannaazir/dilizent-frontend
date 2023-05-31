import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Agency from "./pages/Agency";
import Testimonials from "./pages/Testimonials";
import Team from "./pages/Team";

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
    {
      id: 4,
      link: "/team",
      component: Team,
    },
    {
      id: 5,
      link: "/agency",
      component: Agency,
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
