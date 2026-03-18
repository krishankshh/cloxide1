import { Outlet } from "react-router";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { BackToTop } from "./BackToTop";

export function RootLayout() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Navigation />
      <Outlet />
      <BackToTop />
      <Footer />
    </div>
  );
}
