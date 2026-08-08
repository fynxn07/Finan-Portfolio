import { useEffect, useState } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Preloader from "./components/layout/Preloader";
import ScrollToHash from "./components/layout/ScrollToHash";

import AppRoutes from "./routes/AppRoutes";

function AppShell({ isLoading, setIsLoading }) {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <>
      <Preloader onComplete={() => setIsLoading(false)} />

      {isHome && <Navbar />}

      <ScrollToHash ready={!isLoading} />

      <AppRoutes />
    </>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <BrowserRouter>
      <AppShell
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </BrowserRouter>
  );
}

export default App;