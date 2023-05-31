import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import Team from "./pages/Team";
import Interviewers from "./pages/Interviewers";
import Professionals from "./pages/Professionals";

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
      id: 6,
      link: "/interviewers",
      component: Interviewers,
    },
    {
      id: 7,
      link: "/professionals",
      component: Professionals,
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
