import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ScrollToSection() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state?.scrollTo) return;

    const id = location.state.scrollTo;

    let attempts = 0;

    const interval = setInterval(() => {
      const element = document.getElementById(id);

      if (element) {
        clearInterval(interval);

        element.scrollIntoView({
          behavior: "instant",
          block: "start",
        });

        navigate(location.pathname, {
          replace: true,
          state: {},
        });
      }

      attempts++;

      if (attempts > 20) {
        clearInterval(interval);
      }
    }, 16);
  }, [location, navigate]);

  return null;
}