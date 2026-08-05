import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Preloader from "./components/layout/Preloader";
import ScrollToHash from "./components/layout/ScrollToHash";

import AppRoutes from "./routes/AppRoutes";

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

      <Navbar />

      <ScrollToHash ready={!isLoading} />

      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;