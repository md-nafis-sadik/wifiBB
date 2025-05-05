import useModal from "@/hooks/useModal";
import useScrollToTop from "@/hooks/useScrollToTop";
import useSetLocalData from "@/hooks/useSetLocalData";
import { Outlet } from "react-router-dom";

function RegisterLayout() {
  useSetLocalData("registerLayout");
  useScrollToTop();
  const { authModal, loginModal, appDownloadModal } = useModal();

  return (
    <main>
    <Outlet />
      {authModal}
      {loginModal}
      {appDownloadModal}
    </main>
  );
}

export default RegisterLayout;
