import HeaderBlack from "../../components/layout/HeaderBlack.jsx";
import { Outlet } from "react-router-dom";
import Footer from "../../components/layout/Footer.jsx";
import TopButton from "../../components/layout/TopButton.jsx";
import ModalComponent from "../../components/common/ModalComponent.jsx";
import TitleManager from "../../components/common/TitleManager.jsx";

function LayoutAuthPage() {
  return (
    <div>
        <TitleManager />
      <HeaderBlack />
      <Outlet />
      <ModalComponent />
      <Footer />
      <TopButton />
    </div>
  );
}

export default LayoutAuthPage;
