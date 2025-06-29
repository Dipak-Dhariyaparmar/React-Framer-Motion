import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();

  const getLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    return isActive ? "active" : "";
  };

  return (
    <nav className="flex flex-col gap-4 absolute left-0 top-0 p-6 h-screen dark:bg-gray-700 bg-gray-100">
      <Link to="/basics" className={`button ${getLinkClass("/basics")}`}>
        Basics
      </Link>
      <Link to="/gestures" className={`button ${getLinkClass("/gestures")}`}>
        Gestures
      </Link>
      <Link
        to="/animationControls"
        className={`button ${getLinkClass("/animationControls")}`}
      >
        Animation Controls
      </Link>
      <Link
        to="/viewAnimations"
        className={`button ${getLinkClass("/viewAnimations")}`}
      >
        View Animations
      </Link>
      <Link
        to="/scrollAnimations"
        className={`button ${getLinkClass("/scrollAnimations")}`}
      >
        Scroll Animations
      </Link>
      <Link
        to="/advanceScrollAnimations"
        className={`button ${getLinkClass("/advanceScrollAnimations")}`}
      >
        Advance Scroll Animations
      </Link>
      <Link
        to="/tinderSwipeCards"
        className={`button ${getLinkClass("/tinderSwipeCards")}`}
      >
        Tinder Swipe Cards
      </Link>
      <Link
        to="/hoverTiltCard"
        className={`button ${getLinkClass("/hoverTiltCard")}`}
      >
        Hover Tilt Card
      </Link>
      <Link
        to="/swipeCarousel"
        className={`button ${getLinkClass("/swipeCarousel")}`}
      >
        Swipe Carousel
      </Link>
    </nav>
  );
};
