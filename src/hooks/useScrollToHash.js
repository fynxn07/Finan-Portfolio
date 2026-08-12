import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToHash = (ready) => {
  const location = useLocation();

  useEffect(() => {
    if (!ready) return;

    // Don't do anything on Project Detail pages
    if (location.pathname !== "/") return;

    if (location.hash) {
      requestAnimationFrame(() => {
        const el = document.querySelector(location.hash);

        if (el) {
          el.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    }
  }, [ready, location.pathname, location.hash]);
};

export default useScrollToHash;