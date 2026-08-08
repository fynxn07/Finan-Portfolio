// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const useScrollToHash = (ready) => {
//   const location = useLocation();

//   useEffect(() => {
//     if (!ready) return;

//     if (location.hash) {
//       requestAnimationFrame(() => {
//         const el = document.querySelector(location.hash);

//         if (el) {
//           el.scrollIntoView({
//             behavior: "auto",
//             block: "start",
//           });
//         }
//       });
//     } else {
//       window.scrollTo({
//         top: 0,
//         behavior: "auto",
//       });
//     }
//   }, [ready, location]);
// };

// export default useScrollToHash;


import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToHash = (ready) => {
  const location = useLocation();

  useEffect(() => {
    if (!ready) return;

    // Prevent browser from restoring the previous scroll position
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Don't interfere with project detail pages
    if (location.pathname !== "/") return;

    // Handle direct links like /#contact
    if (location.hash) {
      requestAnimationFrame(() => {
        const element = document.querySelector(location.hash);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });

      return;
    }

    // Always start from Hero on refresh
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    });
  }, [ready, location.pathname, location.hash]);
};

export default useScrollToHash;