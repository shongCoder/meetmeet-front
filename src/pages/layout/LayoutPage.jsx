import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../../components/layout/Footer";
import HeaderBlack from "../../components/layout/HeaderBlack";
import HeaderWhite from "../../components/layout/HeaderWhite";
import TopButton from "../../components/layout/TopButton.jsx";
import ModalComponent from "../../components/common/ModalComponent.jsx";

const LayoutPage = () => {
  const [isWhiteHeader, setIsWhiteHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsWhiteHeader(window.scrollY <= 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* 헤더 애니메이션 적용 */}
      <AnimatePresence mode="wait">
        <motion.div
          key={isWhiteHeader ? "white-header" : "black-header"}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-0 left-0 w-full z-50"
        >
          {isWhiteHeader ? <HeaderWhite /> : <HeaderBlack />}
        </motion.div>
      </AnimatePresence>

      {/* 본문 */}

      <Outlet />
      <ModalComponent />

      <Footer />
      <TopButton />
    </div>
  );
};

export default LayoutPage;
