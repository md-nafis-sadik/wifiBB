import useScrollToTop from "@/hooks/useScrollToTop";
import { Outlet } from "react-router-dom";
import CorporateNavbar from "../shared/navigation/CorporateNavbar";
import Footer from "../shared/navigation/Footer";
import DevFAB from "../shared/others/DevFAB";
import DownloadYoowifi from "../shared/others/DownloadYoowifi";
import useModal from "@/hooks/useModal";
import AppDownloadDialog from "../shared/navigation/AppDownloadDialog";
import DownloadApp from "../shared/navigation/DownloadApp";

function CorporateLayout() {
  useScrollToTop();
  const { authModal, loginModal, appDownloadModal } = useModal();

  return (
    <main>
      <CorporateNavbar />
      <Outlet />
      <DownloadApp/>
      <Footer />
      {authModal}
      {loginModal}
      {appDownloadModal}
    </main>
  );
}

export default CorporateLayout;
