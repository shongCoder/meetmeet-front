import HeaderBlack from "../../components/layout/HeaderBlack.jsx";
import { Outlet } from "react-router-dom";
import Footer from "../../components/layout/Footer.jsx";
import TopButton from "../../components/layout/TopButton.jsx";
import ModalComponent from "../../components/common/ModalComponent.jsx";

function LayoutAuthPage() {
  return (
    <div>
      <HeaderBlack />
      <Outlet />
      <ModalComponent />
      <Footer />
      <TopButton />
    </div>
  );
}

export default LayoutAuthPage;
