import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToHash = (ready) => {
  const location = useLocation();

  useEffect(() => {
    if (!ready) return;

    if (location.hash) {
      requestAnimationFrame(() => {
        const el = document.querySelector(location.hash);

        if (el) {
          el.scrollIntoView({
            behavior: "auto",
            block: "start",
          });
        }
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    }
  }, [ready, location]);
};

export default useScrollToHash;