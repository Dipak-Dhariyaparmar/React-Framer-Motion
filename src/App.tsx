import { Fragment } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { FramerMotionBasics } from "./components/FramerMotionBasics";
import Gestures from "./components/Gestures";
import AnimationControls from "./components/animationControls";
import { ViewAnimations } from "./components/viewAnimations";
import { ScrollAnimations } from "./components/scrollAnimations";
import { AdvanceScrollAnimations } from "./components/advanceScrollAnimations";
import SwipeCards from "./components/TinderSwipeCards";
import { NotFound } from "./components/404-not-found";
import { Navbar } from "./components/navbar";
import HoverTiltCard from "./components/hover-tilt-card";
import { SwipeCarousel } from "./components/swipe-carousel";

function App() {
  return (
    <Fragment>
      <Router>
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basics" element={<FramerMotionBasics />} />
          <Route path="/gestures" element={<Gestures />} />
          <Route path="/animationControls" element={<AnimationControls />} />
          <Route path="/viewAnimations" element={<ViewAnimations />} />
          <Route path="/scrollAnimations" element={<ScrollAnimations />} />
          <Route
            path="/advanceScrollAnimations"
            element={<AdvanceScrollAnimations />}
          />
          <Route path="/tinderSwipeCards" element={<SwipeCards />} />
          <Route path="/hoverTiltCard" element={<HoverTiltCard />} />
          <Route path="/swipeCarousel" element={<SwipeCarousel />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
