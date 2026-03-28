import { useState, useEffect, useCallback, Outlet } from "react";
import { useLocation } from "react-router-dom";
import SiteNav from "./SiteNav.jsx";
import SiteFooter from "./SiteFooter.jsx";
import BookingModal from "./BookingModal.jsx";

export default function SiteShell() {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setShowMobileMenu(false);
  }, [location.pathname]);

  const scrollToId = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setShowMobileMenu(false);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 relative">
      <div className="fixed inset-0 z-0">
        <img src="/background.jpg" alt="Misty forest path" className="w-full h-full object-cover" />
      </div>

      <SiteNav
        showHeader={showHeader}
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
        onOpenBooking={() => setShowBookingModal(true)}
        scrollToId={scrollToId}
      />

      <Outlet context={{ openBooking: () => setShowBookingModal(true) }} />

      <SiteFooter />

      <BookingModal open={showBookingModal} onClose={() => setShowBookingModal(false)} />
    </div>
  );
}
