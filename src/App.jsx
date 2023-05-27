import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  const routes = [
    {
      id: 1,
      link: "/",
      component: Home,
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
