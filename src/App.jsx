import { useEffect, useState } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Preloader from "./components/layout/Preloader";
import ScrollToHash from "./components/layout/ScrollToHash";

import AppRoutes from "./routes/AppRoutes";

// Navbar only makes sense on the home page, where the sections it links
// to (#about, #skills, etc.) actually exist. On /projects/:slug it was
// still rendering behind ProjectDetail's own MiniHeader — that's the
// "shadowing" you're seeing. This wrapper lives inside BrowserRouter
// (App itself can't call useLocation, since App is what renders the
// Router) so it can check the current route and decide.
function AppShell({ ready }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      {isHome && <Navbar />}
      <ScrollToHash ready={ready} />
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
      <Preloader onComplete={() => setIsLoading(false)} />
      <AppShell ready={!isLoading} />
    </BrowserRouter>
  );
}

export default App;